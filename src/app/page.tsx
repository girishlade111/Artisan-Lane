
'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { products, type Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

const featuredProducts = products.filter(p => !p.isCombo).slice(0, 3);
const popularProducts = products.filter(p => !p.isCombo).slice(3, 6);
const comboProducts = products.filter(p => p.isCombo);


export default function Home() {
    const { addToCart } = useCart();

    const handleAddToCart = (product: Product) => {
        addToCart(product);
        toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
        });
    }

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

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Popular Choices</h2>
          <p className="mt-2 text-center text-muted-foreground">Discover what other coffee lovers are enjoying.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {popularProducts.map((product) => (
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Combos</h2>
          <p className="mt-2 text-center text-muted-foreground">Get the best of both worlds with our curated coffee combos.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {comboProducts.map((combo) => (
                <Card key={combo.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <Link href={`/products/${combo.id}`}>
                            <Image
                                src={combo.imageUrls[0]}
                                alt={combo.name}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                                data-ai-hint={combo.dataAiHint}
                            />
                        </Link>
                    </div>
                    <div className="p-6 md:w-1/2 flex flex-col">
                        <Link href={`/products/${combo.id}`} className="flex-grow">
                            <CardTitle className="font-headline text-xl">{combo.name}</CardTitle>
                            <CardDescription className="mt-2">{combo.description.substring(0, 100)}...</CardDescription>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                {combo.comboProducts?.map(p => <li key={p.id}>- {p.name}</li>)}
                            </ul>
                        </Link>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-semibold text-primary">
                                ${combo.price.toFixed(2)}{' '}
                                {combo.originalPrice && <span className="text-sm text-muted-foreground line-through">${combo.originalPrice.toFixed(2)}</span>}
                            </span>
                            <Button onClick={() => handleAddToCart(combo)}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
