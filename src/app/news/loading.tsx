import { Container } from "@/components/ui/container";

export default function NewsLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-b from-navy to-navy-700 py-10 sm:py-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-12 w-64 animate-pulse rounded-lg bg-white/20"></div>
            <div className="mx-auto mt-4 h-6 w-96 animate-pulse rounded-lg bg-white/10"></div>
          </div>
        </Container>
      </section>

      {/* News Listing Skeleton */}
      <section className="py-10 sm:py-12">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Category Filter Skeleton */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-20 overflow-hidden rounded-lg bg-white p-6 shadow-elevated">
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                <div className="mt-6 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 animate-pulse rounded-md bg-gray-100"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts Skeleton */}
            <div className="flex-1">
              <div className="mb-6">
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
              </div>

              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <article key={i} className="rounded-lg bg-white p-8 shadow-soft">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                      <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200"></div>
                      <div className="h-6 w-24 animate-pulse rounded-full bg-gray-200"></div>
                    </div>
                    <div className="mt-3 h-8 w-3/4 animate-pulse rounded bg-gray-200"></div>
                    <div className="mt-3 h-4 w-full animate-pulse rounded bg-gray-200"></div>
                    <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                    <div className="mt-4 h-4 w-24 animate-pulse rounded bg-gray-200"></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
