interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-slate-900/50' : 'bg-slate-950'} ${className}`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}
