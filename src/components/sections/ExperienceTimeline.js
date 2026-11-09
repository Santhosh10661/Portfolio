import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/Motion';

export function ExperienceTimeline() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            badge="Career Journey"
            title="Professional Experience"
            description="Shipping production web &amp; mobile applications and leading frontend engineering squads."
          />
        </FadeIn>

        <div className="relative border-l border-border pl-6 sm:pl-8 ml-3 sm:ml-6 space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <FadeIn
              key={`${exp.company}-${exp.period}`}
              direction="up"
              delay={index * 0.15}
              className="relative group"
            >
              {/* Timeline indicator node with glow */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-background group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-sm shadow-accent/40" />

              <Card className="p-6 sm:p-8 bg-bg-secondary border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-accent font-mono mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-secondary">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} size="xs" variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
