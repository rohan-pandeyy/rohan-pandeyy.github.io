import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowRight, FileText, Mail } from "lucide-react";
import Link from "next/link";

/** End-of-post call to action: talk to me, see my work, read my CV. */
export function PostCta() {
  const { LinkedIn, X } = DATA.contact.social;
  return (
    <section
      aria-labelledby="post-cta-heading"
      className="mt-12 rounded-xl border border-border bg-card p-6"
    >
      <h2 id="post-cta-heading" className="text-lg font-semibold tracking-tight">
        Building something similar?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        I am always happy to compare notes on LLM systems, graph data and evaluation. Send a
        direct question on {LinkedIn.name} or {X.name}, or use the contact form on the home
        page. I will ignore all soliciting.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={LinkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
        >
          <LinkedIn.icon className="size-4" />
          {LinkedIn.name}
        </a>
        <a
          href={X.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-1.5")}
        >
          <X.icon className="size-4" />
          {X.name}
        </a>
        <Link
          href="/#contact"
          className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-1.5")}
        >
          <Mail className="size-4" aria-hidden />
          Contact form
        </Link>
        <Link
          href="/resume"
          className={cn(buttonVariants({ size: "sm", variant: "ghost" }), "gap-1.5")}
        >
          <FileText className="size-4" aria-hidden />
          Read my resume
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
