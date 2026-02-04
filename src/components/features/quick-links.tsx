import { Container } from "@/components/ui/container";
import Link from "next/link";

const links = [
  {
    title: "Certification Standards",
    description: "Learn about our rigorous certification process and requirements.",
    href: "/certification",
    icon: "✓",
  },
  {
    title: "Find Certified Vendors",
    description: "Search our directory of NABPS-certified ballot printing companies.",
    href: "/members",
    icon: "🔍",
  },
  {
    title: "Resource Library",
    description: "Access best practices, guidelines, and educational materials.",
    href: "/resources",
    icon: "📚",
  },
  {
    title: "Become a Member",
    description: "Join NABPS and contribute to industry-wide standards.",
    href: "/contact",
    icon: "🤝",
  },
];

export function QuickLinks() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group relative overflow-hidden rounded-lg border border-key/10 bg-white p-6 transition-all hover:border-cyan hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-2xl group-hover:bg-cyan group-hover:text-white transition-colors">
                {link.icon}
              </div>
              <h3 className="text-lg font-semibold text-key group-hover:text-cyan transition-colors">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-key/70">{link.description}</p>
              <div className="mt-4 inline-flex items-center text-sm font-semibold text-cyan">
                Learn more
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
