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
  {
    id: "early",
    label: "Early Days",
    note: "The founding era. First XI photographs, early cup runs, and the sides that built the club.",
    photos: [greenLegacy, atlanticChamps, atlanticCup],
  },
  {
    id: "growth",
    label: "Continued Growth",
    note: "The club expands — second sides, new affiliations, and the years that carried MHD FC into the modern era.",
    photos: [teamMasks, ptzoneTeam, argosTeam, bigGroupGoal],
  },
  {
    id: "current",
    label: "Current Times",
    note: "The modern MHD FC. Nonprofit era, expanded rosters, and the sides taking the pitch today.",
    photos: [trioCup, trioThumbs, actionDuel],
  },
];

function Photos() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Archive" title="Team Photos" subtitle="Two decades on the pitch, one squad at a time." />

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
              {era.photos.map((src, i) => (
                <figure key={i} className="group">
                  <div className="aspect-[4/3] overflow-hidden border border-navy-deep/15 bg-navy-deep">
                    <img src={src.url} alt={`${era.label} team photo ${i + 1}`} loading="lazy" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                  <figcaption className="mt-3 flex justify-between mono text-[11px] tracking-widest uppercase text-navy-soft">
                    <span>MHD FC · Squad</span>
                    <span>{era.label}</span>
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
