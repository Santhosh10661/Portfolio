import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({
  children,
  title = 'Santhosh K | Frontend Developer | React, Next.js & React Native',
  description = 'Frontend Developer with 1.5+ years building and shipping production web and mobile apps using React.js, React Native, and Next.js.',
  ogImage = '/projects/articles-app1.png',
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <Header />
      <main className="flex-1 pt-16 sm:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
