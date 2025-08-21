import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { products } from '@/lib/products';

const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
            Discover Your Perfect Coffee
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            From the world's best artisans to your cup. Personalized subscriptions tailored to your unique taste profile.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/recommend">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">Find Your Match</Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Shop All Coffee</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Featured Coffees</h2>
          <p className="mt-2 text-center text-muted-foreground">Hand-picked by our experts, loved by our community.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href={`/products/${product.id}`} className="block">
                  <CardHeader className="p-0">
                    <Image
                      src={product.imageUrls[0]}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48"
                      data-ai-hint={product.dataAiHint}
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                    <CardDescription className="mt-2">{product.origin}</CardDescription>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-semibold text-primary">${product.price.toFixed(2)}</span>
                      <Button variant="outline" asChild>
                        <span>View Details</span>
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
