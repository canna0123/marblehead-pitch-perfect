import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-chrome";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Trial with the Squad · Marblehead O-40 SC" },
      { name: "description", content: "How to trial with Marblehead Over-40 Soccer Club — two free sessions, dues, kit, and what to expect on Sunday." },
      { property: "og:title", content: "Join the Squad · Marblehead O-40 SC" },
      { property: "og:description", content: "Two trial sessions. If it clicks, you're in." },
      { property: "og:url", content: "/join" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: Join,
});

function Join() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      <section className="bg-navy-deep text-chalk pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pitch-lines opacity-30" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 kit-stripe opacity-20" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <p className="mono text-[10px] tracking-[0.35em] uppercase text-kit">Trial · Season 44</p>
          <h1 className="display text-[clamp(4rem,14vw,12rem)] mt-4">Bring<br/>Your Boots.</h1>
          <p className="mt-6 max-w-xl text-sand/80 text-lg">Two Sunday trials, no fee, no pressure. Turn up 30 minutes early, introduce yourself to the captain, and we'll slot you into the warmup.</p>
        </div>
      </section>

      <section className="py-24 mx-auto max-w-[1400px] px-6 grid md:grid-cols-3 gap-8">
        {[
          { n: "01", t: "Message the Captain", b: "Drop a note with your position, side-preference (left/right foot), and how recently you played 11-a-side. We'll confirm the next open trial slot." },
          { n: "02", t: "Trial Sundays", b: "Two sessions at Seaside Park. Full 90 minutes each. Wear shin guards; kit is issued after you commit." },
          { n: "03", t: "Sign On", b: "$180 for the season covers OTHSL registration, referee fees, and your first kit. Optional bar tab at the Landing not included." },
        ].map((s) => (
          <div key={s.n} className="border-t-2 border-navy-deep pt-6">
            <p className="jersey-num text-6xl text-kit">{s.n}</p>
            <p className="display text-2xl text-navy-deep mt-4">{s.t}</p>
            <p className="mt-4 text-foreground/80">{s.b}</p>
          </div>
        ))}
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <p className="mono text-[10px] tracking-[0.35em] uppercase text-kit">Trial Request</p>
          <h2 className="display text-4xl md:text-5xl text-navy-deep mt-3">Send Word</h2>
          <form className="mt-10 grid gap-5" onSubmit={(e) => { e.preventDefault(); alert("Thanks — the captain will reach out."); }}>
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="mono text-[10px] tracking-widest uppercase text-navy-deep/70">Name</span>
                <input required className="mt-2 w-full bg-transparent border-b-2 border-navy-deep py-2 focus:outline-none focus:border-kit text-lg" />
              </label>
              <label className="block">
                <span className="mono text-[10px] tracking-widest uppercase text-navy-deep/70">Age</span>
                <input type="number" min={40} required className="mt-2 w-full bg-transparent border-b-2 border-navy-deep py-2 focus:outline-none focus:border-kit text-lg" />
              </label>
            </div>
            <label className="block">
              <span className="mono text-[10px] tracking-widest uppercase text-navy-deep/70">Email</span>
              <input type="email" required className="mt-2 w-full bg-transparent border-b-2 border-navy-deep py-2 focus:outline-none focus:border-kit text-lg" />
            </label>
            <label className="block">
              <span className="mono text-[10px] tracking-widest uppercase text-navy-deep/70">Position · Preferred foot · Last time you played 11-a-side</span>
              <textarea rows={4} className="mt-2 w-full bg-transparent border-b-2 border-navy-deep py-2 focus:outline-none focus:border-kit text-lg resize-none" />
            </label>
            <button type="submit" className="justify-self-start mt-4 bg-kit text-chalk px-8 py-4 mono text-sm tracking-[0.3em] uppercase hover:bg-kit-hot transition-colors">
              Send to Captain ▸
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
