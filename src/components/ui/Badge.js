export function Badge({ children, variant = 'default', size = 'sm', className = '' }) {
  const variants = {
    default: 'bg-bg-tertiary text-text-secondary border border-border',
    accent: 'bg-accent/10 text-accent border border-accent/20 font-medium',
    glow: 'bg-accent/15 text-accent border border-accent/30 shadow-sm shadow-accent/10',
    outline: 'border border-border text-text-secondary',
  };

  const sizes = {
    xs: 'text-[10px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono transition-colors ${variants[variant] || variants.default} ${sizes[size] || sizes.sm} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent/80" />
      {children}
    </span>
  );
}
