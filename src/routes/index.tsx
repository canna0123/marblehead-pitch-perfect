import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-chrome";
import hero from "@/assets/hero-match.jpg";
import pitch from "@/assets/pitch-coast.jpg";
import huddle from "@/assets/squad-huddle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marblehead Over-40 Soccer Club · Est. 1981" },
      { name: "description", content: "Coastal Massachusetts adult soccer. A founding member of the New England Over-the-Hill Soccer League. Fixtures, squad, history since 1981." },
      { property: "og:title", content: "Marblehead Over-40 Soccer Club" },
      { property: "og:description", content: "40+ years on the pitch in the OTHSL. Seaside Park, Marblehead MA." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Stat({ n, l, s }: { n: string; l: string; s?: string }) {
  return (
    <div className="border-t-2 border-sand/20 pt-4">
      <p className="mono text-[10px] tracking-[0.3em] uppercase text-kit">{l}</p>
      <p className="jersey-num text-sand text-[clamp(3rem,7vw,6rem)] mt-1">{n}</p>
      {s && <p className="mono text-[10px] tracking-[0.2em] uppercase text-sand/50">{s}</p>}
    </div>
  );
}

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* HERO — full-bleed action photo with broadcast lower-third */}
      <section className="relative min-h-screen bg-navy-deep text-chalk overflow-hidden">
        <img src={hero} alt="Marblehead player striking the ball at Seaside Park" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/20 to-navy-deep" />
        <div className="absolute inset-0 pitch-lines opacity-40" />

        <div className="relative mx-auto max-w-[1400px] px-6 pt-32 pb-16 min-h-screen flex flex-col justify-between">
          <div className="flex items-center gap-3 mono text-[11px] tracking-[0.3em] uppercase text-sand/70">
            <span className="w-2 h-2 rounded-full bg-kit animate-pulse" />
            <span>Live · Season 44 · Fall Campaign</span>
            <span className="ml-auto hidden md:inline">42.4998°N / 70.8586°W</span>
          </div>

          <div className="max-w-6xl">
            <p className="mono text-[11px] tracking-[0.35em] uppercase text-kit">Marblehead, Massachusetts · Est. 1981</p>
            <h1 className="display text-[clamp(4rem,17vw,15rem)] mt-4">
              Older.<br/>
              <span className="text-kit">Faster</span> on the ball.
            </h1>
            <p className="mt-6 max-w-xl text-sand/80 text-lg md:text-xl leading-snug">
              We're the Marblehead men's over-40 side — a founding chapter of the New England Over-the-Hill Soccer League. Ninety minutes of proper football. Every Sunday since Reagan's first term.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Link to="/join" className="group inline-flex items-center gap-3 bg-kit text-chalk px-6 py-4 mono text-sm tracking-[0.25em] uppercase hover:bg-kit-hot transition-colors">
                Trial with the squad
                <span className="group-hover:translate-x-1 transition-transform">▸</span>
              </Link>
              <Link to="/schedule" className="mono text-xs tracking-[0.3em] uppercase text-sand/80 hover:text-kit underline underline-offset-8 decoration-kit/40">
                See fixtures →
              </Link>
            </div>
          </div>

          {/* Scoreboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16">
            <Stat n="44" l="Seasons" s="Consecutive" />
            <Stat n="3" l="Division" s="OTHSL East" />
            <Stat n="90'" l="Match Length" s="Two halves" />
            <Stat n="40+" l="Age Bracket" s="No exceptions" />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-kit text-chalk py-3 overflow-hidden ticker-mask">
        <div className="flex gap-12 whitespace-nowrap animate-marquee mono text-sm tracking-[0.3em] uppercase">
          {Array.from({length:2}).flatMap((_,i) => [
            "Next Fixture: vs. Salem Sr. FC · Sun 10:00",
            "★",
            "Result: Marblehead 2 — 1 Beverly",
            "★",
            "Home Kit: Navy / Red Trim",
            "★",
            "Recruiting: Center-back · Keeper cover",
            "★",
          ].map((t,j)=>(<span key={`${i}-${j}`}>{t}</span>)))}
        </div>
      </div>

      {/* SINCE 1981 — editorial slab */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <p className="mono text-[10px] tracking-[0.35em] uppercase text-kit">§ 01 · Origin</p>
          <p className="jersey-num text-[clamp(5rem,12vw,11rem)] text-navy mt-4 leading-[0.75]">1981</p>
          <p className="mono text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2">The founding autumn</p>
        </div>
        <div className="md:col-span-8 md:pt-8">
          <h2 className="display text-4xl md:text-6xl text-navy-deep">
            A side from Marblehead joined the Over-the-Hill league — and never left the pitch.
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-foreground/80">
            In the fall of 1981, a group of local players formed a team and joined the fledgling <a className="text-kit underline underline-offset-4" href="https://www.othsl.org" target="_blank" rel="noopener noreferrer">New England Over-the-Hill Soccer League</a>. Forty-plus seasons later we're still out at Seaside Park on Sunday mornings — same league, same standards, three generations of coastal footballers deep.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8 border-t-2 border-navy/10 pt-8">
            <div>
              <p className="jersey-num text-4xl md:text-5xl text-kit">01</p>
              <p className="mono text-xs uppercase tracking-widest mt-2">Founding Club<br/><span className="text-muted-foreground">OTHSL Charter</span></p>
            </div>
            <div>
              <p className="jersey-num text-4xl md:text-5xl text-kit">II</p>
              <p className="mono text-xs uppercase tracking-widest mt-2">Divisional Titles<br/><span className="text-muted-foreground">'09 · '17</span></p>
            </div>
            <div>
              <p className="jersey-num text-4xl md:text-5xl text-kit">∞</p>
              <p className="mono text-xs uppercase tracking-widest mt-2">Rounds at the Landing<br/><span className="text-muted-foreground">Post-match tradition</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* SQUAD — three age brackets, jersey cards */}
      <section className="bg-navy-deep text-chalk py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pitch-lines opacity-30" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="mono text-[10px] tracking-[0.35em] uppercase text-kit">§ 02 · The Squad</p>
              <h2 className="display text-5xl md:text-7xl mt-3">Three sides.<br/>One clubhouse.</h2>
            </div>
            <p className="max-w-md text-sand/70">Pick your bracket. All three train together on Thursday nights, then split into league fixtures on Sundays.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { num: "40", name: "Over-40s", div: "OTHSL Div. 3 East", note: "Our founding side. Competitive but honest. Room for one center-back this season." },
              { num: "50", name: "Over-50s", div: "OTHSL Masters", note: "Slower pace, sharper touches. Zero rebuilding — this group has been together twelve years." },
              { num: "30", name: "Over-30s", div: "Friendly / Prep", note: "The next generation. Rolls into the O-40 pipeline. Sunday afternoon slot." },
            ].map((s) => (
              <div key={s.num} className="group relative border-2 border-sand/15 hover:border-kit transition-colors p-8 bg-navy overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 kit-stripe opacity-40" />
                <p className="mono text-[10px] tracking-[0.3em] uppercase text-sand/50">Bracket</p>
                <p className="jersey-num text-[10rem] md:text-[12rem] text-kit leading-none -ml-2 group-hover:text-kit-hot transition-colors">{s.num}</p>
                <p className="display text-3xl mt-2">{s.name}</p>
                <p className="mono text-xs tracking-widest uppercase text-seaglass mt-2">{s.div}</p>
                <p className="text-sand/70 mt-4 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUDDLE — split image + copy */}
      <section className="grid md:grid-cols-2 min-h-[600px]">
        <div className="relative bg-navy-deep">
          <img src={huddle} alt="Marblehead players huddled on the sideline" loading="lazy" width={1400} height={1600} className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="bg-sand p-10 md:p-20 flex flex-col justify-center">
          <p className="mono text-[10px] tracking-[0.35em] uppercase text-kit">§ 03 · The Code</p>
          <h2 className="display text-4xl md:text-6xl text-navy-deep mt-4">
            Show up.<br/>
            Play hard.<br/>
            Buy the next round.
          </h2>
          <ul className="mt-10 space-y-4 mono text-sm uppercase tracking-widest text-navy-deep">
            <li className="flex gap-4 border-b border-navy/15 pb-4"><span className="text-kit">01</span> No slide tackles from behind.</li>
            <li className="flex gap-4 border-b border-navy/15 pb-4"><span className="text-kit">02</span> Referee's word is final. Full stop.</li>
            <li className="flex gap-4 border-b border-navy/15 pb-4"><span className="text-kit">03</span> Kit dues paid by season opener.</li>
            <li className="flex gap-4"><span className="text-kit">04</span> Post-match at the Landing. Non-negotiable.</li>
          </ul>
        </div>
      </section>

      {/* MATCH CENTRE preview */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="mono text-[10px] tracking-[0.35em] uppercase text-kit">§ 04 · Match Centre</p>
              <h2 className="display text-5xl md:text-7xl text-navy-deep mt-3">Next Three<br/>on the Card</h2>
            </div>
            <Link to="/schedule" className="mono text-xs tracking-[0.3em] uppercase text-navy-deep hover:text-kit underline underline-offset-8">Full fixture list →</Link>
          </div>

          <div className="border-t-2 border-navy-deep">
            {[
              { d: "SUN 03 NOV", t: "10:00", h: "Marblehead O-40", a: "Salem Sr. FC", v: "Seaside Park · Home", code: "MH-SLM/44" },
              { d: "SUN 10 NOV", t: "10:00", h: "Beverly Old Guard", a: "Marblehead O-40", v: "Endicott Turf · Away", code: "BEV-MH/44" },
              { d: "SUN 17 NOV", t: "09:30", h: "Marblehead O-40", a: "Cape Ann Utd.", v: "Seaside Park · Home", code: "MH-CAU/44" },
            ].map((m, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-6 border-b border-navy-deep/15 items-center hover:bg-sand/50 transition-colors">
                <p className="col-span-3 md:col-span-2 mono text-xs tracking-widest uppercase text-kit">{m.d}<br/><span className="text-navy-deep/60">{m.t}</span></p>
                <p className="col-span-9 md:col-span-6 display text-2xl md:text-4xl text-navy-deep">
                  {m.h} <span className="text-navy-deep/30">vs.</span> {m.a}
                </p>
                <p className="hidden md:block col-span-3 mono text-xs uppercase tracking-widest text-navy-deep/70">{m.v}</p>
                <p className="col-span-12 md:col-span-1 mono text-[10px] uppercase tracking-widest text-navy-deep/40 md:text-right">{m.code}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PITCH / VISIT */}
      <section className="relative bg-navy-deep text-chalk overflow-hidden">
        <img src={pitch} alt="Seaside Park pitch overlooking the Atlantic" loading="lazy" width={1600} height={1000} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-32 md:py-48 grid md:grid-cols-2 gap-10">
          <div>
            <p className="mono text-[10px] tracking-[0.35em] uppercase text-kit">§ 05 · The Pitch</p>
            <h2 className="display text-5xl md:text-7xl mt-4">Seaside Park.<br/>Wind off the harbor.</h2>
            <p className="mt-6 max-w-md text-sand/80 text-lg">Ocean Avenue, Marblehead. The best pitch north of Boston, if you don't mind seagulls stealing your snack at halftime.</p>
          </div>
          <div className="mono text-xs tracking-widest uppercase text-sand/80 self-end">
            <p className="border-t-2 border-sand/30 pt-4">Address<br/><span className="text-chalk normal-case text-base tracking-normal font-normal">Ocean Ave, Marblehead MA 01945</span></p>
            <p className="border-t border-sand/20 pt-4 mt-6">Parking<br/><span className="text-chalk normal-case text-base tracking-normal font-normal">Lot at the causeway. Free Sundays.</span></p>
            <p className="border-t border-sand/20 pt-4 mt-6">Warmup<br/><span className="text-chalk normal-case text-base tracking-normal font-normal">45 min pre-match. Bring your own ball.</span></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kit text-chalk py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 gap-10 items-center">
          <h2 className="display text-5xl md:text-7xl">Turning 40 soon?<br/>Bring your boots.</h2>
          <div className="md:text-right">
            <p className="max-w-md md:ml-auto text-chalk/90">Two trial sessions, no fee. If it clicks, you're in — dues cover kit, league fees, and the ref. That's it.</p>
            <Link to="/join" className="inline-flex items-center gap-3 mt-8 bg-navy-deep text-chalk px-8 py-5 mono text-sm tracking-[0.3em] uppercase hover:bg-black transition-colors">
              Request a Trial ▸
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
