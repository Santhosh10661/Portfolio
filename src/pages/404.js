import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Terminal, Comment } from '@/components/ui/Terminal';

export default function Custom404() {
  return (
    <Layout
      title="404: Route Not Found | Santhosh K"
      description="The requested route does not exist in the routing table."
    >
      <div className="min-h-[75vh] flex items-center justify-center py-20 dev-grid-bg">
        <Container>
          <div className="max-w-xl mx-auto">
            <Terminal
              title="error: 404_PAGE_NOT_FOUND (exit code 1)"
              className="shadow-2xl border-syntax-variable/40"
            >
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-syntax-variable font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Uncaught RouteError: 404 (Resource Not Found)</span>
                </div>

                <div className="p-3.5 rounded bg-bg-tertiary/70 border border-border text-[11px] sm:text-xs text-text-secondary space-y-1">
                  <div>
                    <span className="text-syntax-comment">at</span> <span className="text-syntax-function">Router.resolve</span> (<span className="text-syntax-string">/src/pages/[...route].tsx:404:12</span>)
                  </div>
                  <div>
                    <span className="text-syntax-comment">at</span> <span className="text-syntax-function">ServerResponse.dispatch</span> (<span className="text-syntax-string">/node_modules/next/server.js:88:5</span>)
                  </div>
                  <div>
                    <span className="text-syntax-comment">at</span> <span className="text-syntax-function">async handleRequest</span> (<span className="text-syntax-string">/node_modules/next/handler.js:142:9</span>)
                  </div>
                </div>

                <div className="text-text-secondary text-xs leading-relaxed">
                  <Comment>{'// The requested route does not exist in this deployment.'}</Comment>
                  <br />
                  <span className="text-foreground">Please choose a valid recovery destination:</span>
                </div>

                <div className="pt-3 border-t border-border flex flex-wrap items-center gap-3">
                  <Button href="/" icon={Home} size="sm">
                    $ cd /home
                  </Button>
                  <Button href="/projects" variant="secondary" icon={ArrowLeft} size="sm">
                    $ ls /projects
                  </Button>
                </div>
              </div>
            </Terminal>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
