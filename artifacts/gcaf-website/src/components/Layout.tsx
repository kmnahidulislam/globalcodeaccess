import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Heart, ArrowUp, Code, BookOpen, Users, Server, Mail, Shield, MapPin, Globe } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/focus-areas', label: 'Focus Areas' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowBackTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* ── HEADER ── */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-[0_1px_0_0_rgba(20,184,166,0.06)]'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="/logo-gcaf.png"
                alt="Global Code Access Foundation"
                className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center bg-slate-900/40 rounded-xl p-1 border border-slate-800/50">
                {navLinks.map(link => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`relative px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-teal-500/15 border border-teal-400/20 rounded-lg" />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/donate"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl overflow-hidden transition-all transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all group-hover:from-teal-400 group-hover:to-cyan-400" />
                <Heart className="w-4 h-4 text-white relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10 text-white">Donate</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/60">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="space-y-1">
                {navLinks.map(link => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'text-teal-400 bg-teal-400/10 border border-teal-400/20'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800/60">
                <Link
                  to="/donate"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold rounded-xl"
                >
                  <Heart className="w-4 h-4" /> Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="flex-1 pt-18">
        {children}
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative bg-slate-950 border-t border-slate-800/60">
        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

        {/* Newsletter / CTA Band */}
        <div className="border-b border-slate-800/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-teal-950/40 via-slate-900/60 to-cyan-950/40 border border-slate-800/40 rounded-2xl px-6 sm:px-8 py-8">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white mb-1">Join the Movement</h3>
                <p className="text-sm text-slate-400">Help us expand access to technology for communities worldwide.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 border border-slate-700/50 text-slate-200 hover:text-white hover:border-teal-500/40 text-sm font-medium rounded-xl transition-all"
                >
                  Get Involved
                </Link>
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white text-sm font-semibold rounded-xl transition-all transform hover:scale-[1.03]"
                >
                  <Heart className="w-4 h-4" /> Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="inline-block mb-5 group">
                <img
                  src="/logo-gcaf.png"
                  alt="Global Code Access Foundation"
                  className="h-10 w-auto object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all"
                />
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                A technology-focused nonprofit dedicated to expanding equitable access to coding, digital skills, and open technology worldwide.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50 animate-pulse" />
                <span className="text-xs text-slate-400">Programs Active · 50+ Countries</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-5">Navigate</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About Us', to: '/about' },
                  { label: 'Focus Areas', to: '/focus-areas' },
                  { label: 'Get Involved', to: '/get-involved' },
                  { label: 'Donate', to: '/donate' },
                  { label: 'Contact', to: '/contact' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.to} className="text-sm text-slate-500 hover:text-teal-400 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-5">Focus Areas</h4>
              <ul className="space-y-3">
                {[
                  { icon: Code, label: 'Coding Access' },
                  { icon: BookOpen, label: 'Digital Skills' },
                  { icon: Users, label: 'Community Building' },
                  { icon: Globe, label: 'Open Technology' },
                  { icon: Server, label: 'Infrastructure' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to="/focus-areas" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-400 transition-colors group">
                      <item.icon className="w-3.5 h-3.5 text-slate-600 group-hover:text-teal-500 transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-5">Contact Us</h4>
              <div className="space-y-4">
                <a
                  href="mailto:hello@globalcodeaccess.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/40 flex items-center justify-center shrink-0 group-hover:border-teal-500/40 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Email</p>
                    <span className="text-sm text-slate-400 group-hover:text-teal-400 transition-colors break-all">hello@globalcodeaccess.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Address</p>
                    <address className="text-sm text-slate-400 not-italic leading-relaxed">
                      Borak Zahir Tower<br />
                      1 Kazi Nazrul Islam Ave<br />
                      Dhaka 1215, Bangladesh
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/40 space-y-2">
                <Link to="/privacy" className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors">
                  <Shield className="w-3 h-3" /> Privacy Policy
                </Link>
                <Link to="/terms" className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors">
                  <Shield className="w-3 h-3" /> Terms of Use
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-slate-600 text-xs">
                &copy; {new Date().getFullYear()} Global Code Access Foundation. All rights reserved.
              </p>
              <a href="mailto:hello@globalcodeaccess.com" className="text-xs text-slate-600 hover:text-teal-400 transition-colors">
                hello@globalcodeaccess.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── BACK TO TOP ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-950/50 ${
          showBackTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
