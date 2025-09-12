'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Products } from '@/components/sections/products';
import { Contact } from '@/components/sections/contact';
import { PageWrapper } from '@/components/layout/page-wrapper';

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  );
}
