import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDownToLine, Sparkles, Terminal, Code2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import { transitionEase } from '@/components/ui/Motion';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax layers for background orbs and elements
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const floatingBadgeY1 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const floatingBadgeY2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const smoothOrbY = useSpring(orbY, { stiffness: 200, damping: 40 });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32"
    >
      {/* Parallax Radial Glow Orb */}
      <motion.div
        style={{ y: smoothOrbY, scale: orbScale }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[550px] h-[350px] sm:w-[950px] sm:h-[480px] bg-gradient-to-tr from-accent/20 via-teal-500/10 to-transparent blur-[140px] rounded-full pointer-events-none"
      />

      {/* Subtle grid pattern with parallax mask */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating decorative parallax pills (desktop only) */}
      <motion.div
        style={{ y: floatingBadgeY1 }}
        className="hidden lg:flex absolute left-8 top-1/4 items-center gap-2 rounded-xl border border-border/80 bg-bg-secondary/70 backdrop-blur-md px-3.5 py-2 text-xs font-mono text-text-secondary shadow-lg pointer-events-none"
      >
        <Code2 className="w-4 h-4 text-accent" />
        <span>Next.js + React Native</span>
      </motion.div>

      <motion.div
        style={{ y: floatingBadgeY2 }}
        className="hidden lg:flex absolute right-10 top-1/3 items-center gap-2 rounded-xl border border-border/80 bg-bg-secondary/70 backdrop-blur-md px-3.5 py-2 text-xs font-mono text-text-secondary shadow-lg pointer-events-none"
      >
        <Terminal className="w-4 h-4 text-accent" />
        <span>Lead Squad (4 Devs)</span>
      </motion.div>

      <Container>
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: transitionEase }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent mb-6 sm:mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>Available for Frontend &amp; Fullstack Roles</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-accent via-teal-300 to-accent-hover bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
            <br />
            Building scalable apps for web &amp; mobile.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: transitionEase }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-8 sm:mb-10"
          >
            Frontend Developer leading cross-platform delivery with{' '}
            <span className="text-foreground font-medium">React.js</span>,{' '}
            <span className="text-foreground font-medium">Next.js</span>, and{' '}
            <span className="text-foreground font-medium">React Native</span>. Passionate about design systems, responsive interfaces, and clean architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: transitionEase }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Button href="/projects" size="lg" icon={ArrowRight}>
              Explore Projects
            </Button>
            <Button
              href="/Santhosh_K_Resume.pdf"
              variant="secondary"
              size="lg"
              icon={ArrowDownToLine}
              external
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Stat counters */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.45 },
              },
            }}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-border/80"
          >
            {personalInfo.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: transitionEase },
                  },
                }}
                className="group flex flex-col items-center p-4 rounded-xl bg-bg-secondary/40 border border-border/60 hover:border-accent/40 hover:bg-bg-secondary/70 transition-all duration-300"
              >
                <span className="text-2xl sm:text-3xl font-bold text-accent font-mono mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </span>
                <span className="text-xs text-text-secondary font-mono uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
