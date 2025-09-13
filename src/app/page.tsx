
'use client';

import { Hero } from '@/components/sections/hero';
import { Commitment } from '@/components/sections/commitment';
import { FeaturedOils } from '@/components/sections/featured-oils';
import { HomeAbout } from '@/components/sections/home-about';
import { ContactCard } from '@/components/sections/contact-card';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedOils />
      <HomeAbout />
      <Commitment />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <ContactCard />
      </div>
    </>
  );
}
