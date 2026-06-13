import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const initialForm = { name: '', email: '', subject: '', message: '' };
const contactMethods = [
  { label: 'Location', value: 'Nashik, Maharashtra, India', href: 'https://www.google.com/maps', icon: <FaMapMarkerAlt /> },
  { label: 'GitHub', value: 'komalaher1410-glitch', href: 'https://github.com/komalaher1410-glitch', icon: <FaGithub /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/komal-aher-35262a383', href: 'https://linkedin.com/in/komal-aher-35262a383', icon: <FaLinkedin /> }
];

export default function Contact() {
  const [formValues, setFormValues] = useState(initialForm);
  const [statusMessage, setStatusMessage] = useState('');
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    return () => {
      setStatusMessage('');
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState('sending');
    setStatusMessage('Sending message...');

    const env = import.meta as any;
    const serviceId = env.env.VITE_EMAILJS_SERVICE_ID || 'service_xxx';
    const templateId = env.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxx';
    const publicKey = env.env.VITE_EMAILJS_PUBLIC_KEY || 'public_xxx';

    try {
      await emailjs.send(serviceId, templateId, formValues, publicKey);
      setSubmissionState('success');
      setStatusMessage('Message sent successfully! I will reply soon.');
      setFormValues(initialForm);
    } catch (error) {
      setSubmissionState('error');
      setStatusMessage('Unable to send message. Please try again or connect via GitHub or LinkedIn.');
    }
  };

  return (
    <section id="contact" className="glass-card border-white/10 p-8 shadow-glass md:p-12">
      <div className="section-heading">Contact</div>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Let's start something impactful</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Build a brand experience that stands out.</h2>
          <p className="max-w-3xl text-slate-300">
            I love collaborating with founders, product teams, and recruiters on ambitious web applications. Share your challenge and I’ll help turn it into a polished digital experience.
          </p>

          <div className="grid gap-4 rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
              {contactMethods.slice(0, 2).map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-slate-300 transition hover:border-cyan-400 hover:text-white"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">{method.icon}</span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{method.label}</p>
                    <p className="mt-1 text-sm font-medium text-white">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.slice(2).map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-slate-300 transition hover:border-cyan-400 hover:text-white"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">{method.icon}</span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{method.label}</p>
                    <p className="mt-1 text-sm font-medium text-white">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-panel">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Name
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Email
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Subject
            <input
              type="text"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              required
              className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-300">
            Message
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              rows={6}
              required
              className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            />
          </label>
          <button
            type="submit"
            disabled={submissionState === 'sending'}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submissionState === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {statusMessage && (
            <p
              aria-live="polite"
              className={`rounded-3xl px-4 py-3 text-sm ${submissionState === 'success' ? 'bg-emerald-500/10 text-emerald-200' : 'bg-rose-500/10 text-rose-200'}`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
