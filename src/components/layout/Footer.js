import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight, GitBranch, Check, Terminal } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { personalInfo } from '@/data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary/40 font-mono">
      <Container>
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors"
            >
              <Terminal className="w-4 h-4 text-accent" />
              <span className="text-accent">&lt;</span>
              <span>santhosh.dev</span>
              <span className="text-accent">/&gt;</span>
            </Link>
            <p className="mt-3 max-w-sm text-xs sm:text-sm text-text-secondary leading-relaxed">
              {'// Frontend developer specializing in high-performance web applications and cross-platform mobile runtimes with React, Next.js, and React Native.'}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="px-3 py-1.5 rounded border border-border bg-bg-secondary text-xs text-text-secondary hover:text-accent hover:border-accent/40 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="px-3 py-1.5 rounded border border-border bg-bg-secondary text-xs text-text-secondary hover:text-accent hover:border-accent/40 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="px-3 py-1.5 rounded border border-border bg-bg-secondary text-xs text-text-secondary hover:text-accent hover:border-accent/40 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>email</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-secondary/70 mb-3 text-syntax-comment">
              {'// Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-text-secondary hover:text-accent transition-colors">
                  $ cd /home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary hover:text-accent transition-colors">
                  $ cat /about
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-text-secondary hover:text-accent transition-colors">
                  $ ls /projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-accent transition-colors">
                  $ ./contact.sh
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured projects */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-secondary/70 mb-3 text-syntax-comment">
              {'// Repositories'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/projects/venba"
                  className="inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
                >
                  <span>venba-logistics</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/collabon"
                  className="inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
                >
                  <span>collabon-erp</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/emagrigoat"
                  className="inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
                >
                  <span>emagrigoat-commerce</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/aura-design-system"
                  className="inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors"
                >
                  <span>aura-ui</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* VS Code Style Status Bar */}
      <div className="border-t border-border bg-bg-tertiary/70 px-4 py-2 text-[11px] text-text-secondary flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1 text-syntax-string font-semibold">
            <GitBranch className="w-3 h-3" />
            main*
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3 text-syntax-string" />
            0 errors, 0 warnings
          </span>
          <span className="hidden sm:inline">Next.js 14 &middot; Tailwind CSS &middot; Framer Motion</span>
        </div>

        <div className="flex items-center gap-4 text-text-secondary/70">
          <span>UTF-8</span>
          <span>LF</span>
          <span>React (TypeScript)</span>
          <span>&copy; {currentYear} Santhosh K</span>
        </div>
      </div>
    </footer>
  );
}
