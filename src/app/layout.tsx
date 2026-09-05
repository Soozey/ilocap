import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Sora, Manrope } from "next/font/google";
import Script from "next/script";
import AnalyticsTracker from "@/components/shared/AnalyticsTracker";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const isDev = process.env.NODE_ENV === "development";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ilocap.com"),
  title: {
    default: "ILOCAP | Transformation digitale, IA et plateformes métier",
    template: "%s",
  },
  description: "ILOCAP conseille, conçoit et déploie des plateformes métier, des solutions d'intelligence artificielle, d'automatisation et de paiement.",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico?v=ilocap-20260904", sizes: "any" },
      { url: "/icon.png?v=ilocap-20260904", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=ilocap-20260904",
    apple: "/apple-touch-icon.png?v=ilocap-20260904",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ILOCAP",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ilocap.com",
    siteName: "ILOCAP",
    title: "ILOCAP | Transformation digitale, IA et plateformes métier",
    description: "Des solutions digitales concrètes pour les entreprises, les institutions, les PME et les entrepreneurs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ILOCAP | Transformation digitale",
    description: "Des solutions digitales concrètes, de la stratégie au déploiement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#073642",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6C9DTT0RX9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          });
          
          gtag('config', 'G-6C9DTT0RX9', {
            page_location: window.location.href,
            page_title: document.title,
            send_page_view: false,
            cookie_flags: 'SameSite=None;Secure',
            cookie_expires: 28 * 24 * 60 * 60,
            cookie_update: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            restricted_data_processing: true
          });
        `}
      </Script>
      
      <body className={`${sora.variable} ${manrope.variable} font-[family-name:var(--font-manrope)] antialiased bg-[#F3F1EC]`}>
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        {children}
        {isDev && (
          <Script id="disable-service-worker-dev" strategy="afterInteractive">
            {`
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations()
                  .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
                  .then(() => {
                    if ('caches' in window) {
                      return caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key))));
                    }
                  })
                  .catch(() => {});
              }
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
