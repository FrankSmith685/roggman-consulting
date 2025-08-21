'use client';

import { motion } from 'framer-motion';
import { agbData } from './data/agbData';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function AGBSection() {
  const { title, subtitle, lastUpdated, sections } = agbData;

  return (
    <section className="w-full bg-gradient-to-br from-white to-indigo-50 pt-[140px] pb-24 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Animar solo encabezado principal con fadeIn básico */}
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
        >
          {title}
          <span className="block text-indigo-600 mt-2">{subtitle}</span>
        </motion.h2>

        <motion.p
          className="text-gray-500 text-sm"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1}
        >
          Última actualización: {lastUpdated}
        </motion.p>

        {/* Cargar secciones con animación solo al hacer scroll */}
        <div className="w-full flex flex-col gap-6 text-left mt-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              custom={index + 2}
            >
              <h3 className="text-indigo-700 text-base font-semibold mb-3">{section.title}</h3>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-700 leading-relaxed">{section.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
