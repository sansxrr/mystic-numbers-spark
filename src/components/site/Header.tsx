import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "../../../node_modules/lovable-tagger/node_modules/tailwindcss/lib/public/logo.png";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#numbers", label: "Core Numbers" },
  { href: "#compatibility", label: "Compatibility" },
  { href: "#assistant", label: "AI Assistant" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center">
            <div className="absolute inset-0 bg-white/5 blur-md opacity-60 group-hover:opacity-100 transition-opacity rounded-lg" />
            <img
              src={logoUrl}
              alt="AstroPredict Logo"
              className="relative h-16 w-auto object-contain logo-themed"
            />
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:bg-surface-2/60 transition"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button
            asChild
            className="hidden sm:inline-flex bg-gradient-to-r from-violet to-violet-soft text-white shadow-glow hover:opacity-90"
          >
            <a href="#form">Generate My Report</a>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-md glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-violet to-violet-soft text-white"
            >
              <a href="#form" onClick={() => setOpen(false)}>Generate My Report</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
