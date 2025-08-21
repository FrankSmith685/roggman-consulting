"use client";

import { useAppState } from "@/hooks/useAppState";
import { usePageTransition } from "@/hooks/useTransitionHooks/pageTransitionProvider";
import { useEffect, useState } from "react";
import { FaBolt } from "react-icons/fa";

export default function CustomLoader() {
  const { loading } = usePageTransition();

  const [labelLoading,setLabelLoading] = useState("Cargando Roggman Consulting...");
        
  const {lenguaje} = useAppState();

  useEffect(()=>{
    if(lenguaje == "es"){
      setLabelLoading("Cargando Roggman Consulting...")
    }else if(lenguaje == "de"){
      setLabelLoading("Cargando Roggman Consulting...")
    }else{
      setLabelLoading("Cargando Roggman Consulting...")
    }
  },[lenguaje])
  
    if (!loading) return null;
  
  return (
    <div className="flex flex-col items-center justify-center h-screen fixed inset-0 z-[9999] w-full bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white overflow-hidden">

      {/* Círculo animado de fondo */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full animate-ping blur-2xl" />

      {/* Ícono giratorio */}
      <div className="z-10 mb-6 animate-spin">
        <FaBolt className="text-yellow-400 text-6xl" />
      </div>

      {/* Texto atractivo */}
      <p className="z-10 text-lg md:text-xl font-semibold tracking-wide text-blue-200 animate-pulse">
        {labelLoading}
      </p>
    </div>
  );
}
