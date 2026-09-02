import { useEffect, useState, type FormEvent } from 'react';
import { X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { PROJECT_TYPES } from '@/data';
import { supabase } from '@/lib/supabase';

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setStatus('idle');
      setErrorMsg('');
    }
  }, [open]);

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
      source: 'quote-modal',
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
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 ${
          open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="relative bg-navy-950 px-6 py-5">
          <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative flex items-start justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-white">Get a Quote</h3>
              <p className="mt-0.5 text-sm text-navy-200">Share your project details and our team will respond.</p>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-navy-200 transition-colors hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name *" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Email *" name="email" type="email" required />
            <Field label="Location" name="location" />
            <div>
              <label htmlFor="qm_project_type" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-600">
                Project Type
              </label>
              <select
                id="qm_project_type"
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
            <label htmlFor="qm_message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-600">
              Message
            </label>
            <textarea
              id="qm_message"
              name="message"
              rows={3}
              placeholder="Tell us about your project…"
              className="w-full rounded-xl border border-navy-200 bg-white px-3 py-2.5 text-sm text-navy-800 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            />
          </div>

          <button type="submit" disabled={status === 'submitting'} className="btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70">
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
              <span>Thank you — your request has been received. Our team will reach out shortly.</span>
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
