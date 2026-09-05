import Hero from "@/components/landing/Hero";
import NewsStrip from "@/components/landing/NewsStrip";
import Expertises from "@/components/landing/Expertises";
import Difference from "@/components/landing/Difference";
import References from "@/components/landing/References";
import CTAFinal from "@/components/landing/CTAFinal";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AnimatedSection from "@/components/landing/AnimatedSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F3F1EC]">
        <Hero />
        <NewsStrip />
        <AnimatedSection>
          <Expertises />
        </AnimatedSection>
        <AnimatedSection>
          <Difference />
        </AnimatedSection>
        <AnimatedSection>
          <References />
        </AnimatedSection>
        <AnimatedSection>
          <CTAFinal />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
