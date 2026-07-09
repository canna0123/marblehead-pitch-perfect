import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/honors")({
  head: () => ({
    meta: [
      { title: "Honors · Marblehead Football Club" },
      { name: "description", content: "Club honors and individual honors won by MHD FC players." },
    ],
  }),
  component: Honors,
});

const clubHonors = [
  { y: "2001", t: "BSSL Cup — Finalist" },
  { y: "2009", t: "OTHSL Divisional Title" },
  { y: "2013", t: "North Shore Charity Shield" },
  { y: "2017", t: "OTHSL Divisional Title" },
  { y: "2018", t: "US Open Cup — Qualifying Round Appearance" },
  { y: "2022", t: "BSSL Fair Play Award" },
];

const individualHonors = [
  { y: "2004", n: "TBD", h: "OTHSL Golden Boot" },
  { y: "2011", n: "TBD", h: "BSSL Player of the Year" },
  { y: "2024", n: "Ethan Park", h: "North Shore Coach of the Year (Youth)" },
  { y: "2025", n: "Adam Bailey", h: "Northeastern Conference Coach of the Year" },
];

function Honors() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Silverware & Recognition" title="Club & Individual Honors" subtitle="A record of the trophies, titles, and personal recognitions earned by the club and its players." />

      <Section>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-crimson">Club Honors</p>
            <h2 className="display text-4xl text-navy-deep mt-4">Team silverware.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="border-t border-navy-deep/20">
              {clubHonors.map((h) => (
                <div key={h.t} className="grid grid-cols-[100px_1fr] gap-6 py-5 border-b border-navy-deep/15 items-baseline">
                  <p className="display text-3xl text-gold font-semibold">{h.y}</p>
                  <p className="text-lg text-navy-deep">{h.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section id="individual" className="bg-parchment border-y border-navy-deep/10">
        <div className="mx-auto max-w-[1400px] px-6 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-crimson">Individual Honors</p>
            <h2 className="display text-4xl text-navy-deep mt-4">Personal distinctions.</h2>
          </div>
          <div className="md:col-span-8">
            <div className="border-t border-navy-deep/20">
              {individualHonors.map((h) => (
                <div key={h.n + h.y} className="grid grid-cols-[80px_1fr_auto] gap-6 py-5 border-b border-navy-deep/15 items-baseline">
                  <p className="mono text-sm text-navy-soft tracking-widest">{h.y}</p>
                  <p className="text-lg text-navy-deep font-semibold">{h.n}</p>
                  <p className="text-right text-foreground/75">{h.h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
