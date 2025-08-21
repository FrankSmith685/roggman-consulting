'use client';

import { motion } from 'framer-motion';
import {
  gestionInternacionalIntro,
  gestionInternacionalVentajas,
  gestionInternacionalCierre,
  gestionInternacionalCierreEnviar,
} from './data/gestionInternacional';
import { FaCheckCircle } from 'react-icons/fa';
import CustomButton from '@/components/ui/CustomButton';
import { useRouter } from 'next/navigation';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } as const,
  }),
};

export default function GestionInternacionalOverview() {
  const introParagraphs = gestionInternacionalIntro.trim().split('\n\n');
  const router = useRouter();

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-12 space-y-16 bg-white text-gray-800">
      {/* Intro (sin animación para reducir LCP) */}
      <section className="text-center max-w-4xl mx-auto space-y-4 px-2">
        {introParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`${
              index === 0
                ? 'text-2xl sm:text-3xl font-bold text-indigo-700'
                : 'text-base sm:text-lg text-gray-700 leading-relaxed'
            }`}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Ventajas */}
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-6 text-center">
          Ventajas de trabajar en el extranjero
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {gestionInternacionalVentajas.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl border border-indigo-200 shadow-sm"
            >
              <FaCheckCircle className="text-indigo-600 mt-1" size={20} />
              <span className="text-gray-800 text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <motion.section
        className="text-center max-w-3xl mx-auto space-y-6 px-2"
        variants={sectionFade}
        initial="hidden"
        animate="visible"
      >
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {gestionInternacionalCierre}
        </p>
        <CustomButton
          variantType="indigo"
          type="button"
          onClick={() => router.push('/candidatos/registre-curriculum')}
          className="!rounded-xl px-6 !w-auto"
        >
          {gestionInternacionalCierreEnviar}
        </CustomButton>
      </motion.section>
    </div>
  );
}
