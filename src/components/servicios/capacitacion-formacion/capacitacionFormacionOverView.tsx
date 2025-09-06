'use client';

import { motion } from 'framer-motion';
import { capacitacionTexto, capacitacionTitulo, formacionTexto, formacionTitulo } from './data/capacitacionformacion';
// import { asesoriaTexto, asesoriaTitulo, consultoriaTexto, consultoriaTitulo } from './data/comercioImportacion';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function CapacitacionFormacionOverview() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-16 bg-white text-gray-800">
      
      {/* Trabajo */}
      <motion.section
        className="max-w-4xl mx-auto space-y-4 px-2 text-center"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600">{capacitacionTitulo}</h3>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">{capacitacionTexto}</p>
      </motion.section>

      {/* Impuestos */}
      <motion.section
        className="max-w-4xl mx-auto space-y-4 px-2 text-center"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600">{formacionTitulo}</h3>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">{formacionTexto}</p>
      </motion.section>

    </div>
  );
}
