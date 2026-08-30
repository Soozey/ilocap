import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre méthode de transformation digitale | ILOCAP",
  description: "De la stratégie au déploiement : découvrez la méthode ILOCAP pour cadrer, concevoir, intégrer et faire adopter une solution digitale.",
  alternates: { canonical: "/methodologie" },
};

export default function MethodologieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
