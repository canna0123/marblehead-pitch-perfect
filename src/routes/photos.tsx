import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";
import greenLegacy from "@/assets/photo-green-legacy.jpg.asset.json";
import atlanticChamps from "@/assets/photo-atlantic-champs.jpg.asset.json";
import atlanticCup from "@/assets/photo-atlantic-cup.jpg.asset.json";
import teamMasks from "@/assets/photo-team-masks.jpg.asset.json";
import ptzoneTeam from "@/assets/photo-ptzone-team.jpg.asset.json";
import argosTeam from "@/assets/photo-argos-team.jpg.asset.json";
import bigGroupGoal from "@/assets/photo-big-group-goal.jpg.asset.json";
import trioCup from "@/assets/photo-trio-cup.jpg.asset.json";
import trioThumbs from "@/assets/photo-trio-thumbs.jpg.asset.json";
import actionDuel from "@/assets/photo-action-duel.jpg.asset.json";

export const Route = createFileRoute("/photos")({
  head: () => ({
    meta: [
      { title: "Team Photos · Marblehead Football Club" },
      { name: "description", content: "Two decades of MHD FC team photography — from the founding side to today." },
    ],
  }),
  component: Photos,
});

const eras = [
  { id: "2000", label: "2000 – 2004", note: "The founding era. First XI photographs, early cup runs, and the 2001 BSSL Cup Final side." },
  { id: "2005", label: "2005 – 2009", note: "OTHSL charter years. Team photos across multiple seasons of continuous play." },
  { id: "2010", label: "2010 – 2014", note: "Growth of the club. Second and third team photography and early 068 affiliate images." },
  { id: "2015", label: "2015 – 2019", note: "The Open Cup years. Squad photography around the 2018 US Open Cup run." },
  { id: "2020", label: "2020 – 2024", note: "The modern MHD FC. Nonprofit era, expanded rosters, and the current three-team structure." },
];

const pool = [hero, pitch, huddle, hero, pitch, huddle];

function Photos() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Archive" title="Team Photos" subtitle="Two decades on the pitch, one squad at a time. Browse by era." />

      <div className="bg-cream border-b border-navy-deep/10 sticky top-[calc(5rem+2rem+2.25rem)] z-30">
        <div className="mx-auto max-w-[1400px] px-6 py-4 flex flex-wrap gap-2 text-sm">
          {eras.map((e) => (
            <a key={e.id} href={`#${e.id}`} className="border border-navy-deep/20 px-4 py-2 hover:border-gold hover:text-crimson">
              {e.label}
            </a>
          ))}
        </div>
      </div>

      {eras.map((era, idx) => (
        <section key={era.id} id={era.id} className={`py-20 border-b border-navy-deep/10 ${idx % 2 === 1 ? "bg-parchment" : ""}`}>
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <p className="eyebrow text-crimson">Era</p>
                <h2 className="display text-5xl md:text-6xl text-navy-deep font-semibold mt-3">{era.label}</h2>
              </div>
              <p className="max-w-md text-foreground/75">{era.note}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pool.map((src, i) => (
                <figure key={i} className="group">
                  <div className="aspect-[4/3] overflow-hidden border border-navy-deep/15 bg-navy-deep">
                    <img src={src} alt={`${era.label} team photo ${i + 1}`} loading="lazy" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                  <figcaption className="mt-3 flex justify-between mono text-[11px] tracking-widest uppercase text-navy-soft">
                    <span>MHD FC · Squad</span>
                    <span>{era.label.split(" ")[0].replace("–", "").trim()}–{era.label.split(" ").slice(-1)[0]}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-crimson">Contribute</p>
          <h2 className="display text-4xl text-navy-deep mt-4">Have a team photo we should add?</h2>
          <p className="mt-4 text-foreground/80">The archive lives and grows through the community. Send scans or originals to <a href="mailto:info@mhdfc.org" className="text-crimson border-b border-crimson">info@mhdfc.org</a> and we'll credit you in the caption.</p>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
