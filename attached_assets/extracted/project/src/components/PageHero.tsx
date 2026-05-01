import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
  gradient?: string;
}

export default function PageHero({ title, subtitle, breadcrumb, gradient = 'from-teal-400 via-cyan-400 to-teal-400' }: PageHeroProps) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/40 via-slate-950 to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {breadcrumb && (
          <div className="mb-6">
            <Link to="/" className="text-sm text-slate-500 hover:text-teal-400 transition">Home</Link>
            <span className="text-slate-600 mx-2">/</span>
            <span className="text-sm text-slate-400">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{title}</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}
