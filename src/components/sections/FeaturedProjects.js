import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Layers, Activity } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { FadeIn, SpotlightCard, StaggerContainer, staggerItem } from '@/components/ui/Motion';
import { ProjectMockup } from '@/components/ui/ProjectMockup';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-20 sm:py-32 relative">
      <Container>
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-18 gap-6">
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs font-semibold text-accent shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                Flagship Systems &amp; Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Production Enterprise Platforms
              </h2>
              <p className="mt-3 text-base text-text-secondary leading-relaxed">
                Multi-panel web ecosystems, logistics routing engines, and cross-platform mobile apps engineered with strict SLA targets and clean design systems.
              </p>
            </div>
            <Button href="/projects" variant="outline" icon={ArrowRight}>
              View All Systems ({projects.length})
            </Button>
          </div>
        </FadeIn>

        <div className="space-y-12 sm:space-y-16">
          {featured.map((project, idx) => (
            <FadeIn key={project.slug} direction="up" delay={idx * 0.1}>
              <SpotlightCard className="p-6 sm:p-10 border border-border/80 bg-bg-secondary hover:border-accent/40 shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Metadata, Highlights & Metrics */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-mono text-xs font-semibold">
                          {project.tier}
                        </span>
                        <span className="text-xs font-mono text-text-secondary">•</span>
                        <span className="text-xs font-mono text-text-secondary">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground hover:text-accent transition-colors">
                        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 group">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </Link>
                      </h3>

                      <p className="mt-1 text-xs font-mono text-accent/90 font-medium">
                        {project.tagline}
                      </p>

                      <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Key Metrics Chips */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/60">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="p-2 rounded-lg bg-bg-tertiary/50 border border-border/40 text-center">
                          <span className="text-xs sm:text-sm font-bold font-mono text-foreground block">
                            {m.value}
                          </span>
                          <span className="text-[10px] font-mono text-text-secondary block mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} size="xs" variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Button href={`/projects/${project.slug}`} icon={ArrowRight}>
                        Deep-Dive Architecture
                      </Button>
                      <span className="text-xs font-mono text-text-secondary flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>{project.deploymentStatus}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Interactive Live UI Mockup */}
                  <div className="lg:col-span-7">
                    <ProjectMockup slug={project.slug} />
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
