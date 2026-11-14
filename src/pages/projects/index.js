import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { SpotlightCard, FadeIn } from '@/components/ui/Motion';
import { Badge } from '@/components/ui/Badge';
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
      title="Enterprise Systems & Architecture | Santhosh K - Frontend Lead"
      description="Production case studies: multi-role logistics platforms, campus ERP systems with companion mobile apps, and high-performance e-commerce suites."
    >
      <div className="py-12 sm:py-24">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs font-semibold text-accent shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              Standardized Portfolio Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              Enterprise Platforms &amp; Systems
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
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
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-colors ${
                    isActive ? 'text-background font-semibold' : 'text-text-secondary hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-xl bg-accent shadow-md shadow-accent/25"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
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
                  <SpotlightCard className="p-6 sm:p-10 border border-border/80 bg-bg-secondary hover:border-accent/40 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                      {/* Left: Project Details */}
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

                          <h2 className="text-2xl sm:text-3xl font-bold text-foreground hover:text-accent transition-colors">
                            <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 group">
                              <span>{project.title}</span>
                              <ArrowUpRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                            </Link>
                          </h2>

                          <p className="mt-1 text-xs font-mono text-accent/90 font-medium">
                            {project.tagline}
                          </p>

                          <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                            {project.summary}
                          </p>
                        </div>

                        {/* Metrics Grid */}
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

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <Badge key={tag} size="xs" variant="default">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* CTAs */}
                        <div className="pt-2 flex flex-wrap items-center gap-4">
                          <Button href={`/projects/${project.slug}`} icon={ArrowRight}>
                            View Case Study &amp; Architecture
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
