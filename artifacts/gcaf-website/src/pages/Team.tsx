import { Users, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';

const leadership = [
  {
    name: 'Rafiq Hasan',
    role: 'Executive Director & Co-Founder',
    bio: 'A passionate advocate for digital equity, Rafiq brings over 15 years of experience in nonprofit leadership and technology education across South and Southeast Asia.',
    photo: 'https://i.pravatar.cc/200?img=11',
  },
  {
    name: 'Nadia Sultana',
    role: 'Director of Programs',
    bio: 'Nadia oversees GCAF\'s global program portfolio, ensuring coding curricula reach underserved communities across 50+ countries with measurable, lasting impact.',
    photo: 'https://i.pravatar.cc/200?img=47',
  },
  {
    name: 'Tariq Ahmed',
    role: 'Chief Technology Officer',
    bio: 'With a background in open-source software engineering, Tariq leads the development of GCAF\'s digital platforms, learning tools, and infrastructure initiatives.',
    photo: 'https://i.pravatar.cc/200?img=15',
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Partnerships',
    bio: 'Priya builds and maintains GCAF\'s network of corporate, academic, and government partners, driving funding and volunteer engagement across South Asia and beyond.',
    photo: 'https://i.pravatar.cc/200?img=44',
  },
];

const advisors = [
  {
    name: 'Dr. Amina Khatun',
    role: 'Academic Advisor',
    affiliation: 'BUET — Bangladesh University of Engineering & Technology',
    photo: 'https://i.pravatar.cc/200?img=32',
  },
  {
    name: 'James O\'Brien',
    role: 'Technology Advisor',
    affiliation: 'Former VP Engineering, Global Fintech Group',
    photo: 'https://i.pravatar.cc/200?img=53',
  },
  {
    name: 'Mei-Ling Chen',
    role: 'Education Advisor',
    affiliation: 'UNESCO Digital Skills Programme',
    photo: 'https://i.pravatar.cc/200?img=25',
  },
  {
    name: 'Samuel Owusu',
    role: 'Community Advisor',
    affiliation: 'Pan-African Digital Inclusion Network',
    photo: 'https://i.pravatar.cc/200?img=68',
  },
];

const stats = [
  { value: '50+', label: 'Countries Reached' },
  { value: '200+', label: 'Active Volunteers' },
  { value: '10K+', label: 'Learners Impacted' },
  { value: '4', label: 'Years of Impact' },
];

export default function Team() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Meet the people behind the mission — a passionate, globally-distributed team dedicated to expanding access to code and technology for everyone."
        breadcrumb="Team"
      />

      {/* Stats bar */}
      <div className="bg-slate-900/60 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-teal-400">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <Section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-950/40 border border-teal-800/30 rounded-full text-teal-400 text-xs font-medium mb-4">
            <Users className="w-3.5 h-3.5" /> Leadership Team
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">The People Leading Our Mission</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Our leadership team combines expertise in technology, education, nonprofit management, and community development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-teal-700/40 transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-5 ring-2 ring-slate-700/50 group-hover:ring-teal-600/40 transition-all">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-white text-base mb-0.5">{member.name}</h3>
              <p className="text-teal-400 text-xs font-medium mb-3">{member.role}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Advisors */}
      <Section dark>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-950/40 border border-teal-800/30 rounded-full text-teal-400 text-xs font-medium mb-4">
            <Globe className="w-3.5 h-3.5" /> Advisory Board
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Our Advisors</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            A distinguished group of global experts who guide our strategic direction and program development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advisors.map((advisor, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5 flex flex-col hover:border-teal-700/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 ring-2 ring-slate-700/40 group-hover:ring-teal-600/30 transition-all">
                <img
                  src={advisor.photo}
                  alt={advisor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-white text-sm mb-0.5">{advisor.name}</h3>
              <p className="text-teal-400 text-xs font-medium mb-2">{advisor.role}</p>
              <p className="text-slate-600 text-xs leading-relaxed">{advisor.affiliation}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Volunteer CTA */}
      <Section>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal-950/60 via-slate-900/80 to-cyan-950/60 border border-teal-800/20 px-6 sm:px-12 py-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_70%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-950/60 border border-teal-800/30 rounded-full text-teal-400 text-xs font-medium mb-6">
              <Users className="w-3.5 h-3.5" /> Join Our Team
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Want to Make a Difference?</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8">
              We're always looking for passionate individuals to join our volunteer network, contribute skills, or partner with us to expand our reach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/get-involved"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-teal-900/40"
              >
                <Users className="w-4 h-4" /> Get Involved
              </a>
              <a
                href="mailto:hello@globalcodeaccess.com"
                className="inline-flex items-center gap-2 px-7 py-3 bg-slate-800/80 border border-slate-700/50 text-slate-300 hover:text-white hover:border-teal-500/40 font-medium rounded-xl transition-all"
              >
                hello@globalcodeaccess.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
