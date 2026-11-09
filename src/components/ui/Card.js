export function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`rounded-2xl border border-border bg-bg-secondary p-6 transition-all duration-300 ${
        hover ? 'hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/20' : ''
      } ${glow ? 'relative before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-b before:from-accent/30 before:to-transparent before:opacity-0 hover:before:opacity-100 before:pointer-events-none before:transition-opacity' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
