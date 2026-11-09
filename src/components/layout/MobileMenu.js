import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowDownToLine, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export function MobileMenu({ isOpen, onClose, links }) {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-bg-secondary border-l border-border p-6 shadow-2xl flex flex-col justify-between animate-slide-in-right">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <span className="font-mono text-sm font-semibold text-accent">Navigation</span>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-foreground text-sm font-mono"
            >
              Close [ESC]
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {links.map((link) => {
              const isActive =
                link.href === '/'
                  ? router.pathname === '/'
                  : router.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent font-semibold'
                      : 'text-text-secondary hover:text-foreground hover:bg-bg-tertiary'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer actions inside mobile menu */}
        <div className="pt-6 border-t border-border flex flex-col gap-4">
          <a
            href={personalInfo.resumeUrl}
            download="Santhosh_K_Resume.pdf"
            className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-background shadow-md shadow-accent/20"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <div className="flex items-center justify-center gap-4 text-text-secondary pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
