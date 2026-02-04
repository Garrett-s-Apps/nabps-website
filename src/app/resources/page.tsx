"use client";

import { Container } from "@/components/ui/container";
import { resources, resourceCategories, getFileTypeIcon } from "@/lib/data/resources";
import { useState } from "react";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredResources =
    selectedCategory === "all"
      ? resources.filter((r) => r.isPublic)
      : resources.filter((r) => r.isPublic && r.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Resource Library</h1>
            <p className="mt-6 text-lg text-white/90">
              Access standards documentation, best practices, and educational materials
              for ballot printing professionals and election officials.
            </p>
          </div>
        </Container>
      </section>

      {/* Resources */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Category Filter */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-4 rounded-lg border border-key/10 bg-white p-6">
                <h2 className="font-semibold text-key">Categories</h2>
                <div className="mt-4 space-y-2">
                  {resourceCategories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        selectedCategory === category.value
                          ? "bg-cyan text-white"
                          : "text-key/80 hover:bg-cyan/5"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Resource Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-sm text-key/70">
                  Showing {filteredResources.length} resource{filteredResources.length !== 1 ? "s" : ""}
                </p>
              </div>

              {filteredResources.length === 0 ? (
                <div className="rounded-lg border border-key/10 bg-gray-50 p-12 text-center">
                  <p className="text-lg text-key/70">No resources in this category</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredResources.map((resource) => (
                    <div
                      key={resource.id}
                      className="rounded-lg border border-key/10 bg-white p-6 transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        {/* File Type Icon */}
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                          {(() => {
                            const Icon = getFileTypeIcon(resource.fileType);
                            return <Icon className="h-6 w-6" />;
                          })()}
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-key">{resource.title}</h3>
                          <p className="mt-2 text-sm text-key/70">{resource.description}</p>

                          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-key/60">
                            <span className="inline-flex items-center gap-1">
                              📅{" "}
                              {new Date(resource.publishedDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              📁 {resource.fileType.toUpperCase()}
                            </span>
                            {resource.downloadCount && (
                              <span className="inline-flex items-center gap-1">
                                ⬇️ {resource.downloadCount} downloads
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Download Button */}
                        <div className="flex-shrink-0">
                          <a
                            href={resource.fileUrl}
                            download
                            className="inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
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
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Members Only CTA */}
              <div className="mt-12 rounded-lg border border-cyan/20 bg-cyan/5 p-8 text-center">
                <h3 className="text-xl font-semibold text-key">
                  Looking for more resources?
                </h3>
                <p className="mt-2 text-key/70">
                  Members have access to additional standards documentation, templates,
                  and exclusive training materials.
                </p>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-cyan px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
                  >
                    Inquire About Membership →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
