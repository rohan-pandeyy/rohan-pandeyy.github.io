import { cn } from "@/lib/utils";
import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

const VARIANTS = {
  tldr: {
    icon: Lightbulb,
    box: "border-emerald-500/30 bg-emerald-500/5",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  note: {
    icon: Info,
    box: "border-border bg-muted/40",
    accent: "text-muted-foreground",
  },
  warning: {
    icon: AlertTriangle,
    box: "border-amber-500/30 bg-amber-500/5",
    accent: "text-amber-600 dark:text-amber-400",
  },
} as const;

export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: keyof typeof VARIANTS;
  title?: string;
  children: ReactNode;
}) {
  const { icon: Icon, box, accent } = VARIANTS[variant];
  return (
    <aside
      className={cn("not-prose my-8 rounded-xl border p-5", box)}
      aria-label={title}
    >
      {title && (
        <p
          className={cn(
            "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider",
            accent
          )}
        >
          <Icon className="size-4" aria-hidden />
          {title}
        </p>
      )}
      <div className="text-sm leading-relaxed text-foreground/90 [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded-md [&_code]:bg-muted/60 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[13px] [&_li]:mt-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p+p]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </aside>
  );
}
