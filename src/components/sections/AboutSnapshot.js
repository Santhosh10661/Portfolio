import { FileCode2, Terminal as TerminalIcon, GitBranch, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeIn, SpotlightCard, ParallaxLayer } from '@/components/ui/Motion';
import { Keyword, Str, Variable, Num, Comment, Punct, Tag } from '@/components/ui/Terminal';
import { personalInfo } from '@/data/personal';

export function AboutSnapshot() {
  return (
    <section className="py-20 sm:py-32 bg-bg-secondary/30 border-y border-border relative overflow-hidden dev-grid-bg">
      {/* Subtle parallax ambient background glow */}
      <ParallaxLayer range={[-60, 60]} className="absolute -right-20 top-1/3 -z-10 w-96 h-96 bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <FadeIn direction="up">
          <SectionHeading
            badge="cat profile.json"
            title="Translating business logic into performant interfaces."
            description="Specializing in frontend state architecture, REST integration contracts, and high-concurrency enterprise interfaces across web and mobile."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Developer File Inspector Card */}
          <div className="lg:col-span-5 flex">
            <FadeIn direction="right" delay={0.15} className="w-full flex">
              <SpotlightCard className="w-full p-0 border border-border/90 shadow-2xl overflow-hidden flex flex-col justify-between">
                {/* Editor File Tab Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-bg-tertiary border-b border-border text-xs font-mono">
                  <div className="flex items-center gap-2 text-foreground">
                    <FileCode2 className="w-3.5 h-3.5 text-accent" />
                    <span>developer.config.ts</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-text-secondary text-[11px]">
                    <GitBranch className="w-3 h-3 text-syntax-string" />
                    main
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-1">
                  <div>
                    <Keyword>export const</Keyword> <Variable>config</Variable> <Punct>=</Punct> <Punct>{'{'}</Punct>
                  </div>
                  <div className="pl-4">
                    <Tag>developer</Tag><Punct>:</Punct> <Str>&quot;{personalInfo.name}&quot;</Str><Punct>,</Punct>
                  </div>
                  <div className="pl-4">
                    <Tag>title</Tag><Punct>:</Punct> <Str>&quot;{personalInfo.title}&quot;</Str><Punct>,</Punct>
                  </div>
                  <div className="pl-4">
                    <Tag>company</Tag><Punct>:</Punct> <Str>&quot;Kriha IT Solutions&quot;</Str><Punct>,</Punct>
                  </div>
                  <div className="pl-4">
                    <Tag>location</Tag><Punct>:</Punct> <Str>&quot;Chennai, TN, India&quot;</Str><Punct>,</Punct>
                  </div>
                  <div className="pl-4">
                    <Tag>degree</Tag><Punct>:</Punct> <Str>&quot;MCA (Computer Applications)&quot;</Str><Punct>,</Punct>
                  </div>
                  <div className="pl-4">
                    <Tag>workflow</Tag><Punct>:</Punct> <Punct>[</Punct>
                    <Str>&quot;React.js&quot;</Str><Punct>,</Punct> <Str>&quot;Next.js&quot;</Str><Punct>,</Punct> <Str>&quot;React Native&quot;</Str>
                    <Punct>],</Punct>
                  </div>
                  <div className="pl-4">
                    <Tag>stateManagement</Tag><Punct>:</Punct> <Punct>[</Punct>
                    <Str>&quot;Redux Toolkit&quot;</Str><Punct>,</Punct> <Str>&quot;Context API&quot;</Str>
                    <Punct>],</Punct>
                  </div>
                  <div className="pl-4">
                    <Tag>uptime</Tag><Punct>:</Punct> <Num>100</Num><Punct>,</Punct> <Comment>{'// Production deployments'}</Comment>
                  </div>
                  <div>
                    <Punct>{'}'};</Punct>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2 bg-bg-tertiary/70 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-syntax-string" />
                    <span>status: production_ready</span>
                  </div>
                  <span>UTF-8</span>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>

          {/* README.md Preview */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <FadeIn direction="left" delay={0.2} className="h-full flex flex-col justify-between">
              <div className="rounded-xl border border-border bg-background/80 p-6 sm:p-7 shadow-xl">
                {/* Markdown Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/80 font-mono text-xs text-text-secondary">
                  <div className="flex items-center gap-2">
                    <TerminalIcon className="w-4 h-4 text-accent" />
                    <span className="text-foreground font-semibold">README.md</span>
                  </div>
                  <span className="text-syntax-comment">{'// Rendered Markdown'}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded bg-syntax-string/10 border border-syntax-string/30 text-syntax-string font-mono text-xs">
                      v1.5.0-stable
                    </span>
                    <span className="px-2.5 py-1 rounded bg-syntax-function/10 border border-syntax-function/30 text-syntax-function font-mono text-xs">
                      React 18 &middot; Next.js 14 &middot; React Native CLI
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Frontend engineer focused on scalable architectures &amp; real-world systems.
                  </h3>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    At <strong className="text-foreground">Kriha IT Solutions</strong>, I build cross-platform frontend solutions across web portals and mobile clients. My core focus is delivering stable, high-performance interfaces backed by modular UI architecture, typed data contracts, and strict state predictability.
                  </p>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    Rather than starter templates, my portfolio consists of complex enterprise systems:
                    a <span className="text-foreground font-medium">5-tier logistics operating network</span> (Venba), 
                    a <span className="text-foreground font-medium">campus ERP serving 4,500+ users</span> (Collabon), 
                    and an <span className="text-foreground font-medium">agricultural commerce marketplace</span> (eMagriGoat).
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border flex flex-wrap items-center gap-3">
                  <Button href="/about" icon={ArrowRight}>
                    Read Full Story
                  </Button>
                  <Button href="/projects" variant="outline">
                    Explore Repos &amp; Architectures
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
