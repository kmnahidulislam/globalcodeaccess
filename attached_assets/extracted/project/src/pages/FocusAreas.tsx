import { Code, BookOpen, Users, Server, ArrowRight, Link as LinkIcon, Shield, GraduationCap, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Section from '../components/Section';

const focusAreas = [
  {
    icon: Code,
    title: 'Coding Access',
    subtitle: 'Opening the door to technology creation',
    color: 'teal',
    description: 'Access to coding education is the foundation of digital participation. Without the ability to write code, individuals are limited to consuming technology rather than creating it. Our coding access programs focus on removing the barriers that prevent people from learning to program.',
    initiatives: [
      'Free coding curricula adapted for diverse learning contexts and languages',
      'Mentorship programs connecting experienced developers with new learners',
      'Coding bootcamps and workshops in underserved communities',
      'Open-source learning platforms with accessible, self-paced content',
    ],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: BookOpen,
    title: 'Digital Skills Education',
    subtitle: 'Building foundational technology literacy',
    color: 'cyan',
    description: 'Before someone can learn to code, they need foundational digital skills — the ability to navigate a computer, use the internet safely, and understand basic digital concepts. Our digital skills programs meet people where they are, providing the essential building blocks for technology participation.',
    initiatives: [
      'Basic digital literacy programs for first-time technology users',
      'Internet safety and privacy education',
      'Workplace digital skills training for economic empowerment',
      'Curriculum development for local educational institutions',
    ],
    image: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Users,
    title: 'Community Building',
    subtitle: 'Creating networks of support and collaboration',
    color: 'emerald',
    description: "Sustainable change requires community. Isolated individuals learning alone are far less likely to persist and succeed than those embedded in supportive networks. We build and nurture communities where learners, mentors, and practitioners support each other's growth.",
    initiatives: [
      'Local technology meetups and learning circles',
      'Online communities for peer support and knowledge sharing',
      'Regional conferences and collaboration events',
      'Alumni networks that sustain long-term engagement',
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Server,
    title: 'Open Infrastructure',
    subtitle: 'Ensuring reliable access to tools and resources',
    color: 'sky',
    description: 'Even with education and community, individuals cannot create technology without access to the right tools — computers, internet connectivity, development platforms, and hosting services. Our infrastructure programs work to close this critical gap.',
    initiatives: [
      'Device access programs providing computers and tablets to learners',
      'Connectivity initiatives supporting affordable internet access',
      'Free development and hosting platforms for learning projects',
      'Open-source tool development for resource-constrained environments',
    ],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function FocusAreas() {
  return (
    <>
      <PageHero
        title="Focus Areas"
        subtitle="Our work is organized around four interconnected pillars that address the root causes of digital exclusion and build lasting pathways to participation."
        breadcrumb="Focus Areas"
      />

      {/* Overview */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {focusAreas.map((area, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              <area.icon className="w-6 h-6 text-teal-400 flex-shrink-0" />
              <span className="font-medium text-sm text-slate-300">{area.title}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Detailed Sections */}
      {focusAreas.map((area, idx) => (
        <Section key={idx} dark={idx % 2 === 1}>
          <div className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
            <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <area.icon className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{area.title}</h2>
                  <p className="text-sm text-slate-500">{area.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">{area.description}</p>

              <h4 className="font-semibold text-sm text-slate-300 mb-3">Key Initiatives:</h4>
              <ul className="space-y-2.5 mb-6">
                {area.initiatives.map((init, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                    <ArrowRight className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    {init}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
              <img src={area.image} alt={area.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>
          </div>
        </Section>
      ))}

      {/* Cross-Cutting Themes */}
      <Section>
        <h2 className="text-3xl font-bold mb-8 text-center">Cross-Cutting Principles</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">These principles guide how we approach all four focus areas, ensuring our work remains grounded and effective.</p>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: LinkIcon, title: 'Open Source', desc: 'We prioritize open-source tools and openly licensed content, ensuring our work can be freely used, adapted, and shared.' },
            { icon: Shield, title: 'Local Context', desc: 'Programs are adapted to local languages, cultures, and infrastructure realities — never one-size-fits-all solutions.' },
            { icon: GraduationCap, title: 'Sustainable Impact', desc: 'We design for long-term capacity building, not short-term interventions. Communities own and sustain the progress.' },
          ].map((theme, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center hover:border-teal-700/40 transition">
              <theme.icon className="w-8 h-8 text-teal-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">{theme.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{theme.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Support These Programs?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Your involvement helps us expand these focus areas and reach more communities around the world.</p>
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
