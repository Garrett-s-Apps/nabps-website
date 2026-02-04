import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/features/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NABPS",
  description: "Get in touch with NABPS for general inquiries, membership information, or media requests.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact NABPS</h1>
            <p className="mt-6 text-lg text-white/90">
              Have questions or want to learn more about NABPS? We're here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Options */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-3 mb-12">
              {/* General Inquiries */}
              <div className="rounded-lg border border-key/10 bg-gray-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 text-2xl">
                  💬
                </div>
                <h3 className="mt-4 text-lg font-semibold text-key">General Inquiries</h3>
                <p className="mt-2 text-sm text-key/70">
                  Questions about NABPS, our standards, or certification
                </p>
              </div>

              {/* Membership */}
              <div className="rounded-lg border border-key/10 bg-gray-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 text-2xl">
                  🤝
                </div>
                <h3 className="mt-4 text-lg font-semibold text-key">Membership</h3>
                <p className="mt-2 text-sm text-key/70">
                  Interested in joining NABPS or applying for certification
                </p>
              </div>

              {/* Media */}
              <div className="rounded-lg border border-key/10 bg-gray-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 text-2xl">
                  📰
                </div>
                <h3 className="mt-4 text-lg font-semibold text-key">Media Inquiries</h3>
                <p className="mt-2 text-sm text-key/70">
                  Press requests, interviews, and media resources
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm
              formType="general"
              title="Send Us a Message"
              description="Fill out the form below and we'll get back to you within 1-2 business days."
            />

            {/* Alternative Contact Methods */}
            <div className="mt-12 rounded-lg border border-key/10 bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-key">Other Ways to Reach Us</h3>
              <div className="mt-4 space-y-3">
                <p className="text-key/70">
                  <span className="font-medium text-key">Email:</span> info@nabps.org
                </p>
                <p className="text-key/70">
                  <span className="font-medium text-key">Phone:</span> (555) 123-4567
                </p>
                <p className="text-key/70">
                  <span className="font-medium text-key">Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
