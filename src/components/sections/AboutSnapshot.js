import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code2, Sparkles, MapPin, Laptop, GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';

export function AboutSnapshot() {
  return (
    <section className="py-20 sm:py-28 bg-bg-secondary/30 border-y border-border">
      <Container>
        <SectionHeading
          badge="About Me"
          title="Bridging design fidelity with robust code."
          description="Crafting responsive interfaces, architecting state, and leading teams to deliver mission-critical software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b from-accent/40 via-border to-transparent shadow-2xl">
              <div className="rounded-[22px] bg-bg-secondary p-8 border border-border">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 shadow-sm">
                  <Laptop className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Santhosh K</h3>
                <p className="text-xs font-mono text-accent mb-4">Frontend Developer &amp; Tech Lead</p>

                <div className="space-y-3 pt-4 border-t border-border text-xs text-text-secondary">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    <span>MCA &amp; B.Sc. Computer Science</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-accent" />
                    <span>React.js · Next.js · React Native</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-text-secondary">
                  <span>Team Leadership</span>
                  <span className="text-accent font-semibold">4 Developers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Building across web platforms, logistics networks, and mobile stores.
            </h3>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              With 1.5+ years of production experience at Kriha IT Solutions, I specialize in translating complex operational workflows into intuitive web and mobile platforms. Currently leading a 4-person frontend engineering squad, I manage sprint deliveries, ensure code quality, and architect clean API integrations.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              My flagship initiatives range from multi-panel logistics systems with React Native CLI apps (Venba), to agricultural e-commerce portals with Next.js (eMagriGoat), and campus ERP suites (Collabon).
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/about" icon={ArrowRight}>
                Read Full Story &amp; Experience
              </Button>
              <Button href="/contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
