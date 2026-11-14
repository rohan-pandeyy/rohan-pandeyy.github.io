import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

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
        <div className="mb-6 flex justify-end">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a
              href="/Rohan_Pandey_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon className="size-4" />
              View / Download PDF
            </a>
          </Button>
        </div>
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
