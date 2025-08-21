import { useEffect, useRef, useState } from "react";
import { imageList } from "@/utils/imageUtils";

interface ImagePreloaderState {
  images: Record<string, string>;
  isLoaded: boolean;
}

export const useImagePreloader = (): ImagePreloaderState => {
  const images = useRef<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const preloadLinks = new Set<string>();

    const loadImages = async () => {
      const promises = imageList.map(({ name, key }) => {
        return new Promise<void>((resolve) => {
          if (images.current[name]) {
            resolve();
            return;
          }

          const relativeSrc = `/images/${key}`;

          // Añade un preload link al <head> (si no se añadió ya)
          if (!preloadLinks.has(relativeSrc)) {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = relativeSrc;
            document.head.appendChild(link);
            preloadLinks.add(relativeSrc);
          }

          const img = new Image();
          img.src = relativeSrc;

          img.onload = () => {
            images.current[name] = relativeSrc;
            resolve();
          };

          img.onerror = () => {
            console.error(`Error al cargar la imagen: ${img.src}`);
            resolve();
          };
        });
      });

      await Promise.all(promises);
      if (isMounted) setIsLoaded(true);
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  return { images: images.current, isLoaded };
};
