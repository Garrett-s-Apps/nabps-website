"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormData } from "@/lib/validation/contact";

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
        {/* Honeypot field - hidden from users but visible to bots */}
        <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor="website">Website (leave blank)</label>
          <input
            type="text"
            id="website"
            {...register("website")}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-key">
            Full Name <span className="text-magenta">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            required
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-key" role="alert">
              <span className="sr-only">Error: </span>
              {errors.name.message}
            </p>
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
            required
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-key" role="alert">
              <span className="sr-only">Error: </span>
              {errors.email.message}
            </p>
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
            placeholder="+12345678901"
            {...register("phone")}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-key" role="alert">
              <span className="sr-only">Error: </span>
              {errors.phone.message}
            </p>
          )}
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
            required
            aria-required="true"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-key" role="alert">
              <span className="sr-only">Error: </span>
              {errors.subject.message}
            </p>
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
            required
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-1 block w-full rounded-md border border-key/30 px-3 py-2 text-key shadow-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-key" role="alert">
              <span className="sr-only">Error: </span>
              {errors.message.message}
            </p>
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
          <div className="rounded-md bg-cyan/10 p-4 text-sm text-key" role="status" aria-live="polite">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="rounded-md bg-magenta/10 p-4 text-sm text-key" role="alert" aria-live="assertive">
            There was an error submitting your message. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
