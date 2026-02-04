import { Container } from "@/components/ui/container";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NABPS | National Association of Ballot Printing Standards",
  description: "Learn about NABPS's mission, leadership, and commitment to ballot printing integrity and election security.",
};

const boardMembers = [
  {
    name: "Doug Sunde",
    title: "Vice President of Election Services",
    company: "SeaChange Print Innovations",
    bio: "Doug brings extensive experience in election services and print innovation to the NABPS board.",
    image: "/images/doug-sunde.jpg",
  },
  {
    name: "Brad Moorhouse",
    title: "Senior Operations Manager",
    company: "K&H Integrated Print Solutions",
    bio: "Brad's operational expertise ensures NABPS standards are practical and implementable.",
    image: "/images/brad-moorhouse.jpg",
  },
  {
    name: "Bryan Dandurand",
    title: "Chief Operating Officer",
    company: "Runbeck Election Services",
    bio: "Bryan leads operational strategy and quality assurance initiatives for NABPS.",
    image: "/images/bryan-dandurand.png",
  },
  {
    name: "Paul Mantey",
    title: "President",
    company: "ProVote Solutions",
    bio: "Paul provides leadership and vision for NABPS's mission and strategic direction.",
    image: "/images/paul-mantey.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cyan/5 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-key sm:text-5xl">About NABPS</h1>
            <p className="mt-6 text-lg text-key/80">
              The National Association of Ballot Printing Standards brings together industry leaders
              to establish unified standards for ballot printing integrity.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-key/80">
              NABPS exists to protect election integrity through rigorous ballot printing standards.
              We unite competing companies under a shared commitment to quality, security, and transparency.
              By certifying vendors and educating election officials, we ensure every ballot meets the
              highest standards of integrity.
            </p>
          </div>
        </Container>
      </section>

      {/* Founding Story */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">Our Founding Story</h2>
            <p className="mt-6 text-lg leading-8 text-key/80">
              In 2026, four leading ballot printing companies recognized a critical need: the industry
              lacked unified standards and a trusted certification body. Despite being competitors in
              the marketplace, Runbeck Election Services, SeaChange Print Innovations, K&H Integrated
              Print Solutions, and ProVote Solutions came together to form NABPS.
            </p>
            <p className="mt-4 text-lg leading-8 text-key/80">
              This unprecedented collaboration demonstrates our industry's commitment to election
              integrity above competitive interests. Together, we established certification standards,
              best practices, and educational resources that benefit election officials and voters alike.
            </p>
          </div>
        </Container>
      </section>

      {/* Board Members */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-key sm:text-4xl">
              Board of Directors
            </h2>
            <p className="mt-4 text-center text-lg text-key/70">
              Industry experts leading the charge for ballot printing standards
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {boardMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-lg border border-key/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Professional Headshot */}
                  <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-navy/10">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      width={128}
                      height={128}
                      className={`h-full w-full object-cover ${member.name === "Doug Sunde" ? "scale-125" : ""}`}
                      style={member.name === "Doug Sunde" ? { objectPosition: "50% 20%" } : {}}
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-navy">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-navy-600">{member.title}</p>
                    <p className="mt-1 text-sm text-key/70">{member.company}</p>
                    <p className="mt-4 text-sm leading-6 text-key/70">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Governance */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-key">Governance Structure</h2>
            <p className="mt-6 text-lg leading-8 text-key/80">
              NABPS is governed by a board of directors representing our founding member companies.
              The board meets quarterly to review certification standards, evaluate member applications,
              and advance our mission of ballot printing integrity.
            </p>
            <p className="mt-4 text-lg leading-8 text-key/80">
              All major decisions require board consensus, ensuring no single company controls
              the standards that govern our industry. This collaborative governance model keeps
              NABPS accountable to both our members and the public we serve.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-key">Get in Touch</h2>
            <p className="mt-4 text-lg text-key/70">
              Have questions about NABPS? We're here to help.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-cyan px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
