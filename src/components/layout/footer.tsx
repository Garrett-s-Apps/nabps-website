import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const footerLinks = {
  main: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-navy-900 relative">
      {/* Teal accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan via-cyan-600 to-cyan"></div>

      <Container>
        <div className="py-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/nabps_seal_transparent.svg"
                alt="NABPS Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-lg font-bold text-white">NABPS</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-cyan transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <p className="text-sm text-white/60 text-center">
              &copy; {currentYear} National Association of Ballot Printing Standards. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
