import gptw from "@/assets/geveo_GPTW_new_300.png";
import { Award } from "lucide-react";

const METRICS = [
  { k: "120+", v: "Projects Delivered" },
  { k: "15+", v: "Industries Served" },
  { k: "12+", v: "Countries Reached" },
  { k: "98%", v: "Client Satisfaction" },
];

export function TrustRecognition() {
  return (
    <section id="trust" className="py-24 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-border p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(83,173,111,0.10) 0%, rgba(255,255,255,1) 55%, rgba(56,140,220,0.08) 100%)",
          }}
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#2f9bd6]/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow inline-flex items-center gap-2">
                <Award className="h-3.5 w-3.5" /> Trusted Technology Partner
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-balance">
                Built on trust. Recognized for our culture.
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty max-w-xl">
                Proudly recognized as a <strong className="text-foreground">Great Place To Work</strong>,
                reflecting our commitment to innovation, collaboration, and excellence —
                delivered across enterprises, startups and Web3 ecosystems worldwide.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {METRICS.map((m) => (
                  <div key={m.v}>
                    <div className="font-display text-3xl tracking-[-0.02em] font-semibold text-foreground">
                      {m.k}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-border bg-white p-6 shadow-elev flex items-center gap-5">
                <img src={gptw} alt="Great Place To Work · Certified" className="h-28 w-auto" />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">
                    Certified
                  </div>
                  <div className="mt-1 font-display text-lg tracking-[-0.01em]">
                    Great Place To Work® · Sri Lanka
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Awarded for workplace culture, engagement and engineering excellence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
