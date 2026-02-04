import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-cyan/5 to-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* NABPS Seal */}
          <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center">
            <Image
              src="/images/NABPS_Transparent.png"
              alt="NABPS Seal"
              width={128}
              height={128}
              className="h-32 w-auto"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-key sm:text-5xl lg:text-6xl">
            Setting the Standard for Ballot Printing Integrity
          </h1>

          {/* Mission Summary */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-key/80">
            The National Association of Ballot Printing Standards (NABPS) is the industry coalition
            establishing shared standards, certifications, and best practices for Vote by Mail systems.
            We ensure quality, security, and integrity in every ballot.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/certification">Explore Certification</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More About NABPS</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
