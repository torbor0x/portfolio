import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
        pathname: "/get/**",
      },
    ],
  },
};

export default nextConfig;
