import { Container } from "@/components/ui/container";

export default function NewsArticleLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-b from-navy to-navy-700 py-10 sm:py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="h-4 w-32 animate-pulse rounded bg-white/20"></div>
              <div className="h-4 w-4 animate-pulse rounded-full bg-white/20"></div>
              <div className="h-6 w-24 animate-pulse rounded-full bg-white/20"></div>
            </div>
            <div className="mt-4 h-12 w-full animate-pulse rounded-lg bg-white/20"></div>
            <div className="mt-6 h-6 w-3/4 animate-pulse rounded-lg bg-white/10"></div>
          </div>
        </Container>
      </section>

      {/* Article Content Skeleton */}
      <section className="py-10 sm:py-12">
        <Container>
          <article className="prose prose-lg mx-auto max-w-3xl">
            <div className="space-y-4">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200"></div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
