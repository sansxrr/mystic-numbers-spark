import {
  UserPlus, Calculator, Brain, FileText,
  Star, Heart, Compass, Crown, Gem, Coins,
  Briefcase, TrendingUp, Trophy, Wallet, Target, Sprout,
  Sun, Palette, Calendar, MapPin, CalendarDays, Diamond,
  Sparkles, Lightbulb, MessageSquare, Smile, Flame, Users,
  ChevronDown, Send, Download, Share2, Quote,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import logoUrl from "../../assets/logo.png";
import smokingCatImg from "../../assets/smoking_cat.png";
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
  const [personA, setPersonA] = useState({ name: "", dob: "" });
  const [personB, setPersonB] = useState({ name: "", dob: "" });

  const onCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!personA.name || !personA.dob || !personB.name || !personB.dob) {
      return;
    }
    setLoading(true);

    try {
      await fetch("https://connect.pabbly.com/webhook-listener/webhook/IjU3NjMwNTZkMDYzNDA0MzE1MjY1NTUzYyI_3D_pc/IjU3NjcwNTY5MDYzMTA0MzU1MjZkNTUzYzUxMzci_pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personAName: personA.name,
          personADob: personA.dob,
          personBName: personB.name,
          personBDob: personB.dob,
          compatibilityScore: 87,
          source: "AstroFATE Compatibility Form",
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Compatibility webhook submission failed:", error);
    }

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
                <Input 
                  placeholder="e.g. Alex" 
                  value={personA.name}
                  onChange={(e) => setPersonA({ ...personA, name: e.target.value })}
                  required
                  className="h-11 bg-input border-border" 
                />
              </div>
              <div>
                <Label className="mb-2 block">Date of Birth</Label>
                <Input 
                  type="date" 
                  value={personA.dob}
                  onChange={(e) => setPersonA({ ...personA, dob: e.target.value })}
                  required
                  className="h-11 bg-input border-border" 
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-sm font-semibold text-violet-soft">Person B</div>
              <div>
                <Label className="mb-2 block">Name</Label>
                <Input 
                  placeholder="e.g. Jamie" 
                  value={personB.name}
                  onChange={(e) => setPersonB({ ...personB, name: e.target.value })}
                  required
                  className="h-11 bg-input border-border" 
                />
              </div>
              <div>
                <Label className="mb-2 block">Date of Birth</Label>
                <Input 
                  type="date" 
                  value={personB.dob}
                  onChange={(e) => setPersonB({ ...personB, dob: e.target.value })}
                  required
                  className="h-11 bg-input border-border" 
                />
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

// ---------- AI Assistant Helper ----------
function getBotResponse(query: string): string {
  const q = query.toLowerCase();
  
  if (q.includes("ceo") || q.includes("founder") || q.includes("chain") || q.includes("smoker") || q.includes("cat")) {
    return "AstroFATE was founded by Chain Smoker. Their vision is to bridge the gap between ancient cosmological wisdom and modern AI tools. As the CEO, Chain Smoker believes in using numerology as a roadmap to unlock ultimate human potential!";
  }
  
  if (q.includes("astrofate") || q.includes("company") || q.includes("fate")) {
    return "AstroFATE is the parent brand behind AstroPredict. We combine classical Pythagorean algorithms, Vedic astrology, and state-of-the-art AI systems to decode your birth charts and name energies, giving you highly precise and personalized life maps.";
  }
  
  if (q.includes("life path") || q.includes("lifepath") || q.includes("path number")) {
    if (q.includes("7")) {
      return "Life Path 7 represents the 'Seeker of Truth'. You are analytical, intuitive, and spiritually oriented. Your journey is to find wisdom, examine details, and uncover the deeper mysteries of life.";
    }
    if (q.includes("3")) {
      return "Life Path 3 represents 'The Creative Expresser'. You are highly expressive, communicative, and artistic. Your journey is to use your voice, imagination, and positive energy to inspire others.";
    }
    if (q.includes("5")) {
      return "Life Path 5 represents 'The Freedom Seeker'. You thrive on adventure, change, and variety. Your journey is to embrace transformation, travel, and explore diverse perspectives.";
    }
    if (q.includes("1")) {
      return "Life Path 1 represents 'The Pioneer'. You are independent, ambitious, and a natural leader. Your journey is to build self-confidence and initiate original pathways.";
    }
    if (q.includes("9")) {
      return "Life Path 9 represents 'The Humanitarian'. You are compassionate, creative, and generous. Your journey is to offer wisdom, service, and understanding to the world.";
    }
    return "Your Life Path Number represents the core journey and lessons of your life. It is calculated by summing all the digits of your birth date. For example, if you are a Life Path 7, you are analytical and intuitive. Tell me your birth date, and I can calculate it for you!";
  }
  
  if (q.includes("career") || q.includes("job") || q.includes("business") || q.includes("money") || q.includes("wealth")) {
    return "In numerology, career alignment is key. For analytical paths (like 7), fields in Research, Technology, Writing, and Consulting are favored. For creative paths (like 3), Arts, Marketing, and Media work best. Solo ventures and innovative products under AstroFATE's guidance can unlock your maximum prosperity.";
  }
  
  if (q.includes("lucky") || q.includes("color") || q.includes("gemstone") || q.includes("date") || q.includes("day")) {
    return "Based on your charts: Thursday is your luckiest day for decisions. Royal Violet and Indigo colors align with high-frequency energy. Amethyst is your primary lucky gemstone to enhance intuition and clarity, and dates matching 7, 16, and 25 bring favorable opportunities.";
  }
  
  if (q.includes("compatibility") || q.includes("love") || q.includes("relationship") || q.includes("match")) {
    return "Compatibility is computed by matching Core Numbers. Generally, Life Path 7 aligns perfectly with Life Path 5 (which brings adventure) and Life Path 2 (which offers emotional depth and support). Use the 'Is it written in the stars?' checker above to calculate your exact percentage!";
  }
  
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greet")) {
    return "Hello! I am your AstroFATE AI Numerology Assistant. How can I help you today? Ask me about your life path, career, lucky colors, or compatibility!";
  }
  
  return "That is a fascinating question! According to the cosmic coordinates of AstroFATE, your query is connected to your primary chart frequencies. Could you share your Full Name or Date of Birth so I can give you a more personalized numerological analysis?";
}

