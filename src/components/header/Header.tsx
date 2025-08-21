'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX
} from "react-icons/fi";
import Logo from "./Logo";
import { navItems_Es } from "./data/NavItem_Es";
import { navItems_De } from "./data/NavItem_De";
import DesktopHeader from "./HeaderDesktop";
import MobileHeader from "./HeaderMobile";
import { useAppState } from "@/hooks/useAppState";
import { navItems_En } from "./data/NavItem_En";


export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const [navItems_local,setNavItems_local] = useState(navItems_Es);
  const {lenguaje} = useAppState();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}, [menuOpen]);

useEffect(()=>{
  if(lenguaje == "es"){
    setNavItems_local(navItems_Es)
  }else if(lenguaje == "de"){
    setNavItems_local(navItems_De)
  }else{
    setNavItems_local(navItems_En)
  }
},[lenguaje])

  

  return (
    <header
    
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || hoveredIndex !== null || menuOpen || pathname === "/politica-privacidad" || pathname === "/derechos-del-usuario" ||pathname === "/terminos-condiciones" || pathname === "/benutzerrechte" || pathname === "/datenschutzrichtlinie" ||pathname === "/agb" || pathname === "/user-rights" || pathname === "/privacy-policy" ||pathname === "/terms-conditions"
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-6 flex items-center justify-between h-[140px] relative">

        <Logo isActive={scrolled || hoveredIndex !== null || menuOpen || pathname === "/politica-privacidad" || pathname === "/derechos-del-usuario" ||pathname === "/terminos-condiciones" || pathname === "/benutzerrechte" || pathname === "/datenschutzrichtlinie" ||pathname === "/agb" || pathname === "/user-rights" || pathname === "/privacy-policy" ||pathname === "/terms-conditions"} />
        {/* Desktop Menu */}
        <div className="flex-1 h-full">
          <DesktopHeader
            pathname={pathname}
            scrolled={scrolled}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            navItems={navItems_local}
          />
        </div>

      <div className="flex lg:hidden gap-2 sm:gap-4 flex-row justify-center items-center ">
        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-lg sm:text-xl md:text-3xl text-gray-800 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </motion.button>

      </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <MobileHeader
        menuOpen={menuOpen}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
        setMenuOpen={setMenuOpen}
        navItems={navItems_local}
      />

    </header>
  );
}
