import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Products } from '@/components/sections/products';
import { PageWrapper } from '@/components/layout/page-wrapper';

export default function ProductsPage() {
  return (
    <PageWrapper>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main>
          <Products />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  );
}
