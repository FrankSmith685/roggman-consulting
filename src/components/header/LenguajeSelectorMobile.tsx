'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe } from "react-icons/fi";

interface Language {
  code: string;
  label: string;
  emoji: string;
}

interface LanguageSelectorProps {
  pathname: string;
  scrolled: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  menuOpen: boolean;
}

const languages: Language[] = [
  { code: "de", label: "Alemán", emoji: "DE" },
  { code: "es", label: "Español", emoji: "ES" },
  { code: "en", label: "Inglés", emoji: "EN" },
];

export default function LanguageSelectorMobile({
  pathname,
  scrolled,
  hoveredIndex,
  setHoveredIndex,
  menuOpen
}: LanguageSelectorProps) {
  const [selected, setSelected] = useState<Language>(languages[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHovered = hoveredIndex === 999;

  const buttonClass = `flex items-center gap-1 text-sm sm:text-[15px] font-medium px-0 py-2 rounded-full transition-all duration-200 ${
    (isMobile && isOpen) || (!isMobile && isHovered)
      ? "bg-gray-100 text-blue-600"
      : scrolled || hoveredIndex !== null || menuOpen ||
        pathname === "/politica-privacidad" || pathname === "/derechos-del-usuario" ||pathname === "/terminos-condiciones" || pathname === "/benutzerrechte" || pathname === "/datenschutzrichtlinie" ||pathname === "/agb" || pathname === "/user-rights" || pathname === "/privacy-policy" ||pathname === "/terms-conditions"
      ? "text-gray-800 hover:bg-gray-100 hover:text-blue-600"
      : "text-white hover:text-blue-300"
  }`;

  const showMenu = isMobile ? isOpen : isHovered;

  return (
    <div
      className="relative group !h-full flex justify-center items-center"
    //   onMouseEnter={() => !isMobile && setHoveredIndex(999)}
    //   onMouseLeave={() => !isMobile && setHoveredIndex(null)}
    >
      <motion.div
        animate={showMenu ? { scale: 1.08, y: -1 } : { scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <button
          className={buttonClass}
          onClick={() => {
            setIsOpen(!isOpen);
            if(isOpen){
                setHoveredIndex(null);
            }else{
                setHoveredIndex(999);
            }
            
          } }
        >
          <motion.span
            animate={showMenu ? { rotate: 5 } : { rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="text-lg"
          >
            <FiGlobe />
          </motion.span>
          {selected.emoji}
        </button>
      </motion.div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute top-[90px] right-0 z-50 w-72 bg-gradient-to-br from-white/90 via-white/95 to-blue-50/90 backdrop-blur-lg border border-blue-100 shadow-2xl rounded-xl"
          >
            <div className="px-6 py-5">
              <h4 className="text-blue-700 text-lg font-bold mb-4">
                Seleccionar idioma
              </h4>
              <div className="flex flex-col gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelected(lang);
                    //   if(isMobile) {
                        setHoveredIndex(null);
                        setIsOpen(false);
                    //   }
                      
                    }}
                    className="flex items-center gap-3 px-4 py-2 bg-white hover:bg-blue-50 rounded-lg shadow-sm border border-gray-100 transition"
                  >
                    <span className="text-xl">{lang.emoji}</span>
                    <span className="text-gray-800 font-medium">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="h-[4px] w-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 opacity-80 rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
