import { Mail, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import { FadeIn, ParallaxLayer, Magnetic } from '@/components/ui/Motion';
import { Terminal, Keyword, Str, Variable, Comment, Punct } from '@/components/ui/Terminal';

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden dev-grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      {/* Floating parallax ambient back-drop */}
      <ParallaxLayer range={[-50, 50]} className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Container>
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto">
            <Terminal
              title="ssh connection — santhosh@connect:22"
              className="shadow-2xl border-accent/30 bg-bg-secondary"
            >
              {/* Terminal session text */}
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="syntax-prompt">$</span>
                    <span className="text-foreground">ssh connect@santhosh.dev</span>
                  </div>
                  <div className="text-syntax-string text-[11px] sm:text-xs mt-1">
                    ✓ Connection established. Session active.
                  </div>
                </div>

                <div className="p-4 rounded bg-bg-tertiary/60 border border-border space-y-1.5 text-xs">
                  <div>
                    <Keyword>const</Keyword> <Variable>collaboration</Variable> <Punct>=</Punct> <Punct>{'{'}</Punct>
                  </div>
                  <div className="pl-4">
                    <span className="text-syntax-tag">status</span><Punct>:</Punct> <Str>&quot;open_for_opportunities&quot;</Str><Punct>,</Punct>
                  </div>
                  <div className="pl-4">
                    <span className="text-syntax-tag">roles</span><Punct>:</Punct> <Punct>[</Punct>
                    <Str>&quot;Frontend Developer&quot;</Str><Punct>,</Punct> <Str>&quot;React / Next.js Engineer&quot;</Str><Punct>,</Punct> <Str>&quot;React Native Developer&quot;</Str>
                    <Punct>],</Punct>
                  </div>
                  <div className="pl-4">
                    <span className="text-syntax-tag">location</span><Punct>:</Punct> <Str>&quot;Chennai, India / Remote / Hybrid&quot;</Str><Punct>,</Punct>
                  </div>
                  <div className="pl-4">
                    <span className="text-syntax-tag">response_time</span><Punct>:</Punct> <Str>&quot;&lt; 24 hours&quot;</Str>
                  </div>
                  <div>
                    <Punct>{'}'};</Punct>
                  </div>
                </div>

                <div className="pt-2 text-text-secondary leading-relaxed text-xs sm:text-sm">
                  Looking for a frontend developer who writes clean, testable code and ships production web &amp; mobile apps on schedule? Let&apos;s talk.
                </div>

                {/* Commands CTA */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <Button href="/contact" size="md" icon={Send}>
                      $ ./send-message.sh
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button
                      href={`mailto:${personalInfo.email}`}
                      variant="secondary"
                      size="md"
                      icon={Mail}
                      external
                    >
                      $ mailto:{personalInfo.email}
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </Terminal>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
