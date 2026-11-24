/** Turns heading text into a stable, URL-safe anchor id. */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Strips the markdown that can appear inside a heading line. */
export function stripInlineMarkdown(text: string) {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_]/g, "")
    .trim();
}

export type Heading = { id: string; text: string; level: 2 | 3 };

/** Extracts h2/h3 headings from raw markdown, ignoring fenced code blocks. */
export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  let inFence = false;
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;
    const text = stripInlineMarkdown(match[2]);
    headings.push({
      id: slugify(text),
      text,
      level: match[1].length as 2 | 3,
    });
  }
  return headings;
}

/** Words per minute used for the reading-time estimate. */
const WORDS_PER_MINUTE = 220;

export function readingStats(markdown: string) {
  const words = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return {
    wordCount: words,
    readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
  };
}
