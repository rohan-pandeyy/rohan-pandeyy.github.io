/* eslint-disable @next/next/no-img-element */
"use client";

import { PresentText } from "@/components/present-text";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

// --- Project preview video -------------------------------------------------
// Desktop (hover + fine pointer): plays while hovered, resets on leave.
// Touch devices: plays while the card is the most visible one on screen.

const PLAY_THRESHOLD = 0.6;
const visibility = new Map<HTMLVideoElement, number>();

function stop(video: HTMLVideoElement) {
  video.pause();
  video.currentTime = 0;
}

function play(video: HTMLVideoElement) {
  video.play().catch(() => {
    /* autoplay blocked or interrupted; keep the first frame */
  });
}

// Only the most visible video (above the threshold) plays.
function syncActiveVideo() {
  let active: HTMLVideoElement | null = null;
  let best = PLAY_THRESHOLD;
  visibility.forEach((ratio, video) => {
    if (ratio >= best) {
      best = ratio;
      active = video;
    }
  });
  visibility.forEach((_, video) => {
    if (video === active) {
      if (video.paused) play(video);
    } else if (!video.paused || video.currentTime > 0) {
      stop(video);
    }
  });
}

function ProjectVideo({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    if (canHover.matches) {
      const card = video.closest("[data-project-card]") ?? video;
      const onEnter = () => play(video);
      const onLeave = () => stop(video);
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      return () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibility.set(video, entry.isIntersecting ? entry.intersectionRatio : 0);
        syncActiveVideo();
      },
      { threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] }
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      visibility.delete(video);
      stop(video);
    };
  }, []);

  if (failed) return <div className="w-full h-48 bg-muted" />;

  return (
    <video
      ref={ref}
      // #t=0.001 makes browsers (notably iOS Safari) paint the first frame
      src={`${src}#t=0.001`}
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      aria-label={`${title} preview`}
      className="w-full h-48 object-cover"
      onError={() => setFailed(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      data-project-card
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <ProjectVideo src={video} title={title} />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">
              <PresentText>{dates}</PresentText>
            </time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
