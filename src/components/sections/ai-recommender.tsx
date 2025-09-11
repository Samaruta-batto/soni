'use client';

import { useState } from 'react';
import { BrainCircuit, Loader2, Sparkles } from 'lucide-react';
import { getOilRecommendation, OilRecommendationOutput } from '@/ai/flows/ai-oil-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { products, Oil } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Check } from 'lucide-react';

export function AiRecommender() {
  const [recommendation, setRecommendation] = useState<OilRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedOil, setSelectedOil] = useState<Oil | null>(null);

  const recommendedOils =
    recommendation?.recommendations
      .map((id) => products.find((p) => p.id === id))
      .filter((p): p is Oil => !!p) || [];

  const ProductCard = ({ oil }: { oil: Oil }) => {
    const productImage = PlaceHolderImages.find((img) => img.id === oil.id);
    return (
      <Card
        className="group cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
        onClick={() => setSelectedOil(oil)}
      >
        <CardHeader className="p-0">
          <div className="relative aspect-4/3 overflow-hidden">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={oil.name}
                width={400}
                height={300}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={productImage.imageHint}
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold">{oil.name}</h3>
          <p className="text-sm text-muted-foreground">{oil.shortDescription}</p>
        </CardContent>
      </Card>
    );
  };
  
  const selectedOilImage = selectedOil ? PlaceHolderImages.find((img) => img.id === selectedOil.id) : null;

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
    <>
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
                    <p>{recommendation.message}</p>
                  </AlertDescription>
                </Alert>

                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {recommendedOils.map(oil => (
                    <ProductCard key={oil.id} oil={oil} />
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>

    <Dialog open={!!selectedOil} onOpenChange={(open) => !open && setSelectedOil(null)}>
        <DialogContent className="sm:max-w-lg p-0 flex flex-col max-h-[90vh] overflow-y-auto">
          {selectedOil && (
            <>
              {selectedOilImage && (
                <div className="relative aspect-video w-full flex-shrink-0">
                  <Image
                    src={selectedOilImage.imageUrl}
                    alt={selectedOil.name}
                    width={600}
                    height={400}
                    className="object-cover w-full"
                    data-ai-hint={selectedOilImage.imageHint}
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <DialogHeader className="pb-2 flex-shrink-0">
                  <DialogTitle className="font-headline text-2xl">{selectedOil.name}</DialogTitle>
                  <DialogDescription>{selectedOil.shortDescription}</DialogDescription>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto pr-2">
                  <p className="text-sm text-muted-foreground mb-4">{selectedOil.longDescription}</p>
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {selectedOil.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
