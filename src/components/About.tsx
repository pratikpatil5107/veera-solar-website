import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ABOUT_IMAGE } from '@/data';

const CAPABILITIES = [
  'Engineering & system design',
  'Procurement of Tier-1 materials',
  'Civil works & foundations',
  'Installation & electrical integration',
  'Testing & commissioning',
  'Operations & maintenance support',
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 mask-fade-b" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={ABOUT_IMAGE}
                alt="Veera Solar engineers installing solar panels on a rooftop"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-navy-100 bg-white p-5 shadow-card sm:block">
              <p className="font-display text-3xl font-extrabold text-navy-900">10<span className="text-gold-500">+</span></p>
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Years of EPC experience</p>
            </div>
            <div className="absolute -left-4 -top-4 h-20 w-20 rounded-2xl border-l-2 border-t-2 border-gold-400" />
          </div>

          {/* Text */}
          <div>
            <span className="eyebrow reveal">About Veera Solar</span>
            <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-navy-900">
              Solar infrastructure, built with an <span className="text-gold-600">engineering-first</span> mindset.
            </h2>
            <p className="reveal reveal-delay-2 mt-5 text-lg leading-relaxed text-navy-600">
              Veera Solar Energy is a solar EPC company that designs, procures, installs and commissions
              solar systems for residential, commercial, industrial and ground-mounted projects. We treat
              every installation as an engineering project \u2014 modelled, documented and built to perform
              for the long term.
            </p>
            <p className="reveal reveal-delay-3 mt-4 text-base leading-relaxed text-navy-600">
              From site assessment and structural design to civil works, electrical integration and
              commissioning, our team owns the full scope so you have one accountable partner across
              the entire project lifecycle.
            </p>

            <ul className="reveal reveal-delay-4 mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span className="text-sm font-medium text-navy-700">{c}</span>
                </li>
              ))}
            </ul>

            <a href="#solutions" className="reveal reveal-delay-5 btn-navy mt-9 group">
              Explore Our Capabilities
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
