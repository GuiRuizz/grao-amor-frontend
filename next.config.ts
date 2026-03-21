import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3333', // porta do seu backend
        pathname: '/v1/uploads/**', // permite todas as imagens da pasta uploads
      },
    ],
  },
};

export default nextConfig;
