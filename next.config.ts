import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Utiliser notre configuration flat config personnalisée
    dirs: ["src"],
    // Désactiver temporairement ESLint pendant le build si nécessaire
    // ignoreDuringBuilds: false,
  },
};

export default nextConfig;
