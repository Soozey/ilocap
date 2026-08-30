import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander une étude et un devis | ILOCAP",
  description: "Présentez votre projet digital à ILOCAP et recevez une première orientation pour le cadrage, la conception et le déploiement.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
