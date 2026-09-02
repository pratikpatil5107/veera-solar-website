import { ShieldCheck } from 'lucide-react';
import { CLIENTS } from '@/data';

export default function Clients() {
  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal justify-center">Trusted by</span>
          <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-navy-900">
            Clients who count on Veera
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-navy-600">
            From homeowners to commercial and industrial businesses, customers choose Veera Solar
            for engineering-led, accountable execution.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((c) => (
            <div
              key={c}
              className="group flex h-24 items-center justify-center rounded-2xl border border-navy-100 bg-navy-50/40 px-4 grayscale transition-all duration-400 hover:grayscale-0 hover:border-gold-200 hover:bg-white hover:shadow-soft"
            >
              <span className="font-display text-base font-bold tracking-tight text-navy-700 transition-colors duration-300 group-hover:text-navy-900">
                {c}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-4 mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-gold-200 bg-gold-50/50 px-6 py-5 text-center sm:flex-row sm:gap-4">
          <ShieldCheck className="h-6 w-6 text-gold-600" />
          <p className="text-sm font-medium text-navy-700">
            A decade of solar engineering delivered across residential, commercial, industrial and
            ground-mounted projects.
          </p>
        </div>
      </div>
    </section>
  );
}
