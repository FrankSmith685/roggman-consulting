"use client";

import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const [isAtTarget, setIsAtTarget] = useState(false);
  const showUpArrow = isAtTarget;

  useEffect(() => {
    const target = document.getElementById("home-content-bottom");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtTarget(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (isAtTarget) {
      const top = document.getElementById("home-content-top");
      top?.scrollIntoView({ behavior: "smooth" });
    } else {
      const bottom = document.getElementById("home-content-bottom");
      bottom?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="md:hidden fixed bottom-4 right-4 z-30 rounded-full p-3 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500 text-white hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
      initial={{ y: 0, opacity: 0.85 }}
      animate={{
        y: [0, -6, 0],
        opacity: [0.85, 1, 0.85],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
        ease: "easeInOut",
      }}
      aria-label={showUpArrow ? "Volver arriba" : "Deslizar hacia abajo"}
    >
      {showUpArrow ? (
        <FiChevronUp className="text-2xl animate-pulse drop-shadow" />
      ) : (
        <FiChevronDown className="text-2xl animate-pulse drop-shadow" />
      )}
    </motion.button>
  );
}
