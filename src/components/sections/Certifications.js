import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certifications } from '@/data/certifications';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, staggerItem, SpotlightCard } from '@/components/ui/Motion';

export function Certifications() {
  return (
    <section className="py-20 sm:py-32 bg-bg-secondary/30 border-y border-border dev-grid-bg relative">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            badge="npm test -- certifications"
            title="Verified certifications &amp; test suites."
            description="Official credentials from Meta and Google validating frontend development, React component patterns, JavaScript internals, and UX architecture."
          />
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={staggerItem} className="h-full">
              <SpotlightCard className="flex flex-col justify-between h-full p-0 overflow-hidden bg-bg-secondary border-border/90 hover:border-accent/40 group shadow-xl">
                {/* Terminal Test Suite Header */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-bg-tertiary border-b border-border font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-syntax-string font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>PASS</span>
                  </div>
                  <span className="text-text-secondary/70">{cert.issuer}</span>
                </div>

                {/* Certificate image preview with zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-tertiary">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="rounded bg-background/90 backdrop-blur-sm border border-border px-2 py-0.5 text-[11px] font-mono text-syntax-string font-bold">
                      Grade: {cert.grade}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex-1 flex flex-col justify-between font-mono">
                  <div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors leading-snug mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-text-secondary mb-3">
                      <Calendar className="w-3 h-3 text-accent" />
                      <span>verified: {cert.date}</span>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-border flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] text-text-secondary bg-bg-tertiary px-1.5 py-0.5 rounded border border-border/50"
                      >
                        +{skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
