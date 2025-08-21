'use client';

import Image from 'next/image';

type CustomImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  isCritical?: boolean;
};

const CustomImage = ({
  src,
  alt,
  width = 250,
  height = 150,
  className,
  isCritical = false,
}: CustomImageProps) => {

  return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className ?? ''} opacity-100 transition-opacity duration-300`}
        loading={isCritical ? 'eager' : 'lazy'}
        priority={isCritical}
      />
  );
};

export default CustomImage;

