import { Container } from "@/components/ui/container";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const foundingMembers = [
  {
    name: "Runbeck Election Services",
    description: "Leading provider of ballot printing and election services with over 40 years of experience serving election jurisdictions nationwide.",
    website: "https://runbeck.com",
    headquarters: "Arizona"
  },
  {
    name: "SeaChange Print Innovations",
    description: "Innovative ballot printing solutions with a focus on security and sustainability, trusted by Pacific Northwest election officials.",
    website: "https://seachangeprint.com",
    headquarters: "Washington"
  },
  {
    name: "K&H Integrated Print Solutions",
    description: "Full-service ballot printing with integrated logistics and tracking, specializing in vote-by-mail programs across the Rocky Mountain region.",
    website: "https://khprint.com",
    headquarters: "Colorado"
  },
  {
    name: "ProVote Solutions",
    description: "Comprehensive election services including ballot design, printing, and distribution, serving the Southeast with reliability and precision.",
    website: "https://provotesolutions.com",
    headquarters: "Florida"
  },
];

export function FoundingMembers() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 sm:text-4xl">
              Founded by Industry Leaders
            </h2>
            <p className="mt-4 text-lg text-key/70 max-w-3xl mx-auto">
              NABPS brings together competing companies united by a shared commitment
              to ballot printing integrity and election security.
            </p>
          </div>

          {/* Founding Member Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {foundingMembers.map((member) => (
              <Link
                key={member.name}
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-soft transition-all hover:shadow-elevated hover:border-cyan/30 hover:-translate-y-1"
              >
                {/* Header with icon */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-cyan-600">
                    <span className="text-xl font-bold text-white">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-key/40 transition-colors group-hover:text-cyan" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-bold text-navy-800 group-hover:text-cyan transition-colors">
                  {member.name}
                </h3>
                <p className="mb-3 text-xs text-cyan font-medium">
                  {member.headquarters}
                </p>
                <p className="text-sm text-key/70 leading-relaxed flex-1">
                  {member.description}
                </p>

                {/* Learn More indicator */}
                <div className="mt-4 pt-4 border-t border-navy/5">
                  <span className="text-xs font-semibold text-cyan group-hover:text-cyan-600 transition-colors">
                    Visit Website →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-16 text-center text-base italic text-key/60">
            Competing in business. Collaborating for integrity.
          </p>
        </div>
      </Container>
    </section>
  );
}
