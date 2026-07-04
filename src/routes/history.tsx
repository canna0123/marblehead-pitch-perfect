import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Club History · Marblehead Football Club" },
      { name: "description", content: "The story of MHD FC — from founding through cup runs to the modern nonprofit era." },
    ],
  }),
  component: History,
});

const timeline = [
  { y: "2001", t: "Founding & BSSL Cup Final", b: "MHD FC is formed by a group of Marblehead footballers determined to keep competitive adult play alive on the North Shore. In its inaugural season, the club reaches the BSSL Cup Final — announcing its arrival with silverware." },
  { y: "2005", t: "OTHSL Charter Affiliate", b: "MHD FC's masters side becomes a founding affiliate of the New England Over-the-Hill Soccer League, cementing a continuous league presence that runs to today." },
  { y: "2012", t: "Beverly 068 Partnership", b: "The club expands its footprint through an affiliation with the 068 side in Beverly, deepening MHD FC's regional identity." },
  { y: "2018", t: "US Open Cup Run", b: "MHD FC enters the US Open Cup — the oldest cup competition in American football. A run that draws the town out in force." },
  { y: "2023", t: "Nonprofit Restructuring", b: "The club formally reorganizes as a 501(c)(3), opens its operating account at National Grand Bank, and begins publishing annual governance." },
  { y: "2025", t: "Lynn Youth Soccer Partnership", b: "Under the leadership of the current board, MHD FC begins a formal partnership with Lynn Youth Soccer — attending tryouts, identifying scholarship candidates for NSSA, and building a lasting community bridge." },
];

function History() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Since 2001" title="Club History" subtitle="Two decades of continuous football on the North Shore — silverware, cup runs, community, and a growing nonprofit mission." />
      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-3">
            <p className="eyebrow text-crimson">Timeline</p>
            <p className="mt-4 text-foreground/70">A brief chronology of the milestones that shaped the club as it stands today.</p>
          </aside>
          <div className="md:col-span-9 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/40 hidden md:block" />
            <div className="space-y-14">
              {timeline.map((e) => (
                <article key={e.y} className="md:pl-10 relative">
                  <span className="absolute left-0 top-3 w-3 h-3 bg-gold rounded-full ring-4 ring-cream hidden md:block" />
                  <p className="display text-4xl md:text-5xl text-navy-deep font-semibold">{e.y}</p>
                  <p className="eyebrow text-crimson mt-2">{e.t}</p>
                  <p className="mt-3 text-lg text-foreground/85 leading-relaxed max-w-2xl">{e.b}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
