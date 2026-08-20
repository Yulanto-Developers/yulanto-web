// import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ], // <-- This closes the remotePatterns array
  }, // <-- This closes the images object (YOU WERE MISSING THIS)
  
};

export default (nextConfig);