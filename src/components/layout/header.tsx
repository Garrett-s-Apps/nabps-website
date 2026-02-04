"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useState } from "react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Standards", href: "/standards" },
  { name: "Certification", href: "/certification" },
  { name: "Members", href: "/members" },
  { name: "Resources", href: "/resources" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-navy/10 bg-white shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">NABPS</span>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/NABPS_Transparent.png"
                  alt="NABPS Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold text-key hidden sm:block">NABPS</span>
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-key"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-navy hover:text-navy-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-navy-600 hover:text-navy-700 transition-colors"
            >
              Member Login <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-key/10 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-semibold text-key hover:bg-cyan/5 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-semibold text-cyan hover:bg-cyan/5 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Member Login
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
