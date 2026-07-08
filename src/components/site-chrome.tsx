import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const NAV: { label: string; to?: string; children?: { label: string; to: string }[] }[] = [
  { label: "Home", to: "/" },
  {
    label: "Information",
    children: [
      { label: "About the Club", to: "/about" },
      { label: "Club History", to: "/history" },
      
      { label: "Club Committee", to: "/committee" },
      { label: "Club Honors", to: "/honors" },
      { label: "Individual Honors", to: "/honors#individual" },
      { label: "Lynn Youth Partnership", to: "/news" },
      { label: "News", to: "/news" },

    ],
  },
  { label: "Teams", to: "/teams" },
  { label: "Events", to: "/events" },
  {
    label: "Team Photos",
    children: [
      { label: "2000 – 2004", to: "/photos#2000" },
      { label: "2005 – 2009", to: "/photos#2005" },
      { label: "2010 – 2014", to: "/photos#2010" },
      { label: "2015 – 2019", to: "/photos#2015" },
      { label: "2020 – 2024", to: "/photos#2020" },
    ],
  },
  {
    label: "Glory Days",
    children: [
      { label: "2001 BSSL Cup Final", to: "/glory-days#2001" },
      { label: "2018 US Open Cup", to: "/glory-days#2018" },
    ],
  },
  { label: "Club Store", to: "/store" },
  { label: "Contact", to: "/contact" },
];

import crestLogo from "@/assets/mhdfc-crest.png.asset.json";

