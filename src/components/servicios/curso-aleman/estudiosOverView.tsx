'use client';

import { motion } from 'framer-motion';
import { estudioTexto, estudioTitulo, formacionTexto, formacionTitulo, practicasTexto, practicasTitulo } from './data/estudioFormacionPracticas';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function EstudiosOverview() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-16 bg-white text-gray-800">
      
      {/* Estudio */}
      <motion.section
        className="max-w-4xl mx-auto space-y-4 px-2 text-center"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600">{estudioTitulo}</h3>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">{estudioTexto}</p>
      </motion.section>

      {/* Formación */}
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

      {/* Prácticas */}
      <motion.section
        className="max-w-4xl mx-auto space-y-4 px-2 text-center"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600">{practicasTitulo}</h3>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">{practicasTexto}</p>
      </motion.section>

    </div>
  );
}
