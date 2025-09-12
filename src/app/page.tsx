import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Products } from '@/components/sections/products';
import { Commitment } from '@/components/sections/commitment';
import { Contact } from '@/components/sections/contact';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
