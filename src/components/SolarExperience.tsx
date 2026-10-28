import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, CloudSun, ImagePlus, RefreshCcw } from 'lucide-react';
import { HYBRID_STAGES, ON_GRID_STAGES, ON_GRID_PHOTO, HYBRID_PHOTO } from '@/data';
import OnGridScene from '@/components/OnGridScene';
import HybridScene from '@/components/HybridScene';

type Stage = { title: string; short: string; detail: string; node: string };
type JourneyType = 'on-grid' | 'hybrid';

type Props = { type: JourneyType; onQuote: () => void };

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
  const photo = isHybrid ? HYBRID_PHOTO : ON_GRID_PHOTO;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setActive((c) => Math.min(c + 1, stages.length - 1));
      if (event.key === 'ArrowLeft') setActive((c) => Math.max(c - 1, 0));
      if (event.key === 'Home') setActive(0);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stages.length]);

  const stage = stages[active];
  const goTo = (index: number) => setActive(Math.max(0, Math.min(index, stages.length - 1)));

  return (
    <section className={`section-pad relative overflow-hidden ${isHybrid ? 'bg-navy-50/70' : 'bg-navy-950'}`}>
      <div className={`pointer-events-none absolute inset-0 ${isHybrid ? 'bg-grid opacity-30' : 'bg-grid-dark opacity-40'}`} />
      <div className="container-x relative">
        {/* Photograph slot */}
        <div className={`reveal reveal-delay-3 mt-10 overflow-hidden rounded-3xl border ${isHybrid ? 'border-navy-200' : 'border-white/10'}`}>
          {photo ? (
            <img src={photo} alt={`${isHybrid ? 'Hybrid' : 'On-grid'} solar system installed by Veera Solar Energy`} className="h-full max-h-[420px] w-full object-cover" loading="lazy" />
          ) : (
            <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_70%_20%,rgba(194,147,42,0.18),transparent_35%),linear-gradient(135deg,#0d1f47,#06112b)] text-center">
              <ImagePlus className="h-12 w-12 text-gold-400" strokeWidth={1.3} />
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-gold-300">Your {isHybrid ? 'hybrid' : 'on-grid'} system photograph will appear here</span>
              <span className="max-w-md text-xs text-navy-300">Add the supplied image to <code className="rounded bg-white/10 px-1.5 py-0.5 text-gold-300">{isHybrid ? 'HYBRID_PHOTO' : 'ON_GRID_PHOTO'}</code> in the data file to display it.</span>
            </div>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <span className={`eyebrow reveal justify-center ${isHybrid ? '' : 'text-gold-300'}`}>{isHybrid ? 'Hybrid systems' : 'On-grid systems'}</span>
          <h2 className={`reveal reveal-delay-1 heading-lg mt-4 ${isHybrid ? 'text-navy-900' : 'text-white'}`}>{title}</h2>
          <p className={`reveal reveal-delay-2 mt-4 text-lg leading-relaxed ${isHybrid ? 'text-navy-600' : 'text-navy-200'}`}>{intro}</p>
        </div>

        {/* Animated scene + stage detail */}
        <div className={`reveal reveal-delay-1 mt-8 overflow-hidden rounded-3xl border ${isHybrid ? 'border-navy-200 bg-white' : 'border-white/10 bg-white/5'}`}>
          {/* The animated SVG scene — stays visible, components animate per stage */}
          <div className={`relative overflow-hidden ${isHybrid ? 'bg-[radial-gradient(circle_at_30%_15%,rgba(194,147,42,0.12),transparent_40%),linear-gradient(135deg,#eef4f7,#dbe7ee)]' : 'bg-[radial-gradient(circle_at_30%_15%,rgba(194,147,42,0.18),transparent_40%),linear-gradient(135deg,#0d1f47,#06112b)]'}`}>
            <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-15" />
            <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
              {isHybrid ? <HybridScene activeStage={active} /> : <OnGridScene activeStage={active} />}
            </div>
          </div>

          {/* Stage detail panel */}
          <div className={`grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-start ${isHybrid ? '' : ''}`}>
            <div className={`flex items-center gap-3 ${isHybrid ? '' : ''}`}>
              <span className="font-display text-5xl font-extrabold text-gold-500 stage-fade" key={active}>{String(active + 1).padStart(2, '0')}</span>
              <span className={`h-px w-12 ${isHybrid ? 'bg-navy-200' : 'bg-white/20'}`} />
            </div>
            <div key={`stage-${active}`} className="stage-fade">
              <h3 className={`font-display text-2xl font-bold ${isHybrid ? 'text-navy-900' : 'text-white'}`}>{stage.title}</h3>
              <p className={`mt-2 text-base font-semibold ${isHybrid ? 'text-navy-700' : 'text-gold-200'}`}>{stage.short}</p>
              <p className={`mt-3 max-w-2xl text-sm leading-relaxed ${isHybrid ? 'text-navy-600' : 'text-navy-200'}`}>{stage.detail}</p>
            </div>
          </div>

          {/* Stage controls */}
          <div className={`flex flex-col gap-4 border-t p-6 sm:flex-row sm:items-center sm:justify-between ${isHybrid ? 'border-navy-100' : 'border-white/10'}`}>
            <div className="flex items-center gap-2">
              {stages.map((item, index) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to stage ${index + 1}: ${item.title}`}
                  aria-current={index === active ? 'step' : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 ${
                    index === active ? 'w-8 bg-gold-400' : `w-2.5 ${isHybrid ? 'bg-navy-200 hover:bg-navy-400' : 'bg-white/20 hover:bg-white/40'}`
                  }`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-40 ${isHybrid ? 'border-navy-200 text-navy-800 hover:border-gold-400' : 'border-white/20 text-white hover:border-gold-400'}`}
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              {active < stages.length - 1 ? (
                <button type="button" onClick={() => goTo(active + 1)} className="btn-gold">
                  Next Step <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button type="button" onClick={() => goTo(0)} className="btn-gold">
                  <RefreshCcw className="h-4 w-4" /> Replay
                </button>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className={`h-1 ${isHybrid ? 'bg-navy-100' : 'bg-white/10'}`}>
            <div className="h-full bg-gold-400 transition-all duration-500" style={{ width: `${((active + 1) / stages.length) * 100}%` }} />
          </div>
        </div>

        {/* Benefits + CTA */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isHybrid ? 'text-gold-700' : 'text-gold-400'}`}>{isHybrid ? 'Where hybrid fits' : 'Where on-grid fits'}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {BENEFITS[type].map((benefit) => (
                <div key={benefit} className={`flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${isHybrid ? 'border-navy-200 bg-white text-navy-700' : 'border-white/10 bg-white/5 text-navy-200'}`}>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className={`flex flex-col justify-between rounded-2xl border p-6 ${isHybrid ? 'border-gold-200 bg-gold-50/70' : 'border-gold-400/20 bg-gold-400/10'}`}>
            <div>
              <CloudSun className="h-7 w-7 text-gold-500" />
              <h3 className={`mt-4 font-display text-xl font-bold ${isHybrid ? 'text-navy-900' : 'text-white'}`}>Have a site in mind?</h3>
              <p className={`mt-2 text-sm leading-relaxed ${isHybrid ? 'text-navy-700' : 'text-navy-200'}`}>Our team can help compare system choices, site conditions and operating goals without assuming every project needs the same configuration.</p>
            </div>
            <button type="button" onClick={onQuote} className="btn-navy mt-6 w-full">
              Request a solar consultation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className={`mt-8 text-center text-xs leading-relaxed ${isHybrid ? 'text-navy-500' : 'text-navy-400'}`}>
          Use the stage controls or your keyboard arrow keys to explore the energy flow. This is an illustrative animation — actual system performance, backup capability and commercial outcomes depend on the final design, equipment, approvals and agreement.
        </p>
      </div>
    </section>
  );
}
