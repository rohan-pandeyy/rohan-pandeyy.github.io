"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ApiResponse = { total: Record<string, number>; contributions: Day[] };

const LEVEL_CLASS: Record<number, string> = {
  0: "bg-muted",
  1: "bg-emerald-200 dark:bg-emerald-950",
  2: "bg-emerald-400 dark:bg-emerald-800",
  3: "bg-emerald-500 dark:bg-emerald-600",
  4: "bg-emerald-700 dark:bg-emerald-400",
};

// Public, token-free API that mirrors the GitHub contribution graph.
const api = (user: string) =>
  `https://github-contributions-api.jogruber.de/v4/${user}?y=last`;

export default function GithubHeatmap({ username }: { username: string }) {
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(api(username), { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        setDays(data.contributions);
        setTotal(data.total.lastYear ?? null);
      })
      .catch((err) => {
        if (err?.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, [username]);

  // Pad so the first column starts on Sunday, like GitHub's graph.
  const leading = days?.length ? new Date(days[0].date + "T00:00:00Z").getUTCDay() : 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-x-auto pb-1">
        <div
          className="grid min-w-[560px] gap-[3px]"
          style={{
            gridAutoFlow: "column",
            gridTemplateRows: "repeat(7, auto)",
            gridAutoColumns: "minmax(0, 1fr)",
          }}
          aria-label={`GitHub contribution activity for ${username}`}
        >
          {days ? (
            <>
              {Array.from({ length: leading }).map((_, i) => (
                <div key={`pad-${i}`} className="aspect-square" />
              ))}
              {days.map((d) => (
                <div
                  key={d.date}
                  title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                  className={cn("aspect-square rounded-[2px]", LEVEL_CLASS[d.level])}
                />
              ))}
            </>
          ) : (
            Array.from({ length: 7 * 53 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "aspect-square rounded-[2px] bg-muted",
                  !failed && "animate-pulse"
                )}
              />
            ))
          )}
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {failed
            ? "Couldn't load live data right now."
            : total !== null
              ? `${total.toLocaleString()} contributions in the last year`
              : "Loading…"}
        </span>
        <span className="flex items-center gap-1">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <span
              key={l}
              className={cn("size-2.5 rounded-[2px]", LEVEL_CLASS[l])}
            />
          ))}
          More
        </span>
      </div>
    </div>
  );
}
