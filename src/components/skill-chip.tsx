"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
];

type Hover = { color: string; rotate: number };

function SkillChip({
  name,
  icon: Icon,
}: {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const [hover, setHover] = useState<Hover | null>(null);

  // Random color and a 3-4 degree tilt, picked on hover (never during render).
  const onHoverStart = () =>
    setHover({
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotate: (Math.random() < 0.5 ? -1 : 1) * (3 + Math.random()),
    });

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={() => setHover(null)}
      animate={{ scale: hover ? 1.15 : 1, rotate: hover ? hover.rotate : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={
        hover
          ? {
              color: hover.color,
              borderColor: hover.color,
              backgroundColor: `${hover.color}1a`,
            }
          : undefined
      }
      className="relative hover:z-10 border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 cursor-default"
    >
      {Icon && <Icon className="size-4 rounded overflow-hidden object-contain" />}
      <span
        className={
          hover ? "text-sm font-medium" : "text-foreground text-sm font-medium"
        }
      >
        {name}
      </span>
    </motion.div>
  );
}

const BLUR_FADE_DELAY = 0.04;

// Chip height (h-8 = 32px) and row gap (gap-2 = 8px): 3 rows when collapsed.
const ROW_H = 32;
const GAP = 8;
const VISIBLE_ROWS = 3;
const COLLAPSED_H = VISIBLE_ROWS * ROW_H + (VISIBLE_ROWS - 1) * GAP;
const PAD = 8; // breathing room so hover scale/tilt isn't clipped

// Client component so icon components never cross the server/client boundary.
export function SkillsList() {
  const innerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  // fullHeight includes the inner padding (PAD * 2).
  const [fullHeight, setFullHeight] = useState(COLLAPSED_H + PAD * 2);
  const overflowing = fullHeight - PAD * 2 > COLLAPSED_H + 1;

  // Re-measure when the container wraps differently (mobile vs desktop, resize).
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const measure = () => setFullHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const collapsed = overflowing && !expanded;

  return (
    <div className="flex flex-col gap-2">
      <div
        id="skills-list"
        className="-mx-2 overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{
          maxHeight: collapsed ? COLLAPSED_H + PAD * 2 : fullHeight,
          WebkitMaskImage: collapsed
            ? "linear-gradient(to bottom, black calc(100% - 20px), transparent)"
            : undefined,
          maskImage: collapsed
            ? "linear-gradient(to bottom, black calc(100% - 20px), transparent)"
            : undefined,
        }}
      >
        <div ref={innerRef} className="flex flex-wrap gap-2 p-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <SkillChip name={skill.name} icon={skill.icon} />
            </BlurFade>
          ))}
        </div>
      </div>
      {overflowing && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls="skills-list"
          className="self-start flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {expanded ? "Show less" : `Show all ${DATA.skills.length}`}
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
