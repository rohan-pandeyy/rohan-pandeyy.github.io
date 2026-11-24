import BlurFade from "@/components/magicui/blur-fade";
import { PostCard } from "@/components/blog/post-card";
import { DATA } from "@/data/resume";
import { getSlug, getSortedPosts } from "@/lib/posts";
import type { Metadata } from "next";

const DESCRIPTION =
  "Write-ups on building AI systems, graph data, evaluation and open source, from real projects.";

export const metadata: Metadata = {
  title: "Blog",
  description: DESCRIPTION,
  alternates: { canonical: `${DATA.url}/blog/` },
  openGraph: {
    title: "Blog",
    description: DESCRIPTION,
    url: `${DATA.url}/blog/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: DESCRIPTION,
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  // Static export (GitHub Pages) cannot read ?page= at build time,
  // so every post is rendered on a single page.
  const posts = getSortedPosts();
  const [latest, ...rest] = posts;

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${DATA.name} | Blog`,
    description: DESCRIPTION,
    url: `${DATA.url}/blog/`,
    author: { "@type": "Person", name: DATA.name, url: DATA.url },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.publishedAt,
      url: `${DATA.url}/blog/${getSlug(post)}/`,
    })),
  }).replace(/</g, "\\u003c");

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">
          Blog{" "}
          <span className="ml-1 rounded-md border border-border bg-card px-2 py-1 text-sm text-muted-foreground">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Write-ups on building AI systems, graph data, evaluation and open source.
        </p>
      </BlurFade>

      {latest ? (
        <div className="flex flex-col gap-5">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Latest
            </p>
            <PostCard post={latest} featured />
          </BlurFade>

          {rest.length > 0 && (
            <div>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Earlier posts
                </p>
              </BlurFade>
              <div className="grid gap-4 sm:grid-cols-2">
                {rest.map((post, id) => (
                  <BlurFade delay={BLUR_FADE_DELAY * 4 + id * 0.05} key={getSlug(post)}>
                    <PostCard post={post} />
                  </BlurFade>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center rounded-xl border border-border px-4 py-12">
            <p className="text-center text-muted-foreground">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
