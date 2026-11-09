export function Input({ label, error, id, className = '', ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-text-secondary/50 transition-colors focus:border-accent focus:bg-bg-tertiary/50 focus:outline-none focus:ring-1 focus:ring-accent ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function Textarea({ label, error, id, rows = 4, className = '', ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={`w-full resize-none rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-text-secondary/50 transition-colors focus:border-accent focus:bg-bg-tertiary/50 focus:outline-none focus:ring-1 focus:ring-accent ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
