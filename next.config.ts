import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 480, 768, 1024, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768, 896, 1024, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  }
};

export default nextConfig;
