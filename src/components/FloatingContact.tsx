import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Mail, FileText, X, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY } from '@/data';

type Props = {
  onQuote: () => void;
};

export default function FloatingContact({ onQuote }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const actions = [
    { icon: Phone, label: 'Call Us', value: COMPANY.phone, href: COMPANY.phoneHref, color: 'navy' },
    { icon: MessageCircle, label: 'WhatsApp', value: COMPANY.phone, href: COMPANY.whatsappHref, color: 'green' },
    { icon: Mail, label: 'Email', value: COMPANY.email, href: COMPANY.emailHref, color: 'navy' },
    { icon: MapPin, label: 'Visit Us', value: 'Get Directions', href: COMPANY.mapsHref, color: 'navy' },
  ];

  return (
    <>
      {/* Desktop edge tab */}
      <button
        onClick={() => setOpen(true)}
        className="group fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-l-2xl bg-gold-400 px-3 py-5 text-navy-900 shadow-gold transition-all duration-300 hover:bg-gold-300 hover:pr-5 sm:flex"
        aria-label="Open Reach Us contact menu"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-transform duration-300 group-hover:rotate-12">
          <Phone className="h-3.5 w-3.5" />
        </span>
        <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-extrabold uppercase tracking-[0.18em]">
          Reach Us
        </span>
      </button>

      {/* Mobile contact pill */}
      <button
        onClick={() => setOpen(true)}
        className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3.5 text-sm font-bold text-navy-900 shadow-gold transition-all duration-300 hover:bg-gold-300 active:scale-95 sm:hidden"
        aria-label="Open Reach Us contact menu"
      >
        <span className="flex h-2.5 w-2.5 rounded-full bg-navy-900 shadow-[0_0_0_5px_rgba(10,24,60,0.12)]" />
        Reach Us
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Contact popup */}
      <div
        className={`fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative w-full max-w-sm overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 ${
            open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="relative overflow-hidden bg-navy-950 px-6 py-5">
            <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-400/20 blur-2xl" />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-400">Veera Solar Energy</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">Reach Us</h3>
                <p className="mt-0.5 text-sm text-navy-200">Let&apos;s power your next project.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-navy-200 transition-colors hover:bg-white/10"
                aria-label="Close contact menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith('http') ? '_blank' : undefined}
                  rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft ${
                    a.color === 'green'
                      ? 'border-navy-100 bg-green-50/50 hover:border-green-300'
                      : 'border-navy-100 bg-navy-50/50 hover:border-gold-200'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      a.color === 'green'
                        ? 'bg-green-500 text-white group-hover:bg-green-400'
                        : 'bg-navy-900 text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900'
                    }`}
                  >
                    <a.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-navy-500">{a.label}</span>
                    <span className="block truncate text-sm font-semibold text-navy-900">{a.value}</span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-gold-500" />
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setOpen(false);
                onQuote();
              }}
              className="btn-gold mt-4 w-full"
            >
              <FileText className="h-4 w-4" />
              Get a Quote
            </button>

            <div className="mt-5 flex items-center justify-center rounded-xl bg-navy-50 px-4 py-3 text-center">
              <span className="text-xs font-medium text-navy-500">{COMPANY.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