export function Crest({ className = "" }: { className?: string }) {
  return (
    <img
      src={crestLogo.url}
      alt="MHD FC crest"
      className={`${className} object-contain`}
    />
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* Top strip */}
      <div className="bg-ink text-cream/75 border-b border-gold/20">
        <div className="mx-auto max-w-[1600px] px-6 h-8 flex items-center justify-between mono text-[10px] tracking-[0.3em] uppercase">
          <span>Marblehead · MA · 501(c)(3) Nonprofit Football Club</span>
          <Link to="/contact" className="hidden sm:inline hover:text-gold transition-colors">
            Support the Mission →
          </Link>
        </div>
      </div>

      {/* Primary bar: left wordmark · center crest · right MENU */}
      <header className="sticky top-0 z-50 bg-background border-b border-ink/15">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6 h-16 md:h-20 grid grid-cols-[1fr_auto_1fr] items-center">
          <Link to="/" className="justify-self-start mono text-[11px] md:text-[13px] tracking-[0.28em] uppercase text-ink hover:text-crimson transition-colors font-semibold">
            <span className="hidden md:inline">Marblehead Football Club</span>
            <span className="md:hidden">MHD FC</span>
          </Link>

          <Link to="/" aria-label="MHD FC — home" className="justify-self-center">
            <Crest className="w-11 h-12 md:w-12 md:h-14" />
          </Link>

          <div className="justify-self-end flex items-center gap-3">
            <span className="hidden md:inline mono text-[10px] tracking-[0.3em] uppercase text-navy-soft">EN</span>
            <button
              onClick={() => setMenuOpen(true)}
              className="mono text-[11px] md:text-[13px] tracking-[0.28em] uppercase font-semibold border border-ink px-4 py-2 md:px-5 md:py-2.5 hover:bg-ink hover:text-cream transition-colors"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Horizontal section nav with dropdowns */}
        <nav className="hidden lg:block border-t border-ink/10 bg-background">
          <div className="mx-auto max-w-[1600px] px-6 flex items-center justify-center gap-1 mono text-[11px] tracking-[0.24em] uppercase font-semibold text-ink">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    className="px-4 py-3 inline-block hover:text-crimson transition-colors"
                    activeOptions={item.to === "/" ? { exact: true } : undefined}
                    activeProps={{ className: "text-crimson" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-4 py-3 hover:text-crimson transition-colors flex items-center gap-1.5">
                    {item.label} <span className="text-[7px] opacity-60">▼</span>
                  </button>
                )}
                {item.children && open === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-ink text-cream border border-gold/30 py-2 shadow-2xl z-40">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.to}
                        className="block px-5 py-2.5 hover:bg-gold hover:text-ink transition-colors"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Recruiting bar */}
        <div className="bg-gold text-ink border-t border-ink/10">
          <div className="mx-auto max-w-[1600px] px-6 py-2 flex items-center justify-between gap-4 mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
              <span>Now Recruiting · 2025 Season</span>
            </span>
            <Link to="/contact" className="hidden sm:inline underline underline-offset-4 decoration-ink/50 hover:decoration-ink">
              Register interest →
            </Link>
          </div>
        </div>
      </header>

      {/* Fullscreen overlay menu — SF City-style */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-ink text-cream overflow-y-auto">
          <div className="mx-auto max-w-[1600px] px-6 py-6">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center">
              <span className="mono text-[11px] md:text-[13px] tracking-[0.28em] uppercase text-cream/80 font-semibold">Marblehead Football Club</span>
              <Crest className="w-11 h-12 justify-self-center" />
              <button
                onClick={() => setMenuOpen(false)}
                className="justify-self-end mono text-[11px] md:text-[13px] tracking-[0.28em] uppercase font-semibold border border-gold text-gold px-4 py-2 md:px-5 md:py-2.5 hover:bg-gold hover:text-ink transition-colors"
              >
                Close ✕
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-[1600px] px-6 py-10 md:py-16 grid md:grid-cols-12 gap-10">
            <nav className="md:col-span-8 space-y-1">
              {NAV.map((item) => (
                <div key={item.label} className="border-b border-cream/10 py-3">
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="mega-display text-5xl md:text-7xl hover:text-gold transition-colors block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <p className="mega-display text-5xl md:text-7xl text-cream/95">{item.label}</p>
                      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                        {item.children?.map((c) => (
                          <a
                            key={c.label}
                            href={c.to}
                            onClick={() => setMenuOpen(false)}
                            className="mono text-[11px] tracking-[0.24em] uppercase text-cream/60 hover:text-gold transition-colors"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>

            <aside className="md:col-span-4 space-y-8">
              <div>
                <p className="eyebrow text-gold">Contact</p>
                <p className="mt-3 text-cream/85">info@mhdfc.org<br />Marblehead, MA 01945</p>
              </div>
              <div>
                <p className="eyebrow text-gold">Partners</p>
                <ul className="mt-3 space-y-1 text-cream/85">
                  <li>Lynn Youth Soccer</li>
                  <li>North Shore Soccer Academy</li>
                  <li>OTHSL</li>
                  <li>068 Beverly</li>
                </ul>
              </div>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block mono text-[11px] tracking-[0.28em] uppercase font-semibold bg-gold text-ink px-6 py-3 hover:bg-cream transition-colors"
              >
                Donate & Support →
              </Link>
            </aside>
          </div>
        </div>
      )}
    </>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-background border-b border-ink/15">
      <div className="mx-auto max-w-[1600px] px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <p className="eyebrow text-crimson">{eyebrow}</p>
        <h1 className="mega-display text-[clamp(3.5rem,14vw,12rem)] text-ink mt-6">{title}</h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1600px] px-6">{children}</div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70 border-t-4 border-gold">
      <div className="overflow-hidden ticker-mask border-b border-cream/10 py-4">
        <div className="flex gap-16 mono text-[11px] tracking-[0.3em] uppercase whitespace-nowrap animate-marquee text-gold/80">
          {Array.from({ length: 2 }).flatMap((_, i) => [
            "Marblehead Football Club",
            "Nonprofit 501(c)(3)",
            "Partnership · Lynn Youth Soccer",
            "North Shore Soccer Academy",
            "OTHSL Affiliate",
            "Est. 2001",
            "Scholarships · Access · Community",
          ].map((t, j) => (<span key={`${i}-${j}`}>◆ {t}</span>)))}
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Crest className="w-12 h-14" />
              <p className="mono text-[11px] tracking-[0.3em] uppercase text-cream/70">MHD FC · Est. 2001</p>
            </div>
            <p className="mt-6 max-w-md leading-relaxed">
              A nonprofit soccer club serving the North Shore of Massachusetts. Our mission is to grow the game, foster community, and expand access for players who might otherwise be left on the sideline.
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold mb-4">Contact</p>
            <p className="text-cream">info@mhdfc.org<br />Marblehead, MA 01945</p>
            <p className="mt-4 mono text-xs">Banking · National Grand Bank</p>
          </div>
          <div>
            <p className="eyebrow text-gold mb-4">Partners</p>
            <ul className="space-y-1.5 text-cream">
              <li>Lynn Youth Soccer</li>
              <li>North Shore Soccer Academy</li>
              <li>OTHSL — Over-the-Hill League</li>
              <li>068 Beverly</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1600px] px-6 py-5 flex flex-wrap justify-between gap-3 mono text-[10px] tracking-[0.25em] uppercase text-cream/40">
          <span>© {new Date().getFullYear()} Marblehead Football Club · 501(c)(3) Nonprofit</span>
          <span>All donations tax-deductible where applicable</span>
        </div>
      </div>
    </footer>
  );
}
