import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AiRecommender } from '@/components/sections/ai-recommender';

export default function AiRecommenderPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AiRecommender />
      </main>
      <Footer />
    </div>
  );
}
