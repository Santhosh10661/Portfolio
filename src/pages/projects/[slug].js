import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Calendar, ShieldCheck, Layers, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SpotlightCard, FadeIn } from '@/components/ui/Motion';
import { projects } from '@/data/projects';
import { ProjectMockup } from '@/components/ui/ProjectMockup';

export default function ProjectDetailPage({ project }) {
  if (!project) return null;

  return (
    <Layout
      title={`${project.title} | Enterprise Case Study | Santhosh K`}
      description={project.summary}
    >
      <article className="py-12 sm:py-24">
        <Container>
          {/* Back Navigation */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all enterprise systems</span>
          </Link>

          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 font-mono text-xs font-semibold text-accent">
                {project.tier}
              </span>
              <span className="text-xs font-mono text-text-secondary">•</span>
              <span className="text-xs font-mono text-text-secondary">
                {project.category}
              </span>
              <span className="text-xs font-mono text-text-secondary">•</span>
              <span className="text-xs font-mono text-text-secondary flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {project.timeline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick Meta Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-bg-secondary border border-border/80 mb-14 text-sm">
            <div>
              <span className="text-xs font-mono text-accent block mb-1">My Role</span>
              <span className="font-semibold text-foreground">{project.role}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-accent block mb-1">Deployment Status</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                {project.deploymentStatus}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-accent block mb-1">Client Domain</span>
              <span className="font-semibold text-foreground text-xs sm:text-sm">{project.client || 'Enterprise'}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-accent block mb-1">Actions</span>
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline font-bold"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-text-secondary">
                  Proprietary Enterprise SLA
                </span>
              )}
            </div>
          </div>

          {/* Interactive Live Mockup Feature */}
          <div className="mb-20">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-accent flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Interactive System Dashboard &amp; Role Simulator
              </span>
              <span className="text-xs font-mono text-text-secondary">
                Switch tabs to preview discrete user tiers
              </span>
            </div>
            <ProjectMockup slug={project.slug} />
          </div>

          {/* Case Study Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Story & Problem-Solution */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  System Overview &amp; Architecture
                </h2>
                <p className="text-base text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Multi-Tier Architecture Blocks */}
              {project.architecture && (
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-accent" />
                    <span>Multi-Panel Architectural Breakdown</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.architecture.map((arch) => (
                      <div key={arch.name} className="p-4 rounded-xl bg-bg-secondary border border-border/80">
                        <span className="text-xs font-bold font-mono text-accent block mb-1">
                          {arch.name}
                        </span>
                        <span className="text-[11px] font-mono text-text-secondary/80 block mb-2">
                          {arch.tech}
                        </span>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {arch.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Highlights */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Key Technical Achievements
                </h3>
                <div className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-bg-secondary border border-border">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border/80 bg-bg-secondary p-6 sm:p-8 space-y-6 sticky top-28">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent border-b border-border pb-3">
                  Production Metrics
                </h3>
                <div className="space-y-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between pb-2 border-b border-border/40 text-sm">
                      <span className="text-text-secondary">{m.label}</span>
                      <span className="font-mono font-bold text-foreground text-accent">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-3">
                    Tech Stack &amp; Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} size="xs" variant="accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button href="/contact" size="sm" className="w-full">
                    Discuss System Architecture
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((p) => ({
    params: { slug: p.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  return {
    props: {
      project: project || null,
    },
  };
}
