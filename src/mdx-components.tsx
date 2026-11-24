import { Callout } from "@/components/mdx/callout";
import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import { Stat, StatGrid } from "@/components/mdx/stat";
import { cn } from "@/lib/utils";
import { slugify, stripInlineMarkdown } from "@/lib/slugify";
import Link from "next/link";
import { Children, isValidElement, type ComponentProps, type ReactNode } from "react";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

function textOf(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (isValidElement<{ children?: ReactNode }>(child)) {
        return textOf(child.props.children);
      }
      return "";
    })
    .join("");
}

// Headings get a stable id (matches the table of contents) and a hover anchor.
function heading(Tag: "h2" | "h3") {
  return function Heading({ children, className, ...props }: ComponentProps<"h2">) {
    const id = slugify(stripInlineMarkdown(textOf(children)));
    return (
      <Tag
        id={id}
        className={cn("group scroll-mt-24", className)}
        {...props}
      >
        {children}
        <a
          href={`#${id}`}
          aria-label="Link to this section"
          className="ml-2 text-muted-foreground no-underline! opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        >
          #
        </a>
      </Tag>
    );
  };
}

export const mdxComponents = {
  MediaContainer,
  Callout,
  Stat,
  StatGrid,
  h2: heading("h2"),
  h3: heading("h3"),
  a: ({ href = "", children, ...props }: ComponentProps<"a">) => {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    if (href.startsWith("#")) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  },
  pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
  hr: (props: ComponentProps<"hr">) => (
    <div className="my-10 flex w-full items-center" {...props}>
      <div
        className="flex-1 h-px bg-border"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      />
    </div>
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 border border-border rounded-xl overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table
          className="m-0! w-full min-w-full border-separate border-spacing-0"
          {...props}
        />
      </div>
    </div>
  ),
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-muted/60 dark:bg-muted/40 text-sm font-mono text-foreground/90"
        {...props}
      >
        {children}
      </code>
    );
  },
} as const;
