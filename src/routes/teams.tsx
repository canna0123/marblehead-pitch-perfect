import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section, Crest } from "@/components/site-chrome";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Teams · Marblehead Football Club" },
      { name: "description", content: "The five age-group teams of MHD FC — O30's, O40's, O48's, O55's, and O68's." },
    ],
  }),
  component: Teams,
});

const teams = [
  {
    slug: "o30",
    name: "MHD FC O30's",
    league: "Over-30 Division",
    home: "Seaside Park, Marblehead",
    training: "TBD",
    captain: "Captain: TBD",
    body: "The youngest of the club's senior sides — competitive, quick, and the first stop for players stepping into MHD FC colors after their college and open-league years.",
  },
  {
    slug: "o40",
    name: "MHD FC O40's",
    league: "Over-40 Division",
    home: "Seaside Park, Marblehead",
    training: "TBD",
    captain: "Captain: TBD",
    body: "One of the club's cornerstone sides. A blend of experienced players and long-time club members carrying the crest through the Over-40 ranks.",
  },
  {
    slug: "o48",
    name: "MHD FC O48's",
    league: "Over-48 Division",
    home: "Seaside Park, Marblehead",
    training: "TBD",
    captain: "Captain: TBD",
    body: "A tight-knit veteran side keeping the game — and the club's culture — alive at the Over-48 level.",
  },
  {
    slug: "o55",
    name: "MHD FC O55's",
    league: "Over-55 Division",
    home: "Seaside Park, Marblehead",
    training: "TBD",
    captain: "Captain: TBD",
    body: "Long-serving club members who continue to represent MHD FC across the Over-55 division, mentoring younger sides along the way.",
  },
  {
    slug: "o68",
    name: "MHD FC O68's",
    league: "Over-68 Division",
    home: "Seaside Park, Marblehead",
    training: "TBD",
    captain: "Captain: TBD",
    body: "The elder statesmen of MHD FC. Proof that the game — and the club — is for life.",
  },
];

function Teams() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="The Squad" title="Five teams. One crest." subtitle="MHD FC fields five age-group sides that together define the club's competitive footprint across the North Shore." />
      <Section>
        <div className="space-y-6">
          {teams.map((t, i) => (
            <article key={t.slug} className="grid md:grid-cols-12 gap-8 border border-navy-deep/15 p-8 md:p-10 bg-cream hover:border-gold transition-colors">
              <div className="md:col-span-2 flex md:block justify-between items-start">
                <Crest className="w-16 h-20" />
                <p className="display text-6xl text-gold/40 font-semibold mt-4">0{i + 1}</p>
              </div>
              <div className="md:col-span-7">
                <p className="eyebrow text-crimson">{t.league}</p>
                <h2 className="display text-4xl text-navy-deep font-semibold mt-3">{t.name}</h2>
                <p className="mt-4 text-lg text-foreground/85 leading-relaxed">{t.body}</p>
              </div>
              <div className="md:col-span-3 space-y-4 border-t md:border-t-0 md:border-l border-navy-deep/15 md:pl-8 pt-4 md:pt-0">
                <div>
                  <p className="eyebrow text-navy-soft">Home Pitch</p>
                  <p className="text-navy-deep mt-1">{t.home}</p>
                </div>
                <div>
                  <p className="eyebrow text-navy-soft">Training</p>
                  <p className="text-navy-deep mt-1">{t.training}</p>
                </div>
                <div>
                  <p className="eyebrow text-navy-soft">Leadership</p>
                  <p className="text-navy-deep mt-1">{t.captain}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}
