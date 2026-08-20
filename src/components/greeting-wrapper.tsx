"use client";

import { useState } from "react";
import MultilingualGreeting from "@/components/multilingual-greeting";

export default function GreetingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <>
      {showGreeting && (
        <MultilingualGreeting onComplete={() => setShowGreeting(false)} />
      )}
      <div
        style={{
          opacity: showGreeting ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  );
}
