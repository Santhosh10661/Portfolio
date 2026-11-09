import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

// Smooth cubic-bezier easing (Linear / Vercel style)
export const transitionEase = [0.21, 0.47, 0.32, 0.98];

/**
 * FadeIn — Smoothly animates into view on scroll
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  distance = 24,
  className = '',
  once = true,
  ...props
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: transitionEase,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer — Orchestrates staggered entrance for child elements
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className = '',
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: transitionEase,
    },
  },
};

/**
 * Parallax — Translates an element vertically at a different speed while scrolling
 */
export function Parallax({
  children,
  speed = 0.2, // positive moves slower (feels farther), negative moves faster
  offset = 50,
  className = '',
  ...props
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-offset * speed * 2, offset * speed * 2]
  );
  const smoothY = useSpring(y, { stiffness: 400, damping: 90 });

  return (
    <div ref={ref} className={`relative overflow-visible ${className}`} {...props}>
      <motion.div style={{ y: smoothY }}>{children}</motion.div>
    </div>
  );
}

/**
 * ParallaxLayer — Standalone layer with scroll progress binding for background or decorative elements
 */
export function ParallaxLayer({
  children,
  range = [-40, 40],
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], range);
  const smoothY = useSpring(y, { stiffness: 300, damping: 60 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: smoothY }}>{children}</motion.div>
    </div>
  );
}

/**
 * TiltCard — Subtle 3D card tilt & glare on hover
 */
export function TiltCard({
  children,
  className = '',
  maxTilt = 7,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`transition-shadow duration-300 will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
