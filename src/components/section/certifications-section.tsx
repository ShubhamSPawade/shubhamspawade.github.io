/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

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

function CertContent({ cert }: { cert: (typeof DATA.certifications)[number] }) {
  const hasLink = "href" in cert;
  return (
    <>
      <LogoImage src={cert.logoUrl} alt={cert.issuer} />
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <div className="flex items-center justify-between gap-2">
          <div className="font-semibold leading-none flex items-center gap-2">
            {cert.title}
            {hasLink && (
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
            )}
          </div>
          <span className="text-xs tabular-nums text-muted-foreground text-right flex-none">
            {cert.date}
          </span>
        </div>
        <div className="font-sans text-sm text-muted-foreground">
          {cert.issuer}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          {cert.description}
        </p>
      </div>
    </>
  );
}

export default function CertificationsSection() {
  return (
    <div className="flex flex-col gap-8">
      {DATA.certifications.map((cert) =>
        "href" in cert ? (
          <Link
            key={cert.title}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-x-3 group"
          >
            <CertContent cert={cert} />
          </Link>
        ) : (
          <div key={cert.title} className="flex items-start gap-x-3 group">
            <CertContent cert={cert} />
          </div>
        )
      )}
    </div>
  );
}
