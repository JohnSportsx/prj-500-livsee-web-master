import type { NextConfig } from "next";

const isDev = process.env.NEXT_PUBLIC_NODE_ENV === "dev";



const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || '/livsee',
  assetPrefix: isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || '/livsee',
};

export default nextConfig;

