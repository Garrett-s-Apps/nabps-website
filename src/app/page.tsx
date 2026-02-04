import { Hero } from "@/components/features/hero";
import { FoundingMembers } from "@/components/features/founding-members";
import { QuickLinks } from "@/components/features/quick-links";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <FoundingMembers />
    </>
  );
}
