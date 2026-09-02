import { Sun, Phone, Mail, MapPin, ArrowUp, Linkedin, Facebook, Instagram } from 'lucide-react';
import { COMPANY, NAV_LINKS, SOLUTIONS } from '@/data';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold-400/5 blur-3xl" />

      <div className="container-x relative pt-16 pb-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 shadow-soft">
                <Sun className="h-6 w-6 text-gold-400" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">VEERA SOLAR</span>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold-500">Energy</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              Veera Solar Energy is a solar EPC company delivering engineering, procurement,
              installation and commissioning for residential, commercial, industrial and
              ground-mounted solar projects.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-navy-200 transition-all duration-300 hover:border-gold-400/40 hover:bg-white/10 hover:text-gold-400"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-navy-300 transition-colors hover:text-gold-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Solutions</h4>
            <ul className="mt-4 space-y-2.5">
              {SOLUTIONS.map((s) => (
                <li key={s.title}>
                  <a href="#solutions" className="text-sm text-navy-300 transition-colors hover:text-gold-400">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a href={COMPANY.phoneHref} className="flex items-start gap-3 text-sm text-navy-300 transition-colors hover:text-gold-400">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={COMPANY.emailHref} className="flex items-start gap-3 text-sm text-navy-300 transition-colors hover:text-gold-400 break-all">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={COMPANY.mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-navy-300 transition-colors hover:text-gold-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  <span>
                    {COMPANY.addressLine1}
                    <br />
                    {COMPANY.addressLine2}
                    <br />
                    {COMPANY.addressLine3}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-navy-200 transition-all duration-300 hover:border-gold-400/40 hover:text-gold-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
