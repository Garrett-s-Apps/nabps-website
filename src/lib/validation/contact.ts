import { z } from "zod";

/**
 * Shared contact form validation schema
 * Used by both the client-side form and the API endpoint
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\+?[1-9]\d{1,14}$/.test(val),
      "Phone number must be in valid E.164 format (e.g., +12345678901)"
    ),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
  formType: z.enum(["general", "membership", "media"]),
  // Honeypot field - should always be empty
  website: z.string().max(0, "Invalid submission").optional(),
});

/**
 * Type inference from the schema
 */
export type ContactFormData = z.infer<typeof contactSchema>;
