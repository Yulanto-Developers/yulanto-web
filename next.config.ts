import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: [
    "http://192.168.29.207:3000",
    "http://10.48.163.143:3000",
  ],
};

export default nextConfig;