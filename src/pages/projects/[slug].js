import Link from 'next/link';
import { ArrowLeft, Github, Calendar, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { ProjectMockup } from '@/components/ui/ProjectMockup';

export default function ProjectDetailPage({ project }) {
  if (!project) return null;

  return (
    <Layout
      title={`${project.title} | Enterprise Case Study | Santhosh K`}
      description={project.summary}
    >
      <article className="py-12 sm:py-24 dev-grid-bg">
        <Container>
          {/* Back Navigation */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>$ cd ../all-repositories</span>
          </Link>

          {/* Header */}
          <div className="max-w-4xl mb-12 font-mono">
            <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs">
              <span className="rounded bg-syntax-string/15 text-syntax-string border border-syntax-string/30 px-2.5 py-0.5 font-semibold">
                {project.tier}
              </span>
              <span className="text-syntax-comment">&middot;</span>
              <span className="text-text-secondary">
                scope: &quot;{project.category}&quot;
              </span>
              <span className="text-syntax-comment">&middot;</span>
              <span className="text-text-secondary flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {project.timeline}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-3 font-mono">
              kriha/{project.slug}
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
              {project.tagline}
            </p>
          </div>

          {/* Quick Meta Stats Bar — Environment Config Look */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-xl bg-bg-secondary border border-border/90 mb-14 font-mono text-xs shadow-xl">
            <div>
              <span className="text-[11px] text-syntax-comment block mb-1">{'// Role'}</span>
              <span className="font-semibold text-foreground text-sm">{project.role}</span>
            </div>
            <div>
              <span className="text-[11px] text-syntax-comment block mb-1">{'// Deployment'}</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1 text-sm">
                <ShieldCheck className="w-4 h-4" />
                {project.deploymentStatus}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-syntax-comment block mb-1">{'// Client SLA'}</span>
              <span className="font-semibold text-foreground text-sm">{project.client || 'Enterprise'}</span>
            </div>
            <div>
              <span className="text-[11px] text-syntax-comment block mb-1">{'// Source'}</span>
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:underline font-bold text-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com</span>
                </a>
              ) : (
                <span className="text-text-secondary">
                  Proprietary (Private)
                </span>
              )}
            </div>
          </div>

          {/* Interactive Live Mockup Feature */}
          <div className="mb-20">
            <div className="mb-4 flex items-center justify-between font-mono text-xs">
              <span className="text-accent flex items-center gap-2 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Interactive System Dashboard &amp; Role Simulator
              </span>
              <span className="text-text-secondary hidden sm:inline-block">
                {'// Click tabs to preview discrete user tiers'}
              </span>
            </div>
            <ProjectMockup slug={project.slug} />
          </div>

          {/* Case Study Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            {/* Story & Problem-Solution */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 font-mono">
                  System Architecture &amp; Specification
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Multi-Tier Architecture Blocks */}
              {project.architecture && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2 font-mono">
                    <Layers className="w-4 h-4 text-accent" />
                    <span>Multi-Panel Architectural Breakdown</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                    {project.architecture.map((arch) => (
                      <div key={arch.name} className="p-4 rounded-lg bg-bg-secondary border border-border/80 shadow-md">
                        <span className="text-xs font-bold text-accent block mb-1">
                          {arch.name}
                        </span>
                        <span className="text-[10px] text-syntax-function block mb-2">
                          {arch.tech}
                        </span>
                        <p className="text-xs text-text-secondary leading-relaxed font-sans">
                          {arch.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Highlights */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-mono">
                  Key Technical Achievements
                </h3>
                <div className="space-y-2.5 font-mono">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-bg-secondary border border-border text-xs text-text-secondary">
                      <span className="text-syntax-string font-bold shrink-0 mt-0.5">+</span>
                      <span className="leading-relaxed font-sans text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-4 font-mono">
              <div className="rounded-xl border border-border/90 bg-bg-secondary p-5 sm:p-6 space-y-6 sticky top-28 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-border text-xs text-syntax-comment">
                  <span>metrics.spec.ts</span>
                  <span className="text-syntax-string">PASS</span>
                </div>
                <div className="space-y-3.5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between text-xs pb-2 border-b border-border/40">
                      <span className="text-text-secondary">&quot;{m.label}&quot;:</span>
                      <span className="font-bold text-accent">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <h4 className="text-xs text-syntax-comment mb-2.5">
                    {'// Stack & Dependencies'}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-bg-tertiary border border-border text-text-secondary text-[11px]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button href="/contact" size="sm" className="w-full text-xs">
                    $ ./discuss-architecture.sh
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
