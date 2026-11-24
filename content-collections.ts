import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { remarkCodeMeta } from "./src/lib/remark-code-meta";
import { extractHeadings, readingStats } from "./src/lib/slugify";

const posts = defineCollection({
    name: "posts",
    directory: "content",
    include: "**/*.mdx",
    schema: z.object({
        title: z.string(),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        author: z.string().optional(),
        summary: z.string(),
        image: z.string().optional(),
        // Topic labels shown on cards and used to find related posts.
        tags: z.array(z.string()).optional(),
        // Extra SEO keywords (tags are always included as well).
        keywords: z.array(z.string()).optional(),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        });
        return {
            ...document,
            mdx,
            headings: extractHeadings(document.content),
            ...readingStats(document.content),
        };
    },
});

export default defineConfig({
    collections: [posts],
});
