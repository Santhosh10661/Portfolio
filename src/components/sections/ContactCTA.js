import Link from 'next/link';
import { ArrowRight, Mail, Send, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <Container>
        <div className="relative rounded-3xl border border-accent/20 bg-bg-secondary p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Background glow circle */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs text-accent">
              <Sparkles className="w-3.5 h-3.5" />
              Start A Project Or Hire
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Have an idea or an open role? Let&apos;s build something great.
            </h2>

            <p className="text-base text-text-secondary leading-relaxed mb-8">
              Whether you need a dedicated frontend developer, a mobile app engineer, or someone to lead UI delivery, I&apos;m ready to contribute.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg" icon={Send}>
                Send Message
              </Button>
              <Button
                href={`mailto:${personalInfo.email}`}
                variant="secondary"
                size="lg"
                icon={Mail}
                external
              >
                {personalInfo.email}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
