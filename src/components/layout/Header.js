import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Sun, Moon, ArrowDownToLine, GitBranch, Terminal } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Container } from '@/components/ui/Container';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { name: '~/home', href: '/' },
  { name: '~/about', href: '/about' },
  { name: '~/projects', href: '/projects' },
  { name: '~/contact', href: '/contact' },
];

export function Header() {
  const router = useRouter();
  const { theme, toggleTheme, mounted } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex h-16 sm:h-20 items-center justify-between font-mono">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex items-center gap-1.5 text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
              >
                <Terminal className="w-4 h-4 text-accent" />
                <span className="text-accent">&lt;</span>
                <span>santhosh.dev</span>
                <span className="text-accent">/&gt;</span>
              </Link>
              <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-bg-tertiary border border-border text-[11px] text-text-secondary">
                <GitBranch className="w-2.5 h-2.5 text-syntax-string" />
                main
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? router.pathname === '/'
                    : router.pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs font-mono transition-colors rounded-md ${
                      isActive
                        ? 'text-accent bg-accent/10 border border-accent/25'
                        : 'text-text-secondary hover:text-foreground hover:bg-bg-tertiary'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="p-2 text-text-secondary hover:text-foreground hover:bg-bg-tertiary rounded-lg transition-colors border border-transparent hover:border-border"
              >
                {mounted && theme === 'light' ? (
                  <Moon className="w-4 h-4 text-accent" />
                ) : (
                  <Sun className="w-4 h-4 text-accent" />
                )}
              </button>

              {/* Resume Button */}
              <a
                href="/Santhosh_K_Resume.pdf"
                download="Santhosh_K_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-bg-tertiary px-3.5 py-2 text-xs font-mono font-medium text-foreground border border-border hover:border-accent/40 hover:text-accent transition-all"
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-accent" />
                <span>resume.pdf</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="p-2 text-text-secondary hover:text-foreground rounded-lg"
              >
                {mounted && theme === 'light' ? (
                  <Moon className="w-4 h-4 text-accent" />
                ) : (
                  <Sun className="w-4 h-4 text-accent" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-foreground hover:text-accent rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
