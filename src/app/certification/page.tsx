import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification | NABPS",
  description: "Learn about NABPS certification levels, requirements, and the application process for ballot printing companies.",
};

const certificationLevels = [
  {
    name: "Gold Certification",
    description: "Highest level of NABPS certification demonstrating comprehensive compliance.",
    requirements: [
      "Full compliance with all NABPS standards",
      "Annual on-site audits",
      "Documented quality management system",
      "Advanced security infrastructure",
      "Staff training and certification programs",
    ],
    benefits: [
      "Gold certification badge for marketing",
      "Listing as Gold-certified vendor",
      "Priority placement in vendor directory",
      "Speaking opportunities at NABPS events",
    ],
  },
  {
    name: "Silver Certification",
    description: "Demonstrates strong compliance with core NABPS standards.",
    requirements: [
      "Compliance with core NABPS standards",
      "Biannual audits",
      "Quality control procedures",
      "Basic security requirements",
      "Staff background checks",
    ],
    benefits: [
      "Silver certification badge",
      "Vendor directory listing",
      "Access to member resources",
      "NABPS community participation",
    ],
  },
  {
    name: "Bronze Certification",
    description: "Entry-level certification for companies beginning their NABPS journey.",
    requirements: [
      "Baseline security standards",
      "Initial facility assessment",
      "Commitment to quality improvement",
      "Staff training plan",
    ],
    benefits: [
      "Bronze certification badge",
      "Vendor directory listing",
      "Member resource access",
      "Pathway to higher certification",
    ],
  },
];

const processSteps = [
  {
    step: "1",
    title: "Initial Application",
    description: "Submit application with company information and documentation.",
  },
  {
    step: "2",
    title: "Documentation Review",
    description: "NABPS reviews your policies, procedures, and security protocols.",
  },
  {
    step: "3",
    title: "On-Site Assessment",
    description: "Independent auditor evaluates your facility and operations.",
  },
  {
    step: "4",
    title: "Board Review",
    description: "NABPS board reviews audit findings and makes certification decision.",
  },
  {
    step: "5",
    title: "Certification Issued",
    description: "Receive certification, badge, and marketing materials.",
  },
  {
    step: "6",
    title: "Ongoing Compliance",
    description: "Maintain certification through regular audits and reporting.",
  },
];

export default function CertificationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan/5 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-key sm:text-5xl">
              NABPS Certification
            </h1>
            <p className="mt-6 text-lg text-key/80">
              Independent verification that ballot printing companies meet
              rigorous industry standards for security and quality.
            </p>
          </div>
        </Container>
      </section>

      {/* What is Certification */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">What is NABPS Certification?</h2>
            <p className="mt-6 text-lg leading-8 text-key/80">
              NABPS certification is an independent, third-party verification that a ballot printing
              company meets established industry standards for security, quality, and operational
              excellence.
            </p>
            <p className="mt-4 text-lg leading-8 text-key/80">
              Certification involves comprehensive facility audits, documentation review, and
              ongoing compliance monitoring. It provides election officials with confidence that
              certified vendors adhere to best practices in ballot production.
            </p>
          </div>
        </Container>
      </section>

      {/* Certification Levels */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-key sm:text-4xl">
              Certification Levels
            </h2>
            <p className="mt-4 text-center text-lg text-key/70">
              Three tiers of certification to match your organization's capabilities
            </p>

            <div className="mt-12 space-y-8">
              {certificationLevels.map((level, index) => (
                <div
                  key={level.name}
                  className="rounded-lg border border-key/10 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan/10 text-xl font-bold text-cyan">
                      {["🥇", "🥈", "🥉"][index]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-key">{level.name}</h3>
                      <p className="mt-2 text-key/70">{level.description}</p>

                      <div className="mt-6 grid gap-8 sm:grid-cols-2">
                        <div>
                          <h4 className="font-semibold text-key">Requirements</h4>
                          <ul className="mt-3 space-y-2">
                            {level.requirements.map((req) => (
                              <li key={req} className="flex items-start gap-2 text-sm text-key/80">
                                <span className="mt-1 text-cyan">✓</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-key">Benefits</h4>
                          <ul className="mt-3 space-y-2">
                            {level.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-2 text-sm text-key/80">
                                <span className="mt-1 text-magenta">★</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-key sm:text-4xl">
              Certification Process
            </h2>
            <p className="mt-4 text-center text-lg text-key/70">
              From application to certification in six steps
            </p>

            <div className="mt-12 space-y-8">
              {processSteps.map((item, index) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-key">{item.title}</h3>
                    <p className="mt-2 text-key/70">{item.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="ml-6 mt-4 h-8 w-0.5 bg-cyan/20"></div>
                    )}
                  </div>
                </div>
              ))}
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
              Start your NABPS certification journey today.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0">
                <Link href="/contact">Apply for Certification</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white">
                <Link href="/members">View Certified Vendors</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
