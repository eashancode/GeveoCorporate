const milestones = [
  { y: "2008", t: "Founded in Colombo", d: "Geveo is established with a vision to deliver world-class digital engineering from Sri Lanka." },
  { y: "2013", t: "First enterprise partnerships", d: "Long-term engagements with global clients shape our delivery model and engineering culture." },
  { y: "2017", t: "Scaling internationally", d: "Expanded our footprint across Australia and the wider Asia-Pacific region." },
  { y: "2021", t: "Specialised practices", d: "Deepened capabilities in cloud, data, AI and modern product engineering." },
  { y: "2026", t: "Global delivery partner", d: "Today, our teams support enterprises across multiple continents and industries." },
];

const values = [
  { t: "Collaboration", d: "We build with our clients, not for them. Shared problems, shared wins." },
  { t: "Innovation with purpose", d: "We pursue new ideas where they create real value — not for the sake of novelty." },
  { t: "Ownership", d: "We take responsibility for outcomes, not just deliverables." },
  { t: "Continuous learning", d: "Our craft evolves constantly. So do we — as engineers and as a team." },
  { t: "Customer success", d: "Our success is defined by the success of the people we work with." },
  { t: "Integrity", d: "Direct, honest, dependable — in code, in conversation, in commitments." },
];

export function Story() {
  return (
    <section id="company" className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Our story</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.03em] text-balance font-semibold">
              Seventeen years of engineering software that creates lasting value.
            </h2>
            <p className="mt-6 text-muted-foreground text-pretty">
              Geveo was founded in 2008 by engineers and designers who believed
              software delivery could be done differently — more thoughtful,
              more honest, more outcomes-driven. That belief has shaped every
              client, every product and every team we have built since.
            </p>
            <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src={new URL("../../assets/team-office.jpg", import.meta.url).href}
                alt="Geveo engineering floor"
                loading="lazy"
                className="w-full h-full object-cover aspect-[5/4]"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ol className="relative border-l border-border ml-2">
              {milestones.map((m) => (
                <li key={m.y} className="pl-8 pb-10 relative">
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface" />
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{m.y}</div>
                  <div className="mt-1 font-display text-2xl tracking-[-0.02em] font-semibold">{m.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty max-w-lg">{m.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-24">
          <div className="max-w-2xl">
            <div className="eyebrow">Our values</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.02em]">
              What we believe shapes how we build.
            </h3>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {values.map((v) => (
              <div key={v.t} className="bg-background p-7 hover:bg-surface-elevated transition-colors">
                <h4 className="font-display text-xl">{v.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
