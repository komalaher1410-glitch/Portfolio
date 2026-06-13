interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="section-heading">{title}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{subtitle}</h2>
    </div>
  );
}
