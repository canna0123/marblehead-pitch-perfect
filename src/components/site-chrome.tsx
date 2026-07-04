import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/85 backdrop-blur-md border-b border-sand/10">
      <div className="mx-auto max-w-[1400px] px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-chalk">
          <span className="grid place-items-center w-8 h-8 border-2 border-kit text-kit jersey-num text-lg">M</span>
          <span className="mono text-[11px] tracking-[0.25em] uppercase leading-none">
            Marblehead O-40 SC<br /><span className="text-sand/50">Est. MCMLXXXI</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 mono text-[11px] tracking-[0.25em] uppercase text-sand/70">
          <Link to="/" className="hover:text-kit transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-kit" }}>Clubhouse</Link>
          <Link to="/schedule" className="hover:text-kit transition-colors" activeProps={{ className: "text-kit" }}>Match Centre</Link>
          <Link to="/join" className="hover:text-kit transition-colors" activeProps={{ className: "text-kit" }}>Join Squad</Link>
        </nav>
        <Link to="/join" className="bg-kit text-chalk px-4 py-2 mono text-[11px] tracking-[0.25em] uppercase hover:bg-kit-hot transition-colors">
          Trial ▸
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-sand/70">
      <div className="overflow-hidden ticker-mask border-y border-sand/10 py-4">
        <div className="flex gap-16 mono text-xs tracking-[0.3em] uppercase whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).flatMap((_, i) => [
            "Est. 1981",
            "OTHSL Division 3",
            "Seaside Park · Marblehead MA",
            "Sundays 10:00",
            "40+ Only",
            "Kit: Navy & Kit-Red",
            "Founding Chapter",
            "New England Over-the-Hill Soccer League",
          ].map((t, j) => (
            <span key={`${i}-${j}`}>◆ {t}</span>
          )))}
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="mono text-[10px] tracking-[0.3em] uppercase text-kit">The Club</p>
          <p className="display text-5xl md:text-6xl text-chalk mt-3">Marblehead<br/>Over-40 SC</p>
          <p className="mt-4 max-w-sm">A founding side of the New England Over-the-Hill Soccer League. Playing continuously since the fall of 1981.</p>
        </div>
        <div>
          <p className="mono text-[10px] tracking-[0.3em] uppercase text-kit">Pitch</p>
          <p className="mt-3 text-chalk">Seaside Park<br/>Ocean Ave, Marblehead MA 01945</p>
        </div>
        <div>
          <p className="mono text-[10px] tracking-[0.3em] uppercase text-kit">Contact</p>
          <p className="mt-3 text-chalk">captain@marbleheadO40.club<br/>OTHSL: <a href="https://www.othsl.org" className="hover:text-kit underline underline-offset-4">othsl.org</a></p>
        </div>
      </div>
      <div className="border-t border-sand/10">
        <div className="mx-auto max-w-[1400px] px-6 py-4 flex justify-between mono text-[10px] tracking-[0.3em] uppercase text-sand/40">
          <span>© {new Date().getFullYear()} Marblehead O-40 SC</span>
          <span>N 42.4998° · W 70.8586°</span>
        </div>
      </div>
    </footer>
  );
}
