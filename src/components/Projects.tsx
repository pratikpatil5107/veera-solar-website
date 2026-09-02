import { ArrowUpRight, MapPin, Zap } from 'lucide-react';
import { PROJECTS } from '@/data';

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow reveal">Our work</span>
            <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-white">
              Projects engineered to perform
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-lg text-navy-200">
              A selection of rooftop and ground-mounted solar projects delivered by the Veera team.
            </p>
          </div>
          <a
            href="#contact"
            className="reveal reveal-delay-2 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold-400 hover:bg-white/10"
          >
            Discuss your project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${(i % 2) + 1} group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5`}
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} \u2014 ${p.category} solar project by Veera Solar Energy`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-300 backdrop-blur-md">
                  <Zap className="h-3.5 w-3.5" />
                  {p.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-navy-100">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-gold-400" />
                    {p.location}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-gold-400" />
                  <span>{p.capacity}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{p.desc}</p>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gold-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
