import type { NextConfig } from "next";
const isDev = process.env.NEXT_PUBLIC_ENV === 'dev';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
