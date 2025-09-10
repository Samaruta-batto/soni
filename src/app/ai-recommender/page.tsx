import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AiRecommender } from '@/components/sections/ai-recommender';

export default function AiRecommenderPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main>
        <AiRecommender />
      </main>
      <Footer />
    </div>
  );
}
