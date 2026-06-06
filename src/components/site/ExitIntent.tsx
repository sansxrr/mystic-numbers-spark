import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setOpen(true);
        setShown(true);
      }
    };
    const timer = setTimeout(() => document.addEventListener("mouseleave", handler), 8000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handler);
    };
  }, [shown]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] bg-background/70 backdrop-blur flex items-center justify-center p-4 animate-fade-up">
      <div className="glass-strong rounded-3xl p-8 max-w-md w-full relative shadow-glow">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 h-8 w-8 rounded-full glass flex items-center justify-center"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <Sparkles className="h-8 w-8 text-gold mb-3" />
        <h3 className="text-2xl font-semibold">Wait — your free report is ready</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Don't leave without discovering what the numbers say about you. It takes 30 seconds.
        </p>
        <Button asChild className="mt-5 w-full h-11 bg-gradient-to-r from-violet to-violet-soft text-white" onClick={() => setOpen(false)}>
          <a href="#form">Claim My Free Report</a>
        </Button>
      </div>
    </div>
  );
}
