'use client';

import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "@/interface/navItem";
import { usePageTransition } from "@/hooks/useTransitionHooks/pageTransitionProvider";

interface DesktopHeaderProps {
  pathname: string;
  scrolled: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  navItems: NavItem[];
}

export default function DesktopHeader({
  pathname,
  scrolled,
  hoveredIndex,
  setHoveredIndex,
  navItems,
}: DesktopHeaderProps) {
  const { navigate } = usePageTransition();
  return (
    <nav className="hidden lg:flex items-center gap-0 w-full justify-end h-full">
      {navItems.map((item, idx) => (
        <div
          key={item.href}
          className="relative group !h-full flex justify-center items-center"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            animate={hoveredIndex === idx ? { scale: 1.08, y: -1 } : { scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div
              onClick={()=>navigate(item.subItems[0]?.href)}
              className={`flex items-center hover:cursor-pointer gap-2 text-[15px] font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                pathname.startsWith(item.href) 
                  ? "bg-blue-100 text-blue-700 shadow"
                  : hoveredIndex === idx
                  ? "bg-gray-100 text-blue-600"
                  : scrolled || hoveredIndex !== null || pathname === "/politica-privacidad" || pathname === "/derechos-del-usuario" ||pathname === "/terminos-condiciones" || pathname === "/benutzerrechte" || pathname === "/datenschutzrichtlinie" ||pathname === "/agb" || pathname === "/user-rights" || pathname === "/privacy-policy" ||pathname === "/terms-conditions"
                  ? "text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >

              <motion.span
                animate={hoveredIndex === idx ? { rotate: 5 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
                className="text-lg"
              >
                {item.icon}
              </motion.span>
              {item.label}
            </div>
          </motion.div>

          <AnimatePresence>
            {hoveredIndex === idx && (item.subItems.length > 0 || item.description) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="fixed top-[140px] left-0 w-screen z-50 bg-gradient-to-br from-white/90 via-white/95 to-blue-50/90 backdrop-blur-lg border-t border-blue-100 shadow-2xl"
              >
                <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col justify-center gap-3 pr-4">
                    <h4 className="text-blue-700 text-xl font-bold uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.subItems.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                      {item.subItems.map((sub) => (
                        <div
                          key={sub.href}
                          onClick={()=>navigate(sub.href)}
                          rel="noopener noreferrer"
                          className="group hover:cursor-pointer flex items-start gap-4 p-5 rounded-2xl bg-white/90 hover:bg-blue-50 transition duration-300 shadow-md hover:shadow-xl border border-gray-100"
                        >
                          <div className="text-3xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
                            {sub.icon}
                          </div>
                          <div>
                            <p className="text-gray-900 text-sm font-semibold group-hover:text-blue-600 transition">
                              {sub.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="h-[4px] w-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 opacity-80 rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
