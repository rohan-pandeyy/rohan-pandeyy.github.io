import { DATA } from "@/data/resume";
import { getSlug, getSortedPosts } from "@/lib/posts";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPosts();
  return [
    { url: `${DATA.url}/`, changeFrequency: "monthly", priority: 1 },
    {
      url: `${DATA.url}/blog/`,
      lastModified: posts[0]?.publishedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${DATA.url}/resume/`, changeFrequency: "monthly", priority: 0.6 },
    ...posts.map((post) => ({
      url: `${DATA.url}/blog/${getSlug(post)}/`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
