"use client";

import { Container } from "@/components/ui/container";
import { newsPosts, newsCategories } from "@/lib/data/news";
import Link from "next/link";
import { useState } from "react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPosts =
    selectedCategory === "all"
      ? newsPosts.filter((p) => p.isPublished)
      : newsPosts.filter((p) => p.isPublished && p.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(to bottom, #1a2332, #0a1929)' }}>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              News & Announcements
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Stay updated on NABPS developments, industry news, and certification announcements
            </p>
          </div>
        </Container>
      </section>

      {/* News Listing */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Category Filter */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-4 rounded-lg border border-key/10 bg-white p-6">
                <h2 className="font-semibold text-key">Categories</h2>
                <nav aria-label="News categories">
                  <ul className="mt-4 space-y-2">
                    {newsCategories.map((category) => (
                      <li key={category.value}>
                        <button
                          onClick={() => setSelectedCategory(category.value)}
                          aria-current={selectedCategory === category.value ? "true" : undefined}
                          className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 ${
                            selectedCategory === category.value
                              ? "bg-cyan text-white"
                              : "text-key/80 hover:bg-cyan/5"
                          }`}
                        >
                          {category.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-sm text-key/70">
                  Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
                </p>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="rounded-lg border border-key/10 bg-gray-50 p-12 text-center">
                  <p className="text-lg text-key/70">No posts in this category</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="rounded-lg border border-key/10 bg-white p-8 transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 text-sm text-key/60">
                            <time dateTime={post.publishedDate}>
                              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </time>
                            <span>•</span>
                            <span className="inline-flex items-center rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-navy-800">
                              {post.category === "announcement" && "Announcement"}
                              {post.category === "news" && "Industry News"}
                            </span>
                          </div>

                          <h2 className="mt-3 text-2xl font-bold text-key">
                            <Link
                              href={`/news/${post.slug}`}
                              className="hover:underline transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h2>

                          <p className="mt-3 text-key/70">{post.excerpt}</p>

                          <div className="mt-4 flex items-center gap-4">
                            <Link
                              href={`/news/${post.slug}`}
                              className="text-sm font-semibold text-navy-800 hover:text-key underline underline-offset-2 decoration-2"
                            >
                              Read more →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
