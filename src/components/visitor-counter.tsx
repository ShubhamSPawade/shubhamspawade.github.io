"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface VisitorData {
  uniqueVisitors: number;
  totalViews: number;
  isNewVisitor?: boolean;
  source?: string;
}

interface VisitorCounterProps {
  className?: string;
}

// Generate or retrieve anonymous persistent visitor ID
function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "server";

  const STORAGE_KEY = "portfolio_visitor_id";
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `v_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    return `v_anon_${Date.now()}`;
  }
}

export default function VisitorCounter({ className }: VisitorCounterProps) {
  const [data, setData] = useState<VisitorData | null>(null);
  const [displayCount, setDisplayCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function recordAndFetchVisit() {
      try {
        const visitorId = getOrCreateVisitorId();
        const SESSION_KEY = "portfolio_session_recorded";
        const hasRecordedSession = sessionStorage.getItem(SESSION_KEY);

        let response: Response;

        if (!hasRecordedSession) {
          // New session: increment views & register unique visitor
          response = await fetch("/api/visitors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ visitorId, isNewSession: true }),
          });
          try {
            sessionStorage.setItem(SESSION_KEY, "1");
          } catch {
            // Storage quota or private browsing safeguard
          }
        } else {
          // Returning in same session: just fetch current counts
          response = await fetch("/api/visitors", {
            method: "GET",
          });
        }

        if (response.ok) {
          const result: VisitorData = await response.json();
          if (isMounted) {
            setData(result);
            animateCount(result.uniqueVisitors);
          }
        }
      } catch (err) {
        console.error("Failed to load visitor count:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    recordAndFetchVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  // Smooth number count-up animation
  const animateCount = (target: number) => {
    if (target <= 0) {
      setDisplayCount(1);
      return;
    }

    const start = Math.max(0, target - 15);
    const duration = 800; // ms
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * easeProgress);

      setDisplayCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayCount(target);
      }
    };

    requestAnimationFrame(tick);
  };

  const formattedUnique =
    displayCount !== null
      ? new Intl.NumberFormat().format(displayCount)
      : data
      ? new Intl.NumberFormat().format(data.uniqueVisitors)
      : null;

  const formattedViews = data
    ? new Intl.NumberFormat().format(data.totalViews)
    : null;

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "border bg-background border-border ring-2 ring-border/20 rounded-xl h-7 w-fit px-2.5 flex items-center gap-1.5 shadow-xs cursor-default select-none transition-colors",
              className
            )}
          >
            {/* Pulsing Live Dot */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>

            <Users className="size-3 text-muted-foreground" />

            <span className="text-muted-foreground text-xs font-medium flex items-center gap-1">
              <span>People Visited:</span>
              {loading || !formattedUnique ? (
                <span className="inline-block w-6 h-3 bg-muted animate-pulse rounded" />
              ) : (
                <span className="font-semibold text-foreground font-mono tabular-nums">
                  {formattedUnique}
                </span>
              )}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          sideOffset={8}
          className="rounded-xl bg-primary text-primary-foreground px-3.5 py-2 text-xs shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex items-center justify-between gap-4">
              <span className="opacity-90">Unique Visitors:</span>
              <span className="font-semibold font-mono">
                {formattedUnique || "..."}
              </span>
            </div>
            {formattedViews && (
              <div className="flex items-center justify-between gap-4">
                <span className="opacity-90">Total Views:</span>
                <span className="font-semibold font-mono">
                  {formattedViews}
                </span>
              </div>
            )}
          </div>
          <TooltipArrow className="fill-primary" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
