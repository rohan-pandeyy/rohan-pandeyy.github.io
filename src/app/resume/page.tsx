import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: "Resume",
  description: "Education, experience, skills and projects.",
};

export default async function ResumePage() {
  const cv = await readFile(
    path.join(process.cwd(), "src", "data", "cv.md"),
    "utf-8"
  );

  return (
    <section id="resume">
      <BlurFade delay={0.04}>
        <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-headings:text-foreground prose-strong:text-foreground">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {cv}
          </ReactMarkdown>
        </article>
      </BlurFade>
    </section>
  );
}
