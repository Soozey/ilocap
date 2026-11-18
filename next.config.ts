import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://client.crisp.chat https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://client.crisp.chat",
  "font-src 'self' https://client.crisp.chat",
  "img-src 'self' data: blob: https://client.crisp.chat https://image.crisp.chat https://storage.crisp.chat https://www.googletagmanager.com https://*.google-analytics.com",
  "connect-src 'self' https://client.crisp.chat https://storage.crisp.chat wss://client.relay.crisp.chat wss://client.relay.rescue.crisp.chat https://www.googletagmanager.com https://*.google-analytics.com https://*.google.com",
  "frame-src https://assets.crisp.chat https://*.crisp.help",
  "worker-src 'self' blob:",
].join("; ");

const nextConfig: NextConfig = {
  // Génère un dossier .next/standalone autonome (requis pour Docker)
  output: "standalone",
  outputFileTracingIncludes: {
    "/": ["./public/index.html"],
    "/demo-crm": ["./site/demo-crm.html"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicy },
          { key: "Strict-Transport-Security", value: "max-age=300" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      { source: "/sw.js", headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }] },
    ];
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
  },
};

export default nextConfig;
