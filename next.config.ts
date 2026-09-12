import type { NextConfig } from "next";
import withSerwist from "@serwist/next";

const nextConfig: NextConfig = {
  // Génère un dossier .next/standalone autonome (requis pour Docker)
  output: "standalone",
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
};

const withPwa = withSerwist({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

export default process.env.NODE_ENV === "development" ? nextConfig : withPwa(nextConfig);
