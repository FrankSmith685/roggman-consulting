'use client';

// import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { usePageTransition } from '@/hooks/useTransitionHooks/pageTransitionProvider';
import { useEffect, useState } from 'react';
import { useAppState } from '@/hooks/useAppState';
import { servicesItemsDe } from './data/ServiceItem_De';
import { servicesItemsEn } from './data/ServiceItem_En';
import { servicesItemsEs } from './data/ServiceItem_Es';

export default function ServicesGrid() {
  const { navigate } = usePageTransition();

   const [servicesItemsLocal,setServicesItemsLocal] = useState(servicesItemsDe);
  
    const {lenguaje} = useAppState();
  
    useEffect(()=>{
      if(lenguaje == "es"){
        setServicesItemsLocal(servicesItemsEs)
      }else if(lenguaje == "de"){
        setServicesItemsLocal(servicesItemsDe)
      }else{
        setServicesItemsLocal(servicesItemsEn)
      }
    },[lenguaje])

  return (
    <div className="hover:cursor-pointer w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/10 bg-gradient-to-br from-black/50 to-black/30 text-white backdrop-blur-md rounded-xl overflow-hidden z-30">
      {servicesItemsLocal.map((service, idx) => (
        <motion.div
          key={idx}
          initial={false}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ scale: 1.02 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}

        >
          <div
            onClick={() => navigate(service.href)}
            className="flex flex-col justify-between gap-1 p-3 sm:p-2 hover:bg-white/10 transition-all duration-300 h-full hover:cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold flex items-center gap-3 text-sm sm:text-base">
                <span className="text-sm sm:text-xl text-blue-400">{service.icon}</span>
                {service.label}
              </span>
              <FiArrowRight className="text-white text-lg sm:text-xl" />
            </div>
            {typeof window !== 'undefined' && window.innerWidth >= 640 && (
              <p className="text-xs sm:text-sm text-white/80 leading-snug">
                {service.description}
              </p>
            )}

          </div>
        </motion.div>
      ))}
    </div>
  );
}
