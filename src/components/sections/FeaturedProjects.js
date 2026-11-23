import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ShieldCheck, GitBranch, FolderGit2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { FadeIn, SpotlightCard } from '@/components/ui/Motion';
import { ProjectMockup } from '@/components/ui/ProjectMockup';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-20 sm:py-32 relative dev-grid-bg">
      <Container>
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-18 gap-6">
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-syntax-function/30 bg-syntax-function/10 px-3.5 py-1 font-mono text-xs font-semibold text-syntax-function shadow-sm">
                <FolderGit2 className="w-3.5 h-3.5" />
                ls -la ~/production-repositories
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Production Enterprise Platforms
              </h2>
              <p className="mt-3 text-base text-text-secondary leading-relaxed font-mono text-xs sm:text-sm">
                {'// Multi-panel web ecosystems, logistics routing engines, and cross-platform mobile apps deployed to active users.'}
              </p>
            </div>
            <Button href="/projects" variant="outline" icon={ArrowRight}>
              All Repositories ({projects.length})
            </Button>
          </div>
        </FadeIn>

        <div className="space-y-12 sm:space-y-16">
          {featured.map((project, idx) => (
            <FadeIn key={project.slug} direction="up" delay={idx * 0.1}>
              <SpotlightCard className="p-0 border border-border/90 bg-bg-secondary hover:border-accent/40 shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Repo Header Bar */}
                <div className="flex items-center justify-between px-5 sm:px-7 py-3 bg-bg-tertiary border-b border-border font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <FolderGit2 className="w-4 h-4 text-accent" />
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-1.5"
                    >
                      <span>kriha-enterprise/{project.slug}</span>
                    </Link>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-bg-secondary border border-border text-text-secondary">
                      {project.tier}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] text-text-secondary">
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3 text-syntax-string" />
                      production
                    </span>
                    <span className="hidden sm:inline-block">&middot;</span>
                    <span className="hidden sm:flex items-center gap-1 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      deployed
                    </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left Column: Metadata, Highlights & Metrics */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-syntax-comment">
                          <span>category: &quot;{project.category}&quot;</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground hover:text-accent transition-colors font-mono">
                          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 group">
                            <span>{project.title}</span>
                            <ArrowUpRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                          </Link>
                        </h3>

                        <p className="mt-1 text-xs font-mono text-syntax-function font-medium">
                          {project.tagline}
                        </p>

                        <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Key Metrics Chips */}
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/70 font-mono">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="p-2 rounded bg-bg-tertiary/70 border border-border/60 text-center">
                            <span className="text-xs sm:text-sm font-bold text-accent block">
                              {m.value}
                            </span>
                            <span className="text-[10px] text-text-secondary block mt-0.5 truncate">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded bg-bg-tertiary border border-border text-text-secondary text-[11px]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <Button href={`/projects/${project.slug}`} icon={ArrowRight}>
                          Inspect Architecture
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Interactive Mockup */}
                    <div className="lg:col-span-7">
                      <ProjectMockup slug={project.slug} />
                    </div>
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
