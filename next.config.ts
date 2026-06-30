import type { NextConfig } from "next";

const repositoryName = "mayza-portfolio";
const isProduction = process.env.NODE_ENV === "production";

const basePath = isProduction
  ? `/${repositoryName}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;