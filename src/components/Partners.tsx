import { PARTNERS } from '@/data';

const CATEGORIES = ['Solar Modules', 'Inverters', 'Cables', 'Structures'];

export default function Partners() {
  return (
    <section id="partners" className="section-pad relative overflow-hidden bg-navy-50/60">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal justify-center">Technology partners</span>
          <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-navy-900">
            Engineered with the best in the industry
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-navy-600">
            We source modules, inverters, cables and structures from trusted, Tier-1 technology
            partners to ensure every system is reliable and built to last.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {CATEGORIES.map((cat, ci) => {
            const items = PARTNERS.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className={`reveal reveal-delay-${ci + 1}`}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="gold-line" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-navy-700">
                    {cat}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {items.map((p) => (
                    <div
                      key={p.name}
                      className="group flex h-24 items-center justify-center rounded-2xl border border-navy-100 bg-white px-6 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:border-gold-200 hover:shadow-card"
                    >
                      <span className="font-display text-lg font-extrabold tracking-tight text-navy-800 transition-colors duration-300 group-hover:text-navy-900">
                        {p.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
