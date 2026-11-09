import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Github, ExternalLink, Layers } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Featured Work
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Production Case Studies
            </h2>
          </div>
          <Button href="/projects" variant="outline" icon={ArrowRight}>
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Card
              key={project.slug}
              className="group flex flex-col justify-between overflow-hidden p-0 border border-border bg-bg-secondary hover:border-accent/40"
            >
              {/* Image preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-tertiary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-medium text-accent border border-border">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
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

                {/* Tags */}
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

                {/* Footer link */}
                <div className="mt-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent font-medium hover:underline"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
