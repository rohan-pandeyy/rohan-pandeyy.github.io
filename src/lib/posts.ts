import { allPosts } from "content-collections";

export type Post = (typeof allPosts)[number];

export function getSlug(post: Post) {
  return post._meta.path.replace(/\.mdx$/, "");
}

export function getSortedPosts(): Post[] {
  return [...allPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => getSlug(post) === slug);
}

/** Other posts, ranked by shared tags and then recency. */
export function getRelatedPosts(current: Post, limit = 3): Post[] {
  const tags = new Set((current.tags ?? []).map((t) => t.toLowerCase()));
  return getSortedPosts()
    .filter((post) => getSlug(post) !== getSlug(current))
    .map((post) => ({
      post,
      score: (post.tags ?? []).filter((t) => tags.has(t.toLowerCase())).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}
