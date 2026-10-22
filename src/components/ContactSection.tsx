import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Full-time Full Stack Engineer',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        roleInterest: 'Full-time Full Stack Engineer',
        subject: '',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            06. Connect & Collaborate
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Let's Discuss Full Stack Opportunities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Currently available for Full-time Full Stack, MEAN/MERN Stack Developer, and Senior Frontend/Backend Engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              <div>
                <h3 className="text-base font-bold text-white">Direct Communication Channels</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Prompt replies guaranteed within 24 hours.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-800/60 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Mobile / WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-mono">Location Base</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn Button */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-all group"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </a>

            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-300 font-medium block mb-0.5">Notice Period & Availability</span>
                <span>Immediate / short notice period availability for full-time on-site, hybrid (Mumbai / Pune / Bengaluru), or remote engagements.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl backdrop-blur-xl">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Send Direct Inscription</h3>
              </div>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your message has been received. I will review your requirements and reach out to you promptly.
                  </span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-800 text-red-300 text-xs flex items-center gap-3">
                  <span>Please fill out your name, email, and message before submitting.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma / Tech Recruiter"
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 block">Your Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 block">Opportunity Type</label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Full-time Full Stack Engineer">Full-time Full Stack Engineer</option>
                      <option value="Senior Angular / Node.js Lead">Senior Angular / Node.js Lead</option>
                      <option value="MEAN / MERN Stack Specialist">MEAN / MERN Stack Specialist</option>
                      <option value="Consulting / Architecture">Consulting / Architecture</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 block">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Developer Opening"
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 block">Message & Project Scope *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your role, technology requirements, or project scope..."
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500">
                    Direct confidential contact. No spam ever.
                  </p>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/25 transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{formStatus === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