// ---------- AI Assistant ----------
export function Assistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    {
      sender: "bot",
      text: "Hi! I'm your AstroFATE AI assistant. Ask me about your life path, lucky dates, compatibility, or career guidance!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input;
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setLoading(true);

    setTimeout(() => {
      const response = getBotResponse(userText);
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setLoading(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: suggestion }]);
    setLoading(true);

    setTimeout(() => {
      const response = getBotResponse(suggestion);
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setLoading(false);
    }, 1000);
  };

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
          <div ref={chatContainerRef} className="space-y-4 mb-6 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.sender === "user" ? "justify-end" : ""}`}>
                {m.sender === "bot" && (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet to-violet-soft flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                )}
                <div
                  className={`${
                    m.sender === "user"
                      ? "bg-gradient-to-br from-violet to-violet-soft rounded-2xl rounded-tr-sm p-4 text-sm max-w-[80%] text-white"
                      : "glass rounded-2xl rounded-tl-sm p-4 text-sm max-w-[80%]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet to-violet-soft flex items-center justify-center flex-shrink-0 animate-spin-slow">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="glass rounded-2xl rounded-tl-sm p-4 text-sm max-w-[80%] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestionClick(s)}
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask your question…"
              className="h-12 bg-input border-border"
              disabled={loading}
            />
            <Button 
              onClick={handleSend}
              disabled={loading}
              className="h-12 px-5 bg-gradient-to-r from-violet to-violet-soft text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Sample Report ----------
// Pythagorean letter values
const charMap: Record<string, number> = {
  a: 1, j: 1, s: 1,
  b: 2, k: 2, t: 2,
  c: 3, l: 3, u: 3,
  d: 4, m: 4, v: 4,
  e: 5, n: 5, w: 5,
  f: 6, o: 6, x: 6,
  g: 7, p: 7, y: 7,
  h: 8, q: 8, z: 8,
  i: 9, r: 9
};

const vowelMap: Record<string, number> = { a: 1, e: 5, i: 9, o: 6, u: 3 };

function reduceNumber(num: number): number {
  let val = num;
  while (val > 9 && val !== 11 && val !== 22 && val !== 33) {
    val = val.toString().split("").reduce((acc, d) => acc + parseInt(d, 10), 0);
  }
  return val;
}

function calculateLifePath(dob: string): number {
  if (!dob) return 7;
  const digits = dob.replace(/\D/g, "");
  const sum = digits.split("").reduce((acc, d) => acc + parseInt(d, 10), 0);
  return reduceNumber(sum);
}

function calculateDestiny(name: string): number {
  if (!name) return 3;
  const sum = name.toLowerCase().replace(/[^a-z]/g, "").split("").reduce((acc, char) => acc + (charMap[char] || 0), 0);
  return reduceNumber(sum);
}

function calculateSoulUrge(name: string): number {
  if (!name) return 9;
  const sum = name.toLowerCase().replace(/[^aeiou]/g, "").split("").reduce((acc, char) => acc + (vowelMap[char] || 0), 0);
  return reduceNumber(sum);
}

const numerologyData: Record<number, {
  color: string;
  day: string;
  gem: string;
  personality: string;
  career: string;
  compatibility: string;
  forecast: string;
}> = {
  1: {
    color: "Crimson Red / Gold",
    day: "Sunday",
    gem: "Ruby",
    personality: "Independent pioneer, natural leader, ambitious, and self-motivated.",
    career: "Entrepreneurship, management, leadership, innovation, and design.",
    compatibility: "Best matched with Life Paths 3, 5, and 9.",
    forecast: "A year of new beginnings, fresh opportunities, and personal initiatives."
  },
  2: {
    color: "Orange / Pearl White",
    day: "Monday",
    gem: "Moonstone",
    personality: "Sensitive, cooperative, intuitive peacemaker, and diplomat.",
    career: "Counseling, social work, art, mediation, and customer relations.",
    compatibility: "Best matched with Life Paths 4, 6, and 8.",
    forecast: "A year of building relationships, partnership growth, and patient cooperation."
  },
  3: {
    color: "Yellow / Gold",
    day: "Thursday",
    gem: "Yellow Sapphire",
    personality: "Highly expressive, creative, optimistic, social, and communicative.",
    career: "Marketing, writing, performing arts, design, and entertainment.",
    compatibility: "Best matched with Life Paths 1, 5, and 7.",
    forecast: "A year of self-expression, creative breakthroughs, and social connections."
  },
  4: {
    color: "Green / Brown",
    day: "Wednesday",
    gem: "Emerald",
    personality: "Practical, hard-working, organized, disciplined, and logical builder.",
    career: "Engineering, finance, law, construction, and systems analysis.",
    compatibility: "Best matched with Life Paths 2, 6, and 8.",
    forecast: "A year of hard work, laying stable foundations, and disciplined progress."
  },
  5: {
    color: "Turquoise / Silver",
    day: "Wednesday",
    gem: "Aquamarine",
    personality: "Adventure seeker, versatile, freedom-loving, and charismatic communicator.",
    career: "Sales, travel, media, public relations, and freelance consulting.",
    compatibility: "Best matched with Life Paths 1, 3, and 7.",
    forecast: "A year of bold changes, exciting travel, and transformative freedom."
  },
  6: {
    color: "Indigo / Rose Pink",
    day: "Friday",
    gem: "Rose Quartz",
    personality: "Nurturing, responsible, artistic, family-oriented, and harmonious provider.",
    career: "Healthcare, teaching, therapy, interior design, and hospitality.",
    compatibility: "Best matched with Life Paths 2, 4, and 8.",
    forecast: "A year of family focus, home harmony, and community responsibilities."
  },
  7: {
    color: "Royal Violet / Purple",
    day: "Thursday",
    gem: "Amethyst",
    personality: "Intuitive seeker, highly analytical, spiritual, independent, and philosophical.",
    career: "Research, technology, philosophy, writing, and spiritual coaching.",
    compatibility: "Best matched with Life Paths 3, 5, and 9.",
    forecast: "A year of deep reflection, spiritual learning, and internal growth."
  },
  8: {
    color: "Deep Blue / Dark Grey",
    day: "Saturday",
    gem: "Blue Sapphire",
    personality: "Ambitious authority, business-minded, financially savvy, and strong leader.",
    career: "Business management, investment banking, real estate, and law.",
    compatibility: "Best matched with Life Paths 2, 4, and 6.",
    forecast: "A year of financial expansion, business power, and rewarding success."
  },
  9: {
    color: "Gold / Lavender",
    day: "Tuesday",
    gem: "Opal",
    personality: "Compassionate humanitarian, artistic, generous, and wise helper.",
    career: "Non-profit, healing arts, writing, design, and teaching.",
    compatibility: "Best matched with Life Paths 1, 3, and 7.",
    forecast: "A year of completion, releasing old baggage, and philanthropic focus."
  },
  11: {
    color: "Silver / White",
    day: "Monday",
    gem: "Pearl",
    personality: "Visionary, highly intuitive, spiritual messenger, and empathic leader.",
    career: "Counseling, writing, public speaking, coaching, and creative leadership.",
    compatibility: "Best matched with Life Paths 2, 6, and 9.",
    forecast: "A year of spiritual awakening, intuitive insights, and deep connections."
  },
  22: {
    color: "Gold / Emerald Green",
    day: "Wednesday",
    gem: "Garnet",
    personality: "Master builder, extremely practical, visionary leader, and high organizer.",
    career: "Large scale enterprises, engineering, global politics, and philanthropy.",
    compatibility: "Best matched with Life Paths 4, 8, and 11.",
    forecast: "A year of manifesting huge dreams, constructing major projects, and expansion."
  },
  33: {
    color: "Royal Violet / Gold",
    day: "Thursday",
    gem: "Yellow Topaz",
    personality: "Master teacher, highly compassionate, protective leader, and spiritual mentor.",
    career: "Education, humanitarian work, medical, writing, and master level teaching.",
    compatibility: "Best matched with Life Paths 7, 9, and 11.",
    forecast: "A year of massive personal influence, mentoring others, and profound harmony."
  }
};

export function SampleReport() {
  const [reportData, setReportData] = useState({
    name: "Sarah M.",
    dob: "1992-03-14",
    lifePath: 7,
    destiny: 3,
    soulUrge: 9
  });

  const loadReportData = () => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("astrofate_user_name");
      const storedDob = localStorage.getItem("astrofate_user_dob");
      if (storedName && storedDob) {
        setReportData({
          name: storedName,
          dob: storedDob,
          lifePath: calculateLifePath(storedDob),
          destiny: calculateDestiny(storedName),
          soulUrge: calculateSoulUrge(storedName)
        });
      }
    }
  };

  useEffect(() => {
    loadReportData();
    window.addEventListener("astrofate_report_ready", loadReportData);
    return () => {
      window.removeEventListener("astrofate_report_ready", loadReportData);
    };
  }, []);

  const lpInfo = numerologyData[reportData.lifePath] || numerologyData[7];

  let dateFormatted = reportData.dob;
  try {
    const d = new Date(reportData.dob);
    if (!isNaN(d.getTime())) {
      dateFormatted = d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    }
  } catch (e) {}

  const reportItems = [
    { label: "Core Numbers", value: `Life Path ${reportData.lifePath} · Destiny ${reportData.destiny} · Soul Urge ${reportData.soulUrge}` },
    { label: "Lucky Insights", value: `${lpInfo.color} · ${lpInfo.day} · ${lpInfo.gem}` },
    { label: "Personality Blueprint", value: lpInfo.personality },
    { label: "Career & Prosperity", value: lpInfo.career },
    { label: "Relationships & Compatibility", value: lpInfo.compatibility },
    { label: "Yearly Forecast", value: lpInfo.forecast },
  ];

  return (
    <section id="report" className="py-20 sm:py-28 bg-cosmic">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Sample report" title={<>A taste of your <span className="text-gradient-gold">personalized report</span></>} />
        <div className="glass-strong rounded-3xl overflow-hidden shadow-glow">
          <div className="p-6 sm:p-10 border-b border-border flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Numerology Report</div>
              <h3 className="text-2xl font-semibold mt-1">{reportData.name} — Born {dateFormatted}</h3>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="glass border-border"><Download className="h-4 w-4 mr-2" /> Download</Button>
              <Button className="bg-gradient-to-r from-violet to-violet-soft text-white"><Share2 className="h-4 w-4 mr-2" /> Share</Button>
            </div>
          </div>
          <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-6">
            {reportItems.map((s) => (
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

// ---------- About Company & CEO ----------
export function AboutCompany() {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-cosmic">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-violet/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="About Us" title={<>Discover <span className="text-gradient-violet">AstroFATE</span></>} />
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Company Details */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Bridging Cosmic Wisdom & Modern Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded under the parent brand <strong>AstroFATE</strong>, our mission is to make the profound depth of ancient astrology and numerology accessible, accurate, and deeply practical for the modern world. We believe that cosmic insights should not be vague generalizations, but personalized tools for self-discovery and empowerment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By blending classical Pythagorean algorithms with state-of-the-art AI systems, AstroFATE decodes the mathematical blueprints of your birth charts and names to generate reports that are both scientifically computed and intuitively resonant.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="glass rounded-xl p-4">
                <h4 className="font-semibold text-gold mb-1">Authentic Science</h4>
                <p className="text-xs text-muted-foreground">Mathematical Pythagorean models validated across thousands of profiles.</p>
              </div>
              <div className="glass rounded-xl p-4">
                <h4 className="font-semibold text-violet-soft mb-1">AI-Powered Depth</h4>
                <p className="text-xs text-muted-foreground">Cognitive engines that translate charts into clear, actionable lifemaps.</p>
              </div>
            </div>
          </div>

          {/* CEO Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet to-gold blur-2xl opacity-20 group-hover:opacity-35 transition duration-500 rounded-3xl" />
              <div className="relative glass-strong rounded-3xl p-6 sm:p-8 border border-border shadow-glow hover:border-violet-soft/30 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  {/* CEO Image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet to-gold rounded-2xl blur-md opacity-50 group-hover:opacity-85 transition" />
                    <img 
                      src={smokingCatImg} 
                      alt="Chain Smoker — CEO" 
                      className="relative h-44 w-36 object-cover rounded-2xl border-2 border-gold/40 shadow-lg object-top"
                    />
                  </div>

                  {/* CEO Details */}
                  <h4 className="text-xl font-bold text-foreground">Chain Smoker</h4>
                  <p className="text-xs text-gold font-medium uppercase tracking-wider mt-1">Founder & CEO, AstroFATE</p>
                  
                  {/* CEO Quote */}
                  <div className="relative mt-6 pt-6 border-t border-border w-full">
                    <Quote className="absolute top-2 left-0 h-6 w-6 text-gold/20 -translate-y-4" />
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      "At AstroFATE, we believe that astrology and numerology are not about predicting a fixed destiny, but about unlocking your ultimate potential. By merging ancient wisdom with modern technology, we guide you to navigate life's currents with clarity and confidence."
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="flex items-center mb-3">
            <img
              src={logoUrl}
              alt="AstroPredict Logo"
              className="h-20 w-auto object-contain -ml-2 logo-themed"
            />
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
        <p>© {new Date().getFullYear()} AstroPredict. All rights reserved.</p>
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
