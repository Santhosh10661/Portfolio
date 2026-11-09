import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { personalInfo } from '@/data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary/40 py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xl font-bold font-mono tracking-tight text-foreground hover:text-accent transition-colors"
            >
              <span className="text-accent">&lt;</span>
              <span>Santhosh K</span>
              <span className="text-accent">/&gt;</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-secondary leading-relaxed">
              Frontend Developer specializing in high-performance web applications and mobile experiences with React, Next.js, and React Native.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl border border-border bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl border border-border bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl border border-border bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-text-secondary hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary hover:text-accent transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-text-secondary hover:text-accent transition-colors">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-accent transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured projects */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-4">
              Featured Work
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/projects/collabon"
                  className="inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
                >
                  <span>Collabon ERP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/emagrigoat"
                  className="inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
                >
                  <span>eMagriGoat Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/venba"
                  className="inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
                >
                  <span>Venba Logistics</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary font-mono">
          <p>© {currentYear} Santhosh K. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
