import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experiences } from '@/data/experience';
import { GitBranch, Calendar, MapPin } from 'lucide-react';
import { FadeIn, SpotlightCard } from '@/components/ui/Motion';

// Simulated git commit hashes for career milestones
const commitHashes = ['8f3a9e1', '4c2b7d0', '1e9a3f5'];

export function ExperienceTimeline() {
  return (
    <section className="py-20 sm:py-32 dev-grid-bg relative border-t border-border">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            badge="git log --graph --decorate"
            title="Commit history &amp; career progression."
            description="Linear progression shipping production web &amp; mobile architectures, REST APIs, and enterprise systems at Kriha IT Solutions."
          />
        </FadeIn>

        <div className="relative border-l-2 border-syntax-comment/40 pl-6 sm:pl-8 ml-3 sm:ml-8 space-y-10 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const commitHash = commitHashes[index] || '7a8b9c0';
            const isLatest = index === 0;

            return (
              <FadeIn
                key={`${exp.company}-${exp.period}`}
                direction="up"
                delay={index * 0.15}
                className="relative group"
              >
                {/* Git branch node indicator */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-3 flex items-center justify-center w-5 h-5 rounded-full border-2 border-accent bg-background group-hover:scale-125 transition-transform duration-300 shadow-md shadow-accent/40">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <SpotlightCard className="p-0 border border-border/90 bg-bg-secondary shadow-xl overflow-hidden">
                  {/* Git Commit Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 bg-bg-tertiary border-b border-border font-mono text-xs">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-syntax-comment">commit</span>
                      <span className="text-syntax-number font-semibold">{commitHash}</span>
                      {isLatest && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-syntax-string/15 text-syntax-string border border-syntax-string/30 text-[10px] font-bold">
                          <GitBranch className="w-2.5 h-2.5" />
                          HEAD -&gt; main
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-text-secondary text-[11px]">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-accent" />
                        {exp.period}
                      </span>
                      <span>&middot;</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-accent" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Commit Body */}
                  <div className="p-5 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-2 font-mono">
                        <span className="text-syntax-keyword">feat:</span> {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-syntax-function mt-1">
                        @{exp.company}
                      </p>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Commit checklist items */}
                    <div className="space-y-2 pt-2 border-t border-border/60">
                      <div className="text-[11px] font-mono text-syntax-comment mb-1">
                        {'// Key deliverables'}
                      </div>
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-text-secondary font-mono">
                          <span className="text-syntax-string font-bold shrink-0 mt-0.5">+</span>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies as git tags / diff modules */}
                    <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5 font-mono text-xs">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-bg-tertiary border border-border text-text-secondary text-[11px] hover:border-accent/50 hover:text-foreground transition-colors"
                        >
                          tag:{tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
