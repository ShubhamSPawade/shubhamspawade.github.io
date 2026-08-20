"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const GREETINGS = [
  { text: "Hello", lang: "English" },
  { text: "नमस्कार", lang: "Marathi" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "你好", lang: "Chinese" },
  { text: "नमस्ते", lang: "Hindi" },
];

const CYCLE_DURATION = 500; // ms per greeting
const TOTAL_CYCLES = GREETINGS.length;

export default function MultilingualGreeting({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const handleComplete = useCallback(() => {
    setIsDone(true);
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    if (isDone) return;

    if (currentIndex >= TOTAL_CYCLES) {
      handleComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, CYCLE_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex, isDone, handleComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      animate={isDone ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          {currentIndex < TOTAL_CYCLES && (
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground select-none"
            >
              {GREETINGS[currentIndex].text}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
