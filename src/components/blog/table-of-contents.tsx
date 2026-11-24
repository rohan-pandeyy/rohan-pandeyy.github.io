import type { Heading } from "@/lib/slugify";
import { ListIcon } from "lucide-react";

/** Collapsible "On this page" list. Native <details> keeps it usable without JS. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const items = headings.filter((h) => h.level === 2);
  if (items.length < 3) return null;

  return (
    <nav aria-label="Table of contents" className="my-8">
      <details className="group rounded-xl border border-border bg-card/50 px-4 py-3 open:pb-4">
        <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
          <ListIcon className="size-4 text-muted-foreground" aria-hidden />
          On this page
          <span className="ml-auto text-xs font-normal text-muted-foreground group-open:hidden">
            {items.length} sections
          </span>
        </summary>
        <ol className="mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-sm text-muted-foreground marker:text-xs marker:tabular-nums">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </details>
    </nav>
  );
}
