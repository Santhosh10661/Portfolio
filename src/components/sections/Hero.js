import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDownToLine, Sparkles, Terminal, Code2, Check, Copy } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import { transitionEase, AnimatedCounter, Magnetic } from '@/components/ui/Motion';

export function Hero() {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax layers for background orbs and elements
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const floatingBadgeY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const floatingBadgeY2 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  const smoothOrbY = useSpring(orbY, { stiffness: 200, damping: 40 });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-12 pb-20 sm:pt-24 sm:pb-36"
    >
      {/* Dynamic Animated Ambient Glow Orb */}
      <motion.div
        style={{ y: smoothOrbY, scale: orbScale }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[360px] sm:w-[1050px] sm:h-[500px] bg-gradient-to-tr from-accent/25 via-teal-500/15 to-emerald-500/10 blur-[150px] rounded-full pointer-events-none"
      />

      {/* Grid Pattern with Vignette Mask */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating decorative parallax pills (desktop only) */}
      <motion.div
        style={{ y: floatingBadgeY1 }}
        className="hidden lg:flex absolute left-8 top-1/4 items-center gap-2.5 rounded-2xl border border-border/80 bg-bg-secondary/70 backdrop-blur-md px-4 py-2.5 text-xs font-mono text-text-secondary shadow-2xl pointer-events-none"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <Code2 className="w-4 h-4 text-accent" />
        <span>Next.js · React Native · Redux</span>
      </motion.div>

      <motion.div
        style={{ y: floatingBadgeY2 }}
        className="hidden lg:flex absolute right-8 top-1/3 items-center gap-2.5 rounded-2xl border border-border/80 bg-bg-secondary/70 backdrop-blur-md px-4 py-2.5 text-xs font-mono text-text-secondary shadow-2xl pointer-events-none"
      >
        <Terminal className="w-4 h-4 text-emerald-400" />
        <span>Lead 4-Dev Engineering Squad</span>
      </motion.div>

      <Container>
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Status Badge + Quick Copy Interaction */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: transitionEase }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>Available for Frontend Lead &amp; Senior Engineering</span>
            </motion.div>

            {/* Quick copy email pill */}
            <motion.button
              onClick={handleCopyEmail}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: transitionEase }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-bg-secondary/80 px-3 py-1.5 font-mono text-xs text-text-secondary hover:text-foreground hover:border-accent/40 transition-colors"
              title="Click to copy email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-accent" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Heading with Shimmer Accent Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            Engineering scalable web &amp; mobile platforms with{' '}
            <span className="bg-gradient-to-r from-accent via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              precision.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: transitionEase }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
          >
            I&apos;m <strong className="text-foreground">{personalInfo.name}</strong>, a Frontend Developer leading cross-platform delivery across enterprise ERP, multi-tier logistics, and e-commerce platforms using{' '}
            <span className="text-foreground font-medium">React.js</span>,{' '}
            <span className="text-foreground font-medium">Next.js</span>, and{' '}
            <span className="text-foreground font-medium">React Native</span>.
          </motion.p>

          {/* Magnetic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: transitionEase }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Magnetic strength={0.2}>
              <Button href="/projects" size="lg" icon={ArrowRight}>
                Explore Enterprise Systems
              </Button>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Button
                href="/Santhosh_K_Resume.pdf"
                variant="secondary"
                size="lg"
                icon={ArrowDownToLine}
                external
              >
                Download Resume PDF
              </Button>
            </Magnetic>
          </motion.div>

          {/* Stat counters with Smooth Animated Numbers */}
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
                className="group flex flex-col items-center p-4 rounded-xl bg-bg-secondary/40 border border-border/60 hover:border-accent/40 hover:bg-bg-secondary/70 transition-all duration-300 shadow-sm"
              >
                <span className="text-2xl sm:text-3xl font-bold text-accent font-mono mb-1 group-hover:scale-105 transition-transform">
                  <AnimatedCounter value={stat.value} />
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
