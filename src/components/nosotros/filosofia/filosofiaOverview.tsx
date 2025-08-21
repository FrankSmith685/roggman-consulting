'use client';

import { motion } from 'framer-motion';
import { filosofiaTexto } from './data/filosofia';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' } as const
  },
};

export default function FilosofiaOverview() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-12 bg-white text-gray-800">
      <motion.section
        className="max-w-4xl mx-auto space-y-6 px-2"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line text-justify">
          {filosofiaTexto}
        </p>
      </motion.section>
    </div>
  );
}
