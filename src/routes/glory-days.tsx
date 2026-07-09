import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";
import hero from "@/assets/photo-action-duel.jpg.asset.json";
import huddle from "@/assets/photo-green-legacy.jpg.asset.json";

export const Route = createFileRoute("/glory-days")({
  head: () => ({
    meta: [
      { title: "Glory Days · Marblehead Football Club" },
      { name: "description", content: "The great moments and honors in MHD FC history." },
    ],
  }),
  component: Glory,
});

const clubHonors = [
  { y: "2001", t: "TBD" },
  { y: "2009", t: "OTHSL Divisional Title" },
  { y: "2013", t: "TBD" },
  { y: "2017", t: "OTHSL Divisional Title" },
  { y: "2018", t: "TBD" },
  { y: "2022", t: "TBD" },
];

const individualHonors = [
  { y: "2004", n: "TBD", h: "OTHSL Golden Boot" },
  { y: "2011", n: "TBD", h: "BSSL Player of the Year" },
  { y: "2024", n: "Ethan Park", h: "North Shore Coach of the Year (Youth)" },
  { y: "2025", n: "Adam Bailey", h: "Northeastern Conference Coach of the Year" },
];

function Glory() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="The Great Moments" title="Glory Days" subtitle="A club is defined by its finest hours. These are ours — the matches, seasons, squads, and honors that Marblehead will not forget." />

      {/* 2001 */}
      <section id="2001" className="bg-navy-deep text-cream border-b-4 border-gold">
        <div className="mx-auto max-w-[1400px] px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <img src={huddle.url} alt="2001 MHD FC squad" width={1200} height={1400} className="w-full aspect-[4/5] object-cover grayscale border-4 border-gold" />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow text-gold">Chapter One · 2001</p>
            <h2 className="display text-5xl md:text-7xl mt-4 leading-none">The BSSL Cup Final</h2>
            <p className="mono text-sm uppercase tracking-widest text-cream/60 mt-6">Bay State Soccer League · Cup Final · Autumn 2001</p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-cream/85">
              <p>In its inaugural season, MHD FC — a scratch side of Marblehead footballers pulled together in the space of a few months — reached the BSSL Cup Final. The run captured the imagination of a town not known for its soccer pedigree, and drew crowds larger than any adult amateur fixture had seen locally in a generation.</p>
              <p>The final, played on a raw November afternoon, ended in defeat by the narrowest of margins. But the story of the season — the underdogs, the packed sideline, the founding of a club — became the origin story every MHD FC player still knows by heart.</p>
              <blockquote className="border-l-4 border-gold pl-6 italic text-cream text-xl mt-8">
                "We didn't win the trophy that day. We won a club instead."
                <cite className="block not-italic text-sm text-cream/60 mt-2 mono uppercase tracking-widest">— Founding member, 2001</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 2018 */}
      <section id="2018" className="bg-parchment border-b border-navy-deep/10">
        <div className="mx-auto max-w-[1400px] px-6 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 md:order-1 order-2">
            <p className="eyebrow text-crimson">Chapter Two · 2018</p>
            <h2 className="display text-5xl md:text-7xl text-navy-deep font-semibold mt-4 leading-none">The US Open Cup</h2>
            <p className="mono text-sm uppercase tracking-widest text-navy-soft mt-6">Lamar Hunt US Open Cup · Qualifying Rounds · 2018</p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>The US Open Cup is the oldest cup competition in American football, dating to 1914. In 2018, MHD FC — after nearly two decades of continuous OTHSL play — entered the tournament for the first time.</p>
              <p>The club advanced through local qualifying rounds against sides from across New England before falling to a semi-professional opponent under the lights. It marked MHD FC's first appearance on the national footballing stage and remains a benchmark for what a properly-run community club can achieve.</p>
              <div className="grid grid-cols-3 gap-6 border-t border-navy-deep/20 pt-6 mt-8">
                <div><p className="display text-4xl text-crimson font-semibold">III</p><p className="eyebrow text-navy-soft mt-2">Rounds Advanced</p></div>
                <div><p className="display text-4xl text-crimson font-semibold">7</p><p className="eyebrow text-navy-soft mt-2">Sides Beaten</p></div>
                <div><p className="display text-4xl text-crimson font-semibold">1st</p><p className="eyebrow text-navy-soft mt-2">National Cup Appearance</p></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 md:order-2 order-1">
            <img src={hero.url} alt="2018 MHD FC US Open Cup action" width={1200} height={1400} className="w-full aspect-[4/5] object-cover border-4 border-crimson" />
          </div>
        </div>
      </section>

      {/* Club Honors */}
      <Section>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-crimson">Silverware</p>
            <h2 className="display text-4xl text-navy-deep mt-4">Club Honors.</h2>
            <p className="mt-4 text-foreground/75">Team trophies, titles, and cup appearances across MHD FC history.</p>
          </div>
          <div className="md:col-span-8">
            <div className="border-t border-navy-deep/20">
              {clubHonors.map((h) => (
                <div key={h.y + h.t} className="grid grid-cols-[100px_1fr] gap-6 py-5 border-b border-navy-deep/15 items-baseline">
                  <p className="display text-3xl text-gold font-semibold">{h.y}</p>
                  <p className="text-lg text-navy-deep">{h.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Individual Honors */}
      <section id="individual" className="bg-parchment border-y border-navy-deep/10">
        <div className="mx-auto max-w-[1400px] px-6 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-crimson">Recognition</p>
            <h2 className="display text-4xl text-navy-deep mt-4">Individual Honors.</h2>
            <p className="mt-4 text-foreground/75">Personal distinctions earned by MHD FC players and coaches.</p>
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

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-crimson">More to come</p>
          <h2 className="display text-4xl text-navy-deep mt-4">The next chapter is being written.</h2>
          <p className="mt-4 text-foreground/80">The club's finest hours are not all behind us. Follow along in <a href="/news" className="text-crimson border-b border-crimson">News</a> or come support us at an <a href="/events" className="text-crimson border-b border-crimson">upcoming event</a>.</p>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
