'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Products } from '@/components/sections/products';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
