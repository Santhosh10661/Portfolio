import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience"
          description="Shipping production web & mobile applications and leading frontend engineering teams."
        />

        <div className="relative border-l border-border pl-6 sm:pl-8 ml-3 sm:ml-6 space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${exp.period}`} className="relative group">
              {/* Timeline indicator node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-background group-hover:bg-accent group-hover:scale-125 transition-all shadow-sm" />

              <Card className="p-6 sm:p-8 bg-bg-secondary border-border hover:border-accent/40">
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
