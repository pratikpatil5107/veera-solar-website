import { STATS } from '@/data';
import { useCountUp } from '@/hooks';

function StatItem({ value, suffix, label, sub }: { value: number; suffix: string; label: string; sub: string }) {
  const { ref, value: display } = useCountUp(value);
  return (
    <div className="reveal group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold-200 hover:shadow-card">
      <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-gold-400/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-display text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
        <span ref={ref}>{display.toLocaleString('en-IN')}</span>
        <span className="text-gold-500">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-navy-700">{label}</p>
      <p className="mt-1 text-sm text-navy-500">{sub}</p>
      <span className="mt-4 block h-0.5 w-10 origin-left scale-x-100 rounded-full bg-gold-400 transition-transform duration-500 group-hover:scale-x-150" />
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative -mt-12 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal reveal-delay-${i + 1}`}>
              <StatItem {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
