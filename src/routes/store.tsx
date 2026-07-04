import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHeader, Section, Crest } from "@/components/site-chrome";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Club Store · Marblehead Football Club" },
      { name: "description", content: "MHD FC official merchandise — kits, scarves, and gear. All proceeds support the club's nonprofit mission." },
    ],
  }),
  component: Store,
});

const items = [
  { name: "MHD FC Home Kit", price: "$65", tag: "Player Issue", note: "Navy & gold with embroidered crest. Junior and adult sizing." },
  { name: "Club Scarf", price: "$28", tag: "Terrace Classic", note: "Navy, gold, and cream. Woven, not printed. Fringed ends." },
  { name: "Crest Hoodie", price: "$52", tag: "Warm-up", note: "Heavyweight fleece with embroidered chest crest. Cream or navy." },
  { name: "1901 Anniversary Tee", price: "$32", tag: "Heritage", note: "Cotton tee with tonal club crest. Marks the founding year." },
  { name: "Enamel Crest Pin", price: "$12", tag: "Small-batch", note: "Hard-enamel pin with gold-plated backing. Ideal club gift." },
  { name: "Training Ball", price: "$40", tag: "NSSA edition", note: "Match-weight ball. Proceeds fund a Lynn Youth Soccer scholarship." },
];

function Store() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <PageHeader eyebrow="Wear the crest" title="Club Store" subtitle="Every purchase from the MHD FC store supports the club's nonprofit mission — kit for our teams, scholarships for our partners, and gear for the young players we serve." />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.name} className="border border-navy-deep/15 bg-cream flex flex-col hover:border-gold transition-colors group">
              <div className="aspect-square bg-navy-deep flex items-center justify-center border-b border-gold/30">
                <Crest className="w-24 h-28 opacity-90 group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="eyebrow text-crimson">{it.tag}</p>
                <h3 className="display text-2xl text-navy-deep font-semibold mt-2">{it.name}</h3>
                <p className="mt-3 text-foreground/75 text-sm leading-relaxed flex-1">{it.note}</p>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-navy-deep/10">
                  <p className="display text-2xl text-gold font-semibold">{it.price}</p>
                  <button className="bg-navy-deep text-cream px-4 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-crimson transition-colors">Order</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="eyebrow text-gold">100% Nonprofit</p>
            <h2 className="display text-4xl mt-3">Every dollar goes back into the club.</h2>
          </div>
          <p className="text-cream/80 text-lg leading-relaxed">Store proceeds cover kit for our three teams, referee and league fees, and — most importantly — the scholarships and gear drives that connect MHD FC to the youth football community on the North Shore.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
