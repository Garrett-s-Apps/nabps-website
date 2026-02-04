import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
  formType: z.enum(["general", "membership", "media"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Log the submission (in production, this would send an email)
    console.log("Contact form submission:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
    });

    // TODO: In production, integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'NABPS <noreply@nabps.org>',
    //   to: ['info@nabps.org'],
    //   subject: `${validatedData.formType.toUpperCase()}: ${validatedData.subject}`,
    //   html: `<p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
    //          <p><strong>Organization:</strong> ${validatedData.organization || 'N/A'}</p>
    //          <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${validatedData.message}</p>`,
    // });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
