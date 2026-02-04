"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  formType: z.enum(["general", "membership", "media"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  formType: "general" | "membership" | "media";
  title: string;
  description?: string;
}

export function ContactForm({ formType, title, description }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      formType,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg border border-key/10 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-key">{title}</h2>
      {description && <p className="mt-2 text-key/70">{description}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-key">
            Full Name <span className="text-magenta">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-magenta">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-key">
            Email Address <span className="text-magenta">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-magenta">{errors.email.message}</p>
          )}
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-key">
            Organization / Company
          </label>
          <input
            type="text"
            id="organization"
            {...register("organization")}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-key">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-key">
            Subject <span className="text-magenta">*</span>
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-magenta">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-key">
            Message <span className="text-magenta">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            {...register("message")}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-magenta">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="rounded-md bg-cyan/10 p-4 text-sm text-cyan">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="rounded-md bg-magenta/10 p-4 text-sm text-magenta">
            There was an error submitting your message. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
