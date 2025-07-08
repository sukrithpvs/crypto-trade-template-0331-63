
"use client";
import { useEffect, useMemo, useCallback } from "react";
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
    duration: 1, // Reduced from 1.5 to 1 second for faster loading
    ease: "easeOut" as const,
  }), []);

  const startAnimation = useCallback(() => {
    const controls = animate(count, words.length, animationConfig);
    return controls.stop;
  }, [count, words.length, animationConfig]);

  useEffect(() => {
    return startAnimation();
  }, [startAnimation]);

  return (
    <motion.span className={className}>
      {displayText}
    </motion.span>
  );
};
