import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/courses/vocal-performance", destination: "/courses/singing-performance", permanent: true },
    ];
  },
};

export default nextConfig;
