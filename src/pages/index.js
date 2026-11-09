import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { AboutSnapshot } from '@/components/sections/AboutSnapshot';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Skills } from '@/components/sections/Skills';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Certifications } from '@/components/sections/Certifications';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutSnapshot />
      <FeaturedProjects />
      <Skills />
      <ExperienceTimeline />
      <Certifications />
      <ContactCTA />
    </Layout>
  );
}
