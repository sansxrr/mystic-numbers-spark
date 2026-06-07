import { useState } from "react";
import { Loader2, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function NumerologyForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", dob: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.dob) {
      toast.error("Please fill all required fields");
      return;
    }
    setLoading(true);

    try {
      await fetch("https://connect.pabbly.com/webhook-listener/webhook/IjU3NjMwNTZkMDYzNDA0MzE1MjY1NTUzYyI_3D_pc/IjU3NjcwNTY5MDYzNjA0MzQ1MjZiNTUzNDUxM2Ei_pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          dob: form.dob,
          source: "AstroFATE Numerology Report Form",
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Webhook submission failed:", error);
    }

    setLoading(false);
    setDone(true);
    toast.success("Your numerology report is ready!");
  };

  return (
    <section id="form" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Free instant report
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Get your <span className="text-gradient-violet">personalized</span> numerology report
          </h2>
          <p className="mt-3 text-muted-foreground">Takes 30 seconds. No credit card required.</p>
        </div>

        <div className="glass-strong rounded-3xl p-6 sm:p-10 shadow-glow">
          {!done ? (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <Label htmlFor="name" className="mb-2 block">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12 bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 555 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12 bg-input border-border"
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-12 bg-input border-border"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="dob" className="mb-2 block">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="date"
                  value={form.dob}
                  onChange={(e) => setForm({ ...form, dob: e.target.value })}
                  className="h-12 bg-input border-border"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="sm:col-span-2 h-12 bg-gradient-to-r from-violet to-violet-soft text-white shadow-glow hover:opacity-90"
              >
                {loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Calculating your numbers…</>
                ) : (
                  <>Generate My Free Report</>
                )}
              </Button>
              <p className="sm:col-span-2 text-xs text-center text-muted-foreground">
                🔒 Your information is encrypted and never shared.
              </p>
            </form>
          ) : (
            <div className="text-center py-10 animate-fade-up">
              <div className="mx-auto h-16 w-16 rounded-full bg-success/20 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-semibold">Your report is ready, {form.name.split(" ")[0]}!</h3>
              <p className="mt-2 text-muted-foreground">Scroll down to explore your personalized numerology insights.</p>
              <Button
                onClick={() => document.getElementById("report")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-6 bg-gradient-to-r from-violet to-violet-soft text-white"
              >
                View My Report
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
