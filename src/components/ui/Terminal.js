import { motion } from 'framer-motion';

/**
 * Terminal window component — macOS-style chrome with traffic light dots.
 * Used throughout the developer-themed portfolio.
 */
export function Terminal({
  title = 'terminal',
  children,
  className = '',
  variant = 'default',
  showDots = true,
}) {
  return (
    <div className={`terminal-window ${className}`}>
      {/* Title bar */}
      <div className="terminal-header">
        {showDots && (
          <div className="flex gap-1.5">
            <span className="terminal-dot bg-red-500/80" />
            <span className="terminal-dot bg-yellow-500/80" />
            <span className="terminal-dot bg-green-500/80" />
          </div>
        )}
        <span className="text-xs font-mono text-text-secondary ml-2 truncate">
          {title}
        </span>
        {variant === 'editor' && (
          <div className="ml-auto flex items-center gap-2 text-text-secondary/50">
            <span className="text-[10px] font-mono">UTF-8</span>
            <span className="text-[10px] font-mono">JavaScript</span>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="terminal-body">{children}</div>
    </div>
  );
}

/** Prompt line in terminal: $ command */
export function TerminalPrompt({ command, output, delay = 0 }) {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-2">
        <span className="syntax-prompt">$</span>
        <motion.span
          className="text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay, duration: 0.3 }}
        >
          {command}
        </motion.span>
      </div>
      {output && (
        <motion.div
          className="ml-6 text-text-secondary mt-0.5"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.3 }}
        >
          {output}
        </motion.div>
      )}
    </div>
  );
}

/** Code block with line numbers */
export function CodeBlock({ children, startLine = 1, className = '' }) {
  const lines = Array.isArray(children) ? children : [children];
  return (
    <div className={`font-mono text-sm ${className}`}>
      {lines.map((line, i) => (
        <div key={i} className="code-line">
          <span className="line-number">{startLine + i}</span>
          <span className="flex-1">{line}</span>
        </div>
      ))}
    </div>
  );
}

/** Single syntax-highlighted code line helper */
export function SyntaxLine({ children }) {
  return <div className="code-line py-0.5">{children}</div>;
}

/** Syntax span helpers */
export function Keyword({ children }) {
  return <span className="text-syntax-keyword">{children}</span>;
}
export function Str({ children }) {
  return <span className="text-syntax-string">{children}</span>;
}
export function Func({ children }) {
  return <span className="text-syntax-function">{children}</span>;
}
export function Variable({ children }) {
  return <span className="text-syntax-variable">{children}</span>;
}
export function Num({ children }) {
  return <span className="text-syntax-number">{children}</span>;
}
export function Comment({ children }) {
  return <span className="text-syntax-comment italic">{children}</span>;
}
export function Operator({ children }) {
  return <span className="text-syntax-operator">{children}</span>;
}
export function Tag({ children }) {
  return <span className="text-syntax-tag">{children}</span>;
}
export function Punct({ children }) {
  return <span className="text-text-secondary">{children}</span>;
}
