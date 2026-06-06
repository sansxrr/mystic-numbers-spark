import {
  UserPlus, Calculator, Brain, FileText,
  Star, Heart, Compass, Crown, Gem, Coins,
  Briefcase, TrendingUp, Trophy, Wallet, Target, Sprout,
  Sun, Palette, Calendar, MapPin, CalendarDays, Diamond,
  Sparkles, Lightbulb, MessageSquare, Smile, Flame, Users,
  ChevronDown, Send, Download, Share2, Quote,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ---------- Reusable section header ----------
function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4">
        <Sparkles className="h-3.5 w-3.5 text-gold" /> {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

// ---------- How it works ----------
export function HowItWorks() {
  const steps = [
    { icon: UserPlus, title: "Enter Your Details", desc: "Share your name and date of birth securely." },
    { icon: Calculator, title: "Numerology Calculation", desc: "Ancient Pythagorean algorithms decode your numbers." },
    { icon: Brain, title: "AI Analysis", desc: "Our AI interprets the patterns into clear insights." },
    { icon: FileText, title: "Receive Your Report", desc: "Beautifully designed, instantly downloadable." },
  ];
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="How it works" title={<>From birth date to <span className="text-gradient-violet">cosmic clarity</span></>} subtitle="Four simple steps. Less than a minute." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="glass-strong rounded-2xl p-6 h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet to-violet-soft flex items-center justify-center shadow-glow">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-3xl font-semibold text-gold/30">0{i + 1}</span>
                </div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Core Numbers ----------
export function CoreNumbers() {
  const nums = [
    { icon: Compass, name: "Life Path Number", value: 7, desc: "Your spiritual journey & life mission." },
    { icon: Star, name: "Destiny Number", value: 3, desc: "What you're meant to achieve." },
    { icon: Heart, name: "Soul Urge Number", value: 9, desc: "Your inner desires & motivations." },
    { icon: Crown, name: "Personality Number", value: 6, desc: "How others perceive you." },
    { icon: Gem, name: "Birthday Number", value: 14, desc: "Your natural-born talents." },
    { icon: Sparkles, name: "Maturity Number", value: 1, desc: "Who you become after 35." },
  ];
  return (
    <section id="numbers" className="py-20 sm:py-28 relative bg-cosmic">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Core numbers" title={<>Your six <span className="text-gradient-gold">essential</span> numbers</>} subtitle="Each number reveals a unique facet of your soul blueprint." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {nums.map((n, i) => (
            <div key={i} className="glass-strong rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-xl glass flex items-center justify-center">
                  <n.icon className="h-5 w-5 text-violet-soft" />
                </div>
                <div className="text-5xl font-semibold text-gradient-gold leading-none">{n.value}</div>
              </div>
              <h3 className="font-semibold">{n.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Lucky Insights ----------
export function LuckyInsights() {
  const luck = [
    { icon: Star, label: "Lucky Number", value: "7, 16, 25" },
    { icon: Palette, label: "Lucky Color", value: "Royal Violet" },
    { icon: Sun, label: "Lucky Day", value: "Thursday" },
    { icon: Calendar, label: "Lucky Date", value: "7, 16, 25" },
    { icon: CalendarDays, label: "Lucky Month", value: "October" },
    { icon: Compass, label: "Lucky Direction", value: "North-East" },
    { icon: Diamond, label: "Lucky Gemstone", value: "Amethyst" },
    { icon: Coins, label: "Lucky Metal", value: "Silver" },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Lucky insights" title={<>Align with your <span className="text-gradient-violet">fortune</span></>} subtitle="The colors, days, and elements that amplify your energy." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {luck.map((l, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center hover:bg-surface-2/60 transition group">
              <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-violet/30 to-gold/20 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                <l.icon className="h-5 w-5 text-gold" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.label}</div>
              <div className="mt-1 font-semibold">{l.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Personality ----------
export function Personality() {
  const traits = [
    { icon: Trophy, title: "Strengths", items: ["Intuitive", "Analytical", "Independent", "Visionary"] },
    { icon: Flame, title: "Weaknesses", items: ["Overthinking", "Reserved", "Impatient", "Self-critical"] },
    { icon: Lightbulb, title: "Hidden Talents", items: ["Healing energy", "Pattern recognition", "Writing"] },
    { icon: MessageSquare, title: "Communication", items: ["Thoughtful", "Direct", "Eloquent"] },
    { icon: Smile, title: "Emotional Traits", items: ["Deeply empathic", "Slow to anger", "Loyal"] },
    { icon: Crown, title: "Leadership Style", items: ["Mentor-driven", "Calm under pressure", "Strategic"] },
  ];
  return (
    <section className="py-20 sm:py-28 bg-cosmic">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Personality analysis" title={<>The <span className="text-gradient-gold">real you</span>, decoded</>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {traits.map((t, i) => (
            <div key={i} className="glass-strong rounded-2xl p-6 hover:-translate-y-1 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet to-violet-soft flex items-center justify-center">
                  <t.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold">{t.title}</h3>
              </div>
              <ul className="space-y-2">
                {t.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Career ----------
export function Career() {
  const cards = [
    { icon: Briefcase, title: "Career Recommendations", value: "Tech, Research, Design, Writing" },
    { icon: TrendingUp, title: "Business Potential", value: "High — favors solo ventures" },
    { icon: Crown, title: "Leadership Score", value: "84/100" },
    { icon: Wallet, title: "Wealth Potential", value: "Strong long-term builder" },
    { icon: Target, title: "Financial Opportunities", value: "2026 brings a major breakthrough" },
    { icon: Sprout, title: "Growth Areas", value: "Delegation & risk tolerance" },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Career & money" title={<>Your <span className="text-gradient-violet">prosperity</span> blueprint</>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={i} className="glass-strong rounded-2xl p-6 hover:shadow-glow transition">
              <div className="h-10 w-10 rounded-xl glass flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">{c.title}</h3>
              <p className="mt-2 font-semibold text-lg">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Compatibility ----------
export function Compatibility() {
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const onCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setScore(87);
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="compatibility" className="py-20 sm:py-28 bg-cosmic">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Love & compatibility" title={<>Is it written in <span className="text-gradient-gold">the stars?</span></>} subtitle="See how your numbers align with someone special." />
        <div className="glass-strong rounded-3xl p-6 sm:p-10 shadow-glow">
          <form onSubmit={onCheck} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-sm font-semibold text-gold">Person A</div>
              <div>
                <Label className="mb-2 block">Name</Label>
                <Input placeholder="e.g. Alex" className="h-11 bg-input border-border" />
              </div>
              <div>
                <Label className="mb-2 block">Date of Birth</Label>
                <Input type="date" className="h-11 bg-input border-border" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-sm font-semibold text-violet-soft">Person B</div>
              <div>
                <Label className="mb-2 block">Name</Label>
                <Input placeholder="e.g. Jamie" className="h-11 bg-input border-border" />
              </div>
              <div>
                <Label className="mb-2 block">Date of Birth</Label>
                <Input type="date" className="h-11 bg-input border-border" />
              </div>
            </div>
            <Button type="submit" disabled={loading} className="md:col-span-2 h-12 bg-gradient-to-r from-violet to-violet-soft text-white shadow-glow">
              {loading ? "Calculating cosmic alignment…" : "Check Compatibility"}
            </Button>
          </form>

          {score !== null && (
            <div className="mt-8 grid md:grid-cols-3 gap-5 animate-fade-up">
              <div className="md:col-span-1 glass rounded-2xl p-6 text-center">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Compatibility Score</div>
                <div className="text-6xl font-semibold text-gradient-gold mt-2">{score}%</div>
                <div className="mt-2 text-sm text-success">Exceptional match</div>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-3 gap-3">
                <div className="glass rounded-2xl p-4">
                  <div className="text-xs uppercase text-muted-foreground">Strengths</div>
                  <p className="mt-1 text-sm">Deep intellectual connection & shared values.</p>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="text-xs uppercase text-muted-foreground">Challenges</div>
                  <p className="mt-1 text-sm">Differing pace in decision-making.</p>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="text-xs uppercase text-muted-foreground">Analysis</div>
                  <p className="mt-1 text-sm">A union built for long-term growth.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------- Daily insights ----------
export function Daily() {
  const cards = [
    { icon: Star, label: "Today's Lucky Number", value: "16" },
    { icon: Palette, label: "Today's Lucky Color", value: "Indigo" },
    { icon: Sparkles, label: "Today's Energy", value: "High & Creative" },
    { icon: Lightbulb, label: "Today's Advice", value: "Trust your intuition" },
    { icon: Sun, label: "Best Time Today", value: "2 PM – 5 PM" },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Daily insights" title={<>Your <span className="text-gradient-violet">cosmic forecast</span> for today</>} />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((c, i) => (
            <div key={i} className="glass-strong rounded-2xl p-5 hover:-translate-y-1 transition">
              <c.icon className="h-5 w-5 text-gold mb-3" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="mt-1 font-semibold">{c.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Forecast ----------
export function Forecast() {
  return (
    <section className="py-20 sm:py-28 bg-cosmic">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Monthly & yearly forecast" title={<>What the <span className="text-gradient-gold">future</span> holds</>} />
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="glass-strong rounded-2xl p-6 lg:row-span-2">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Personal Year Number</div>
            <div className="text-7xl font-semibold text-gradient-gold mt-3">5</div>
            <p className="mt-3 text-sm text-muted-foreground">A year of bold change, travel, and transformative opportunities.</p>
            <div className="mt-6 space-y-3">
              <div className="text-sm font-semibold">Opportunity Periods</div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex justify-between"><span>March 12 – April 8</span><span className="text-gold">Career</span></li>
                <li className="flex justify-between"><span>July 1 – August 19</span><span className="text-gold">Love</span></li>
                <li className="flex justify-between"><span>October 5 – November 22</span><span className="text-gold">Wealth</span></li>
              </ul>
            </div>
          </div>
          <div className="glass-strong rounded-2xl p-6 lg:col-span-2">
            <h3 className="font-semibold">Monthly Forecast — November</h3>
            <p className="mt-2 text-sm text-muted-foreground">A pivotal month for closing chapters. Expect financial clarity and a meaningful introduction in week three.</p>
          </div>
          <div className="glass-strong rounded-2xl p-6 lg:col-span-2">
            <h3 className="font-semibold">Yearly Outlook</h3>
            <p className="mt-2 text-sm text-muted-foreground">Your personal year 5 favors movement. Major opportunities cluster around Mercury-ruled months — embrace them rather than overplanning.</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              {["Mar 22", "Jul 14", "Nov 09"].map((d) => (
                <div key={d} className="glass rounded-xl p-3 text-center">
                  <div className="text-xs uppercase text-muted-foreground">Key Date</div>
                  <div className="font-semibold mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- AI Assistant ----------
export function Assistant() {
  const [input, setInput] = useState("");
  const suggestions = [
    "Which career suits me?",
    "Is my business name lucky?",
    "What does my life path number mean?",
    "Which date is lucky for launching a business?",
  ];
  return (
    <section id="assistant" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="AI numerology assistant" title={<>Ask the <span className="text-gradient-violet">numbers</span> anything</>} subtitle="Powered by ancient wisdom + modern AI." />
        <div className="glass-strong rounded-3xl p-6 sm:p-8 shadow-glow">
          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet to-violet-soft flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="glass rounded-2xl rounded-tl-sm p-4 text-sm max-w-md">
                Hi! I'm your numerology AI. Ask me about your life path, lucky dates, or compatibility.
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-gradient-to-br from-violet to-violet-soft rounded-2xl rounded-tr-sm p-4 text-sm max-w-md text-white">
                What does my life path number 7 mean?
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet to-violet-soft flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="glass rounded-2xl rounded-tl-sm p-4 text-sm max-w-md">
                Life path 7 marks you as the seeker — deeply analytical, spiritual, and drawn to truth. Your gift is uncovering what others miss.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-xs glass rounded-full px-3 py-1.5 hover:bg-surface-2/60 transition"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your question…"
              className="h-12 bg-input border-border"
            />
            <Button className="h-12 px-5 bg-gradient-to-r from-violet to-violet-soft text-white">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Sample Report ----------
export function SampleReport() {
  return (
    <section id="report" className="py-20 sm:py-28 bg-cosmic">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Sample report" title={<>A taste of your <span className="text-gradient-gold">personalized report</span></>} />
        <div className="glass-strong rounded-3xl overflow-hidden shadow-glow">
          <div className="p-6 sm:p-10 border-b border-border flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Numerology Report</div>
              <h3 className="text-2xl font-semibold mt-1">Sarah M. — Born March 14, 1992</h3>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="glass border-border"><Download className="h-4 w-4 mr-2" /> Download</Button>
              <Button className="bg-gradient-to-r from-violet to-violet-soft text-white"><Share2 className="h-4 w-4 mr-2" /> Share</Button>
            </div>
          </div>
          <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-6">
            {[
              { label: "Core Numbers", value: "Life Path 7 · Destiny 3 · Soul 9" },
              { label: "Lucky Insights", value: "Violet · Thursday · Amethyst" },
              { label: "Personality", value: "Intuitive visionary with quiet authority" },
              { label: "Career", value: "Research, design, and entrepreneurship" },
              { label: "Relationships", value: "Best matched with Life Paths 5 & 2" },
              { label: "Yearly Forecast", value: "A pivotal year of bold change" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-wider text-gold">{s.label}</div>
                <p className="mt-2 text-sm">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
export function Testimonials() {
  const items = [
    { name: "Priya R.", role: "Entrepreneur", text: "The career section was eerily accurate. I made my biggest pivot based on it — and it paid off." },
    { name: "Daniel K.", role: "Designer", text: "Beautifully crafted and surprisingly deep. It feels less like an app, more like a personal mentor." },
    { name: "Aisha L.", role: "Writer", text: "I've tried five numerology apps. This is the only one that actually felt premium." },
    { name: "Marco S.", role: "Consultant", text: "The compatibility report saved me a lot of confusion. Worth every minute." },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Loved worldwide" title={<>What our <span className="text-gradient-violet">community</span> says</>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((t, i) => (
            <div key={i} className="glass-strong rounded-2xl p-6 hover:-translate-y-1 transition">
              <Quote className="h-6 w-6 text-gold mb-3" />
              <p className="text-sm text-muted-foreground">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet to-violet-soft flex items-center justify-center text-sm font-semibold">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
export function FAQ() {
  const faqs = [
    { q: "Is the report really free?", a: "Yes — your core numerology report is 100% free. No card required." },
    { q: "How accurate is the calculation?", a: "We use the classical Pythagorean system, validated across 120,000+ readings." },
    { q: "Is my data private?", a: "Always. Your information is encrypted in transit and at rest, and never sold." },
    { q: "Can I download or share my report?", a: "Yes — every report can be downloaded as PDF or shared via link." },
    { q: "Do you support compatibility readings?", a: "Yes. Try the compatibility checker above to see how two charts align." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28 bg-cosmic">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="FAQ" title={<>Questions, <span className="text-gradient-gold">answered</span></>} />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass-strong rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-up">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Final CTA ----------
export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative glass-strong rounded-3xl p-10 sm:p-16 text-center shadow-glow overflow-hidden">
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <Users className="h-8 w-8 text-gold mx-auto mb-4" />
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Unlock your personalized <span className="text-gradient-gold">numerology report</span> today
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join 120,000+ seekers discovering their cosmic blueprint. Free, instant, and beautifully designed.</p>
            <Button asChild size="lg" className="mt-8 h-12 px-8 bg-gradient-to-r from-violet to-violet-soft text-white shadow-glow">
              <a href="#form">Generate My Report</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-gold" />
            <span className="font-semibold">Mystic <span className="text-gradient-gold">Numbers</span></span>
          </div>
          <p className="text-sm text-muted-foreground">Ancient wisdom, modern clarity. Personalized numerology for the curious soul.</p>
        </div>
        {[
          { title: "Product", links: ["Core Numbers", "Compatibility", "AI Assistant", "Sample Report"] },
          { title: "Company", links: ["About", "Contact", "Blog", "Careers"] },
          { title: "Legal", links: ["Privacy Policy", "Terms", "Disclaimer", "Cookies"] },
        ].map((col) => (
          <div key={col.title}>
            <div className="text-sm font-semibold mb-3">{col.title}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-foreground transition">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t border-border pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Mystic Numbers. All rights reserved.</p>
        <p>Made with ✨ for cosmic seekers worldwide.</p>
      </div>
    </footer>
  );
}

// ---------- Sticky CTA (mobile) ----------
export function StickyCTA() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 lg:hidden">
      <a
        href="#form"
        className="block text-center font-semibold py-3.5 rounded-2xl bg-gradient-to-r from-violet to-violet-soft text-white shadow-glow"
      >
        Generate My Free Report ✨
      </a>
    </div>
  );
}

// ---------- Progress indicator ----------
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useState(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
      <div className="h-full bg-gradient-to-r from-violet via-violet-soft to-gold transition-[width]" style={{ width: `${p}%` }} />
    </div>
  );
}
