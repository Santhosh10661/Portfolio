import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import { Package, Check } from 'lucide-react';
import { FadeIn, StaggerContainer, staggerItem, SpotlightCard } from '@/components/ui/Motion';

// Map skill levels to progress percentage & syntax colors
const levelConfig = {
  Advanced: { pct: '92%', badge: 'text-syntax-string bg-syntax-string/10 border-syntax-string/20', bar: 'bg-syntax-string' },
  Proficient: { pct: '85%', badge: 'text-accent bg-accent/10 border-accent/20', bar: 'bg-accent' },
  Intermediate: { pct: '74%', badge: 'text-syntax-number bg-syntax-number/10 border-syntax-number/20', bar: 'bg-syntax-number' },
};

export function Skills() {
  return (
    <section className="py-20 sm:py-32 bg-bg-secondary/30 border-t border-border dev-grid-bg relative">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            badge="npm list --depth=0"
            title="Production stack &amp; core dependencies."
            description="Core engineering proficiencies across frontend frameworks, cross-platform mobile runtimes, state stores, and development tooling."
          />
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const scopeSlug = category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            return (
              <motion.div key={category.name} variants={staggerItem} className="h-full">
                <SpotlightCard className="flex flex-col justify-between h-full p-0 border border-border/90 bg-bg-secondary shadow-xl overflow-hidden group">
                  {/* Terminal Card Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-bg-tertiary border-b border-border font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-accent" />
                      <span className="text-foreground font-semibold">@{scopeSlug}</span>
                    </div>
                    <span className="text-[11px] text-text-secondary/70">
                      v{category.skills.length}.0
                    </span>
                  </div>

                  {/* Dependencies List with Code Styling */}
                  <div className="p-5 font-mono text-xs space-y-3.5">
                    <div className="text-[11px] text-syntax-comment mb-2">
                      {`// ${category.name} (${category.skills.length} packages installed)`}
                    </div>

                    {category.skills.map((skill) => {
                      const cfg = levelConfig[skill.level] || levelConfig.Proficient;

                      return (
                        <div key={skill.name} className="space-y-1.5 group/item">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  skill.highlight ? 'bg-accent shadow-sm shadow-accent' : 'bg-text-secondary/40'
                                }`}
                              />
                              <span
                                className={`font-medium ${
                                  skill.highlight ? 'text-foreground' : 'text-text-secondary'
                                } group-hover/item:text-accent transition-colors`}
                              >
                                &quot;{skill.name}&quot;
                              </span>
                            </div>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded border ${cfg.badge}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          {/* Skill Proficiency Bar */}
                          <div className="h-1 w-full bg-border/50 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${cfg.bar} transition-all duration-700 opacity-80 group-hover/item:opacity-100`}
                              style={{ width: cfg.pct }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Terminal Footer */}
                  <div className="px-4 py-2.5 bg-bg-tertiary/60 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-secondary">
                    <span className="flex items-center gap-1.5 text-syntax-string">
                      <Check className="w-3.5 h-3.5" />
                      audit passed
                    </span>
                    <span className="text-text-secondary/60">0 vulnerabilities</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
