
"use client";
import { useEffect, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className = "",
}: {
  words: string;
  className?: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    words.slice(0, latest)
  );

  const animationConfig = useMemo(() => ({
    type: "tween" as const,
    duration: 1.5, // Reduced from 2.5 to 1.5 seconds
    ease: "easeInOut" as const,
  }), []);

  useEffect(() => {
    const controls = animate(count, words.length, animationConfig);
    return controls.stop;
  }, [words, count, animationConfig]);

  return (
    <motion.span className={className}>
      {displayText}
    </motion.span>
  );
};
