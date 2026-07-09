import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer, Crest, Section } from "@/components/site-chrome";
import newsLynn from "@/assets/youth-huddle.jpg.asset.json";
import newsWatchparty from "@/assets/watch-party.jpg.asset.json";
import newsMatch from "@/assets/photo-action-duel.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MHDFC" },
      { name: "description", content: "A nonprofit soccer club on the North Shore of Massachusetts. Three teams, one mission — grow the game, support Lynn Youth Soccer, and expand access to competitive football." },
      { property: "og:title", content: "MHDFC" },
      { property: "og:description", content: "A nonprofit soccer club on the North Shore of Massachusetts. Three teams, one mission — grow the game, support Lynn Youth Soccer, and expand access to competitive football." },
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
    image: newsLynn,
    alt: "Youth players huddled at sunset",
  },
  {
    tag: "President's Update",
    date: "Feb 14, 2025",
    title: "World Cup Watch Party & Gear Drive in planning.",
    lede: "Planning is underway for a World Cup watch party paired with a gear collection benefiting Lynn Youth Soccer. Details on venue and date coming soon.",
    image: newsWatchparty,
    alt: "Fans cheering at a World Cup watch party",
  },
  {
    tag: "First XI",
    date: "Oct 4, 2024",
    title: "MHD FC opens fall campaign with a hard-fought draw at Seaside.",
    lede: "The First XI opened the OTHSL campaign with a spirited 1–1 draw. Match report and gallery to follow.",
    image: newsMatch,
    alt: "First XI match action on a coastal pitch",
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

          <div className="mt-8 flex items-center gap-4">
            <p className="eyebrow text-crimson">Latest</p>
            <div className="flex gap-2">
              {newsRotation.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`News item ${i + 1}`}
                  className={`h-px w-10 transition-colors ${i === idx ? "bg-crimson" : "bg-ink/20 hover:bg-ink/50"}`}
                />
              ))}
            </div>
          </div>

          <article key={idx} className="mt-6 grid md:grid-cols-12 gap-10 items-start animate-in fade-in duration-500">
            <div className="md:col-span-7">
              <p className="mono text-[11px] tracking-[0.3em] uppercase text-navy-soft flex items-center gap-3">
                <span className="text-crimson font-semibold">{item.tag}</span>
                <span className="w-1 h-1 rounded-full bg-ink/40" />
                <span>{item.date}</span>
              </p>
              <h1 className="mega-display text-ink text-[clamp(2rem,4.5vw,3.75rem)] mt-4">
                {item.title}
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/85">
                {item.lede}
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link to="/news" className="mono text-[11px] tracking-[0.28em] uppercase font-semibold bg-ink text-cream px-6 py-3 hover:bg-crimson transition-colors">
                  Read all news →
                </Link>
                <Link to="/contact" className="mono text-[11px] tracking-[0.28em] uppercase font-semibold border border-ink text-ink px-6 py-3 hover:bg-gold transition-colors">
                  Donate & Support
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-[4/3] overflow-hidden shadow-2xl border border-ink/10">
                <img
                  src={item.image.url}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* TEAMS + STATS */}
      <section className="bg-parchment border-y border-navy-deep/10">
        <div className="mx-auto max-w-[1400px] px-6 py-12">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-7">
            <div>
              <p className="eyebrow text-crimson">The Five Teams</p>
              <h2 className="display text-2xl md:text-3xl text-navy-deep mt-1.5">One crest, five sides.</h2>
            </div>
            <Link to="/teams" className="text-sm text-navy-deep font-semibold border-b-2 border-gold hover:text-crimson">All teams →</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7 border-y border-navy-deep/15 py-5">
            {[
              { n: "5", l: "Senior Teams" },
              { n: "24+", l: "Years of Play" },
              { n: "100%", l: "Volunteer-Run" },
              { n: "1", l: "Growing Partnership · Lynn YS" },
            ].map((s) => (
              <div key={s.l} className="border-t-2 border-gold pt-2">
                <p className="display text-2xl md:text-2xl text-navy-deep font-semibold">{s.n}</p>
                <p className="eyebrow text-[10px] text-navy-soft mt-1">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { name: "MHD FC O30's", league: "Over-30 Division" },
              { name: "MHD FC O40's", league: "Over-40 Division" },
              { name: "MHD FC O48's", league: "Over-48 Division" },
              { name: "MHD FC O55's", league: "Over-55 Division" },
              { name: "MHD FC O68's", league: "Over-68 Division" },
            ].map((t) => (
              <Link to="/teams" key={t.name} className="bg-cream border border-navy-deep/10 p-4 hover:border-gold transition-colors group block">
                <Crest className="w-6 h-7" />
                <p className="display text-base text-navy-deep mt-3 font-semibold">{t.name}</p>
                <p className="eyebrow text-[10px] text-gold mt-1">{t.league}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
