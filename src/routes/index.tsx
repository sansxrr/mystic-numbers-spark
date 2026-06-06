import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { NumerologyForm } from "@/components/site/NumerologyForm";
import {
  HowItWorks, CoreNumbers, LuckyInsights, Personality, Career,
  Compatibility, Daily, Forecast, Assistant, SampleReport,
  Testimonials, FAQ, FinalCTA, Footer, StickyCTA,
} from "@/components/site/Sections";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { ExitIntent } from "@/components/site/ExitIntent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mystic Numbers — Personalized Numerology Reports & Lucky Insights" },
      { name: "description", content: "Discover your life path, lucky numbers, compatibility, and yearly forecast with personalized numerology reports powered by ancient wisdom and modern AI." },
      { property: "og:title", content: "Mystic Numbers — Numerology, Reimagined" },
      { property: "og:description", content: "Personalized numerology reports, compatibility checks, and AI guidance — beautifully designed." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Mystic Numbers",
        description: "Personalized numerology reports, lucky insights, compatibility checks and yearly forecasts.",
        applicationCategory: "LifestyleApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <NumerologyForm />
        <HowItWorks />
        <CoreNumbers />
        <LuckyInsights />
        <Personality />
        <Career />
        <Compatibility />
        <Daily />
        <Forecast />
        <Assistant />
        <SampleReport />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      <ExitIntent />
      <Toaster position="top-center" />
    </div>
  );
}
