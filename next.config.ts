import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  onDemandEntries: {
    // mantén los cambios activos por más tiempo (para ediciones rápidas)
    maxInactiveAge: 1000 * 60 * 60, // 1 hora
    pagesBufferLength: 5,
  },
  images: {
    domains: ["mappidevbucket.s3.amazonaws.com"],
  },
};

export default nextConfig;
