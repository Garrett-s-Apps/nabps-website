import { Container } from "@/components/ui/container";

const foundingMembers = [
  { name: "Runbeck Election Services", logo: null },
  { name: "SeaChange Print Innovations", logo: null },
  { name: "K&H Integrated Print Solutions", logo: null },
  { name: "ProVote Solutions", logo: null },
];

export function FoundingMembers() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-key sm:text-4xl">
            Founded by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-key/70">
            NABPS brings together competing companies united by a shared commitment
            to ballot printing integrity and election security.
          </p>

          {/* Founding Member Logos */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foundingMembers.map((member) => (
              <div
                key={member.name}
                className="flex items-center justify-center rounded-lg border border-key/10 bg-gray-50 p-8 transition-shadow hover:shadow-md"
              >
                <div className="text-center">
                  {/* Placeholder for logo */}
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-cyan/10">
                    <span className="text-2xl font-bold text-cyan">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-key">{member.name}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-base italic text-key/60">
            Competing in business. Collaborating for integrity.
          </p>
        </div>
      </Container>
    </section>
  );
}
