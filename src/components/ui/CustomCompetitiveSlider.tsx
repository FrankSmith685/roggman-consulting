'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import CustomImage from "./CustomImage";
// import { competitiveData, titleCompetitivo } from "./data/CompetitiveDataEs";
import { useEffect, useState } from "react";
import { competitiveDataDe, titleCompetitivoDe } from "./data/CompetitiveData_De";
import { useAppState } from "@/hooks/useAppState";
import { competitiveDataEs, titleCompetitivoEs } from "./data/CompetitiveData_Es";
import { competitiveDataEn, titleCompetitivoEn } from "./data/CompetitiveData_En";

const FancyCompetitiveSlider = () => {
  const pathname = usePathname();

  const [competitiveDataLocal,setCompetitiveDataLocal] = useState(competitiveDataDe);
  const [titleCompetitivoLocal,setTitleCompetitivoLocal] = useState(titleCompetitivoDe);
      
  const {lenguaje} = useAppState();

  useEffect(()=>{
    if(lenguaje == "es"){
      setCompetitiveDataLocal(competitiveDataEs)
      setTitleCompetitivoLocal(titleCompetitivoEs)
    }else if(lenguaje == "de"){
      setCompetitiveDataLocal(competitiveDataDe)
      setTitleCompetitivoLocal(titleCompetitivoDe)
    }else{
      setCompetitiveDataLocal(competitiveDataEn)
      setTitleCompetitivoLocal(titleCompetitivoEn)
    }
  },[lenguaje])

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#0f172a] py-18 px-4"
      >
        {/* Fondo gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-[#1f2937] to-[#0f172a] opacity-30 animate-pulse blur-2xl z-0" />

        <motion.h2
          className="relative text-center text-white text-4xl font-extrabold mb-16 z-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {titleCompetitivoLocal}
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.3 },
            1024: { slidesPerView: 2.5 },
          }}
          className="relative max-w-7xl mx-auto z-10"
        >
          {competitiveDataLocal.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-64 relative overflow-hidden">
                  <CustomImage
                    src={item.image}
                    alt={item.title}
                    width={1500}
                    height={1000}
                    className="!w-full !h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-500" />
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5 text-center">
                  <p className="text-white text-xl font-bold tracking-wide uppercase">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Estilos globales */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(4px);
            border-radius: 9999px;
            width: 45px;
            height: 45px;
            transition: background-color 0.3s;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
          }

          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.4);
            opacity: 1;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: #ffffff;
            width: 10px;
            height: 10px;
          }
        `}</style>
      </motion.section>
    </AnimatePresence>
  );
};

export default FancyCompetitiveSlider;
