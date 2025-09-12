import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { About } from '@/components/sections/about';
import { PageWrapper } from '@/components/layout/page-wrapper';

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main>
          <About />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  );
}
