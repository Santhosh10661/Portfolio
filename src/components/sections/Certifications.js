import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { certifications } from '@/data/certifications';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export function Certifications() {
  return (
    <section className="py-20 sm:py-28 bg-bg-secondary/30 border-y border-border">
      <Container>
        <SectionHeading
          badge="Verified Credentials"
          title="Meta & Google Certifications"
          description="Industry-recognized credentials validating core mastery of React, JavaScript ES6+, frontend architecture, and UX principles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="flex flex-col justify-between p-0 overflow-hidden bg-bg-secondary border-border hover:border-accent/40 group"
            >
              {/* Image preview of certificate */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-tertiary">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="rounded-full bg-accent/90 text-background px-2.5 py-0.5 text-[10px] font-mono font-bold shadow-sm">
                    {cert.grade}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-accent">{cert.issuer}</span>
                  <h3 className="text-base font-bold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary font-mono mb-4">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono text-text-secondary bg-bg-tertiary px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
