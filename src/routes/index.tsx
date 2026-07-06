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

      {/* HERO — editorial, overlapping display type + photo */}
      <section className="relative bg-background overflow-hidden border-b border-ink/15">
        <div className="mx-auto max-w-[1600px] px-6 pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="flex items-center gap-4 mono text-[11px] tracking-[0.3em] uppercase text-navy-soft">
            <span className="w-8 h-px bg-crimson" />
            <span>A Nonprofit Football Club · Est. 2001 · North Shore, MA</span>
          </div>

          <div className="relative mt-6 md:mt-8">
            {/* Image block sits behind and to the left */}
            <div className="absolute left-0 top-[30%] w-[46%] md:w-[34%] aspect-[4/5] overflow-hidden z-0 shadow-2xl">
              <img src={hero} alt="MHD FC match action" width={1200} height={1500} className="w-full h-full object-cover" />
            </div>

            {/* Stacked wordmark — trimmed */}
            <h1 className="relative z-10 mega-display text-ink text-[clamp(2.75rem,10vw,9rem)]">
              <span className="block">Marblehead</span>
              <span className="block pl-[16%] md:pl-[24%]">Football</span>
              <span className="block text-crimson">Club</span>
            </h1>
          </div>

          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 md:col-start-6 text-base md:text-lg leading-relaxed text-foreground/85">
              MHD FC is a nonprofit 501(c)(3) fielding three senior teams and running programs that expand access to the game — in partnership with <strong>Lynn Youth Soccer</strong> and the <strong>North Shore Soccer Academy</strong>.
            </p>
            <div className="md:col-span-12 flex flex-wrap items-center gap-4 mt-2">
              <Link to="/about" className="mono text-[11px] tracking-[0.28em] uppercase font-semibold bg-ink text-cream px-6 py-3 hover:bg-crimson transition-colors">
                Our Mission
              </Link>
              <Link to="/contact" className="mono text-[11px] tracking-[0.28em] uppercase font-semibold border border-ink text-ink px-6 py-3 hover:bg-gold transition-colors">
                Donate & Support
              </Link>
              <Link to="/teams" className="mono text-[11px] tracking-[0.28em] uppercase text-ink underline underline-offset-8 decoration-crimson hover:text-crimson">
                Meet the three teams →
              </Link>
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
