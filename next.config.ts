import type { NextConfig } from "next";

const isDev = process.env.NEXT_PUBLIC_NODE_ENV === "dev";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prj-500-livsee-web-master.vercel.app",
        port: "",
        pathname: "/images/**", // Adjust pathname if necessary, but /images/** is common
      },
    ],
  },
  basePath: isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || "/livsee",
  assetPrefix: isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || "/livsee",
};

export default nextConfig;
