import { MetadataRoute } from "next";
import { vendors } from "@/lib/data/vendors";
import { newsPosts } from "@/lib/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nabps.org";

  const staticRoutes = [
    "",
    "/about",
    "/standards",
    "/certification",
    "/members",
    "/membership",
    "/resources",
    "/news",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const vendorRoutes = vendors.map((vendor) => ({
    url: `${baseUrl}/members/${vendor.slug}`,
    lastModified: new Date(vendor.certificationDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const newsRoutes = newsPosts
    .filter((post) => post.isPublished)
    .map((post) => ({
      url: `${baseUrl}/news/${post.slug}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...vendorRoutes, ...newsRoutes];
}
