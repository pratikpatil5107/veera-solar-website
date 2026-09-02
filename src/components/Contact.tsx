import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2, AlertCircle, Navigation, MessageCircle } from 'lucide-react';
import { COMPANY, CTA_IMAGE, PROJECT_TYPES } from '@/data';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      company: String(data.get('company') ?? '').trim() || null,
      phone: String(data.get('phone') ?? '').trim() || null,
      email: String(data.get('email') ?? '').trim(),
      location: String(data.get('location') ?? '').trim() || null,
      project_type: String(data.get('project_type') ?? '').trim() || null,
      message: String(data.get('message') ?? '').trim() || null,
      source: 'website',
    };

    if (!payload.name || !payload.email) {
      setStatus('error');
      setErrorMsg('Please provide at least your name and email.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('contact_inquiries').insert(payload);
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <img src={CTA_IMAGE} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/95 to-navy-900/80" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info + map */}
          <div>
            <span className="eyebrow reveal">Contact</span>
            <h2 className="reveal reveal-delay-1 heading-lg mt-4 text-white">
              Let&apos;s build your <span className="text-gold-400">solar project.</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-5 max-w-md text-lg leading-relaxed text-navy-200">
              Tell us about your site, your energy goals and your timeline. Our engineering team
              will get back to you with a clear path forward.
            </p>

            <div className="reveal reveal-delay-3 mt-10 space-y-4">
              <a href={COMPANY.phoneHref} className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/40 hover:bg-white/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-navy-900">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-navy-300">Call us</span>
                  <span className="block text-base font-semibold text-white">{COMPANY.phone}</span>
                </span>
              </a>

              <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400/40 hover:bg-white/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400 transition-colors group-hover:bg-green-400 group-hover:text-navy-900">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-navy-300">WhatsApp</span>
                  <span className="block text-base font-semibold text-white">{COMPANY.phone}</span>
                </span>
              </a>

              <a href={COMPANY.emailHref} className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/40 hover:bg-white/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-navy-900">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-navy-300">Email us</span>
                  <span className="block text-base font-semibold text-white break-all">{COMPANY.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-navy-300">Working hours</span>
                  <span className="block text-base font-semibold text-white">{COMPANY.hours}</span>
                </span>
              </div>
            </div>

            {/* Location: written address + embedded map */}
            <div className="reveal reveal-delay-4 mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-navy-300">Our Office</span>
                  <span className="block text-base font-semibold text-white">{COMPANY.addressLine1}</span>
                  <span className="block text-sm text-navy-200">{COMPANY.addressLine2}</span>
                  <span className="block text-sm text-navy-200">{COMPANY.addressLine3}</span>
                  <span className="block text-sm text-navy-300">{COMPANY.addressLine4}</span>
                </div>
              </div>
              {/* Embedded Google Map - clickable to open full location */}
              <a
                href={COMPANY.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/9] w-full overflow-hidden border-t border-white/10"
                aria-label="Open Veera Solar Energy location on Google Maps"
              >
                <iframe
                  src={COMPANY.mapsEmbed}
                  title="Veera Solar Energy office location on Google Maps"
                  className="pointer-events-none h-full w-full grayscale-[0.3] transition-all duration-500 group-hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-navy-950/20 transition-opacity duration-300 group-hover:bg-navy-950/0" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-navy-900/90 px-4 py-2 text-xs font-semibold text-white shadow-card backdrop-blur-md transition-all duration-300 group-hover:bg-gold-400 group-hover:text-navy-900">
                  <Navigation className="h-3.5 w-3.5" />
                  Get Directions
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white p-6 shadow-card sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-navy-900">Request a Consultation</h3>
              <p className="mt-1 text-sm text-navy-500">Fields marked with * are required.</p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name *" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Email *" name="email" type="email" required />
                <Field label="Location" name="location" />
                <div>
                  <label htmlFor="project_type" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-600">
                    Project Type
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    defaultValue=""
                    className="h-11 w-full rounded-xl border border-navy-200 bg-white px-3 text-sm font-medium text-navy-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
                  >
                    <option value="" disabled>Select…</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project, site, energy goals or timeline…"
                  className="w-full rounded-xl border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Request a Consultation
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>Thank you — your inquiry has been received. Our team will reach out shortly.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-600">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 w-full rounded-xl border border-navy-200 bg-white px-3 text-sm font-medium text-navy-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
      />
    </div>
  );
}
