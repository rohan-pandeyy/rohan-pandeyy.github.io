import { formatDate } from "@/lib/utils";
import { getSlug, type Post } from "@/lib/posts";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

export function TagList({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs font-medium text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function PostMeta({ post }: { post: Post }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      <span aria-hidden>·</span>
      <span className="inline-flex items-center gap-1">
        <Clock className="size-3" aria-hidden />
        {post.readingTime} min read
      </span>
    </p>
  );
}

/** A post preview card used on the blog index and in the related-posts section. */
export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${getSlug(post)}`}
      className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <TagList tags={post.tags?.slice(0, featured ? 5 : 3)} />
      <h3
        className={
          featured
            ? "text-xl font-semibold leading-tight tracking-tight"
            : "text-base font-semibold leading-snug tracking-tight"
        }
      >
        {post.title}
        <ArrowUpRight
          className="ml-1 inline-block size-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          aria-hidden
        />
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
      <div className="mt-auto pt-1">
        <PostMeta post={post} />
      </div>
    </Link>
  );
}
