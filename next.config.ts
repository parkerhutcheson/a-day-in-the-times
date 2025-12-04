import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'developer.nytimes.com',
      },
    ],
  },
  // hostname: 'https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354',
};

export default nextConfig;
