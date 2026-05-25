import { Link } from "@tanstack/react-router";
import { Ship, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ShieldCheck, BadgeCheck, Award, Container } from "lucide-react";
import { SITE, NAV } from "@/lib/site";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-luxury opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.13_85/0.18),transparent_60%)] blur-2xl" />
      <div className="relative container-px mx-auto max-w-7xl pb-12 pt-16">
        {/* Certifications row */}
        <div className="mb-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "ISO 9001", s: "Quality management aligned" },
            { icon: BadgeCheck, t: "CE Compliant", s: "Surgical & medical lines" },
            { icon: Award, t: "FBR Registered", s: "Pakistan customs verified" },
            { icon: Container, t: "FCL & LCL", s: "Global door-to-door" },
          ].map((c) => (
            <div key={c.t} className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-gold text-navy-deep">
                <c.icon className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">{c.t}</div>
                <div className="text-[11px] text-white/60">{c.s}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-gold">
                <Ship className="h-5 w-5 text-navy-deep" />
              </span>
              <div>
                <div className="text-base font-semibold tracking-wide">{SITE.name}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold-soft">Global Trade. Pakistani Roots.</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              A trusted import & export partner connecting Pakistani manufacturers with buyers worldwide —
              from textiles and surgical instruments to Himalayan salt and premium leather.
            </p>
            <div className="mt-6 max-w-md">
              <Newsletter variant="inline" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-gold transition-colors">{n.label}</Link>
                </li>
              ))}
              <li><Link to="/quote" className="hover:text-gold transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" />{SITE.address}</li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold" /><a href={`tel:${SITE.phone}`} className="transition-colors hover:text-gold">{SITE.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold" /><a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">{SITE.email}</a></li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:bg-gold hover:text-navy-deep hover:border-transparent transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {SITE.year} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}