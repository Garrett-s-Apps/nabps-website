import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standards | NABPS",
  description: "NABPS ballot printing standards cover security, quality control, chain of custody, and audit procedures.",
};

const standardCategories = [
  {
    title: "Security Standards",
    description: "Comprehensive security requirements for ballot handling, storage, and production.",
    items: [
      "Secure facility requirements",
      "Access control and monitoring",
      "Digital security protocols",
      "Personnel background checks",
    ],
  },
  {
    title: "Quality Control",
    description: "Rigorous quality assurance processes to ensure ballot accuracy and readability.",
    items: [
      "Print quality verification",
      "Color accuracy standards",
      "Barcode and QR code validation",
      "Sample inspection protocols",
    ],
  },
  {
    title: "Chain of Custody",
    description: "Documented procedures for tracking ballots from production through delivery.",
    items: [
      "Tracking and logging requirements",
      "Secure transportation protocols",
      "Handoff procedures",
      "Documentation standards",
    ],
  },
  {
    title: "Audit & Compliance",
    description: "Ongoing verification and compliance monitoring for certified vendors.",
    items: [
      "Regular audit schedules",
      "Compliance reporting",
      "Incident response procedures",
      "Continuous improvement processes",
    ],
  },
];

export default function StandardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan/5 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-key sm:text-5xl">
              NABPS Standards
            </h1>
            <p className="mt-6 text-lg text-key/80">
              Comprehensive standards ensuring ballot printing integrity,
              security, and quality across the industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">Standards Overview</h2>
            <p className="mt-6 text-lg leading-8 text-key/80">
              NABPS standards represent industry consensus on best practices for ballot printing
              operations. Developed by ballot printing professionals and election security experts,
              these standards address every aspect of the ballot production lifecycle.
            </p>
            <p className="mt-4 text-lg leading-8 text-key/80">
              Our standards are regularly updated to reflect technological advances, emerging
              security threats, and lessons learned from election cycles nationwide.
            </p>
          </div>
        </Container>
      </section>

      {/* Standard Categories */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-key sm:text-4xl">
              Standard Categories
            </h2>
            <p className="mt-4 text-center text-lg text-key/70">
              Our comprehensive framework covers all aspects of ballot production
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {standardCategories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-lg border border-key/10 bg-white p-8"
                >
                  <h3 className="text-xl font-semibold text-key">{category.title}</h3>
                  <p className="mt-2 text-sm text-key/70">{category.description}</p>
                  <ul className="mt-6 space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-key/80">
                        <span className="mt-1 text-cyan">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">Why NABPS Standards Matter</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-key">For Election Officials</h3>
                <p className="mt-2 text-key/80">
                  NABPS certification provides assurance that vendors meet rigorous, independently
                  verified standards. Include NABPS certification in your RFPs to streamline vendor
                  evaluation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-key">For Voters</h3>
                <p className="mt-2 text-key/80">
                  Standards ensure every ballot is produced securely, accurately, and with full
                  accountability—protecting the integrity of your vote.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-key">For The Industry</h3>
                <p className="mt-2 text-key/80">
                  Unified standards elevate the entire industry, fostering innovation while
                  maintaining accountability and public trust.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-white to-cyan/5 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-key">Ready to Get Certified?</h2>
            <p className="mt-4 text-lg text-key/70">
              Learn about the certification process and how to become a certified NABPS member.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/certification">View Certification Process</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">Download Standards (PDF)</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
