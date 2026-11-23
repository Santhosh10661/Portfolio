import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Download, Copy, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Terminal } from '@/components/ui/Terminal';
import { Keyword, Str, Variable, Num, Comment, Punct, Tag } from '@/components/ui/Terminal';
import { BlinkingCursor } from '@/components/ui/TypeWriter';
import { StaggerContainer, staggerItem, Magnetic, AnimatedCounter } from '@/components/ui/Motion';
import { personalInfo } from '@/data/personal';

export function Hero() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const orbY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), {
    stiffness: 100,
    damping: 30,
  });
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const copyEmail = () => {
    navigator.clipboard?.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background — subtle code grid + gradient orb */}
      <div className="absolute inset-0 dev-grid-bg" />
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/20 via-teal-500/10 to-emerald-500/5 blur-[150px] pointer-events-none"
        style={{ y: orbY }}
      />
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-accent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      {/* Radial mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, transparent, rgb(var(--bg-primary)))',
        }}
      />

      <motion.div style={{ y: textY, opacity }} className="relative w-full">
        <Container>
          <StaggerContainer className="max-w-4xl mx-auto" staggerDelay={0.12}>
            {/* Status badge */}
            <motion.div variants={staggerItem} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-syntax-string/30 bg-syntax-string/5 px-4 py-1.5 font-mono text-xs text-syntax-string">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-syntax-string/60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-syntax-string" />
                </span>
                available for opportunities
              </span>
            </motion.div>

            {/* Terminal window — the centerpiece */}
            <motion.div variants={staggerItem}>
              <Terminal
                title={`santhosh@dev ~ /portfolio`}
                variant="editor"
                className="mb-8 shadow-2xl shadow-accent/5"
              >
                {/* Command prompt intro */}
                <div className="mb-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="syntax-prompt">$</span>
                    <span className="text-foreground">cat developer.js</span>
                  </div>
                </div>

                {/* Code object — developer profile */}
                <div className="space-y-0.5 text-[13px] sm:text-sm">
                  <div>
                    <Keyword>const</Keyword> <Variable>developer</Variable>{' '}
                    <Punct>=</Punct> <Punct>{'{'}</Punct>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>name</Tag>
                    <Punct>:</Punct> <Str>{`"${personalInfo.name}"`}</Str>
                    <Punct>,</Punct>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>role</Tag>
                    <Punct>:</Punct> <Str>{`"${personalInfo.title}"`}</Str>
                    <Punct>,</Punct>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>location</Tag>
                    <Punct>:</Punct> <Str>{`"Chennai, India"`}</Str>
                    <Punct>,</Punct>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>experience</Tag>
                    <Punct>:</Punct> <Str>{`"1.5+ years"`}</Str>
                    <Punct>,</Punct>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>stack</Tag>
                    <Punct>: [</Punct>
                    <Str>{`"React.js"`}</Str>
                    <Punct>,</Punct> <Str>{`"Next.js"`}</Str>
                    <Punct>,</Punct> <Str>{`"React Native"`}</Str>
                    <Punct>,</Punct> <Str>{`"Tailwind CSS"`}</Str>
                    <Punct>],</Punct>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>focus</Tag>
                    <Punct>:</Punct>{' '}
                    <Str>{`"Building production web & mobile apps"`}</Str>
                    <Punct>,</Punct>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>deployed</Tag>
                    <Punct>:</Punct> <Num>6</Num>
                    <Punct>,</Punct>{' '}
                    <Comment>{'// production projects shipped'}</Comment>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>certifications</Tag>
                    <Punct>:</Punct> <Num>4</Num>
                    <Punct>,</Punct>{' '}
                    <Comment>{'// Meta & Google verified'}</Comment>
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <Tag>hireable</Tag>
                    <Punct>:</Punct>{' '}
                    <Keyword>true</Keyword>
                    <Punct>,</Punct>
                  </div>
                  <div>
                    <Punct>{'}'}</Punct>
                    <Punct>;</Punct>
                  </div>
                </div>

                {/* Second command — run action */}
                <div className="mt-5 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <span className="syntax-prompt">$</span>
                    <span className="text-foreground">
                      npm run build-career
                    </span>
                    <BlinkingCursor />
                  </div>
                  <div className="mt-1 text-syntax-string text-xs">
                    ✓ Ready to ship production code
                  </div>
                </div>
              </Terminal>
            </motion.div>

            {/* Tagline below terminal */}
            <motion.div variants={staggerItem} className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-foreground">I build </span>
                <span className="bg-gradient-to-r from-accent via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  interfaces
                </span>
                <span className="text-foreground"> that ship.</span>
              </h1>
              <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl font-mono text-[13px] sm:text-sm">
                <Comment>{'// '}</Comment>
                {personalInfo.shortBio}
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <Magnetic>
                <Button href="/projects" icon={ArrowRight} size="lg">
                  View Projects
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  href={personalInfo.resumeUrl}
                  variant="secondary"
                  icon={Download}
                  size="lg"
                  external
                >
                  Resume.pdf
                </Button>
              </Magnetic>

              {/* Copy email pill */}
              <button
                onClick={copyEmail}
                className="group flex items-center gap-2 rounded-full border border-border bg-bg-secondary/60 px-4 py-2 font-mono text-xs text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-300"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-syntax-string" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                {copied ? 'Copied!' : personalInfo.email}
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-lg border border-border/60 bg-bg-secondary/30 p-3 hover:border-accent/40 hover:bg-bg-secondary/60 transition-all duration-300"
                >
                  <div className="font-mono text-lg sm:text-xl font-bold text-accent">
                    {/\d/.test(stat.value) ? (
                      <AnimatedCounter
                        value={parseInt(stat.value)}
                        suffix={stat.value.replace(/\d+/, '')}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-text-secondary uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </StaggerContainer>
        </Container>
      </motion.div>
    </section>
  );
}

export default Hero;
