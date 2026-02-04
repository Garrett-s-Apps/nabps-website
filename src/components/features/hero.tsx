import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
      {/* CMYK Signature Bar */}
      <div className="absolute top-0 z-10 flex h-1 w-full">
        <div className="flex-1 bg-cyan"></div>
        <div className="flex-1 bg-magenta"></div>
        <div className="flex-1 bg-yellow"></div>
        <div className="flex-1 bg-key"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1E3A5F 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <Container>
        <div className="relative z-20 mx-auto max-w-4xl text-center">
          {/* NABPS Seal - Clean, Full Size */}
          <div className="mx-auto mb-8">
            <Image
              src="/images/nabps_seal_transparent.svg"
              alt="NABPS Seal - National Association of Ballot Printing Standards"
              width={160}
              height={160}
              className="h-40 w-40 sm:h-48 sm:w-48"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Setting the Standard
            <br />
            for Ballot Printing Integrity
          </h1>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-navy/70">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Industry-Led Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Independent Certification</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Founded by Industry Leaders</span>
            </div>
          </div>

          {/* Mission Summary */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-key/80">
            The National Association of Ballot Printing Standards (NABPS) is the industry coalition
            establishing shared standards, certifications, and best practices for Vote by Mail systems.
            We ensure quality, security, and integrity in every ballot.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="shadow-elevated hover:shadow-floating">
              <Link href="/certification">Explore Certification</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-navy/20 hover:bg-navy/5"
            >
              <Link href="/about">Learn More About NABPS</Link>
            </Button>
          </div>
        </div>
      </Container>

    </section>
  );
}
