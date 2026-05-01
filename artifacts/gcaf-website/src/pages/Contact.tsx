import { useState } from 'react';
import { Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions about our programs, want to partner with us, or just want to learn more? We'd love to hear from you."
        breadcrumb="Contact"
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-teal-700/40 transition group">
            <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-800/30 flex items-center justify-center mb-4 group-hover:border-teal-600/40 transition">
              <Mail className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="font-bold text-slate-200 mb-1">Email Us</h3>
            <a href="mailto:hello@globalcodeaccess.com" className="text-teal-400 hover:text-teal-300 font-medium text-sm break-all transition">hello@globalcodeaccess.com</a>
            <p className="text-slate-500 text-xs mt-1">We respond within 48 hours</p>
          </div>

          {/* Address */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-teal-700/40 transition group">
            <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-800/30 flex items-center justify-center mb-4 group-hover:border-teal-600/40 transition">
              <MapPin className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="font-bold text-slate-200 mb-1">Our Office</h3>
            <address className="not-italic text-sm text-slate-400 leading-relaxed">
              Borak Zahir Tower<br />
              1 Kazi Nazrul Islam Ave<br />
              Dhaka 1215, Bangladesh
            </address>
          </div>

          {/* Availability */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-teal-700/40 transition group">
            <div className="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-800/30 flex items-center justify-center mb-4 group-hover:border-teal-600/40 transition">
              <Clock className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="font-bold text-slate-200 mb-1">Availability</h3>
            <p className="text-teal-400 font-medium text-sm">Mon–Fri, 9am–5pm UTC</p>
            <p className="text-slate-500 text-xs mt-1">For urgent matters, email us directly</p>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-slate-500 mb-8 text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>

            {submitted ? (
              <div className="bg-teal-950/30 border border-teal-700/30 rounded-xl p-8 text-center">
                <MessageSquare className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent</h3>
                <p className="text-slate-400 text-sm">Thank you for reaching out. We'll respond to your message within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-teal-500 transition"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="programs">Programs</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-500 mb-8 text-sm">Quick answers to common questions.</p>

            <div className="space-y-4">
              {[
                { q: 'How can I volunteer with GCAF?', a: "Visit our Get Involved page to explore volunteer opportunities, then reach out through this contact form. We match volunteers based on skills, availability, and program needs." },
                { q: 'Can my organization partner with GCAF?', a: 'Absolutely. We work with corporations, educational institutions, NGOs, and government agencies. Contact us with Partnership as the subject and we will schedule a conversation.' },
                { q: 'Is my donation tax-deductible?', a: "GCAF is a registered nonprofit organization. Donations are tax-deductible to the extent allowed by law in your jurisdiction. We provide donation receipts for all contributions." },
                { q: 'How do I apply for a GCAF program?', a: "Program enrollment varies by region and initiative. Contact us with details about your location and interests, and we will connect you with the right program coordinator." },
                { q: 'Can I donate equipment instead of money?', a: 'Yes! We accept device donations (laptops, tablets) and in-kind contributions. Contact us to arrange equipment donations.' },
              ].map((faq, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                  <h4 className="font-semibold text-sm text-slate-200 mb-2">{faq.q}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
