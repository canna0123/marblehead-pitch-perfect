import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events · Marblehead Football Club" },
      { name: "description", content: "Upcoming MHD FC events — fundraisers, watch parties, gear drives, and community gatherings." },
    ],
  }),
  component: Events,
});

const events = [
  {
    tag: "Fundraiser · Community",
    title: "World Cup Watch Party & Gear Drive",
    when: "June 11, 2026 · Mexico vs. South Africa (Opening Match)",
    where: "RIP Tide Lounge, Marblehead",
    body: "Join MHD FC for the opening match of the World Cup. We'll be running a gear drive at the door for Lynn Youth Soccer — cleats, shin guards, balls, and kits welcome. Suggested donation at entry; brief remarks at halftime about the club and mission.",
    asks: ["Bring gently used soccer gear", "Suggested donation at door", "Spread the word"],
  },
  {
    tag: "Community · End of Season",
    title: "End-of-Season MHD Gathering",
    when: "Late Fall 2026 · Date TBA",
    where: "Marblehead — venue to be announced",
    body: "A gathering that brings together the OTHSL teams, the broader MHD FC community, and regional affiliates like 068 Beverly. Family-friendly, with a second gear drive and modest fundraiser built in.",
    asks: ["All ages welcome", "Second gear drive of the year", "Volunteers needed"],
  },
  {
    tag: "Announcement · Board",
    title: "Public Announcement · MHD FC Formation",
    when: "Spring 2026",
    where: "Press release + website launch",
    body: "A formal public introduction of MHD FC's nonprofit mission — inviting the community to become supporters, sponsors, and volunteers. Foundation for building a lasting donor and partner base.",
    asks: ["Sponsors welcome", "Local media contacts appreciated", "Board briefing available on request"],
  },
  {
    tag: "Scholarship",
    title: "First NSSA Scholarship Cohort — Named",
    when: "Ahead of the coming season",
    where: "Lynn, MA · NSSA training facility",
    body: "MHD FC will name its first cohort of scholarship recipients — youth players identified through our partnership with Lynn Youth Soccer — for placement in the North Shore Soccer Academy player development pathway.",
    asks: ["Donors: sponsor a scholarship", "Coaches: mentor a player", "Community: attend the announcement"],
  },
];

function Events() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Gather · Give · Grow the Game" title="Upcoming Events" subtitle="Every MHD FC event supports our mission — through gear collection, direct donations, or building the community that keeps the club running." />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e) => (
            <article key={e.title} className="border border-navy-deep/15 bg-cream flex flex-col hover:border-gold transition-colors">
              <div className="bg-navy-deep text-cream px-8 py-5">
                <p className="eyebrow text-gold">{e.tag}</p>
                <h2 className="display text-2xl md:text-3xl mt-2 font-semibold">{e.title}</h2>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-4 mono text-xs uppercase tracking-widest text-navy-soft border-b border-navy-deep/10 pb-4">
                  <div><p className="text-gold">When</p><p className="text-navy-deep normal-case tracking-normal mt-1 text-sm">{e.when}</p></div>
                  <div><p className="text-gold">Where</p><p className="text-navy-deep normal-case tracking-normal mt-1 text-sm">{e.where}</p></div>
                </div>
                <p className="mt-5 text-foreground/85 leading-relaxed">{e.body}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {e.asks.map((a) => (
                    <li key={a} className="flex items-start gap-2"><span className="text-gold mt-1">◆</span><span>{a}</span></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-gold text-navy-deep py-16">
        <div className="mx-auto max-w-[1400px] px-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow">Want to host or sponsor an event?</p>
            <h2 className="display text-4xl md:text-5xl mt-2 font-semibold">Let's build it together.</h2>
          </div>
          <a href="/contact" className="bg-navy-deep text-cream px-8 py-4 font-semibold tracking-wide hover:bg-crimson transition-colors">Contact the Board →</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
