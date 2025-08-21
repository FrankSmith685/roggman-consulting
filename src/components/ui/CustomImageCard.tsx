'use client';

import { useRef } from 'react';
import { useImagePreloader } from '@/hooks/useImageHooks/useImagePreloader';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExpand } from 'react-icons/fa';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    } as const,
  }),
};

interface DesarrolloCardProps {
  index: number;
  image: string;
  alt: string;
}

export default function CustomImageCard({
  index,
  image,
  alt,
}: DesarrolloCardProps) {
  const { images } = useImagePreloader();
  const imageRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && imageRef.current) {
      imageRef.current.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable full-screen mode:', err);
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  return (
    <motion.div
      className="bg-white border border-gray-200 p-0 rounded-lg shadow hover:shadow-md transition-all duration-300 flex justify-center items-center"
      custom={index}
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div
        ref={imageRef}
        className="relative w-full max-w-[800px] h-[400px] cursor-pointer group"
        onClick={toggleFullscreen}
      >
        <Image
          src={images[image]}
          alt={alt}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />

        {/* Icono de fullscreen */}
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition">
          <FaExpand size={18} />
        </div>
      </div>
    </motion.div>
  );
}
