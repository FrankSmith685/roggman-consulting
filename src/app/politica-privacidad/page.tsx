'use client';

import { motion } from 'framer-motion';
import { privacyPolicyData } from './data/privacyPolicyData';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function PoliticaPrivacidadSection() {
  const {
    titles,
    mainParagraph,
    collectedData,
    usage,
    rightsAndSecurity,
  } = privacyPolicyData;

  return (
    <section className="w-full bg-gradient-to-br from-white to-indigo-50 pt-[140px] pb-24 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Título y párrafo principal con animación inmediata */}
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
        >
          {titles.section}
          <span className="block text-indigo-600 mt-2">{titles.subtitle}</span>
        </motion.h2>

        <motion.p
          className="text-gray-700 text-sm md:text-base leading-relaxed tracking-wide"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1}
        >
          {titles.description}
        </motion.p>

        <motion.p
          className="text-gray-700 text-sm md:text-base leading-relaxed tracking-wide"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={2}
        >
          {mainParagraph}
        </motion.p>

        {/* Secciones más pesadas solo se animan al entrar en vista */}
        <motion.div
          className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm w-full text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={3}
        >
          <h3 className="text-indigo-700 text-sm font-semibold mb-3">{titles.collectedDataTitle}</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {collectedData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm w-full text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={4}
        >
          <h3 className="text-indigo-700 text-sm font-semibold mb-3">{titles.usageTitle}</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {usage.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm w-full text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={5}
        >
          <h3 className="text-indigo-700 text-sm font-semibold mb-3">{titles.securityTitle}</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>{rightsAndSecurity.dataSharing}</li>
            <li>{rightsAndSecurity.dataSecurity}</li>
            <li>{rightsAndSecurity.userRights}</li>
            <li>{rightsAndSecurity.contact}</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
