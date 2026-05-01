import { Link } from 'react-router-dom';
import { User, Building2, HandHeart, ArrowRight, Heart, Users, Code, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';

export default function GetInvolved() {
  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="Whether you're an individual looking to contribute, an organization seeking partnership, or someone who wants to support our mission — there's a place for you here."
        breadcrumb="Get Involved"
      />

      {/* Three Pathways */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: User,
              title: 'For Individuals',
              subtitle: 'Share your time and skills',
              color: 'teal',
              items: [
                { label: 'Volunteer as a Mentor', desc: 'Guide learners through their coding journey with one-on-one or group mentorship.' },
                { label: 'Teach a Workshop', desc: 'Lead coding or digital skills sessions in underserved communities or online.' },
                { label: 'Contribute to Open Source', desc: 'Help build and maintain the open-source tools and platforms we provide.' },
                { label: 'Translate Content', desc: 'Make our educational materials accessible in more languages.' },
                { label: 'Organize Local Events', desc: 'Host meetups, hackathons, or learning circles in your community.' },
              ],
            },
            {
              icon: Building2,
              title: 'For Organizations',
              subtitle: 'Partner for greater impact',
              color: 'cyan',
              items: [
                { label: 'Corporate Partnerships', desc: 'Align your CSR goals with our mission through structured partnership programs.' },
                { label: 'Host Training Programs', desc: 'Provide facilities, instructors, or resources for digital skills workshops.' },
                { label: 'Technology Donations', desc: 'Donate devices, software licenses, or infrastructure to support learners.' },
                { label: 'Employee Volunteering', desc: 'Engage your team as mentors, instructors, or project contributors.' },
                { label: 'Co-Develop Programs', desc: 'Collaborate on designing and delivering initiatives in your region.' },
              ],
            },
            {
              icon: HandHeart,
              title: 'For Supporters',
              subtitle: 'Fund the future of access',
              color: 'emerald',
              items: [
                { label: 'One-Time Donation', desc: 'Make a direct financial contribution to support our programs and operations.' },
                { label: 'Monthly Giving', desc: 'Provide sustained support with a recurring donation that enables long-term planning.' },
                { label: 'Sponsor a Program', desc: 'Fund a specific initiative — a bootcamp, device program, or community.' },
                { label: 'In-Kind Donations', desc: 'Contribute equipment, software, hosting, or professional services.' },
                { label: 'Spread the Word', desc: 'Amplify our mission by sharing our work with your network and community.' },
              ],
            },
          ].map((pathway, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-teal-700/40 transition">
              <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                <pathway.icon className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-1">{pathway.title}</h3>
              <p className="text-sm text-slate-500 mb-6">{pathway.subtitle}</p>
              <ul className="space-y-4">
                {pathway.items.map((item, i) => (
                  <li key={i}>
                    <div className="font-medium text-sm text-slate-200 mb-0.5">{item.label}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section dark>
        <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">Getting involved is straightforward. Here's what to expect when you reach out.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Reach Out', desc: "Contact us through our form or email. Tell us about yourself and how you'd like to contribute." },
            { step: '02', title: 'Connect', desc: "We'll schedule a conversation to understand your interests, skills, and availability." },
            { step: '03', title: 'Match', desc: "We'll match you with the right program, role, or partnership based on your profile." },
            { step: '04', title: 'Get Started', desc: "Begin your journey \u2014 whether that's mentoring, teaching, donating, or collaborating." },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-5xl font-extrabold text-slate-800 mb-2">{item.step}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              {idx < 3 && <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-slate-800" />}
            </div>
          ))}
        </div>
      </Section>

      {/* Impact Stories */}
      <Section>
        <h2 className="text-3xl font-bold mb-4 text-center">The Impact of Involvement</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">Every contribution — no matter the size — creates real, measurable impact in communities around the world.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, stat: '200+', label: 'Active volunteers contributing their time and expertise across programs' },
            { icon: Code, stat: '15+', label: 'Countries where our volunteer-led programs are actively running' },
            { icon: Globe, stat: '50+', label: 'Partner organizations working alongside us to expand access' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <item.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">{item.stat}</div>
              <p className="text-slate-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/30 to-cyan-950/30" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Heart className="w-12 h-12 text-teal-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-slate-400 mb-8">
            Whether you volunteer, partner, or donate — your involvement directly expands access to technology for those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
              Contact Us
            </Link>
            <Link to="/donate" className="px-8 py-4 border border-teal-400/30 text-teal-400 hover:bg-teal-400/10 font-semibold rounded-xl transition-all">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
