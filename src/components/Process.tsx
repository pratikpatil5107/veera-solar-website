import { PROCESS } from '@/data';

export default function Process() {
  return (
    <section id="how-we-work" className="section-pad relative overflow-hidden bg-white">
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal justify-center">How we work</span>
          <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-navy-900">
            A disciplined path from site to commissioning
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-navy-600">
            Every Veera project follows the same engineered workflow \u2014 so quality is repeatable
            and timelines are predictable.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent lg:block" />

          <ol className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {PROCESS.map((step, i) => (
              <li
                key={step.no}
                className={`reveal reveal-delay-${(i % 6) + 1} group relative`}
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-navy-200 bg-white font-display text-lg font-extrabold text-navy-900 shadow-soft transition-all duration-500 group-hover:border-gold-400 group-hover:bg-navy-900 group-hover:text-gold-400">
                  {step.no}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.desc}</p>
                <span className="mt-4 block h-0.5 w-8 origin-left scale-x-100 rounded-full bg-gold-400 transition-transform duration-500 group-hover:scale-x-200" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
