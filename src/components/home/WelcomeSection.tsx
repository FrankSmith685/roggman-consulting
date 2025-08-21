"use client";

import { motion } from "framer-motion";
import CustomImage from "../ui/CustomImage";
import CustomButton from "../ui/CustomButton";
import { useRouter } from "next/navigation";
import Logo from "../header/Logo";
import { useEffect, useState } from "react";
import { welcomeDataDe } from "./data/WelcomeText_De";
import { useAppState } from "@/hooks/useAppState";
import { welcomeDataEs } from "./data/WelcomeText_Es";
import { welcomeDataEn } from "./data/WelcomeText_En";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const WelcomeSection = () => {
  const router = useRouter();

  const [welcomeDataLocal,setWelcomeDataLocal] = useState(welcomeDataDe);
    
  const {lenguaje} = useAppState();

  useEffect(()=>{
    if(lenguaje == "es"){
      setWelcomeDataLocal(welcomeDataEs)
    }else if(lenguaje == "de"){
      setWelcomeDataLocal(welcomeDataDe)
    }else{
      setWelcomeDataLocal(welcomeDataEn)
    }
  },[lenguaje])

  return (
    <section className="relative w-full bg-gradient-to-br from-white to-indigo-50 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        {/* Imagen centrada y decorativa */}
        <motion.div
          className="md:col-span-6 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          custom={0}
        >
          <div className="relative w-full max-w-[1500px] h-full px-[2px] bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="w-full h-full rounded-[calc(theme(borderRadius.2xl)-10px)] overflow-hidden">
              <CustomImage
                src="/images/Home_01.webp"
                alt="Logo de MiEmpresa"
                width={1500}
                height={1000}
                className="object-contain !h-auto !w-full"
                isCritical
              />
            </div>
          </div>
        </motion.div>

        {/* Texto con bloques visuales */}
        <motion.div
          className="md:col-span-6 flex flex-col gap-6 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeIn} custom={1}>
            <div className="flex justify-center md:justify-center mb-4">
              <Logo isActive={true} />
            </div>
          </motion.div>

          <motion.p
            className="text-gray-700 text-sm md:text-md leading-relaxed tracking-wide max-w-2xl mx-auto md:mx-0"
            variants={fadeIn}
            custom={2}
          >
            {welcomeDataLocal.introParagraphs[0]}
          </motion.p>

          <motion.p
            className="text-gray-700 text-sm md:text-md leading-relaxed tracking-wide max-w-2xl mx-auto md:mx-0"
            variants={fadeIn}
            custom={2}
          >
            {welcomeDataLocal.introParagraphs[1]}
          </motion.p>
          <motion.div variants={fadeIn} custom={2}>
            <div className="w-auto">
              <CustomButton variantType="indigo" className="!w-auto !rounded-2xl" onClick={() => router.push("/contactanos")}>
                {welcomeDataLocal.ctaButton}
              </CustomButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
