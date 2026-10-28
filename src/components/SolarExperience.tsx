import { useEffect, useState } from 'react';
import { ArrowRight, BatteryCharging, Building2, ChevronLeft, ChevronRight, CircleDot, CloudSun, Grid2X2, RefreshCcw, Sun, Zap, type LucideIcon } from 'lucide-react';
import { HYBRID_STAGES, ON_GRID_STAGES } from '@/data';

type Stage = { title: string; short: string; detail: string; node: string };
type JourneyType = 'on-grid' | 'hybrid';

type Props = { type: JourneyType; onQuote: () => void };

const NODE_ICONS: Record<string, LucideIcon> = {
  sun: Sun,
  panels: Grid2X2,
  inverter: Zap,
  building: Building2,
  battery: BatteryCharging,
  grid: CircleDot,
};

const BENEFITS = {
  'on-grid': ['Offset electricity consumption with solar generation.', 'Potentially reduce electricity purchases depending on consumption and tariff structures.', 'Suitable for rooftop, commercial and industrial applications.', 'Export surplus electricity where the configuration, approvals and regulations permit.'],
  hybrid: ['Store available solar energy for later use.', 'Manage solar, battery and grid energy with system controls.', 'Support selected loads during outages when backup hardware and configuration allow it.', 'Create flexible energy management for commercial, industrial and other suitable applications.'],
};

