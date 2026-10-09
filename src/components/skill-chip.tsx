"use client";

import { useState } from "react";
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

// Client component so icon components never cross the server/client boundary.
export function SkillsList() {
  return (
    <div className="flex flex-wrap gap-2">
      {DATA.skills.map((skill, id) => (
        <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
          <SkillChip name={skill.name} icon={skill.icon} />
        </BlurFade>
      ))}
    </div>
  );
}
