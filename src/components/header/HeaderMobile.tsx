'use client';

import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { NavItem } from "@/interface/navItem";
import { usePageTransition } from "@/hooks/useTransitionHooks/pageTransitionProvider";

interface MobileHeaderProps {
  menuOpen: boolean;
  expandedIndex: number | null;
  setExpandedIndex: (index: number | null) => void;
  setMenuOpen: (open: boolean) => void;
  navItems: NavItem[];
}

export default function MobileHeader({
  menuOpen,
  expandedIndex,
  setExpandedIndex,
  setMenuOpen,
  navItems,
}: MobileHeaderProps) {
  const { navigate } = usePageTransition();
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed top-[140px] left-0 w-full h-[calc(100vh-140px)] lg:hidden bg-gradient-to-br from-white/90 via-white/95 to-blue-50/90 backdrop-blur-lg shadow-xl overflow-y-auto px-4 py-6 border-t border-gray-200 space-y-4 z-40"
        >
          {navItems.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={item.href}
                className="border border-blue-100 rounded-2xl p-4 bg-white/90 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Título del menú (clickeable) */}
                {item.subItems.length > 0 ? (
                  <div
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : idx)
                    }
                    className="cursor-pointer w-full flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-center gap-3 font-medium text-[15px] text-blue-700 hover:text-blue-800">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        {item.label}
                      </div>

                      <motion.span
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-500 text-lg"
                      >
                        {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
                      </motion.span>
                    </div>

                    {item.description && (
                      <p className="text-sm text-gray-600 mt-1 pl-9 leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      navigate(item.href);
                      setMenuOpen(false);
                    }}
                    className="w-full flex flex-col gap-2 cursor-pointer hover:cursor-pointer"
                  >
                    <div className="flex justify-between items-center gap-3 font-medium text-[15px] text-blue-700 hover:text-blue-800">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        {item.label}
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-sm text-gray-600 mt-1 pl-9 leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}


                {/* Subitems */}
                <AnimatePresence>
                  {isExpanded && item.subItems.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="mt-3 flex flex-col gap-2 pl-9"
                    >
                      {item.subItems.map((sub) => (
                        <div
                          key={sub.href}
                          onClick={() => {
                            setMenuOpen(false);
                            navigate(sub.href);
                          }}
                          className="flex items-center hover:cursor-pointer gap-2 text-sm text-gray-800 hover:text-blue-600 transition-all duration-200"
                        >
                          <span className="text-lg text-blue-500 group-hover:scale-110 transition-transform">
                            {sub.icon}
                          </span>
                          {sub.label}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
