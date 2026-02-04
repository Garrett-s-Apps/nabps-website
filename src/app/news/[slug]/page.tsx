import { Container } from "@/components/ui/container";
import { newsPosts } from "@/lib/data/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return newsPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function NewsPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = newsPosts.find((p) => p.slug === params.slug);

  if (!post || !post.isPublished) {
    notFound();
  }

  return (
    <>
      {/* Back Link */}
      <section className="border-b border-key/10 bg-white py-4">
        <Container>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-cyan hover:text-cyan-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to News
          </Link>
        </Container>
      </section>

      {/* Article Header */}
      <section className="bg-gradient-to-b from-cyan/5 to-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 text-sm text-key/60">
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span className="inline-flex items-center rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                {post.category === "announcement" && "Announcement"}
                {post.category === "news" && "Industry News"}
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-bold text-key sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-key/80">{post.excerpt}</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-sm font-bold text-cyan">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-key">{post.author}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Body */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              {post.body.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-8 text-key/80">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-12 border-t border-key/10 pt-8">
              <h3 className="text-sm font-semibold text-key">Share this post</h3>
              <div className="mt-4 flex gap-4">
                <button className="inline-flex items-center gap-2 rounded-md border border-key/20 px-4 py-2 text-sm font-medium text-key hover:bg-gray-50">
                  Twitter
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border border-key/20 px-4 py-2 text-sm font-medium text-key hover:bg-gray-50">
                  LinkedIn
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border border-key/20 px-4 py-2 text-sm font-medium text-key hover:bg-gray-50">
                  Email
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
