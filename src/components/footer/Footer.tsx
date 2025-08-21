"use client";

import { motion } from "framer-motion";
import Logo from "../header/Logo";
import { usePageTransition } from "@/hooks/useTransitionHooks/pageTransitionProvider";
import { useEffect, useState } from "react";
import { footerDataDe } from "./data/FooterData_De";
import { useAppState } from "@/hooks/useAppState";
import { footerDataEs } from "./data/FooterData_Es";
import { footerDataEn } from "./data/FooterData_En";

const Footer = () => {
  const { navigate } = usePageTransition();

   const [footerDataLocal,setFooterDataLocal] = useState(footerDataDe);
          
    const {lenguaje} = useAppState();
  
    useEffect(()=>{
      if(lenguaje == "es"){
        setFooterDataLocal(footerDataEs)
      }else if(lenguaje == "de"){
        setFooterDataLocal(footerDataDe)
      }else{
        setFooterDataLocal(footerDataEn)
      }
    },[lenguaje])

  return (
    <footer className="bg-[#2f3848] text-white pt-12 pb-6 px-4 md:px-16">
      {/* Logo centrado arriba */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center mb-10"
      >
        <Logo isActive={false} />
      </motion.div>

      {/* Secciones del footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm"
      >
        {/* Información */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{footerDataLocal.informacion_title}</h3>
          <ul className="space-y-2 text-gray-300">
            {footerDataLocal.informacion.map((item, i) => (
              <li key={i}>
                <div
                  onClick={()=>navigate(item.href)}
                  className="hover:text-white transition duration-300 hover:cursor-pointer"
                >
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{footerDataLocal.servicios_title}</h3>
          <ul className="space-y-2 text-gray-300">
            {footerDataLocal.servicios.map((servicio, i) => (
              <li key={i}>
                <div
                  onClick={()=>navigate(servicio.href)}
                  className="hover:text-white transition duration-300 hover:cursor-pointer"
                >
                  {servicio.label}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{footerDataLocal.contacto_title}</h3>
          <ul className="space-y-2 text-gray-300">
            {footerDataLocal.contacto.map((item, i) => (
              <li key={i}>
                <span className="text-white font-medium">{item.label}</span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Línea final */}
      <div className="border-t border-gray-600 mt-12 pt-4 text-center text-xs text-gray-400">
        {footerDataLocal.author}
      </div>
    </footer>
  );
};

export default Footer;
