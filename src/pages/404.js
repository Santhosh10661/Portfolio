import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function Custom404() {
  return (
    <Layout
      title="404 - Page Not Found | Santhosh K"
      description="The page you are looking for does not exist."
    >
      <div className="min-h-[70vh] flex items-center justify-center py-20">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <span className="font-mono text-7xl sm:text-8xl font-black text-accent block mb-4">
              404
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button href="/" icon={Home}>
                Return Home
              </Button>
              <Button href="/projects" variant="secondary" icon={ArrowLeft}>
                View Projects
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
