import Link from "next/link";
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
    <footer className="border-t border-key/10 bg-white">
      <Container>
        <div className="py-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-cyan flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-lg font-bold text-key">NABPS</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-key/70 hover:text-cyan transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <p className="text-sm text-key/60 text-center">
              &copy; {currentYear} National Association of Ballot Printing Standards. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
