import RecommendationForm from '@/components/RecommendationForm';

export default function RecommendPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary">
          AI Coffee Recommender
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us what you like, and our AI-powered coffee sommelier will find the perfect bean for you. Describe your ideal coffee—flavors, roast level, acidity, body—and let us do the rest.
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-12">
        <RecommendationForm />
      </div>
    </div>
  );
}
