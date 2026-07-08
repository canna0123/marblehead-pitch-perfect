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
            <p className="eyebrow text-crimson">Background & Foundation</p>
            <h2 className="display text-4xl md:text-5xl text-navy-deep mt-4">Built on an already strong North Shore soccer community.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>For years, more than 100 current and former players from Marblehead and surrounding towns — Salem, Beverly, Swampscott, Nahant, and Lynn — have come together through pickup games, local leagues, and a shared passion for the game.</p>
            <p>This group has grown beyond just playing, forming a close-knit network supported by regular matches, team communication, and a culture of connection that extends off the field.</p>
            <p>That sense of community has always gone hand-in-hand with a desire to give back. Informal gear drives within the group helped collect and distribute equipment to players in Lynn through a partnership with Lynn Youth Soccer. These efforts highlighted both the needs within nearby communities and the opportunity to make a broader, lasting impact.</p>
            <p>MHDFC was created to build on this foundation — preserving the culture and relationships that already exist, while providing a structured platform to expand access, grow the game, and support the next generation of players.</p>
            <p className="display text-2xl text-navy-deep pt-2">Developing players. Expanding access. Building community.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-cream border-y border-navy-deep/10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-crimson">Mission</p>
            <h2 className="display text-4xl md:text-5xl text-navy-deep mt-4">Make the game more accessible, inclusive, and impactful.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Marblehead Football Club (MHDFC) is a nonprofit organization committed to expanding access to high-quality soccer training and development for all players.
            </p>
            <p>
              Our mission is to remove barriers to entry — particularly for players from Lynn and surrounding communities — by reducing financial constraints, improving access to facilities, and providing equipment and resources so every child has the opportunity to grow through the game.
            </p>
            <p>
              At MHDFC, we believe soccer is more than just a sport. It is a powerful tool for building confidence, fostering resilience, and creating lasting connections. Through dedicated coaching, player development, and a supportive environment, we aim to develop not only better players, but stronger, more confident young people.
            </p>
            <p>
              Beyond the field, MHDFC strengthens community through events, scholarships, and partnerships that connect Marblehead to the broader soccer landscape.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link to="/history" className="text-navy-deep font-semibold border-b-2 border-gold hover:text-crimson">Read the History →</Link>
              <Link to="/committee" className="text-navy-deep font-semibold border-b-2 border-gold hover:text-crimson">Meet the Committee →</Link>
              
            </div>
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
