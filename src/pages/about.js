import Image from 'next/image';
import { ArrowDownToLine, MapPin, Mail, Laptop, Terminal as TerminalIcon } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SpotlightCard } from '@/components/ui/Motion';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import { educations } from '@/data/education';
import { certifications } from '@/data/certifications';

export default function AboutPage() {
  return (
    <Layout
      title="About Santhosh K | Frontend Developer"
      description="Professional background, MCA education, enterprise software engineering experience at Kriha IT Solutions, and technical certifications."
    >
      <div className="py-12 sm:py-24 dev-grid-bg">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-16 font-mono">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-syntax-string/30 bg-syntax-string/10 px-3.5 py-1 text-xs font-semibold text-syntax-string shadow-sm">
              <TerminalIcon className="w-3.5 h-3.5" />
              cat ~/profile/about.md
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Engineering intuitive, high-velocity web &amp; mobile platforms.
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              Frontend Developer based in Chennai, India, with 1.5+ years of production experience building multi-role enterprise ecosystems and shipping cross-platform React Native applications.
            </p>
          </div>

          {/* Quick info grid — Environment Config Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 font-mono">
            <SpotlightCard className="p-5 bg-bg-secondary border-border/90 shadow-lg">
              <span className="text-[11px] text-syntax-comment block mb-2">{'// ENV.LOCATION'}</span>
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{personalInfo.location}</span>
              </p>
              <p className="text-[11px] text-text-secondary mt-1">Darasuram, Kumbakonam</p>
            </SpotlightCard>

            <SpotlightCard className="p-5 bg-bg-secondary border-border/90 shadow-lg">
              <span className="text-[11px] text-syntax-comment block mb-2">{'// ENV.COMMUNICATION'}</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-semibold text-foreground hover:text-accent flex items-center gap-2 transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <p className="text-[11px] text-text-secondary mt-1">{personalInfo.phone}</p>
            </SpotlightCard>

            <SpotlightCard className="p-5 bg-bg-secondary border-border/90 shadow-lg">
              <span className="text-[11px] text-syntax-comment block mb-2">{'// ENV.ROLE'}</span>
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Laptop className="w-4 h-4 text-accent" />
                <span>Junior Software Developer</span>
              </p>
              <p className="text-[11px] text-text-secondary mt-1">Kriha IT Solutions, Chennai</p>
            </SpotlightCard>
          </div>

          {/* Bio Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              <div className="font-mono text-xs text-syntax-comment mb-2">
                {'// System.out.println(career_trajectory)'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-mono">
                Career Trajectory &amp; Technical Philosophy
              </h2>
              <p>
                My foundation began with a Bachelor&apos;s degree in Computer Science, followed by a Master of Computer Applications (MCA) from Mass College of Arts &amp; Science (graduated 2023). What originated as an obsession with clean user interfaces evolved into architecting production platforms handling thousands of student and logistics interactions daily.
              </p>
              <p>
                At <strong className="text-foreground">Kriha IT Solutions</strong>, I progressed from intern to software developer trainee and now Junior Software Developer. In this role, I focus on delivering high-performance UI modules, integrating robust REST API contracts, and ensuring accessible, responsive design across web and mobile platforms.
              </p>
              <p>
                I prioritize performance, accessibility (WCAG AA), and maintainability. When building multi-panel systems like <strong className="text-foreground">Venba</strong> (3 Web Admin Panels + 2 Native Apps), <strong className="text-foreground">Collabon</strong> (Campus ERP + Expo Mobile App + Social Feed), or <strong className="text-foreground">eMagriGoat</strong> (Next.js E-Commerce + Live Admin Control), I focus on predictable state machines, clean component boundaries, and sub-second user responsiveness.
              </p>

              <div className="pt-4 font-mono">
                <Button
                  href="/Santhosh_K_Resume.pdf"
                  icon={ArrowDownToLine}
                  size="md"
                  external
                >
                  $ curl -O /resume.pdf
                </Button>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="lg:col-span-4">
              <SpotlightCard className="p-6 border-border/90 bg-bg-secondary shadow-xl font-mono">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs text-syntax-comment">
                  <span>metrics.json</span>
                  <span className="text-syntax-string font-bold">READY</span>
                </div>
                <div className="space-y-4">
                  {personalInfo.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">&quot;{stat.label}&quot;:</span>
                      <span className="font-bold text-sm text-accent">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Academic Credentials */}
          <div className="mb-24">
            <SectionHeading
              badge="git log -- education"
              title="Academic Foundation"
              description="Formal computer applications and computer science degrees."
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
              {educations.map((edu) => (
                <SpotlightCard key={edu.degree} className="p-6 bg-bg-secondary border-border/90 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between text-xs text-accent mb-2">
                      <span className="text-syntax-comment">{edu.period}</span>
                      <span className="bg-syntax-string/10 border border-syntax-string/30 text-syntax-string px-2 py-0.5 rounded text-[11px] font-bold">
                        Score: {edu.score}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-xs font-semibold text-syntax-function mb-2">{edu.institution}</p>
                    <p className="text-[11px] text-text-secondary/70 mb-3">{edu.university} &middot; {edu.location}</p>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">{edu.description}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <SectionHeading
              badge="npm test --acc"
              title="Verified Certifications"
              description="Recognized Meta and Google certifications in React, JavaScript, and Frontend Development."
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
              {certifications.map((cert) => (
                <SpotlightCard key={cert.id} className="p-4 bg-bg-secondary border-border/90 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="relative aspect-[4/3] rounded-md overflow-hidden mb-3 bg-bg-tertiary">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <span className="text-[11px] text-accent font-semibold">{cert.issuer}</span>
                    <h4 className="text-sm font-bold text-foreground mt-1 mb-1 leading-snug">{cert.title}</h4>
                    <p className="text-[11px] text-syntax-string mb-2">Grade: {cert.grade} &middot; {cert.date}</p>
                  </div>
                  <div className="pt-2 border-t border-border flex flex-wrap gap-1">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-[9px] text-text-secondary bg-bg-tertiary px-1.5 py-0.5 rounded">
                        +{s}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
