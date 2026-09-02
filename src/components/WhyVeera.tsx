import { Cog, Layers, Award, Users, Handshake, LineChart } from 'lucide-react';
import { WHY_VEERA } from '@/data';

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Cog,
  Layers,
  Award,
  Users,
  Handshake,
  LineChart,
};

export default function WhyVeera() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-950">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal justify-center">Why Veera</span>
          <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-white">
            Why customers choose Veera Solar
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-navy-200">
            The difference is in how the project is run \u2014 engineered, accountable and built to last.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_VEERA.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Cog;
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-navy-900">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
