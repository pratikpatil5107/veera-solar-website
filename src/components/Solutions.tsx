import { ArrowRight, Home, Factory, PanelTop, Wrench, HardHat, ShieldCheck } from 'lucide-react';
import { SOLUTIONS } from '@/data';

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Home,
  Factory,
  PanelTop,
  Wrench,
  HardHat,
  ShieldCheck,
};

export default function Solutions() {
  return (
    <section id="solutions" className="section-pad relative overflow-hidden bg-navy-50/60">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal justify-center">What we do</span>
          <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-navy-900">
            Solar solutions engineered for every scale
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-navy-600">
            From a single rooftop to multi-megawatt ground-mounted farms \u2014 one accountable partner
            across design, supply, installation and commissioning.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Home;
            return (
              <article
                key={s.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-card`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-400/5 blur-2xl transition-all duration-500 group-hover:bg-gold-400/15" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-navy-900">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors group-hover:text-gold-600"
                  >
                    Enquire
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-400 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
