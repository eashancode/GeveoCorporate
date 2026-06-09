import { Link } from "@tanstack/react-router";
import gptw from "@/assets/geveo_GPTW_new_300.png";
import { Award, Brain, Building2, Globe, Boxes } from "lucide-react";

const RECOG = [
  { Icon: Brain, label: "AI Solutions" },
  { Icon: Building2, label: "Enterprise Software" },
  { Icon: Globe, label: "Web Development" },
  { Icon: Boxes, label: "Web3 Development" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-12">
        {/* Recognition & Certifications */}
        <div className="rounded-2xl border border-border bg-white/70 backdrop-blur p-6 md:p-8 mb-12 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 flex items-center gap-4">
            <img
              src={gptw}
              alt="Geveo · Great Place To Work Certified"
              className="h-16 w-auto"
            />
            <div className="hidden md:block h-12 w-px bg-border" />
          </div>
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-primary">
              <Award className="h-3.5 w-3.5" /> Recognition & Certifications
            </div>
            <p className="mt-2 text-sm text-foreground/85 max-w-xl">
              Proudly recognized as a <strong className="text-foreground">Great Place To Work</strong>,
              reflecting our commitment to innovation, collaboration, and excellence.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {RECOG.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-[11px] text-foreground/80"
                >
                  <Icon className="h-3 w-3 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <img src={gptw} alt="Geveo Great Place To Work" className="h-9 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Engineering scalable digital solutions since 2008. Built in
              Colombo. Trusted worldwide.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            {[
              {
                heading: "Company",
                links: [
                  { label: "About Us", to: "/about" },
                  { label: "Story", href: "/#company" },
                  { label: "Careers", href: "/#careers" },
                  { label: "Contact", href: "/#contact" },
                ],
              },
              {
                heading: "Solutions",
                links: [
                  { label: "Specialised", to: "/solutions" },
                  { label: "Enterprise", to: "/solutions" },
                  { label: "Cloud", to: "/solutions" },
                  { label: "Data & AI", to: "/solutions" },
                ],
              },
              {
                heading: "Work",
                links: [
                  { label: "Case Studies", to: "/case-studies" },
                  { label: "Industries", to: "/case-studies" },
                  { label: "Partners", to: "/about" },
                ],
              },
              {
                heading: "Connect",
                links: [
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/geveo", external: true },
                  { label: "GitHub", href: "https://github.com/geveo", external: true },
                  { label: "Email", href: "mailto:hello@geveo.com", external: true },
                ],
              },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{heading}</div>
                <ul className="mt-3 space-y-2">
                  {links.map(({ label, to, href, external }) => (
                    <li key={label}>
                      {to ? (
                        <Link to={to} className="text-foreground/80 hover:text-primary transition-colors">
                          {label}
                        </Link>
                      ) : (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer noopener" : undefined}
                          className="text-foreground/80 hover:text-primary transition-colors"
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-gradient my-10" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Geveo Australasia. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 font-mono tracking-[0.18em] uppercase text-[10px]">
              <Globe className="h-3 w-3 text-primary" />
              <span>Australia</span>
              <span className="opacity-40">·</span>
              <span>Singapore</span>
              <span className="opacity-40">·</span>
              <span>Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2 font-mono tracking-[0.18em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
              System · Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
