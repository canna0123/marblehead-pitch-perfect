import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, Crest, Section } from "@/components/site-chrome";
import hero from "@/assets/hero-match.jpg";
import pitch from "@/assets/pitch-coast.jpg";
import huddle from "@/assets/squad-huddle.jpg";

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

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative bg-navy-deep text-cream overflow-hidden">
        <img src={hero} alt="MHD FC match action" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/50 to-navy-deep" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:py-40 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className="eyebrow text-gold">A Nonprofit Football Club · Est. 2001</p>
            <h1 className="display text-[clamp(3rem,8vw,7rem)] mt-5 leading-[0.95] font-medium">
              Football for the <em className="text-gold not-italic">community</em> — on the North Shore, since 2001.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-cream/80 leading-relaxed">
              Marblehead Football Club is a nonprofit 501(c)(3) fielding three teams and running programs that expand access to the game — in partnership with Lynn Youth Soccer and the North Shore Soccer Academy.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/about" className="bg-gold text-navy-deep px-7 py-3.5 font-semibold text-sm tracking-wide hover:bg-cream transition-colors">
                Our Mission
              </Link>
              <Link to="/contact" className="border border-gold/60 text-cream px-7 py-3.5 font-semibold text-sm tracking-wide hover:bg-gold hover:text-navy-deep transition-colors">
                Donate & Support
              </Link>
              <Link to="/teams" className="text-cream/80 text-sm underline underline-offset-8 decoration-gold/60 hover:text-gold">
                Meet the three teams →
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 justify-self-center md:justify-self-end">
            <div className="crest-frame p-8 bg-navy-deep/60 backdrop-blur-sm">
              <Crest className="w-40 h-48" />
            </div>
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

      {/* LYNN PARTNERSHIP */}
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <img src={huddle} alt="Youth players training" loading="lazy" width={1200} height={1400} className="w-full aspect-[4/5] object-cover border-4 border-gold" />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow text-gold">Community Partnership</p>
            <h2 className="display text-5xl md:text-6xl mt-4">Together with Lynn Youth Soccer.</h2>
            <p className="mt-6 text-cream/80 text-lg leading-relaxed">
              Through outreach led by our board and coaches, MHD FC has begun building a lasting partnership with Lynn Youth Soccer — attending tryouts, identifying scholarship candidates for the North Shore Soccer Academy, and expanding access to elite-level training for young players who might not otherwise have the opportunity.
            </p>
            <p className="mt-4 text-cream/80 text-lg leading-relaxed">
              Our goal is to name our first cohort of scholarship recipients ahead of the coming season.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6 border-t border-gold/30 pt-8">
              <div><p className="display text-4xl text-gold font-semibold">1st</p><p className="eyebrow text-cream/60 mt-2">Scholarship Cohort · Coming Season</p></div>
              <div><p className="display text-4xl text-gold font-semibold">Ongoing</p><p className="eyebrow text-cream/60 mt-2">Tryout Attendance in Lynn</p></div>
              <div><p className="display text-4xl text-gold font-semibold">NSSA</p><p className="eyebrow text-cream/60 mt-2">Player Development Pathway</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="eyebrow text-crimson">Upcoming Events</p>
            <h2 className="display text-5xl md:text-6xl text-navy-deep mt-3">Gather. Give. Grow the game.</h2>
          </div>
          <Link to="/events" className="text-navy-deep font-semibold border-b-2 border-gold hover:text-crimson">All events →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tag: "Fundraiser", title: "World Cup Watch Party & Gear Drive", when: "June 2026 · RIP Tide Lounge", body: "Community gathering with a gear collection for Lynn Youth Soccer. Suggested donation at the door; brief remarks at halftime." },
            { tag: "Community", title: "End-of-Season MHD Gathering", when: "TBA · Marblehead", body: "Bringing together OTHSL teams, the broader MHD community, and regional affiliates. Modest fundraiser, gear drive, and end-of-season toast." },
            { tag: "Board", title: "Public Announcement · Club Formation", when: "Spring 2026", body: "Formal press release introducing MHD FC's mission and inviting the community to become part of it — as members, donors, and volunteers." },
          ].map((e) => (
            <article key={e.title} className="border border-navy-deep/15 p-8 bg-cream flex flex-col hover:border-gold transition-colors">
              <p className="eyebrow text-crimson">{e.tag}</p>
              <h3 className="display text-2xl text-navy-deep font-semibold mt-3">{e.title}</h3>
              <p className="mono text-xs tracking-widest uppercase text-navy-soft mt-2">{e.when}</p>
              <p className="mt-5 text-foreground/75 leading-relaxed flex-1">{e.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* GLORY DAYS */}
      <section className="relative bg-navy-deep text-cream overflow-hidden">
        <img src={pitch} alt="Historic pitch" loading="lazy" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/60" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24">
          <p className="eyebrow text-gold">Glory Days</p>
          <h2 className="display text-5xl md:text-6xl mt-3">Moments the club will not forget.</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Link to="/glory-days" hash="2001" className="border border-gold/40 p-8 hover:bg-gold hover:text-navy-deep transition-colors group">
              <p className="eyebrow text-gold group-hover:text-navy-deep">Silverware · 2001</p>
              <p className="display text-3xl mt-3">BSSL Cup Final</p>
              <p className="mt-3 text-cream/75 group-hover:text-navy-deep/80">The club's inaugural piece of silverware. A season that put MHD on the North Shore map.</p>
            </Link>
            <Link to="/glory-days" hash="2018" className="border border-gold/40 p-8 hover:bg-gold hover:text-navy-deep transition-colors group">
              <p className="eyebrow text-gold group-hover:text-navy-deep">National Stage · 2018</p>
              <p className="display text-3xl mt-3">US Open Cup</p>
              <p className="mt-3 text-cream/75 group-hover:text-navy-deep/80">MHD FC's entry into the oldest cup competition in American football. A run the whole town turned out for.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold text-navy-deep py-20">
        <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className="eyebrow">Get involved</p>
            <h2 className="display text-4xl md:text-6xl mt-3 font-semibold">Play, coach, sponsor, or simply support the mission.</h2>
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
