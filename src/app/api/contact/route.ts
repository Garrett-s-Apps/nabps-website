import { NextResponse } from "next/server";
import { z } from "zod";
import { contactRateLimiter } from "@/lib/rate-limit";
import { sanitizeFormData } from "@/lib/sanitize";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  organization: z.string().optional(),
  phone: z.string().optional().refine(
    (val) => !val || /^\+?[1-9]\d{1,14}$/.test(val),
    "Phone number must be in valid E.164 format"
  ),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
  formType: z.enum(["general", "membership", "media"]),
  // Honeypot field - should always be empty
  website: z.string().max(0).optional(),
});

/**
 * Get the client IP address from the request
 */
function getClientIp(request: Request): string {
  // Check various headers for IP address (works with common proxies)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  if (realIp) {
    return realIp;
  }
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return "unknown";
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    if (!contactRateLimiter.check(clientIp)) {
      const resetTime = contactRateLimiter.getResetTime(clientIp);
      const resetDate = resetTime ? new Date(resetTime).toISOString() : "soon";

      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          resetAt: resetDate,
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Check honeypot field
    if (validatedData.website && validatedData.website.length > 0) {
      // This is likely a bot submission, reject silently
      return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    // Sanitize all input fields
    const sanitizedData = sanitizeFormData(validatedData);

    // TODO: EMAIL SERVICE INTEGRATION NEEDED
    // This application needs an email service to send form submissions
    // Recommended services:
    // - Resend (https://resend.com) - Modern, developer-friendly
    // - SendGrid (https://sendgrid.com) - Reliable, feature-rich
    // - AWS SES (https://aws.amazon.com/ses/) - Cost-effective for high volume
    //
    // Example implementation with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'NABPS <noreply@nabps.org>',
    //   to: ['info@nabps.org'],
    //   replyTo: sanitizedData.email,
    //   subject: `${sanitizedData.formType.toUpperCase()}: ${sanitizedData.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>From:</strong> ${sanitizedData.name} (${sanitizedData.email})</p>
    //     <p><strong>Organization:</strong> ${sanitizedData.organization || 'N/A'}</p>
    //     <p><strong>Phone:</strong> ${sanitizedData.phone || 'N/A'}</p>
    //     <p><strong>Form Type:</strong> ${sanitizedData.formType}</p>
    //     <hr />
    //     <p><strong>Message:</strong></p>
    //     <p>${sanitizedData.message.replace(/\n/g, '<br />')}</p>
    //   `,
    // });

    // For development: Log to console (REMOVE IN PRODUCTION)
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("Contact form submission:", {
        ...sanitizedData,
        timestamp: new Date().toISOString(),
        ip: clientIp,
      });
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    // Log errors only in development
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error("Contact form error:", error);
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
