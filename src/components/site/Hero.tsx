import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarField } from "./StarField";
import heroImage from "@/assets/hero-cosmic.jpg";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-cosmic">
      <StarField count={80} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Trusted by 120,000+ seekers worldwide
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Discover the{" "}
            <span className="text-gradient-gold">hidden power</span>{" "}
            of your numbers
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Get personalized numerology insights, lucky numbers, compatibility reports,
            career guidance, and future forecasts — powered by ancient wisdom and modern AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-violet to-violet-soft text-white shadow-glow hover:opacity-90 h-12 px-6"
            >
              <a href="#form">
                Generate My Report <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass border-border h-12 px-6 hover:bg-surface-2/60"
            >
              <a href="#report">
                <PlayCircle className="mr-2 h-4 w-4" /> View Demo
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-semibold text-foreground">98%</div>
              <div>Accuracy rate</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-semibold text-foreground">120K+</div>
              <div>Reports generated</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-semibold text-foreground">4.9★</div>
              <div>User rating</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-10 bg-violet/30 blur-3xl rounded-full" />
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-strong shadow-glow">
              <img
                src={heroImage}
                alt="Cosmic numerology wheel"
                width={1024}
                height={1024}
                className="w-full h-full object-cover animate-float-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-12 glass-strong rounded-2xl p-3 shadow-glow animate-float-slow hidden sm:block">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Life Path</div>
              <div className="text-2xl font-semibold text-gradient-gold">7</div>
            </div>
            <div className="absolute -right-4 bottom-16 glass-strong rounded-2xl p-3 shadow-glow animate-float-slow hidden sm:block" style={{ animationDelay: "1s" }}>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Lucky Day</div>
              <div className="text-base font-semibold">Thursday</div>
            </div>
            <div className="absolute left-6 -bottom-4 glass-strong rounded-2xl p-3 shadow-glow animate-float-slow hidden sm:block" style={{ animationDelay: "2s" }}>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Compatibility</div>
              <div className="text-base font-semibold text-success">92% Match</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
