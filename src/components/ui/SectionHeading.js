export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignments[align]} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
