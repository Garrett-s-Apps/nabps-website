import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    remotePatterns: [],
  },
  // Enable compression
  compress: true,
  // Optimize production build
  poweredByHeader: false,
  // Generate standalone output for optimal deployment
  output: "standalone",
};

export default nextConfig;
