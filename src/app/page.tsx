import Hero from "@/components/landing/Hero";
import Methodologie from "@/components/landing/Methodologie";
import Expertises from "@/components/landing/Expertises";
import References from "@/components/landing/References";
import CTAFinal from "@/components/landing/CTAFinal";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import FloatingCTA from "@/components/shared/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F3F1EC]">
        <Hero />
        <Expertises />
        <References />
        <Methodologie />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </>
  );
}
