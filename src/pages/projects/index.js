import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Filter } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';

const categories = ['All', 'Full-Stack / ERP', 'E-commerce', 'Logistics / Enterprise', 'Web App'];

export default function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout
      title="Projects & Case Studies | Santhosh K - Frontend Developer"
      description="Explore production case studies and featured web applications built with React, Next.js, and React Native."
    >
      <div className="py-12 sm:py-20">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Portfolio &amp; Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Featured Works &amp; Enterprise Platforms
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              From large-scale ERP and multi-role logistics systems to consumer-facing e-commerce stores. Explore architectural challenges, technical solutions, and live links.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-background font-semibold shadow-md shadow-accent/20'
                    : 'bg-bg-secondary text-text-secondary hover:text-foreground hover:bg-bg-tertiary border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.slug}
                className="group flex flex-col justify-between overflow-hidden p-0 border border-border bg-bg-secondary hover:border-accent/40"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-tertiary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-medium text-accent border border-border">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-accent" />
                    </h3>
                    <p className="mt-1 text-xs font-mono text-text-secondary">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-sm text-text-secondary line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} size="xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-mono text-text-secondary self-center px-1">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent font-medium hover:underline"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-text-secondary hover:text-foreground flex items-center gap-1"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
