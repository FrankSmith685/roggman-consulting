'use client';

import { BackgroundSliderProps } from '@/interface/backgroundSidebarInterface';
import { useEffect, useState, useRef } from 'react';
import CustomImage from '@/components/ui/CustomImage';
import { usePathname } from 'next/navigation';

export default function BackgroundSlider({ slides }: BackgroundSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  // Reinicia el slider si cambia la ruta
  useEffect(() => {
    if (previousPath.current !== pathname) {
      setCurrentIndex(0);
      previousPath.current = pathname;
    }
  }, [pathname]);

  // Control del intervalo de cambio de slide
  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      if (isMounted) {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }
    }, 3000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <CustomImage
          src={currentSlide.name}
          alt={currentSlide.text || 'slide image'}
          width={1500}
          height={1000}
          isCritical
          className="!w-full !h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Texto o imagen decorativa */}
      <div className="relative z-20 flex items-end justify-end h-full px-4 pb-12 pr-12 text-right">
        {currentSlide.nameImage ? (
          <CustomImage
            src={currentSlide.nameImage}
            alt="icono decorativo"
            width={200}
            height={200}
            isCritical
            className="object-contain"
          />
        ) : (
          <div className="relative z-20 flex items-end justify-end h-full px-4 pb-12 pr-12 text-right">
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              {currentSlide?.text || ''}
            </h2>
          </div>
        )}
      </div>

      {/* Puntitos indicadores */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
