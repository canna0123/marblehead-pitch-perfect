import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News · Marblehead Football Club" },
      {
        name: "description",
        content: "The latest updates from MHD FC — board news, community initiatives, and match reports.",
      },
    ],
  }),
  component: News,
});

const posts = [
  {
    date: "2026-05-01",
    author: "MHD FC Board",
    tag: "Community Partnership",
    title: "Together with Lynn Youth Soccer — building a lasting partnership",
    lede: "Through outreach led by our board and coaches, MHD FC has begun building a lasting partnership with Lynn Youth Soccer — attending tryouts, identifying scholarship candidates for the North Shore Soccer Academy, and expanding access to elite-level training for young players who might not otherwise have the opportunity. Our goal is to name our first cohort of scholarship recipients ahead of the coming season. Milestones: 1st scholarship cohort · ongoing tryout attendance in Lynn · NSSA player-development pathway.",
  },
  {
    date: "2026-06-14",
    author: "Admin",
    tag: "President's Update",
    title: "Watch Party & Gear Drive in planning",
    lede: "We are planning a World Cup watch party with a gear drive at RIP Tide Lounge, and an end-of-season MHD community gathering. Stay tuned for more details. Excited to see you all there.",
  },
  {
    date: "2026-03-04",
    author: "Match Reports",
    tag: "First XI",
    title: "MHD FC O30's opens Spring campaign with a hard-fought draw at Lynfield",
    lede: "The First XI opened the campaign with a spirited 1–1 draw. Match report and gallery to follow.",
  },
];

function News() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader
        eyebrow="Latest Updates"
        title="Club News"
        subtitle="Board updates, announcements, and reports from around Marblehead Football Club."
      />
      <Section>
        <div className="max-w-4xl mx-auto space-y-14">
          {posts.map((p) => (
            <article key={p.title} className="border-b border-navy-deep/15 pb-14 last:border-0">
              <div className="flex items-center gap-4 mono text-xs uppercase tracking-widest text-navy-soft">
                <span className="text-crimson font-semibold">{p.tag}</span>
                <span>·</span>
                <time>{p.date}</time>
                <span>·</span>
                <span>{p.author}</span>
              </div>
              <h2 className="display text-3xl md:text-4xl text-navy-deep font-semibold mt-4 leading-tight">
                {p.title}
              </h2>
              <p className="mt-4 text-lg text-foreground/85 leading-relaxed">{p.lede}</p>
              <button className="mt-6 text-crimson font-semibold border-b-2 border-crimson hover:border-navy-deep hover:text-navy-deep">
                Read the full update →
              </button>
            </article>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}
