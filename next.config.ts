import type { NextConfig } from "next";
const isDev = process.env.NEXT_PUBLIC_NODE_ENV !== "production";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;
const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isDev ? BASE_PATH : "",
  assetPrefix: isDev ? ASSET_PREFIX : "",
};

export default nextConfig;

