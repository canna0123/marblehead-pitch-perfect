import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-chrome";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Match Centre · Marblehead O-40 SC" },
      { name: "description", content: "Fall 2025 fixture list and results for Marblehead Over-40 Soccer Club in the OTHSL." },
      { property: "og:title", content: "Match Centre · Marblehead O-40 SC" },
      { property: "og:description", content: "OTHSL fixtures, results, and standings for Marblehead." },
      { property: "og:url", content: "/schedule" },
    ],
    links: [{ rel: "canonical", href: "/schedule" }],
  }),
  component: Schedule,
});

const fixtures = [
  { d: "SUN 03 NOV", t: "10:00", h: "Marblehead O-40", a: "Salem Sr. FC", v: "Seaside Park", type: "HOME", code: "MH-SLM/44" },
  { d: "SUN 10 NOV", t: "10:00", h: "Beverly Old Guard", a: "Marblehead O-40", v: "Endicott Turf", type: "AWAY", code: "BEV-MH/44" },
  { d: "SUN 17 NOV", t: "09:30", h: "Marblehead O-40", a: "Cape Ann Utd.", v: "Seaside Park", type: "HOME", code: "MH-CAU/44" },
  { d: "SUN 24 NOV", t: "10:00", h: "Ipswich Vets", a: "Marblehead O-40", v: "Bialek Park", type: "AWAY", code: "IPS-MH/44" },
  { d: "SUN 01 DEC", t: "10:00", h: "Marblehead O-40", a: "North Shore SC", v: "Seaside Park", type: "HOME", code: "MH-NSS/44" },
  { d: "SUN 08 DEC", t: "13:00", h: "Marblehead O-40", a: "Danvers Old Boys", v: "Seaside Park", type: "HOME", code: "MH-DAN/44" },
];

const results = [
  { d: "27 OCT", h: "Marblehead", hs: 2, a: "Beverly", as: 1, code: "W" },
  { d: "20 OCT", h: "Gloucester", hs: 0, a: "Marblehead", as: 3, code: "W" },
  { d: "13 OCT", h: "Marblehead", hs: 1, a: "Peabody", as: 1, code: "D" },
  { d: "06 OCT", h: "Salem", hs: 2, a: "Marblehead", as: 2, code: "D" },
];

function Schedule() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <section className="bg-navy-deep text-chalk pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pitch-lines opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <p className="mono text-[10px] tracking-[0.35em] uppercase text-kit">Season 44 · Fall Campaign</p>
          <h1 className="display text-[clamp(4rem,14vw,12rem)] mt-4">Match<br/>Centre</h1>
          <p className="mt-6 max-w-xl text-sand/70">All fixtures on the OTHSL East calendar. Kickoff times set by home side; check the ticker morning-of for weather calls.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="display text-4xl text-navy-deep mb-8 flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-kit animate-pulse" /> Upcoming
            </h2>
            <div className="border-t-2 border-navy-deep">
              {fixtures.map((m, i) => (
                <div key={i} className="grid grid-cols-12 gap-3 py-5 border-b border-navy-deep/15 items-center">
                  <p className="col-span-3 md:col-span-2 mono text-xs tracking-widest uppercase text-kit">{m.d}<br/><span className="text-navy-deep/60">{m.t}</span></p>
                  <p className="col-span-6 md:col-span-6 display text-xl md:text-2xl text-navy-deep leading-tight">
                    {m.h} <span className="text-navy-deep/30">v</span> {m.a}
                  </p>
                  <p className="col-span-3 md:col-span-2 mono text-[10px] uppercase tracking-widest text-navy-deep/70">{m.v}</p>
                  <p className={`col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-widest md:text-right ${m.type === "HOME" ? "text-kit" : "text-seaglass"}`}>
                    ● {m.type} · {m.code}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <h2 className="display text-4xl text-navy-deep mb-8">Recent</h2>
            <div className="space-y-3">
              {results.map((r, i) => (
                <div key={i} className="bg-navy-deep text-chalk p-5 flex items-center gap-4">
                  <span className={`jersey-num text-3xl ${r.code === "W" ? "text-seaglass" : r.code === "D" ? "text-sand" : "text-kit"}`}>{r.code}</span>
                  <div className="flex-1">
                    <p className="mono text-[10px] tracking-widest uppercase text-sand/50">{r.d}</p>
                    <p className="display text-lg">{r.h} <span className="text-kit">{r.hs}</span> — <span className="text-kit">{r.as}</span> {r.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-sand p-6 border-l-4 border-kit">
              <p className="mono text-[10px] tracking-widest uppercase text-kit">Standings · Div. 3 East</p>
              <p className="jersey-num text-6xl text-navy-deep mt-2">3<span className="text-2xl align-super">rd</span></p>
              <p className="mono text-xs uppercase tracking-widest text-navy-deep/70">P 8 · W 4 · D 2 · L 2 · Pts 14</p>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
}
