"use client";

import { motion } from "framer-motion";
import { InfoCard } from "@/interface/infoCards";
import CustomImage from "../ui/CustomImage";
import { useEffect, useState } from "react";
import { useAppState } from "@/hooks/useAppState";
import { infoCardsDe } from "./data/InfoCards_De";
import { infoCardsEs } from "./data/InfoCards_Es";
import { infoCardsEn } from "./data/InfoCards_En";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut" as const,
    },
  }),
};

const InfoCardSection: React.FC = () => {
  const [infoCardsLocal,setInfoCardsLocal] = useState(infoCardsDe);
    
    const {lenguaje} = useAppState();
  
    useEffect(()=>{
      if(lenguaje == "es"){
        setInfoCardsLocal(infoCardsEs)
      }else if(lenguaje == "de"){
        setInfoCardsLocal(infoCardsDe)
      }else{
        setInfoCardsLocal(infoCardsEn)
      }
    },[lenguaje])
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {infoCardsLocal.map((card: InfoCard, index: number) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 group transform hover:-translate-y-2"
          >
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <CustomImage
                src={card.image}
                alt={card.title}
                width={1500}
                height={1000}
                className="object-cover !w-full !h-full group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-extrabold mb-2 bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 text-transparent bg-clip-text">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfoCardSection;
