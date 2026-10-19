import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilocap.com"),
  title: "ILOCAP | Sites web, IA & externalisation à Madagascar",
  icons: { icon: [{ url: "/ilocap-icon.png?v=20261019", type: "image/png", sizes: "64x64" }], apple: [{ url: "/apple-touch-icon.png?v=20261019", sizes: "180x180" }] },
  description: "Sites, applications métier, agents IA et assistance opérationnelle avec ILOCAP.",
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#123e3e" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body style={{ fontFamily: 'Inter, "Segoe UI", Arial, sans-serif' }}>{children}</body></html>;
}
