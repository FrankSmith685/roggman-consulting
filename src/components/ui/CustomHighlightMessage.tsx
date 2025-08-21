"use client";

import { motion } from "framer-motion";

interface HighlightMessageProps {
  text: string;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const CustomHighlightMessage = ({ text }: HighlightMessageProps) => {
  const words = text.split(" ");

  return (
    <section className="h-[400px] sm:h-[500px] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4">
      <motion.h1
        className="text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-500 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-relaxed max-w-5xl flex flex-wrap justify-center gap-2"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordAnimation}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </section>
  );
};

export default CustomHighlightMessage;