export default function SolarExperience({ type, onQuote }: Props) {
  const stages: Stage[] = type === 'on-grid' ? ON_GRID_STAGES : HYBRID_STAGES;
  const [active, setActive] = useState(0);
  const isHybrid = type === 'hybrid';
  const title = isHybrid ? 'How a Hybrid Solar System Works' : 'How an On-Grid Solar System Works';
  const intro = isHybrid
    ? 'A hybrid system combines solar generation with battery storage and a grid connection where configured, helping manage solar energy, stored energy and grid electricity.'
    : 'An on-grid system converts sunlight into electricity for a building, with the grid supplying or receiving electricity according to the system configuration and applicable utility rules.';

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setActive((current) => Math.min(current + 1, stages.length - 1));
      if (event.key === 'ArrowLeft') setActive((current) => Math.max(current - 1, 0));
      if (event.key === 'Home') setActive(0);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stages.length]);

  const stage = stages[active];
  const Icon = NODE_ICONS[stage.node] ?? Zap;

  return (
    <section className={`section-pad relative overflow-hidden ${isHybrid ? 'bg-navy-50/70' : 'bg-navy-950'}`}>
      <div className={`pointer-events-none absolute inset-0 ${isHybrid ? 'bg-grid opacity-30' : 'bg-grid-dark opacity-40'}`} />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className={`eyebrow reveal justify-center ${isHybrid ? '' : 'text-gold-300'}`}>{isHybrid ? 'Hybrid systems' : 'On-grid systems'}</span>
          <h2 className={`reveal reveal-delay-1 heading-lg mt-4 ${isHybrid ? 'text-navy-900' : 'text-white'}`}>{title}</h2>
          <p className={`reveal reveal-delay-2 mt-4 text-lg leading-relaxed ${isHybrid ? 'text-navy-600' : 'text-navy-200'}`}>{intro}</p>
        </div>

        <div className={`reveal reveal-delay-3 mt-12 overflow-hidden rounded-3xl border ${isHybrid ? 'border-navy-200 bg-white' : 'border-white/10 bg-white/5'}`}>
          <div className={`relative flex min-h-56 items-center justify-center overflow-hidden p-8 sm:min-h-72 ${isHybrid ? 'bg-[radial-gradient(circle_at_70%_20%,rgba(194,147,42,0.2),transparent_32%),linear-gradient(135deg,#eef4f7,#dbe7ee)]' : 'bg-[radial-gradient(circle_at_70%_20%,rgba(194,147,42,0.3),transparent_32%),linear-gradient(135deg,#102653,#07122e)]'}`}>
            <div className="absolute inset-0 bg-grid-dark opacity-20" />
            <div className="relative w-full max-w-4xl">
              <div className="flex items-center justify-between gap-2 sm:gap-6">
                {stages.map((item, index) => {
                  const ItemIcon = NODE_ICONS[item.node] ?? Zap;
                  return (
                    <div key={`${item.title}-${index}`} className="relative flex min-w-0 flex-1 flex-col items-center gap-2">
                      {index < stages.length - 1 && <span className={`absolute left-1/2 top-6 h-0.5 w-full ${index < active ? 'bg-gold-400' : isHybrid ? 'bg-navy-200' : 'bg-white/15'}`} />}
                      <button type="button" onClick={() => setActive(index)} aria-label={`Show stage ${index + 1}: ${item.title}`} className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 ${index === active ? 'border-gold-400 bg-gold-400 text-navy-950 shadow-gold scale-110' : index < active ? 'border-gold-400 bg-navy-950 text-gold-400' : isHybrid ? 'border-navy-300 bg-white text-navy-500' : 'border-white/20 bg-navy-900 text-navy-300'}`}>
                        <ItemIcon className="h-5 w-5" />
                      </button>
                      <span className={`hidden text-center text-[0.65rem] font-bold leading-tight sm:block ${isHybrid ? 'text-navy-600' : 'text-navy-200'}`}>{item.title}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-500"><span className="energy-pulse h-2 w-2 rounded-full bg-gold-400" /> Energy flow visual</div>
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className={`relative flex min-h-48 items-center justify-center overflow-hidden rounded-2xl border ${isHybrid ? 'border-navy-100 bg-navy-50' : 'border-white/10 bg-navy-900/80'}`}>
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(194,147,42,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(194,147,42,.18)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className={`relative flex h-28 w-28 flex-col items-center justify-center rounded-3xl border-2 ${isHybrid ? 'border-gold-500 bg-white text-navy-900' : 'border-gold-400/70 bg-navy-950 text-white'} shadow-gold`}>
                <Icon className="h-10 w-10 text-gold-500" strokeWidth={1.4} />
                <span className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.16em]">Stage {String(active + 1).padStart(2, '0')}</span>
              </div>
              <span className="absolute left-5 top-7 h-0.5 w-20 origin-left animate-pulse bg-gold-400" />
              <span className="absolute bottom-8 right-5 h-0.5 w-16 origin-right animate-pulse bg-gold-400" />
            </div>
            <div>
              <div className="flex items-center gap-3"><span className="font-display text-5xl font-extrabold text-gold-500">{String(active + 1).padStart(2, '0')}</span><span className={`h-px w-12 ${isHybrid ? 'bg-navy-200' : 'bg-white/20'}`} /></div>
              <h3 className={`mt-3 font-display text-2xl font-bold ${isHybrid ? 'text-navy-900' : 'text-white'}`}>{stage.title}</h3>
              <p className={`mt-2 text-base font-semibold ${isHybrid ? 'text-navy-700' : 'text-gold-200'}`}>{stage.short}</p>
              <p className={`mt-3 max-w-2xl text-sm leading-relaxed ${isHybrid ? 'text-navy-600' : 'text-navy-200'}`}>{stage.detail}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={() => setActive((current) => Math.max(current - 1, 0))} disabled={active === 0} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isHybrid ? 'border-navy-200 text-navy-800 hover:border-gold-400' : 'border-white/20 text-white hover:border-gold-400'}`}><ChevronLeft className="h-4 w-4" /> Previous</button>
                {active < stages.length - 1 ? <button type="button" onClick={() => setActive((current) => Math.min(current + 1, stages.length - 1))} className="btn-gold">Next Step <ChevronRight className="h-4 w-4" /></button> : <button type="button" onClick={() => setActive(0)} className="btn-gold"><RefreshCcw className="h-4 w-4" /> Replay</button>}
              </div>
            </div>
          </div>
          <div className={`h-1 ${isHybrid ? 'bg-navy-100' : 'bg-white/10'}`}><div className="h-full bg-gold-400 transition-all duration-500" style={{ width: `${((active + 1) / stages.length) * 100}%` }} /></div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isHybrid ? 'text-gold-700' : 'text-gold-400'}`}>{isHybrid ? 'Where hybrid fits' : 'Where on-grid fits'}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {BENEFITS[type].map((benefit) => <div key={benefit} className={`flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${isHybrid ? 'border-navy-200 bg-white text-navy-700' : 'border-white/10 bg-white/5 text-navy-200'}`}><ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />{benefit}</div>)}
            </div>
          </div>
          <div className={`flex flex-col justify-between rounded-2xl border p-6 ${isHybrid ? 'border-gold-200 bg-gold-50/70' : 'border-gold-400/20 bg-gold-400/10'}`}>
            <div><CloudSun className="h-7 w-7 text-gold-500" /><h3 className={`mt-4 font-display text-xl font-bold ${isHybrid ? 'text-navy-900' : 'text-white'}`}>Have a site in mind?</h3><p className={`mt-2 text-sm leading-relaxed ${isHybrid ? 'text-navy-700' : 'text-navy-200'}`}>Our team can help compare system choices, site conditions and operating goals without assuming every project needs the same configuration.</p></div>
            <button type="button" onClick={onQuote} className="btn-navy mt-6 w-full">Request a solar consultation <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
        <p className={`mt-8 text-center text-xs leading-relaxed ${isHybrid ? 'text-navy-500' : 'text-navy-400'}`}>Use the stage controls or your keyboard arrow keys to explore the energy flow. System performance, backup capability and commercial outcomes depend on the final design, equipment, approvals and agreement.</p>
      </div>
    </section>
  );
}
