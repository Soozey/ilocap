import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Génère un dossier .next/standalone autonome (requis pour Docker)
  output: "standalone",
  outputFileTracingIncludes: {
    "/": ["./public/index.html"],
    "/demo-crm": ["./site/demo-crm.html"],
  },
  async headers() {
    return [{ source: "/sw.js", headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }] }];
  },
  async redirects() {
    return [
      { source: "/services", destination: "/#expertises", permanent: true },
      { source: "/solutions", destination: "/#solutions", permanent: true },
      { source: "/solutions/siirh", destination: "/#solution-siirh", permanent: true },
      { source: "/solutions/trackfuel-360", destination: "/#solution-trackfuel", permanent: true },
      { source: "/solutions/lamina", destination: "/#solution-reservation", permanent: true },
      { source: "/solutions/patrimonia", destination: "/#solution-patrimonia", permanent: true },
      { source: "/solutions/primimport-store", destination: "/#solution-primimport", permanent: true },
      { source: "/solutions/arozo", destination: "/#solution-lawmate", permanent: true },
      { source: "/solutions/:slug", destination: "/#solutions", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/diagnostic", destination: "/#orientation", permanent: true },
      { source: "/realisations", destination: "/#references", permanent: true },
      { source: "/methodologie", destination: "/#methode", permanent: true },
      { source: "/insights/:path*", destination: "/#ressources", permanent: true },
      { source: "/institutions", destination: "/accompagnement.html", permanent: true },
      { source: "/pme", destination: "/accompagnement.html", permanent: true },
      { source: "/politique-de-confidentialite", destination: "/politique-de-confidentialite.html", permanent: false },
    ];
  },
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

export default nextConfig;
