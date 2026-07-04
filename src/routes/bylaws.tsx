import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/bylaws")({
  head: () => ({
    meta: [
      { title: "Club By-Laws · Marblehead Football Club" },
      { name: "description", content: "The governing by-laws of Marblehead Football Club, a Massachusetts nonprofit." },
    ],
  }),
  component: Bylaws,
});

const articles = [
  { n: "I", t: "Name & Purpose", b: "The name of the organization is Marblehead Football Club (\"MHD FC\"). The Club is organized exclusively for charitable and educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code — including the promotion of amateur soccer, the support of youth development, and the fostering of community across the North Shore of Massachusetts." },
  { n: "II", t: "Membership", b: "Membership is open to any individual who supports the mission of the Club, subscribes to these by-laws, and remits any dues established by the Committee. There shall be no discrimination on the basis of race, color, national origin, sex, gender identity, sexual orientation, religion, or disability." },
  { n: "III", t: "The Committee", b: "The affairs of the Club are managed by a Committee (the \"Board\") composed of not fewer than five (5) and not more than eleven (11) members, each serving a two-year term. Officers include a President, Vice President, Treasurer, and Secretary." },
  { n: "IV", t: "Meetings", b: "The Committee shall meet at least quarterly. An annual general meeting shall be held before the end of each calendar year and shall be open to the full membership." },
  { n: "V", t: "Finances", b: "All Club funds shall be deposited with a federally insured financial institution. The Treasurer shall present a report of Club finances at each Committee meeting and prepare an annual financial statement for the membership." },
  { n: "VI", t: "Teams & Competitions", b: "The Club may field one or more teams in sanctioned adult amateur competitions. Team captains are appointed by the Committee. All players must abide by the Code of Conduct adopted by the Committee." },
  { n: "VII", t: "Amendments", b: "These by-laws may be amended by a two-thirds vote of the Committee, provided notice of the proposed amendment has been circulated at least fourteen (14) days in advance." },
  { n: "VIII", t: "Dissolution", b: "Upon dissolution of the Club, any remaining assets shall be distributed to one or more organizations qualified under Section 501(c)(3) with missions consistent with those of the Club." },
];

function Bylaws() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Governance" title="Club By-Laws" subtitle="Adopted by the Committee. Governing document of Marblehead Football Club, a Massachusetts nonprofit organization." />
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="mono text-xs uppercase tracking-widest text-navy-soft mb-10 flex justify-between border-b border-navy-deep/20 pb-4">
            <span>Ratified · 2023 Revision</span>
            <span>Effective Immediately</span>
          </div>
          <div className="space-y-10">
            {articles.map((a) => (
              <article key={a.n} className="grid grid-cols-[auto_1fr] gap-6">
                <p className="display text-3xl text-gold font-semibold w-16">{a.n}</p>
                <div>
                  <h2 className="display text-2xl text-navy-deep font-semibold">{a.t}</h2>
                  <p className="mt-3 text-foreground/85 leading-relaxed">{a.b}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 border-t border-navy-deep/20 pt-6 mono text-xs uppercase tracking-widest text-navy-soft flex justify-between">
            <span>End of By-Laws</span>
            <span>Signed · Al Wilson, President</span>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
