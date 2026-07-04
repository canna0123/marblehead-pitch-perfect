import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News · Marblehead Football Club" },
      { name: "description", content: "The latest updates from MHD FC — board news, community initiatives, and match reports." },
    ],
  }),
  component: News,
});

const posts = [
  {
    date: "2025-02-14",
    author: "J. Motoole",
    tag: "President's Update",
    title: "Lynn Youth Soccer partnership progressing; Watch Party & Gear Drive in planning",
    lede: "A brief update from the President on the past several weeks: Mike Grubor and Ethan Park have led our engagement with Lynn Youth Soccer, attending tryouts and identifying prospective scholarship recipients for NSSA. Board commitments are in and deposited at National Grand Bank. We're also planning a World Cup watch party with a gear drive at RIP Tide Lounge, and an end-of-season MHD community gathering.",
  },
  {
    date: "2025-01-08",
    author: "MHD FC Board",
    tag: "Announcement",
    title: "MHD FC opens operating account at National Grand Bank",
    lede: "As part of our formal nonprofit standing, MHD FC has opened its operating account at National Grand Bank. Initial board commitments have been deposited and the Treasurer is exploring a Venmo option for member collections and event fundraising.",
  },
  {
    date: "2024-11-22",
    author: "A. Rossi",
    tag: "Infrastructure",
    title: "Building the operational backbone: Google Workspace, records, and website",
    lede: "The Committee has identified operational infrastructure — Google Workspace, MHD FC Gmail accounts, document governance, sponsor tracking, and this website — as an immediate priority. Alessandro is coordinating with Ramsay and Sean on the buildout.",
  },
  {
    date: "2024-10-04",
    author: "Match Reports",
    tag: "First XI",
    title: "MHD FC opens fall campaign with a hard-fought draw at Seaside",
    lede: "The First XI opened the campaign with a spirited 1–1 draw. Match report and gallery to follow.",
  },
];

function News() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Latest Updates" title="Club News" subtitle="Board updates, announcements, and reports from around Marblehead Football Club." />
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
              <h2 className="display text-3xl md:text-4xl text-navy-deep font-semibold mt-4 leading-tight">{p.title}</h2>
              <p className="mt-4 text-lg text-foreground/85 leading-relaxed">{p.lede}</p>
              <button className="mt-6 text-crimson font-semibold border-b-2 border-crimson hover:border-navy-deep hover:text-navy-deep">Read the full update →</button>
            </article>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}
