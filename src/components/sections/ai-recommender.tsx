'use client';

import { useState } from 'react';
import { BrainCircuit, Loader2, Sparkles } from 'lucide-react';
import { getOilRecommendation, OilRecommendationOutput } from '@/ai/flows/ai-oil-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AiRecommender() {
  const [recommendation, setRecommendation] = useState<OilRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setError('');
    setRecommendation(null);

    const needs = formData.get('needs') as string;
    if (!needs.trim()) {
      setError('Please describe your needs to get a recommendation.');
      setIsLoading(false);
      return;
    }

    try {
      const result = await getOilRecommendation({ needs });
      setRecommendation(result);
    } catch (e) {
      setError('An error occurred while getting your recommendation. Please try again later.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-recommender" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="mx-auto max-w-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <BrainCircuit className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl">AI-Powered Oil Recommendation</CardTitle>
            <CardDescription>
              Tell us your needs (e.g., stress relief, skincare), and our AI will suggest the
              perfect essential oils for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-4">
              <Textarea
                name="needs"
                placeholder="I'm looking for something to help me relax and sleep better..."
                className="min-h-[100px] resize-none"
                disabled={isLoading}
              />
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Recommendation...
                  </>
                ) : (
                  'Find My Oils'
                )}
              </Button>
            </form>

            {recommendation && (
              <div className="mt-6">
                <Alert>
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle className="font-bold">Here are your recommendations!</AlertTitle>
                  <AlertDescription className="prose prose-sm max-w-none">
                    <p>{recommendation.recommendations}</p>
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
