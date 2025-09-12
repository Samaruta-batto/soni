'use client';

import { Products } from '@/components/sections/products';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Commitment } from '@/components/sections/commitment';

export default function Home() {
  return (
    <>
      <Hero />
      <Commitment />
      <Products />
      <Contact />
    </>
  );
}
