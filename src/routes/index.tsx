import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer, Crest, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marblehead Football Club · MHD FC" },
      { name: "description", content: "A nonprofit soccer club on the North Shore of Massachusetts. Three teams, one mission — grow the game, support Lynn Youth Soccer, and expand access to competitive football." },
      { property: "og:title", content: "Marblehead Football Club" },
      { property: "og:description", content: "Nonprofit. Community. Football." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const newsRotation = [
  {
    tag: "Community Partnership",
    date: "Ongoing · 2025",
    title: "Together with Lynn Youth Soccer.",
    lede: "MHD FC has begun building a lasting partnership with Lynn Youth Soccer — attending tryouts, identifying scholarship candidates for NSSA, and expanding access for young players who might not otherwise have the opportunity.",
  },
  {
    tag: "President's Update",
    date: "Feb 14, 2025",
    title: "Board commitments deposited; Watch Party & Gear Drive in planning.",
    lede: "Board contributions are in at National Grand Bank. Planning is underway for a World Cup watch party with a gear collection benefiting Lynn Youth Soccer.",
  },
  {
    tag: "Announcement",
    date: "Jan 8, 2025",
    title: "MHD FC opens operating account at National Grand Bank.",
    lede: "As part of our formal nonprofit standing, the club has opened its operating account and is exploring Venmo for member collections and event fundraising.",
  },
  {
    tag: "First XI",
    date: "Oct 4, 2024",
    title: "MHD FC opens fall campaign with a hard-fought draw at Seaside.",
    lede: "The First XI opened the OTHSL campaign with a spirited 1–1 draw. Match report and gallery to follow.",
  },
];

function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % newsRotation.length), 6000);
    return () => clearInterval(id);
  }, []);
  const item = newsRotation[idx];

  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* HERO — rotating news */}
      <section className="relative bg-background overflow-hidden border-b border-ink/15">
        <div className="mx-auto max-w-[1600px] px-6 pt-8 pb-14 md:pt-10 md:pb-20">
          <div className="flex items-center gap-4 mono text-[11px] tracking-[0.3em] uppercase text-navy-soft">
            <span className="w-8 h-px bg-crimson" />
            <span>A Nonprofit Football Club · Est. 2001 · North Shore, MA</span>
          </div>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
              <p className="eyebrow text-crimson">Latest</p>
              <div className="flex md:flex-col gap-2">
                {newsRotation.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`News item ${i + 1}`}
                    className={`h-px w-10 md:h-8 md:w-px transition-colors ${i === idx ? "bg-crimson" : "bg-ink/20 hover:bg-ink/50"}`}
                  />
                ))}
              </div>
            </div>

            <article key={idx} className="md:col-span-10 animate-in fade-in duration-500">
              <p className="mono text-[11px] tracking-[0.3em] uppercase text-navy-soft flex items-center gap-3">
                <span className="text-crimson font-semibold">{item.tag}</span>
                <span className="w-1 h-1 rounded-full bg-ink/40" />
                <span>{item.date}</span>
              </p>
              <h1 className="mega-display text-ink text-[clamp(2.25rem,6vw,5rem)] mt-5">
                {item.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/85">
                {item.lede}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/news" className="mono text-[11px] tracking-[0.28em] uppercase font-semibold bg-ink text-cream px-6 py-3 hover:bg-crimson transition-colors">
                  Read all news →
                </Link>
                <Link to="/contact" className="mono text-[11px] tracking-[0.28em] uppercase font-semibold border border-ink text-ink px-6 py-3 hover:bg-gold transition-colors">
                  Donate & Support
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="bg-cream border-b border-navy-deep/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-4 gap-10">
          {[
            { n: "3", l: "Senior Teams" },
            { n: "24+", l: "Years of Play" },
            { n: "100%", l: "Volunteer-Run" },
            { n: "1", l: "Growing Partnership · Lynn YS" },
          ].map((s) => (
            <div key={s.l} className="border-t-2 border-gold pt-4">
              <p className="display text-5xl md:text-6xl text-navy-deep font-semibold">{s.n}</p>
              <p className="eyebrow text-navy-soft mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <Section>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-crimson">About the Club</p>
            <h2 className="display text-5xl md:text-6xl text-navy-deep mt-4">A club with a purpose beyond the pitch.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              MHD FC was founded to keep competitive adult football alive on the North Shore — and to use the resources of a strong club to open doors for young players in neighboring communities. Today the club fields <strong>three teams</strong> and runs its charitable work in partnership with <strong>Lynn Youth Soccer</strong> and <strong>North Shore Soccer Academy (NSSA)</strong>.
            </p>
            <p>
              Every board member contributes annually. Every dollar raised through gear drives, watch parties, and community events flows directly into scholarships, equipment, and access.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link to="/history" className="text-navy-deep font-semibold border-b-2 border-gold hover:text-crimson">Read the History →</Link>
              <Link to="/committee" className="text-navy-deep font-semibold border-b-2 border-gold hover:text-crimson">Meet the Committee →</Link>
              <Link to="/bylaws" className="text-navy-deep font-semibold border-b-2 border-gold hover:text-crimson">Club By-Laws →</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* TEAMS */}
      <section className="bg-parchment border-y border-navy-deep/10">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <p className="eyebrow text-crimson">The Three Teams</p>
              <h2 className="display text-5xl md:text-6xl text-navy-deep mt-3">One crest, three sides.</h2>
            </div>
            <Link to="/teams" className="text-navy-deep font-semibold border-b-2 border-gold hover:text-crimson">All teams →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "MHD FC First XI", league: "OTHSL Open Division", note: "Our flagship senior side. Sundays at Seaside Park." },
              { name: "MHD FC Over-40", league: "OTHSL Masters", note: "The founding side. Continuous play since our earliest seasons." },
              { name: "MHD FC 068", league: "Beverly Affiliate", note: "Our regional affiliate team, extending the club footprint through the North Shore." },
            ].map((t) => (
              <article key={t.name} className="bg-cream border border-navy-deep/10 p-8 hover:border-gold transition-colors group">
                <Crest className="w-12 h-14" />
                <p className="display text-2xl text-navy-deep mt-6 font-semibold">{t.name}</p>
                <p className="eyebrow text-gold mt-2">{t.league}</p>
                <p className="mt-4 text-foreground/75 leading-relaxed">{t.note}</p>
                <Link to="/teams" className="mt-6 inline-block text-crimson font-semibold text-sm border-b border-crimson group-hover:border-navy-deep group-hover:text-navy-deep">Squad details →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + CONTACT */}
      <section className="bg-gold text-navy-deep py-20">
        <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className="eyebrow">Get involved</p>
            <h2 className="display text-4xl md:text-6xl mt-3 font-semibold">Play, coach, sponsor, or simply support the mission.</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-6 max-w-2xl">
              <div>
                <p className="eyebrow">Contact</p>
                <p className="mt-2 text-navy-deep/90">info@mhdfc.org<br />Marblehead, MA 01945</p>
              </div>
              <div>
                <p className="eyebrow">Banking</p>
                <p className="mt-2 text-navy-deep/90">National Grand Bank<br />501(c)(3) Nonprofit</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/contact" className="inline-block bg-navy-deep text-cream px-8 py-4 font-semibold tracking-wide hover:bg-crimson transition-colors">
              Contact the Club →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
