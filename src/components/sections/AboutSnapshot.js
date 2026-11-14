import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, MapPin, Laptop, GraduationCap, Users, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeIn, SpotlightCard, ParallaxLayer } from '@/components/ui/Motion';

export function AboutSnapshot() {
  return (
    <section className="py-20 sm:py-32 bg-bg-secondary/30 border-y border-border relative overflow-hidden">
      {/* Subtle parallax ambient background glow */}
      <ParallaxLayer range={[-60, 60]} className="absolute -right-20 top-1/3 -z-10 w-96 h-96 bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <FadeIn direction="up">
          <SectionHeading
            badge="Engineering Profile"
            title="Translating business complexity into intuitive products."
            description="Leading frontend squads, architecting high-throughput state machines, and shipping multi-role software across web and mobile."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Spotlight Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn direction="right" delay={0.15}>
              <SpotlightCard className="w-full max-w-sm p-7 sm:p-8 border border-border/80 shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent mb-6 shadow-sm">
                  <Laptop className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Santhosh K</h3>
                <p className="text-xs font-mono text-accent mb-4 font-semibold">
                  Frontend Tech Lead &amp; Cross-Platform Engineer
                </p>

                <div className="space-y-3 pt-4 border-t border-border text-xs text-text-secondary">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Chennai, Tamil Nadu, India (On-site)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>Leads 4-Developer Engineering Squad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-accent" />
                    <span>React.js · Next.js · React Native (Bare &amp; Expo)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    <span>Master of Computer Applications (MCA)</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-text-secondary">
                  <span>Current Company</span>
                  <span className="text-accent font-semibold">Kriha IT Solutions</span>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>

          {/* Text bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <FadeIn direction="left" delay={0.2}>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-semibold">
                  Current Market Focus
                </span>
                <span className="text-xs font-mono text-text-secondary">Multi-Panel ERP · Supply Chain Logistics</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Proven leadership in shipping high-velocity web &amp; mobile platforms.
              </h3>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                At <strong className="text-foreground">Kriha IT Solutions</strong>, I manage frontend delivery across multiple enterprise ecosystems. I lead a squad of 4 developers, ensuring tight sprint execution, standardized REST API contracts, and consistent design system tokens across web portals and React Native mobile applications.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                Rather than generic starter apps, my focus is delivering resilient production systems: a 5-tier logistics operating network (Venba), a high-concurrency academic ERP with an interactive campus feed (Collabon), and an agricultural marketplace with real-time stock governance (eMagriGoat).
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button href="/about" icon={ArrowRight}>
                  Read Career Journey &amp; Skills
                </Button>
                <Button href="/projects" variant="outline">
                  Inspect System Architectures
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
