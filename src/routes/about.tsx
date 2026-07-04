import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Marblehead Football Club" },
      { name: "description", content: "About MHD FC — mission, values, and community partnership with Lynn Youth Soccer." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader
        eyebrow="About the Club"
        title="A nonprofit football club with a mission bigger than the game."
        subtitle="MHD FC is run entirely by volunteers. Every board member contributes annually; every fundraising dollar flows into scholarships, gear, and access for young players on the North Shore."
      />

      <Section>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-crimson">Our Mission</p>
            <h2 className="display text-4xl md:text-5xl text-navy-deep mt-4">Expand access. Elevate the community. Honor the game.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>Marblehead Football Club exists to keep competitive football strong on the North Shore of Massachusetts, and to leverage the club's resources — people, relationships, and modest funds — to open pathways for young players who might otherwise be left on the sideline.</p>
            <p>We do this through three senior teams that generate community, a growing partnership with Lynn Youth Soccer, and a scholarship pipeline into the North Shore Soccer Academy (NSSA).</p>
          </div>
        </div>
      </Section>

      <section className="bg-parchment border-y border-navy-deep/10">
        <div className="mx-auto max-w-[1400px] px-6 py-20 grid md:grid-cols-3 gap-10">
          {[
            { t: "Access", b: "Remove financial and geographic barriers that keep talented youth players out of higher-level football." },
            { t: "Community", b: "Bring together players, families, and supporters across the North Shore — one club, many neighborhoods." },
            { t: "Craft", b: "Play the game with respect: for opponents, for officials, for the club's founders, and for those who will inherit the crest." },
          ].map((v) => (
            <div key={v.t} className="border-t-2 border-gold pt-6">
              <p className="display text-3xl text-navy-deep font-semibold">{v.t}</p>
              <p className="mt-4 text-foreground/80 leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <Section className="bg-navy-deep text-cream">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow text-gold">Governance & Standing</p>
            <h2 className="display text-4xl md:text-5xl mt-4">A properly incorporated nonprofit.</h2>
            <p className="mt-6 text-cream/80 leading-relaxed text-lg">MHD FC is organized as a Massachusetts nonprofit and holds an operating account at National Grand Bank. We are governed by a volunteer board of directors, guided by our by-laws, and accountable to our members and partners.</p>
          </div>
          <div className="border border-gold/40 p-8">
            <p className="eyebrow text-gold">Quick Links</p>
            <ul className="mt-6 space-y-3 text-lg">
              <li><Link to="/bylaws" className="hover:text-gold border-b border-gold/40">Club By-Laws</Link></li>
              <li><Link to="/committee" className="hover:text-gold border-b border-gold/40">Club Committee</Link></li>
              <li><Link to="/honors" className="hover:text-gold border-b border-gold/40">Club Honors</Link></li>
              <li><Link to="/history" className="hover:text-gold border-b border-gold/40">Club History</Link></li>
              <li><Link to="/contact" className="hover:text-gold border-b border-gold/40">Contact the Board</Link></li>
            </ul>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
