import { PostCta } from "@/components/blog/post-cta";
import { PostCard, PostMeta, TagList } from "@/components/blog/post-card";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { getPostBySlug, getRelatedPosts, getSlug } from "@/lib/posts";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/mdx-components";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: getSlug(post) }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return undefined;

  const { title, summary: description, publishedAt, updatedAt, image } = post;
  const url = `${DATA.url}/blog/${slug}/`;
  const keywords = [...(post.tags ?? []), ...(post.keywords ?? [])];
  const author = post.author ?? DATA.name;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author, url: DATA.url }],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      siteName: DATA.name,
      locale: "en_IN",
      publishedTime: publishedAt,
      modifiedTime: updatedAt ?? publishedAt,
      authors: [author],
      tags: keywords,
      ...(image && { images: [{ url: `${DATA.url}${image}` }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [`${DATA.url}${image}`] }),
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = `${DATA.url}/blog/${slug}/`;
  const author = post.author ?? DATA.name;

  const jsonLd = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      image: post.image
        ? `${DATA.url}${post.image}`
        : `${DATA.url}/blog/${slug}/opengraph-image`,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "en",
      keywords: [...(post.tags ?? []), ...(post.keywords ?? [])].join(", "),
      wordCount: post.wordCount,
      timeRequired: `PT${post.readingTime}M`,
      author: { "@type": "Person", name: author, url: DATA.url },
      publisher: { "@type": "Person", name: DATA.name, url: DATA.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: DATA.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${DATA.url}/blog/` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ]).replace(/</g, "\\u003c");

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <ReadingProgress targetId="post-body" />

      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft
            className="size-3 transition-transform group-hover:-translate-x-px"
            aria-hidden
          />
          Back to Blog
        </Link>
      </nav>

      <header className="flex flex-col gap-4">
        <TagList tags={post.tags} />
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter text-balance md:text-4xl">
          {post.title}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">
          {post.summary}
        </p>
        <div className="flex items-center gap-3 pt-1">
          <Avatar className="size-9 border">
            <AvatarImage alt={author} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium leading-none">{author}</span>
            <PostMeta post={post} />
          </div>
        </div>
      </header>

      <div className="my-6 flex w-full items-center">
        <div
          className="h-px flex-1 bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      <TableOfContents headings={post.headings} />

      <article
        id="post-body"
        className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"
      >
        <MDXContent code={post.mdx} components={mdxComponents} />
      </article>

      <PostCta />

      <aside aria-labelledby="related-heading" className="mt-12">
        <h2
          id="related-heading"
          className="mb-4 text-lg font-semibold tracking-tight"
        >
          Keep reading
        </h2>
        {related.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <PostCard key={getSlug(p)} post={p} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
            This is the first post here, so there is nothing related yet. More write-ups on
            AI systems and open source are on the way. In the meantime, see the{" "}
            <Link
              href="/#projects"
              className="text-foreground underline underline-offset-4"
            >
              projects I have built
            </Link>
            .
          </p>
        )}
      </aside>
    </section>
  );
}
