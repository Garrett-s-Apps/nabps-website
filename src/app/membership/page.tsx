import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership | NABPS",
  description: "Learn about NABPS membership tiers, benefits, and how to join the premier association for ballot printing standards.",
};

const membershipTiers = [
  {
    name: "Founding Member",
    price: "Contact for Pricing",
    description: "Reserved for the four founding companies that established NABPS",
    features: [
      "All Full Member benefits",
      "Board of Directors representation",
      "Founding Member designation on website",
      "Input on standards development",
      "Priority certification processing",
      "Logo usage rights",
    ],
    cta: "Founding Tier (Closed)",
    ctaVariant: "ghost" as const,
    highlight: false,
  },
  {
    name: "Full Member",
    price: "Contact for Pricing",
    description: "For established ballot printing companies seeking certification and industry leadership",
    features: [
      "Eligibility for all certification levels",
      "Voting rights on standards updates",
      "Member-only resource access",
      "Discounted certification fees",
      "NABPS Member badge for marketing",
      "Listing in certified vendor directory",
      "Quarterly member meetings",
      "Access to industry best practices",
    ],
    cta: "Apply for Full Membership",
    ctaVariant: "primary" as const,
    highlight: true,
  },
  {
    name: "Associate Member",
    price: "Contact for Pricing",
    description: "For companies new to ballot printing or related election services providers",
    features: [
      "Eligibility for Bronze and Silver certification",
      "Observer status at member meetings",
      "Access to public resources",
      "NABPS Associate Member badge",
      "Pathway to Full Membership",
      "Mentorship opportunities",
    ],
    cta: "Apply for Associate Membership",
    ctaVariant: "outline" as const,
    highlight: false,
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan/5 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-key sm:text-5xl">
              Join NABPS
            </h1>
            <p className="mt-6 text-lg text-key/80">
              Become part of the premier association setting standards for
              ballot printing integrity and security.
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">Why Join NABPS?</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-key">Industry Leadership</h3>
                <p className="mt-2 text-key/80">
                  Help shape the standards that define ballot printing excellence. Members
                  have a voice in developing and updating NABPS certification requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-key">Competitive Advantage</h3>
                <p className="mt-2 text-key/80">
                  NABPS certification demonstrates your commitment to quality and security,
                  giving you an edge in procurement processes nationwide.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-key">Knowledge Sharing</h3>
                <p className="mt-2 text-key/80">
                  Access to industry best practices, templates, and resources developed
                  by leading ballot printing professionals.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-key">Credibility</h3>
                <p className="mt-2 text-key/80">
                  Association with NABPS enhances your reputation with election officials,
                  demonstrating adherence to independent, third-party verified standards.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Membership Tiers */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-key sm:text-4xl">
              Membership Tiers
            </h2>
            <p className="mt-4 text-center text-lg text-key/70">
              Choose the membership level that fits your organization
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {membershipTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-lg border ${
                    tier.highlight
                      ? "border-cyan bg-white shadow-lg ring-2 ring-cyan"
                      : "border-key/10 bg-white"
                  } p-8`}
                >
                  {tier.highlight && (
                    <div className="mb-4">
                      <span className="inline-flex items-center rounded-full bg-cyan/10 px-3 py-1 text-sm font-medium text-cyan">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-key">{tier.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-cyan">{tier.price}</p>
                  <p className="mt-3 text-sm text-key/70">{tier.description}</p>

                  <ul className="mt-8 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-key/80">
                        <span className="mt-1 text-cyan">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button asChild variant={tier.ctaVariant} className="w-full">
                      <Link href="/contact">{tier.cta}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Eligibility */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">Eligibility Requirements</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-key">Full Member Eligibility</h3>
                <ul className="mt-3 space-y-2 text-key/80">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan">•</span>
                    <span>Active ballot printing operations for at least 2 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan">•</span>
                    <span>Serving election jurisdictions in the United States</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan">•</span>
                    <span>Commitment to pursuing NABPS certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan">•</span>
                    <span>Demonstrated security and quality control procedures</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-key">Associate Member Eligibility</h3>
                <ul className="mt-3 space-y-2 text-key/80">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan">•</span>
                    <span>Companies entering the ballot printing industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan">•</span>
                    <span>Related election services providers (tabulation, logistics, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan">•</span>
                    <span>Commitment to learning and implementing NABPS standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Application Process */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">Application Process</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-key">Submit Inquiry</h3>
                  <p className="mt-1 text-sm text-key/70">
                    Complete the membership inquiry form with your company information
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-key">Initial Review</h3>
                  <p className="mt-1 text-sm text-key/70">
                    NABPS board reviews your application and supporting documentation
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-key">Interview & Assessment</h3>
                  <p className="mt-1 text-sm text-key/70">
                    Meet with board members to discuss your operations and goals
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-key">Membership Decision</h3>
                  <p className="mt-1 text-sm text-key/70">
                    Board votes on membership approval; successful applicants pay dues
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-key">Onboarding & Benefits</h3>
                  <p className="mt-1 text-sm text-key/70">
                    Access member resources, begin certification process, attend meetings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-key">Ready to Join?</h2>
            <p className="mt-4 text-lg text-key/70">
              Start your membership application today and join the leaders
              in ballot printing standards.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Apply for Membership</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
