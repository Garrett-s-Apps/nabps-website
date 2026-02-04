import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-b from-navy to-navy-700 py-10 sm:py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-12 w-64 animate-pulse rounded-lg bg-white/20"></div>
            <div className="mx-auto mt-4 h-6 w-96 animate-pulse rounded-lg bg-white/10"></div>
          </div>
        </Container>
      </section>

      {/* Content Skeleton */}
      <section className="py-10 sm:py-12">
        <Container>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg bg-white p-8 shadow-soft">
                <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>
                <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200"></div>
                <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
