import { useEffect, useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/data';
import { useScrolled } from '@/hooks';

type NavbarProps = {
  onQuote: () => void;
};

export default function Navbar({ onQuote }: NavbarProps) {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-navy-100 bg-white/85 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-3.5">
        <a href="#home" className="group flex items-center gap-3" aria-label="Veera Solar Energy home">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 shadow-soft transition-transform duration-300 group-hover:scale-105">
            <Sun className="h-6 w-6 text-gold-400" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-[1.05rem] font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-navy-900' : 'text-white'}`}>
              VEERA SOLAR
            </span>
            <span className={`text-[0.62rem] font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${scrolled ? 'text-gold-600' : 'text-gold-400'}`}>
              Energy
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-navy-900"
                style={{ color: scrolled ? undefined : '#d6e0f0' }}
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={onQuote} className="btn-gold hidden sm:inline-flex">
            Get a Quote
          </button>
          <a
            href={COMPANY.phoneHref}
            className="hidden items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition-colors hover:bg-navy-50 xl:inline-flex"
            style={scrolled ? { borderColor: '#d6e0f0', color: '#163063' } : { borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
          >
            {COMPANY.phone}
          </a>
          <button
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border transition-colors hover:bg-navy-50 lg:hidden"
            style={scrolled ? { borderColor: '#d6e0f0', color: '#163063' } : { borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-white shadow-card transition-transform duration-400 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-navy-100 px-6 py-5">
            <span className="font-display text-lg font-extrabold text-navy-900">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-200 text-navy-800 hover:bg-navy-50"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-navy-800 transition-colors hover:bg-navy-50"
                >
                  {link.label}
                  <span className="text-gold-500">→</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3 border-t border-navy-100 px-6 py-6">
            <button
              onClick={() => {
                setOpen(false);
                onQuote();
              }}
              className="btn-gold w-full"
            >
              Get a Quote
            </button>
            <a href={COMPANY.phoneHref} className="btn-outline w-full">
              Call {COMPANY.phone}
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
