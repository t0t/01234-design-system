import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ColorPalette } from '@/components/sections/color-palette';
import { Typography } from '@/components/sections/typography';
import { Components } from '@/components/sections/components';
import { Layout } from '@/components/sections/layout';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-16 space-y-24">
        <ColorPalette />
        <Typography />
        <Components />
        <Layout />
      </main>
    </div>
  );
}