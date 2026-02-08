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
    bio: "Doug brings over two decades of experience in the election services industry to NABPS. His leadership at SeaChange emphasizes innovative printing solutions and transforming customer experiences. Previously, Doug served in key roles at Election Systems and Software, where his expertise in relationship-building and operational efficiency helped drive cost-effective solutions for election officials across multiple states.",
    image: "/images/doug-sunde.jpg",
    source: "https://www.seachangemn.com/about/team/dougsunde",
  },
  {
    name: "Brad Moorhouse",
    title: "Vice President & General Manager",
    company: "K&H Integrated Print Solutions",
    bio: "Brad has been a leader in the printing and mailing industry since 1995, beginning as a presort services/operations manager. At K&H Integrated Print Solutions—a company serving the industry since 1908—Brad's career has progressed from sales through mailroom management to Production Manager, demonstrating his comprehensive understanding of print operations. His hands-on experience across all facets of production ensures NABPS standards are both rigorous and practically implementable.",
    image: "/images/brad-moorhouse.jpg",
    source: "https://www.linkedin.com/in/brad-moorhouse-6010965/",
  },
  {
    name: "Bryan Dandurand",
    title: "Chief Operating Officer",
    company: "Runbeck Election Services",
    bio: "Bryan brings extensive leadership experience in print manufacturing to his role as COO at Runbeck Election Services. As a natural leader who motivates teams to exceed business goals under pressure, Bryan has consistently driven innovation in the election industry. He oversees operations serving customers across 15 states, ensuring all goals are completed on time and within cost parameters. His specialized experience in the elections industry provides deep understanding of the demands, time constraints, and ever-changing specifications of election cycles.",
    image: "/images/bryan-dandurand.png",
    source: "https://runbeck.net/leadership/",
  },
  {
    name: "Paul Mantey",
    title: "President",
    company: "ProVote Solutions",
    bio: "Paul brings more than three decades of printing management experience and innovative leadership to NABPS. With a BS in Graphic Communication from Cal Poly San Luis Obispo, Paul has found success across all three segments of the printing industry: publishing, packaging, and commercial printing. Under his leadership, ProVote Solutions has become one of the largest election printers in California, servicing 25 of 58 counties in the state and printing more than 35 million ballots. His strategic vision extends operations across California, Colorado, and Nevada.",
    image: "/images/paul-mantey.jpg",
    source: "https://provotesolutions.com/elections/company-overview/company-structure/",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(to bottom, #1a2332, #0a1929)' }}>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">About NABPS</h1>
            <p className="mt-6 text-lg text-white/90">
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
                      alt={`Professional photo of ${member.name}, ${member.title} at ${member.company}`}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
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
                className="inline-flex items-center rounded-md bg-cyan px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800"
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
