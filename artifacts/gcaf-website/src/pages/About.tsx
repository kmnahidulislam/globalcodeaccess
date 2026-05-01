import { Link } from 'react-router-dom';
import { Eye, Target, Heart, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';

export default function About() {
  return (
    <>
      <PageHero
        title="About GCAF"
        subtitle="Understanding our mission, values, and the vision driving our work to create a more inclusive digital world."
        breadcrumb="About"
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            The Global Code Access Foundation is a technology-focused nonprofit initiative dedicated to expanding equitable access to coding, digital skills, and open technology worldwide.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            In an increasingly digital world where opportunity is closely tied to access, many individuals — especially in underserved and developing regions — remain excluded due to limited resources, infrastructure, and exposure. The foundation exists to address this gap by promoting accessibility, encouraging participation, and supporting pathways that enable individuals to engage with technology not only as users, but as creators and contributors.
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-teal-950/40 to-slate-900/50 border border-teal-800/30 rounded-2xl p-8">
            <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              A world where opportunity in the digital economy is not limited by geography, economic status, or systemic barriers — where every individual has the access and agency to participate as a creator in the global technology ecosystem.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900/50 border border-cyan-800/30 rounded-2xl p-8">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Approach</h3>
            <p className="text-slate-400 leading-relaxed">
              We take a clear, transparent, and purpose-driven approach. Rather than imposing solutions, we work alongside communities to understand their needs and build sustainable pathways to digital participation. Our work is grounded in listening, collaboration, and long-term impact.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Accessibility', desc: 'Technology education and tools should be available to everyone, regardless of location, income, or background.' },
            { title: 'Empowerment', desc: 'We enable people to move beyond passive consumption of technology into active creation and contribution.' },
            { title: 'Transparency', desc: 'We operate with full openness about our goals, methods, and impact — building trust through accountability.' },
            { title: 'Collaboration', desc: 'Progress requires collective effort. We build partnerships and communities united by shared purpose.' },
            { title: 'Sustainability', desc: 'Our programs are designed for lasting impact, not short-term fixes. We invest in long-term capacity building.' },
            { title: 'Inclusivity', desc: 'We actively work to include those who have been historically excluded from the technology ecosystem.' },
          ].map((value, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-teal-700/40 transition">
              <h4 className="font-semibold text-teal-400 mb-2">{value.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold mb-8 text-center">The Reality We Address</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { stat: '~3 Billion', label: 'People remain offline worldwide, excluded from the digital economy and its opportunities.' },
            { stat: '60%+', label: 'Of the population in least developed countries lacks internet access, limiting exposure to technology.' },
            { stat: '< 5%', label: 'Of people in low-income countries have basic digital skills, creating a massive participation gap.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-3">{item.stat}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Why This Matters</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                The digital divide is not just about internet connectivity. It's about who gets to create, who gets to innovate, and who gets to participate in shaping the future. When entire communities are excluded from technology creation, their perspectives, needs, and solutions are absent from the digital world.
              </p>
              <p className="text-slate-400 leading-relaxed">
                GCAF exists to change this — not by providing charity, but by building pathways that enable individuals and communities to become active participants and contributors in the global technology ecosystem.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Community technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="text-center">
          <Heart className="w-12 h-12 text-teal-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Your involvement — whether as a volunteer, partner, or donor — directly helps expand access to technology for those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
              Make a Donation
            </Link>
            <Link to="/get-involved" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 hover:border-teal-400/50 hover:text-teal-400 font-semibold rounded-xl transition-all">
              Get Involved <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
