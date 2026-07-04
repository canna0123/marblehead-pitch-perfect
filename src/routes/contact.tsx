import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Marblehead Football Club" },
      { name: "description", content: "Get in touch with MHD FC — for tryouts, sponsorships, donations, or media enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Get in touch" title="Contact the Club" subtitle="Whether you're a prospective player, a sponsor, a partner from a youth organization, or a member of the community looking to support the mission — we'd love to hear from you." />

      <Section>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-8">
            <div>
              <p className="eyebrow text-crimson">General Enquiries</p>
              <p className="display text-2xl text-navy-deep font-semibold mt-2">info@mhdfc.org</p>
            </div>
            <div>
              <p className="eyebrow text-crimson">President</p>
              <p className="display text-xl text-navy-deep mt-2">Al Wilson · president@mhdfc.org</p>
            </div>
            <div>
              <p className="eyebrow text-crimson">Treasurer & Donations</p>
              <p className="display text-xl text-navy-deep mt-2">Ramsay Bell · treasurer@mhdfc.org</p>
              <p className="text-foreground/75 mt-2 text-sm">Operating account held at National Grand Bank. Venmo option coming soon for annual commitments and event fundraising.</p>
            </div>
            <div>
              <p className="eyebrow text-crimson">Community & Partnerships</p>
              <p className="text-navy-deep mt-2">Lynn Youth Soccer · NSSA · 068 Beverly</p>
            </div>
            <div className="border-t border-navy-deep/15 pt-6">
              <p className="eyebrow text-navy-soft">Postal</p>
              <p className="text-navy-deep mt-2">Marblehead Football Club<br/>Marblehead, MA 01945</p>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="border border-navy-deep/15 bg-cream p-8 md:p-10 space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you — we will be in touch."); }}>
              <p className="eyebrow text-crimson">Send a Message</p>
              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="eyebrow text-navy-soft">Full Name</span>
                  <input required className="mt-2 w-full bg-transparent border-b-2 border-navy-deep/40 py-2 focus:outline-none focus:border-gold text-lg" />
                </label>
                <label className="block">
                  <span className="eyebrow text-navy-soft">Email</span>
                  <input type="email" required className="mt-2 w-full bg-transparent border-b-2 border-navy-deep/40 py-2 focus:outline-none focus:border-gold text-lg" />
                </label>
              </div>
              <label className="block">
                <span className="eyebrow text-navy-soft">Subject</span>
                <select className="mt-2 w-full bg-transparent border-b-2 border-navy-deep/40 py-2 focus:outline-none focus:border-gold text-lg">
                  <option>Player enquiry · 2025 Season</option>
                  <option>Donation or sponsorship</option>
                  <option>Gear drive · Lynn Youth Soccer</option>
                  <option>Media / press</option>
                  <option>Volunteer with the club</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="eyebrow text-navy-soft">Message</span>
                <textarea rows={6} required className="mt-2 w-full bg-transparent border-b-2 border-navy-deep/40 py-2 focus:outline-none focus:border-gold text-lg resize-none" />
              </label>
              <button type="submit" className="bg-navy-deep text-cream px-8 py-4 font-semibold tracking-wide hover:bg-crimson transition-colors">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </Section>

      <section className="bg-gold text-navy-deep py-14">
        <div className="mx-auto max-w-[1400px] px-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow">Now Recruiting for 2025</p>
            <p className="display text-3xl md:text-4xl mt-1 font-semibold">All three teams are accepting new players.</p>
          </div>
          <p className="mono text-sm uppercase tracking-widest">First XI · Over-40 · 068 Beverly</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
