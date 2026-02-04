import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(to bottom, #1a2332, #0a1929)' }}>
      {/* CMYK Signature Bar - Enhanced */}
      <div className="absolute top-0 z-10 flex h-2 w-full">
        <div className="flex-1 bg-cyan"></div>
        <div className="flex-1 bg-magenta"></div>
        <div className="flex-1 bg-yellow"></div>
        <div className="flex-1 bg-key"></div>
      </div>

      {/* Teal Accent Overlay - Subtle, flipped direction */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-cyan-500/2 via-transparent to-transparent"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.08] bg-dot-pattern"></div>

      <Container>
        <div className="relative z-20 mx-auto max-w-4xl text-center">
          {/* NABPS Seal - Clean, Full Size */}
          <div className="mx-auto mb-8">
            <Image
              src="/images/nabps_seal_v9.svg"
              alt="NABPS Seal - National Association of Ballot Printing Standards"
              width={160}
              height={160}
              className="h-40 w-40 sm:h-48 sm:w-48"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Setting the Standard
            <br />
            for Ballot Printing Integrity
          </h1>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-cyan" />
              <span>Industry-Led Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-cyan" />
              <span>Independent Certification</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan" />
              <span>Founded by Industry Leaders</span>
            </div>
          </div>

          {/* Mission Summary */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            The National Association of Ballot Printing Standards (NABPS) is the industry coalition
            establishing shared standards, certifications, and best practices for Vote by Mail systems.
            We ensure quality, security, and integrity in every ballot.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-elevated hover:shadow-floating border-0">
              <Link href="/certification">Explore Certification</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/70 text-white hover:bg-white/20 hover:border-white bg-transparent"
              style={{ borderWidth: '2px' }}
            >
              <Link href="/about">Learn More About NABPS</Link>
            </Button>
          </div>
        </div>
      </Container>

    </section>
  );
}
