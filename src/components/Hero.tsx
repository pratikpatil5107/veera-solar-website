import { ArrowRight, ArrowUpRight, Sun, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import { HERO_IMAGE } from '@/data';

type HeroProps = {
  onQuote: () => void;
};

export default function Hero({ onQuote }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-28 pb-24 sm:pt-32 lg:pt-40 lg:pb-32">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Industrial rooftop solar installation by Veera Solar Energy"
          className="h-full w-full object-cover opacity-40 [animation:float-slow_18s_ease-in-out_infinite]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      {/* Gold accent glows */}
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-navy-500/20 blur-3xl" />

      {/* Animated gold scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur-sm">
            <Sun className="h-3.5 w-3.5" />
            Solar EPC • Design • Supply • Installation • Commissioning
          </div>

          <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Engineering Solar.
            <br />
            <span className="relative bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent">
              Powering What&apos;s Next.
              <span className="absolute -bottom-2 left-0 h-1 w-0 rounded-full bg-gold-400 [animation:shimmer_3s_ease-in-out_infinite]" />
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-navy-100 sm:text-xl">
            End-to-end solar EPC solutions engineered for homes, businesses and large-scale power projects.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={onQuote} className="btn-gold group">
              Start Your Solar Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10">
              Explore Our Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Trust pills */}
          <div className="reveal reveal-delay-4 mt-12 flex flex-wrap items-center gap-3">
            <TrustPill icon={Zap} label="6,000+ kW Installed" />
            <TrustPill icon={ShieldCheck} label="End-to-End EPC" />
            <TrustPill icon={TrendingUp} label="10+ Years Experience" />
          </div>
        </div>
      </div>

      {/* Bottom fade into white */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function TrustPill({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-navy-100 backdrop-blur-sm transition-colors hover:border-gold-400/30 hover:text-white">
      <Icon className="h-4 w-4 text-gold-400" />
      {label}
    </span>
  );
}
