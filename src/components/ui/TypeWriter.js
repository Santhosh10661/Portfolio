import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * TypeWriter — Renders text one character at a time with a blinking cursor.
 * Used in the terminal-style Hero section.
 */
export function TypeWriter({
  text,
  speed = 45,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete,
}) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, started, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && !done && (
        <span className="typing-cursor" />
      )}
    </span>
  );
}

/**
 * MultiLineTypeWriter — Types multiple lines sequentially.
 * Each line starts typing after the previous one finishes.
 */
export function MultiLineTypeWriter({
  lines,
  speed = 40,
  lineDelay = 200,
  initialDelay = 0,
  className = '',
}) {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);

  const handleLineComplete = (lineIndex) => {
    setCompletedLines((prev) => [...prev, lineIndex]);
    setTimeout(() => {
      if (lineIndex < lines.length - 1) {
        setCurrentLine(lineIndex + 1);
      }
    }, lineDelay);
  };

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="min-h-[1.6em]">
          {i < currentLine ? (
            <span>{line.text}</span>
          ) : i === currentLine ? (
            <TypeWriter
              text={line.text}
              speed={line.speed || speed}
              delay={i === 0 ? initialDelay : 0}
              showCursor={!completedLines.includes(i)}
              onComplete={() => handleLineComplete(i)}
              className={line.className || ''}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

/**
 * BlinkingCursor — Standalone blinking cursor block.
 */
export function BlinkingCursor({ className = '' }) {
  return (
    <motion.span
      className={`inline-block w-[8px] h-[1.15em] bg-accent align-text-bottom ${className}`}
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 1.1, repeat: Infinity, repeatType: 'reverse', ease: 'steps(1)' }}
    />
  );
}
