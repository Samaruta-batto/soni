import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';
import { PageWrapper } from '@/components/layout/page-wrapper';

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main>
          <Contact />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  );
}
