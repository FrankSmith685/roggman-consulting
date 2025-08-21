'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { auditoriaIntro } from './data/auditoria';
import { usePathname } from 'next/navigation';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

export default function AuditoriaOverview() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-12 bg-white text-gray-800">
          <motion.section
            className="text-center max-w-4xl mx-auto space-y-6 px-2"
            variants={sectionFade}
            custom={0}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {auditoriaIntro}
            </p>
          </motion.section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
