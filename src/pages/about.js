import Image from 'next/image';
import { ArrowDownToLine, GraduationCap, MapPin, Mail, Phone, Calendar, CheckCircle2, Award, Laptop, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SpotlightCard, FadeIn, StaggerContainer, staggerItem } from '@/components/ui/Motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import { educations } from '@/data/education';
import { skillCategories } from '@/data/skills';
import { experiences } from '@/data/experience';
import { certifications } from '@/data/certifications';

export default function AboutPage() {
  return (
    <Layout
      title="About Santhosh K | Frontend Tech Lead & Mobile Engineer"
      description="Professional background, MCA education, enterprise software engineering leadership at Kriha IT Solutions, and technical certifications."
    >
      <div className="py-12 sm:py-24">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-mono text-xs font-semibold text-accent shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              Engineering Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Engineering intuitive, high-velocity web &amp; mobile platforms.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              I&apos;m a Frontend Tech Lead based in Chennai, India, with 1.5+ years of production experience managing multi-role enterprise ecosystems, leading a squad of 4 developers, and shipping cross-platform React Native applications.
            </p>
          </div>

          {/* Quick info grid with SpotlightCards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            <SpotlightCard className="p-6 bg-bg-secondary border-border/80 shadow-lg">
              <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2 font-semibold">Location</span>
              <p className="text-base font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{personalInfo.location}</span>
              </p>
              <p className="text-xs text-text-secondary mt-1 font-mono">Darasuram, Kumbakonam</p>
            </SpotlightCard>

            <SpotlightCard className="p-6 bg-bg-secondary border-border/80 shadow-lg">
              <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2 font-semibold">Direct Communication</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base font-semibold text-foreground hover:text-accent flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <p className="text-xs text-text-secondary mt-1 font-mono">{personalInfo.phone}</p>
            </SpotlightCard>

            <SpotlightCard className="p-6 bg-bg-secondary border-border/80 shadow-lg">
              <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2 font-semibold">Engineering Role</span>
              <p className="text-base font-semibold text-foreground flex items-center gap-2">
                <Laptop className="w-4 h-4 text-accent" />
                <span>Squad Lead (4 Developers)</span>
              </p>
              <p className="text-xs text-text-secondary mt-1 font-mono">Kriha IT Solutions, Chennai</p>
            </SpotlightCard>
          </div>

          {/* Bio Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
            <div className="lg:col-span-8 space-y-6 text-base text-text-secondary leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Career Trajectory &amp; Technical Philosophy
              </h2>
              <p>
                My foundation began with a Bachelor&apos;s degree in Computer Science, followed by a Master of Computer Applications (MCA) from Mass College of Arts &amp; Science (graduated 2023). What originated as an obsession with clean user interfaces evolved into architecting production platforms handling thousands of student and logistics interactions daily.
              </p>
              <p>
                At <strong className="text-foreground">Kriha IT Solutions</strong>, I progressed from intern to software developer trainee and now Junior Software Developer leading a dedicated squad of 4 developers. In this role, I bridge the gap between technical architecture and timely project delivery, guiding code reviews, orchestrating REST API contracts, and ensuring accessible, responsive design.
              </p>
              <p>
                I prioritize performance, accessibility (WCAG AA), and maintainability. When architecting multi-panel systems like <strong className="text-foreground">Venba</strong> (3 Web Admin Panels + 2 Native Apps), <strong className="text-foreground">Collabon</strong> (Campus ERP + Expo Mobile App + Social Feed), or <strong className="text-foreground">eMagriGoat</strong> (Next.js E-Commerce + Live Admin Control), I focus on predictable state machines, clean component boundaries, and sub-second user responsiveness.
              </p>

              <div className="pt-4">
                <Button
                  href="/Santhosh_K_Resume.pdf"
                  icon={ArrowDownToLine}
                  size="lg"
                  external
                >
                  Download Official Resume PDF
                </Button>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="lg:col-span-4">
              <SpotlightCard className="p-6 sm:p-8 space-y-6 border-border/80 shadow-xl">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent border-b border-border pb-3 font-semibold">
                  Engineering Scope
                </h3>
                {personalInfo.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">{stat.label}</span>
                    <span className="font-mono font-bold text-lg text-accent">{stat.value}</span>
                  </div>
                ))}
              </SpotlightCard>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-28">
            <SectionHeading
              badge="Academic Foundation"
              title="Education"
              description="Formal computer applications and computer science degrees."
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educations.map((edu) => (
                <SpotlightCard key={edu.degree} className="p-8 bg-bg-secondary border-border/80 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-accent mb-3">
                      <span>{edu.period}</span>
                      <span className="bg-accent/15 border border-accent/30 px-2 py-0.5 rounded font-bold">
                        Score: {edu.score}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-sm font-semibold text-text-secondary mb-3">{edu.institution}</p>
                    <p className="text-xs text-text-secondary/80 font-mono mb-4">{edu.university} • {edu.location}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{edu.description}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <SectionHeading
              badge="Professional Credentials"
              title="Certifications &amp; Accreditations"
              description="Recognized Meta and Google certifications in React, JavaScript, and Frontend Development."
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <SpotlightCard key={cert.id} className="p-5 bg-bg-secondary border-border/80 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-bg-tertiary">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <span className="text-xs font-mono text-accent font-semibold">{cert.issuer}</span>
                    <h4 className="text-base font-bold text-foreground mt-1 mb-2">{cert.title}</h4>
                    <p className="text-xs font-mono text-text-secondary mb-3">Grade: {cert.grade} • {cert.date}</p>
                  </div>
                  <div className="pt-3 border-t border-border flex flex-wrap gap-1">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-[10px] font-mono text-text-secondary bg-bg-tertiary px-1.5 py-0.5 rounded">
                        {s}
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
