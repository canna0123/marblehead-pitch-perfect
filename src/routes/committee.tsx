import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Club Committee · Marblehead Football Club" },
      { name: "description", content: "The volunteer board of directors of MHD FC." },
    ],
  }),
  component: Committee,
});

const board = [
  { name: "Al Wilson", role: "President", note: "Leads outreach with Lynn Youth Soccer and stewards long-term club strategy." },
  { name: "Tripp Robinson", role: "Vice President", note: "Board Member commitment holder. Co-lead on treasury and infrastructure planning." },
  { name: "Ramsay Bell", role: "Treasurer", note: "Oversees the National Grand Bank operating account and is exploring Venmo for member collections." },
  { name: "Sean McCarthy", role: "Secretary", note: "Keeps Committee meeting notes and maintains the club's official records." },
  { name: "Mike Grubor", role: "Board Member · Player Development", note: "Led the initial engagement with Lynn Youth Soccer leadership and tryout attendance." },
  { name: "Ethan Park", role: "Board Member · Player Development", note: "Co-lead on Lynn Youth Soccer outreach and identifying scholarship candidates for NSSA." },
  { name: "Alessandro Rossi", role: "Board Member · Infrastructure", note: "Building out Google Workspace, document governance, and long-term operational tooling." },
];

const coaches = [
  "NSSA Coaching Staff — Player Development Partnership",
  "MHD FC First XI Captain",
  "MHD FC Over-40 Captain",
  "068 Beverly Affiliate Liaison",
];

function Committee() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Volunteer Leadership" title="The Club Committee" subtitle="MHD FC is run entirely by volunteers. Every member of the Committee serves without compensation and contributes an annual board commitment." />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {board.map((m) => (
            <article key={m.name} className="border border-navy-deep/15 p-8 bg-cream hover:border-gold transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="display text-2xl text-navy-deep font-semibold">{m.name}</p>
                  <p className="eyebrow text-crimson mt-2">{m.role}</p>
                </div>
                <div className="w-14 h-14 border-2 border-gold flex items-center justify-center display text-2xl text-navy-deep font-semibold shrink-0">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <p className="mt-5 text-foreground/80 leading-relaxed">{m.note}</p>
            </article>
          ))}
        </div>
      </Section>
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <p className="eyebrow text-gold">Coaching & Affiliate Contacts</p>
          <h2 className="display text-4xl md:text-5xl mt-4">Working alongside the Committee.</h2>
          <ul className="mt-10 grid md:grid-cols-2 gap-4">
            {coaches.map((c) => (
              <li key={c} className="border-l-2 border-gold pl-4 py-2 text-cream/85">{c}</li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
