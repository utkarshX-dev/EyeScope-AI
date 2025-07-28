import Features from "./Features";
import HeroSection from "./Hero";
import SupportIntroPage from "./AISupportPage";
import ImageMarquee from "./ImageMarquee";

export default function LandingPage() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-background to-muted/30 px-4 text-foreground pt-[72px] pb-16 sm:pt-20 sm:pb-20 flex flex-col items-center">
        <HeroSection />
      </section>
      <section className="w-full bg-gradient-to-b from-muted/30 to-background text-foreground py-10 px-4 sm:px-8">
        <ImageMarquee />
      </section>
      <section className="w-full bg-gradient-to-b from-muted/30 to-background text-foreground py-16 px-4 sm:px-8">
        <Features />
      </section>

      <section className="w-full bg-gradient-to-b from-background to-muted/30 text-foreground pt-8 pb-10 px-4 sm:px-8">
        <SupportIntroPage />
      </section>
    </>
  );
}
