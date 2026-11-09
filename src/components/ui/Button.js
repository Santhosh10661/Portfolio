import Link from 'next/link';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  external = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed rounded-lg active:scale-[0.98]';

  const variants = {
    primary:
      'bg-accent text-background font-semibold hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30',
    secondary:
      'bg-bg-tertiary text-foreground hover:bg-bg-secondary border border-border hover:border-accent/40',
    outline:
      'border border-border text-foreground hover:border-accent hover:text-accent bg-transparent',
    ghost:
      'text-text-secondary hover:text-foreground hover:bg-bg-tertiary/60',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${classes}`}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${classes}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${classes}`} {...props}>
      {content}
    </button>
  );
}
