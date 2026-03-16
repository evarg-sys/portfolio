"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  lines: string[];
  className?: string;
  delay?: number;
  lineDelay?: number;
}

export function TypingText({ lines, className = "", delay = 0, lineDelay = 80 }: TypingTextProps) {
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started || currentLineIndex >= lines.length) return;

    const line = lines[currentLineIndex];
    if (currentCharIndex <= line.length) {
      const t = setTimeout(() => {
        setDisplayLines((prev) => {
          const next = [...prev];
          next[currentLineIndex] = line.slice(0, currentCharIndex);
          return next;
        });
        setCurrentCharIndex((c) => c + 1);
      }, lineDelay);
      return () => clearTimeout(t);
    } else {
      setCurrentLineIndex((i) => i + 1);
      setCurrentCharIndex(0);
    }
  }, [started, currentLineIndex, currentCharIndex, lines, lineDelay]);

  return (
    <div className={className}>
      {displayLines.map((text, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block"
          >
            {text}
            {currentLineIndex === i && currentCharIndex <= lines[i].length && (
              <span className="animate-pulse">|</span>
            )}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
