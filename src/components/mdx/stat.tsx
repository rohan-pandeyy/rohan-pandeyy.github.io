import type { ReactNode } from "react";

export function StatGrid({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4">
      <span className="text-2xl font-semibold tracking-tight text-foreground tabular-nums">
        {value}
      </span>
      <span className="text-xs font-medium text-foreground/80">{label}</span>
      {note && <span className="text-xs text-muted-foreground">{note}</span>}
    </div>
  );
}
