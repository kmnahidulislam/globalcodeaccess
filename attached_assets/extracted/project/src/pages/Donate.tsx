import { useState } from 'react';
import { Heart, Shield, CheckCircle, ArrowRight, Globe, Users, Code, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';

const amounts = [10, 25, 50, 100, 250, 500];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');

  return (
    <>
      <PageHero
        title="Support Our Mission"
        subtitle="Your donation directly funds programs that expand access to coding, digital skills, and open technology for underserved communities worldwide."
        breadcrumb="Donate"
        gradient="from-teal-400 via-emerald-400 to-cyan-400"
      />

      {/* Why Donate */}
      <Section>
        <h2 className="text-3xl font-bold mb-10 text-center">Your Donation Makes This Possible</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Code, amount: '$10', desc: 'Provides a month of coding curriculum access for one learner' },
            { icon: BookOpen, amount: '$25', desc: 'Funds digital literacy training for an individual' },
            { icon: Users, amount: '$50', desc: 'Supports a mentorship pairing for three months' },
            { icon: Globe, amount: '$100', desc: 'Helps equip a community learning center with tools' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center hover:border-teal-700/40 transition">
              <item.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-teal-400 mb-2">{item.amount}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Donation Form */}
      <Section dark>
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold mb-2 text-center">Make a Donation</h2>
            <p className="text-slate-500 text-center mb-8">Every contribution, no matter the size, helps expand access to technology.</p>

            {/* Frequency Toggle */}
            <div className="flex bg-slate-800/50 rounded-xl p-1 mb-8">
              <button
                onClick={() => setFrequency('once')}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition ${frequency === 'once' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                One-Time
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition ${frequency === 'monthly' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Monthly
              </button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {amounts.map(amt => (
                <button
                  key={amt}
                  onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                  className={`py-4 rounded-xl text-lg font-semibold transition-all ${
                    selectedAmount === amt
                      ? 'bg-teal-600 text-white border-2 border-teal-500'
                      : 'bg-slate-800/50 text-slate-400 border-2 border-slate-700 hover:border-teal-600/50 hover:text-white'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm text-slate-400 mb-2">Or enter a custom amount:</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="0"
                  value={customAmount}
                  onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-4 pl-10 pr-4 text-lg text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400 text-sm">Donation Amount</span>
                <span className="font-bold text-lg text-white">${selectedAmount || customAmount || '0'}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400 text-sm">Frequency</span>
                <span className="text-sm text-slate-200">{frequency === 'once' ? 'One-Time' : 'Monthly'}</span>
              </div>
              {frequency === 'monthly' && (selectedAmount || customAmount) && (
                <div className="flex justify-between items-center pt-2 border-t border-slate-700/50">
                  <span className="text-slate-400 text-sm">Annual Total</span>
                  <span className="text-sm text-teal-400">${(Number(selectedAmount || customAmount) * 12).toLocaleString()}/year</span>
                </div>
              )}
            </div>

            {/* Submit */}
            <button className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] text-lg">
              {frequency === 'once' ? 'Donate Now' : 'Start Monthly Giving'}
            </button>

            <p className="text-xs text-slate-600 text-center mt-4">
              By donating, you agree to our <a href="/privacy" className="text-slate-500 hover:text-teal-400 underline">Privacy Policy</a>. All donations are tax-deductible to the extent allowed by law.
            </p>
          </div>
        </div>
      </Section>

      {/* Trust & Transparency */}
      <Section>
        <h2 className="text-3xl font-bold mb-10 text-center">Our Commitment to Transparency</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: 'Secure Processing', desc: 'All donations are processed through secure, encrypted payment systems. Your financial information is never stored on our servers.' },
            { icon: CheckCircle, title: 'Full Accountability', desc: 'We publish annual impact reports detailing how donations are used and the outcomes they produce. Every dollar is tracked.' },
            { icon: Heart, title: 'Maximum Impact', desc: 'Over 85% of every donation goes directly to program delivery. We minimize overhead to maximize the impact of your contribution.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-teal-700/40 transition">
              <item.icon className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How Funds Are Used */}
      <Section dark>
        <h2 className="text-3xl font-bold mb-10 text-center">How Your Donation Is Used</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {[
              { label: 'Program Delivery', pct: 70, desc: 'Direct funding for coding education, digital skills training, and community programs' },
              { label: 'Infrastructure & Tools', pct: 15, desc: 'Devices, connectivity, platforms, and resources for learners' },
              { label: 'Operations', pct: 10, desc: 'Staff, administration, and program coordination' },
              { label: 'Fundraising', pct: 5, desc: 'Efforts to sustain and grow our funding base' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-200">{item.label}</span>
                  <span className="text-sm font-bold text-teal-400">{item.pct}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 mb-1">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full transition-all" style={{ width: `${item.pct}%` }} />
                </div>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Other Ways to Give */}
      <Section>
        <h2 className="text-3xl font-bold mb-10 text-center">Other Ways to Give</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: 'Device Donations', desc: 'Donate laptops, tablets, or other devices that we refurbish and provide to learners in need. Contact us to arrange a device donation.' },
            { title: 'Corporate Matching', desc: 'Many employers match charitable donations. Check if your company offers a matching gift program to double your impact.' },
            { title: 'In-Kind Contributions', desc: 'Professional services, software licenses, hosting, and other non-cash contributions are welcome and valued.' },
            { title: 'Legacy Giving', desc: 'Include GCAF in your estate planning to create a lasting impact on digital access for future generations.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-teal-700/40 transition">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
