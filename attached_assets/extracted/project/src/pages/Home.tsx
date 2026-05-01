import { Link } from 'react-router-dom';
import { Code, Users, Globe, Zap, ArrowRight, Heart, BookOpen, Server } from 'lucide-react';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/50 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-400/10 border border-teal-400/20 rounded-full mb-8">
            <Globe className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-teal-400 font-medium">A Global Nonprofit Initiative</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
            Expanding Access
            <br />
            to <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">Code & Technology</span>
            <br />
            Worldwide
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            In an increasingly digital world, opportunity is defined by access. We work to ensure that no one is left behind — empowering individuals to become creators, not just consumers, of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-teal-500/25">
              Learn Our Mission <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 hover:border-teal-400/50 hover:text-teal-400 font-semibold rounded-xl transition-all">
              <Heart className="w-5 h-5" /> Support Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-slate-800 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '50+', label: 'Countries Reached' },
            { value: '10K+', label: 'Lives Impacted' },
            { value: '200+', label: 'Volunteers' },
            { value: '100%', label: 'Open & Transparent' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Preview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why We Exist</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">The digital divide is not just about connectivity — it's about opportunity, agency, and the ability to shape the future.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-950/30 to-slate-900/50 border border-red-900/30 rounded-2xl p-8">
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
              <Code className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">The Problem</h3>
            <p className="text-slate-400 leading-relaxed">
              Millions of people — especially in underserved and developing regions — are excluded from the digital economy. Limited resources, infrastructure gaps, and systemic barriers prevent them from accessing the tools and education needed to participate as creators in the technology ecosystem.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-950/30 to-slate-900/50 border border-teal-800/30 rounded-2xl p-8">
            <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Our Approach</h3>
            <p className="text-slate-400 leading-relaxed">
              GCAF promotes accessibility, encourages participation, and supports pathways that enable individuals to engage with technology as creators and contributors. We build awareness, foster inclusive access, and support a more open and collaborative technology ecosystem.
            </p>
          </div>
        </div>
      </Section>

      {/* Focus Areas Preview */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Focus On</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Our work is organized around four interconnected pillars that address the root causes of digital exclusion.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: 'Coding Access', desc: 'Making programming education and tools available to underserved communities around the world.', color: 'teal' },
            { icon: BookOpen, title: 'Digital Skills', desc: 'Building foundational technology literacy so individuals can navigate and contribute to the digital world.', color: 'cyan' },
            { icon: Users, title: 'Community Building', desc: 'Creating networks of support, mentorship, and collaboration that sustain long-term growth.', color: 'emerald' },
            { icon: Server, title: 'Open Infrastructure', desc: 'Ensuring reliable, affordable access to the tools, platforms, and resources needed to create.', color: 'sky' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-teal-700/50 transition-all group">
              <div className={`w-12 h-12 bg-${item.color}-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 text-${item.color}-400`} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-100">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/focus-areas" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition">
            Explore all focus areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Image Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Coding education" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg">Empowering the next generation of creators</p>
              <p className="text-slate-300 text-sm mt-1">Coding workshops in underserved communities</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Technology Should Be a Bridge, Not a Barrier</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              When people have access to coding education and digital tools, they gain the ability to solve local problems, build businesses, and participate in the global economy on their own terms.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Our programs are designed to meet people where they are — whether that's a rural community with limited internet, an urban center lacking tech education, or a region recovering from conflict.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition">
              Read our full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/30 to-cyan-950/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Us in Building a More Inclusive Digital Future</h2>
          <p className="text-lg text-slate-400 mb-8">
            Whether you volunteer, partner, or donate — every action helps expand access to technology for those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
              Get Involved
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
