import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
