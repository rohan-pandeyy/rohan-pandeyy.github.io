/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";

const GITHUB_USER = "rohan-pandeyy";
const TOP_COUNT = 3;

const chipClass =
  "flex h-8 items-center gap-2 rounded-xl border border-border bg-background px-3 text-sm font-medium ring-2 ring-border/20 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-ring";

type Org = (typeof DATA.contributedTo)[number];

function OrgChip({ org, logo }: Org) {
  return (
    <li>
      <a
        href={`https://github.com/search?q=${encodeURIComponent(
          `author:${GITHUB_USER} org:${org}`
        )}&type=pullrequests`}
        target="_blank"
        rel="noopener noreferrer"
        className={chipClass}
      >
        <img
          src={logo}
          alt=""
          width={20}
          height={20}
          className="size-5 rounded-md object-cover"
        />
        @{org}
      </a>
    </li>
  );
}

// Styled after the top organizations row under a GitHub contribution graph.
// The top few show by default; "More" slides the rest open, like the Skills section.
export default function ContributedTo() {
  const [showAll, setShowAll] = useState(false);
  const top = DATA.contributedTo.slice(0, TOP_COUNT);
  const rest = DATA.contributedTo.slice(TOP_COUNT);

  return (
    <div className="flex flex-col">
      <ul className="flex flex-wrap items-center gap-2">
        {top.map((o) => (
          <OrgChip key={o.org} {...o} />
        ))}
        {rest.length > 0 && (
          <li>
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              aria-controls="orgs-more"
              className="flex h-8 cursor-pointer items-center rounded-xl border border-border px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {showAll ? "Less" : "More"}
            </button>
          </li>
        )}
      </ul>
      {rest.length > 0 && (
        <div
          id="orgs-more"
          inert={!showAll}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            showAll ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="flex flex-wrap items-center gap-2 pt-2">
              {rest.map((o) => (
                <OrgChip key={o.org} {...o} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
