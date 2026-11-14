import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import { Sparkles, Code2, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, staggerItem, SpotlightCard } from '@/components/ui/Motion';

export function Skills() {
  return (
    <section className="py-20 sm:py-32 bg-bg-secondary/30 border-t border-border">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            badge="Technical Architecture"
            title="Engineered for performance and scale."
            description="Core engineering proficiencies across frontend systems, mobile runtimes, state orchestration, and team leadership."
          />
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={staggerItem} className="h-full">
              <SpotlightCard className="flex flex-col justify-between h-full p-6 sm:p-7 border border-border/80 bg-bg-secondary shadow-lg">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-accent flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-accent" />
                      <span>{category.name}</span>
                    </h3>
                    <span className="text-xs font-mono text-text-secondary">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between text-sm group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${
                              skill.highlight ? 'bg-accent shadow-sm shadow-accent/50' : 'bg-text-secondary/40'
                            }`}
                          />
                          <span
                            className={`${
                              skill.highlight
                                ? 'text-foreground font-medium'
                                : 'text-text-secondary'
                            } group-hover:text-foreground transition-colors`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-text-secondary/70">
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-text-secondary font-mono">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    Production Ready
                  </span>
                  <span className="text-accent font-semibold">Strict SLA</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
