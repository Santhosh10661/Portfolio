import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, FolderGit2, GitBranch } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { SpotlightCard } from '@/components/ui/Motion';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { ProjectMockup } from '@/components/ui/ProjectMockup';

const categories = [
  'All',
  'Logistics & Supply Chain',
  'EdTech & Enterprise ERP',
  'E-commerce & Retail Tech',
  'Design Systems & Open Source',
];

export default function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout
      title="Enterprise Systems & Architecture | Santhosh K - Frontend Developer"
      description="Production case studies: multi-role logistics platforms, campus ERP systems with companion mobile apps, and high-performance e-commerce suites."
    >
      <div className="py-12 sm:py-24 dev-grid-bg">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-14 font-mono">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-syntax-function/30 bg-syntax-function/10 px-3.5 py-1 text-xs font-semibold text-syntax-function shadow-sm">
              <FolderGit2 className="w-3.5 h-3.5" />
              git status --all-repositories
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Enterprise Platforms &amp; Systems
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              Standardized case studies of real-world production platforms built during professional tenure at Kriha IT Solutions and open-source systems. Engineered for high concurrency, multi-role governance, and cross-platform reliability.
            </p>
          </div>

          {/* Interactive Filter Tabs with smooth layoutId sliding pill */}
          <div className="flex flex-wrap items-center gap-2 mb-14 pb-4 border-b border-border/80">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-colors ${
                    isActive ? 'text-background font-bold' : 'text-text-secondary hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-lg bg-accent shadow-md shadow-accent/25"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">[{cat}]</span>
                </button>
              );
            })}
          </div>

          {/* Projects Listing */}
          <div className="space-y-14">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <SpotlightCard className="p-0 border border-border/90 bg-bg-secondary hover:border-accent/40 shadow-2xl overflow-hidden">
                    {/* Repo Bar */}
                    <div className="flex items-center justify-between px-5 sm:px-7 py-3 bg-bg-tertiary border-b border-border font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-accent" />
                        <span className="font-semibold text-foreground">kriha/{project.slug}</span>
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-bg-secondary border border-border text-text-secondary">
                          {project.tier}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary text-[11px]">
                        <GitBranch className="w-3 h-3 text-syntax-string" />
                        <span>main</span>
                        <span className="text-emerald-400 font-semibold">&middot; live</span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                        {/* Left: Project Details */}
                        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-syntax-comment">
                              <span>scope: &quot;{project.category}&quot;</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground hover:text-accent transition-colors font-mono">
                              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 group">
                                <span>{project.title}</span>
                                <ArrowUpRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                              </Link>
                            </h2>

                            <p className="mt-1 text-xs font-mono text-syntax-function font-medium">
                              {project.tagline}
                            </p>

                            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                              {project.summary}
                            </p>
                          </div>

                          {/* Metrics Grid */}
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

                          {/* Tech Tags */}
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

                          {/* CTAs */}
                          <div className="pt-2 flex flex-wrap items-center gap-4">
                            <Button href={`/projects/${project.slug}`} icon={ArrowRight}>
                              View Architecture
                            </Button>
                            <span className="text-xs font-mono text-text-secondary flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-emerald-400" />
                              <span>{project.deploymentStatus}</span>
                            </span>
                          </div>
                        </div>

                        {/* Right: Interactive UI Mockup */}
                        <div className="lg:col-span-7">
                          <ProjectMockup slug={project.slug} />
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
