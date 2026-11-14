import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (user site, so no basePath needed)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Corporate TLS interception: let Turbopack use system certs (needed for next/font/google)
  experimental: { turbopackUseSystemTlsCerts: true },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
