import { Quote } from 'lucide-react';
import { FOUNDER } from '@/data';

export default function Founder() {
  return (
    <section id="founder" className="section-pad relative overflow-hidden bg-white">
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Photo */}
          <div className="reveal lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <img
                  src={FOUNDER.image}
                  alt="Founder and leadership of Veera Solar Energy"
                  className="aspect-[4/5] w-full bg-navy-50 object-contain object-center transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl border-r-2 border-t-2 border-gold-400" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border-b-2 border-l-2 border-navy-200" />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <span className="eyebrow reveal">Leadership</span>
            <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-navy-900">
              Built by engineers.
              <br />
              <span className="text-gold-600">Driven by execution.</span>
            </h2>

            <div className="reveal reveal-delay-2 mt-6 space-y-4">
              {FOUNDER.bio.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-navy-600">
                  {para}
                </p>
              ))}
            </div>

            <div className="reveal reveal-delay-3 mt-8 flex items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
              <Quote className="h-8 w-8 shrink-0 text-gold-500" />
              <div>
                <p className="font-display text-lg font-bold text-navy-900">{FOUNDER.name}</p>
                <p className="text-sm font-medium text-navy-500">{FOUNDER.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
