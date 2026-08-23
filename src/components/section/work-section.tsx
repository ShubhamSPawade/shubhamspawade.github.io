/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  const toggleCompany = (company: string) => {
    setOpenCompany((prev) => (prev === company ? null : company));
  };

  return (
    <div className="w-full grid gap-6">
      {DATA.work.map((work) => {
        const isOpen = openCompany === work.company;
        const id = work.company.toLowerCase().replace(/[^a-z0-9]/g, "-");

        return (
          <div key={work.company} className="w-full border-b-0 grid gap-2">
            <button
              type="button"
              onClick={() => toggleCompany(work.company)}
              aria-expanded={isOpen}
              aria-controls={`work-content-${id}`}
              id={`work-trigger-${id}`}
              className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group text-left w-full focus-visible:outline-none"
            >
              <div className="flex items-center gap-x-3 justify-between w-full text-left">
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <LogoImage src={work.logoUrl} alt={work.company} />
                  <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {work.company}
                      <span className="relative inline-flex items-center w-3.5 h-3.5">
                        <ChevronRight
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                            "translate-x-0 opacity-0",
                            "group-hover:translate-x-1 group-hover:opacity-100",
                            isOpen && "opacity-0 translate-x-0"
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 rotate-0",
                            isOpen && "opacity-100 rotate-180"
                          )}
                        />
                      </span>
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {work.title}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>
                    {work.start} - {work.end ?? "Present"}
                  </span>
                </div>
              </div>
            </button>
            <div
              id={`work-content-${id}`}
              role="region"
              aria-labelledby={`work-trigger-${id}`}
              className={cn(
                "grid transition-all duration-200 ease-in-out overflow-hidden text-xs sm:text-sm text-muted-foreground ml-13",
                isOpen ? "grid-rows-[1fr] opacity-100 pt-1" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                {work.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

