import Link from 'next/link';
import { ArrowRight, ArrowDownToLine, Sparkles, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[350px] sm:w-[900px] sm:h-[450px] bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent mb-6 sm:mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>Available for Frontend & Fullstack Roles</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-accent via-accent-hover to-teal-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
            <br />
            Building scalable apps for web &amp; mobile.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Frontend Developer leading cross-platform delivery with{' '}
            <span className="text-foreground font-medium">React.js</span>,{' '}
            <span className="text-foreground font-medium">Next.js</span>, and{' '}
            <span className="text-foreground font-medium">React Native</span>. Passionate about design systems, responsive interfaces, and clean architecture.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
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
          </div>

          {/* Stat counters */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-border/80">
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-4 rounded-xl bg-bg-secondary/40 border border-border/60"
              >
                <span className="text-2xl sm:text-3xl font-bold text-accent font-mono mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-text-secondary font-mono uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
