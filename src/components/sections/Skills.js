import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { skillCategories } from '@/data/skills';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function Skills() {
  return (
    <section className="py-20 sm:py-28 bg-bg-secondary/30 border-t border-border">
      <Container>
        <SectionHeading
          badge="Technical Skills"
          title="Engineered for performance and scale."
          description="A comprehensive toolkit across web, mobile, state architecture, and team workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.name}
              className="flex flex-col justify-between p-6 sm:p-7 border border-border bg-bg-secondary"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-accent">
                    {category.name}
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
                          className={`w-2 h-2 rounded-full ${
                            skill.highlight ? 'bg-accent' : 'bg-text-secondary/40'
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
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
