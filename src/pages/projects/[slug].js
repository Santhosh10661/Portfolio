import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Calendar, UserCheck, Layers, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { projects } from '@/data/projects';

export default function ProjectDetailPage({ project }) {
  if (!project) return null;

  return (
    <Layout
      title={`${project.title} | Case Study | Santhosh K`}
      description={project.summary}
      ogImage={project.image}
    >
      <article className="py-12 sm:py-20">
        <Container>
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>

          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                {project.category}
              </span>
              <span className="text-xs font-mono text-text-secondary">•</span>
              <span className="text-xs font-mono text-text-secondary flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {project.timeline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick meta bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-bg-secondary border border-border mb-12 text-sm">
            <div>
              <span className="text-xs font-mono text-accent block mb-1">My Role</span>
              <span className="font-semibold text-foreground">{project.role}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-accent block mb-1">Timeline</span>
              <span className="font-semibold text-foreground">{project.timeline}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-accent block mb-1">Actions</span>
              <div className="flex items-center gap-3 pt-0.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline font-medium"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-foreground"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border bg-bg-secondary mb-16 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Case Study Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Story */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Overview &amp; Purpose
                </h2>
                <p className="text-base text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Key Engineering Contributions
                </h2>
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

            {/* Sidebar Tech Specs */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-bg-secondary p-6 sm:p-8 space-y-6 sticky top-28">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent border-b border-border pb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} size="sm" variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-3">
                    Project Links
                  </h4>
                  <div className="space-y-2">
                    {project.liveUrl && (
                      <Button href={project.liveUrl} size="sm" className="w-full" external icon={ArrowUpRight}>
                        Visit Live Demo
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button href={project.repoUrl} variant="secondary" size="sm" className="w-full" external icon={Github}>
                        View Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Interface Screenshots &amp; Workflows
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-bg-secondary group"
                  >
                    <Image
                      src={shot}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
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
