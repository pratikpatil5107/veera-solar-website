import { Activity, ArrowUpRight, Building2, PanelsTopLeft, WalletCards } from 'lucide-react';
import { MANUFACTURER_ITEMS } from '@/data';

const ICONS = { PanelsTopLeft, Activity, Building2 };

type ManufacturerIcon = keyof typeof ICONS;

export default function Manufacturers({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="manufacturers" className="section-pad relative overflow-hidden bg-white">
      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <span className="eyebrow reveal">Manufacturers</span>
            <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-navy-900">Equipment chosen for the work.</h2>
          </div>
          <p className="reveal reveal-delay-2 text-lg leading-relaxed text-navy-600">
            A clear place for approved product photographs, system details and project-ready equipment information. We will add your supplied images and verified specifications here.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {MANUFACTURER_ITEMS.map((item, index) => {
            const Icon = ICONS[item.icon as ManufacturerIcon];
            return (
              <article key={item.title} className={`reveal reveal-delay-${index + 1} group overflow-hidden rounded-3xl border border-navy-100 bg-navy-950 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card`}>
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(194,147,42,0.26),transparent_35%),linear-gradient(135deg,#102653,#07122e)]">
                  <div className="absolute inset-0 bg-grid-dark opacity-30" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-400/10 text-gold-400 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-9 w-9" strokeWidth={1.5} />
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-navy-950/60 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold-300">Photography slot</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200">{item.detail}</p>
                  <button type="button" onClick={onQuote} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition-colors hover:text-gold-300">
                    Discuss your requirement <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="reveal reveal-delay-3 mt-8 grid gap-6 rounded-3xl border border-gold-200 bg-gold-50/70 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400"><WalletCards className="h-7 w-7" /></div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">CAPEX + OPEX / RESCO</p>
            <h3 className="mt-1 font-display text-xl font-bold text-navy-900">A solar model shaped around your project.</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-navy-700">An OPEX or RESCO arrangement may reduce or potentially remove upfront system investment depending on the agreement. The provider may finance, install, operate or maintain the system, while the customer pays under agreed commercial terms. Tariffs, savings and responsibilities are contract-specific.</p>
          </div>
          <button type="button" onClick={onQuote} className="btn-navy whitespace-nowrap">Plan your system <ArrowUpRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}
