import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const NAV: { label: string; to?: string; children?: { label: string; to: string }[] }[] = [
  { label: "Home", to: "/" },
  {
    label: "Information",
    children: [
      { label: "About the Club", to: "/about" },
      { label: "Club History", to: "/history" },
      { label: "Club By-Laws", to: "/bylaws" },
      { label: "Club Committee", to: "/committee" },
      { label: "Club Honors", to: "/honors" },
      { label: "Individual Honors", to: "/honors#individual" },
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

export function Crest({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden>
      <path d="M32 2 L60 12 V38 C60 54 46 66 32 70 C18 66 4 54 4 38 V12 Z"
        fill="var(--navy-deep)" stroke="var(--gold)" strokeWidth="1.5" />
      <path d="M32 8 L54 16 V38 C54 50 43 60 32 63 C21 60 10 50 10 38 V16 Z"
        fill="none" stroke="var(--gold)" strokeWidth="0.5" opacity="0.6" />
      <text x="32" y="30" textAnchor="middle" fontFamily="Cormorant Garamond, serif"
        fontSize="14" fontWeight="600" fill="var(--gold)" letterSpacing="1">MHD</text>
      <line x1="14" y1="35" x2="50" y2="35" stroke="var(--gold)" strokeWidth="0.5" />
      <text x="32" y="46" textAnchor="middle" fontFamily="Cormorant Garamond, serif"
        fontSize="7" fill="var(--gold)" letterSpacing="1.5">FC</text>
      <text x="32" y="56" textAnchor="middle" fontFamily="Inter, sans-serif"
        fontSize="4" fill="var(--gold-soft)" letterSpacing="1">EST · MMI</text>
    </svg>
  );
}

export function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div className="bg-navy-deep text-cream/80 border-b border-gold/20">
        <div className="mx-auto max-w-[1400px] px-6 h-8 flex items-center justify-between text-[11px]">
          <span className="mono tracking-widest">A Massachusetts 501(c)(3) Nonprofit Soccer Club</span>
          <Link to="/contact" className="hidden sm:inline hover:text-gold transition-colors">
            Donate · Support the Mission →
          </Link>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-navy-deep/10">
        <div className="mx-auto max-w-[1400px] px-6 h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 text-navy-deep">
            <Crest className="w-11 h-12" />
            <div className="leading-tight">
              <div className="display text-xl font-semibold">Marblehead Football Club</div>
              <div className="mono text-[9px] tracking-[0.3em] uppercase text-navy-soft">Est. 2001 · North Shore, MA</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-navy-deep">
            {NAV.map((item) => (
              <div key={item.label} className="relative"
                onMouseEnter={() => item.children && setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}>
                {item.to ? (
                  <Link to={item.to} className="px-3 py-2 hover:text-crimson transition-colors"
                    activeOptions={item.to === "/" ? { exact: true } : undefined}
                    activeProps={{ className: "text-crimson" }}>
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-3 py-2 hover:text-crimson transition-colors flex items-center gap-1">
                    {item.label} <span className="text-[8px]">▼</span>
                  </button>
                )}
                {item.children && open === item.label && (
                  <div className="absolute top-full left-0 min-w-[220px] bg-cream border border-navy-deep/10 shadow-lg py-2">
                    {item.children.map((c) => (
                      <a key={c.label} href={c.to} className="block px-4 py-2 text-navy-deep hover:bg-parchment hover:text-crimson transition-colors">
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button onClick={() => setMobile(!mobile)} className="lg:hidden text-navy-deep p-2" aria-label="Menu">
            <span className="block w-6 h-0.5 bg-navy-deep mb-1.5" />
            <span className="block w-6 h-0.5 bg-navy-deep mb-1.5" />
            <span className="block w-6 h-0.5 bg-navy-deep" />
          </button>
        </div>

        {mobile && (
          <div className="lg:hidden border-t border-navy-deep/10 bg-cream max-h-[70vh] overflow-y-auto">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-navy-deep/10">
                {item.to ? (
                  <Link to={item.to} className="block px-6 py-3 text-navy-deep font-medium" onClick={() => setMobile(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="px-6 py-3 eyebrow text-navy-soft">{item.label}</div>
                    {item.children?.map((c) => (
                      <a key={c.label} href={c.to} className="block px-8 py-2 text-navy-deep text-sm" onClick={() => setMobile(false)}>
                        {c.label}
                      </a>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Recruiting bar */}
        <div className="bg-crimson text-cream">
          <div className="mx-auto max-w-[1400px] px-6 py-2 flex items-center justify-between gap-4 text-[12px]">
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="eyebrow">Now Recruiting for the 2025 Season</span>
            </span>
            <Link to="/contact" className="hidden sm:inline underline underline-offset-4 decoration-gold hover:text-gold">
              Register your interest →
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-navy-deep text-cream border-b-4 border-gold">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="display text-5xl md:text-7xl mt-4 max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-cream/75 text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`py-20 md:py-24 ${className}`}><div className="mx-auto max-w-[1400px] px-6">{children}</div></section>;
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70 border-t-4 border-gold">
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
      <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Crest className="w-14 h-16" />
            <div>
              <p className="display text-2xl text-cream font-semibold">Marblehead Football Club</p>
              <p className="eyebrow text-gold mt-1">MHD FC · Est. 2001</p>
            </div>
          </div>
          <p className="mt-6 max-w-md leading-relaxed">
            A nonprofit soccer club serving the North Shore of Massachusetts. Our mission is to grow the game, foster community, and expand access for players who might otherwise be left on the sideline.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold mb-4">Contact</p>
          <p className="text-cream">info@mhdfc.org<br/>Marblehead, MA 01945</p>
          <p className="mt-4 mono text-xs">Banking: National Grand Bank</p>
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
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1400px] px-6 py-5 flex flex-wrap justify-between gap-3 mono text-[10px] tracking-[0.25em] uppercase text-cream/40">
          <span>© {new Date().getFullYear()} Marblehead Football Club · 501(c)(3) Nonprofit</span>
          <span>All donations tax-deductible where applicable</span>
        </div>
      </div>
    </footer>
  );
}
