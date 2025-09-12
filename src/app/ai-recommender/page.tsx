import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AiRecommender } from '@/components/sections/ai-recommender';
import { PageWrapper } from '@/components/layout/page-wrapper';

export default function AiRecommenderPage() {
  return (
    <PageWrapper>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main>
          <AiRecommender />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  );
}
