'use client'

import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import type { Product } from '@/lib/products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, Truck, CreditCard, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

function ProductRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(rating) ? 'text-accent' : 'text-muted-foreground/50'
            }`}
            fill={i < Math.floor(rating) ? 'currentColor' : 'transparent'}
          />
        ))}
      </div>
      <span className="text-muted-foreground text-sm">({reviews} reviews)</span>
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.roast === product.roast).slice(0, 3);
  
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={800}
            className="rounded-lg shadow-lg object-cover w-full"
            data-ai-hint={product.dataAiHint}
          />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">{product.origin}</p>
            <h1 className="text-4xl font-headline font-bold">{product.name}</h1>
            <p className="text-lg text-muted-foreground mt-2">Notes: {product.notes}</p>
          </div>
          
          <ProductRating rating={product.rating} reviews={product.reviews} />

          <p className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</p>

          <Card className="bg-secondary/50">
             <CardContent className="p-4 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-accent"/>
                    <p>Free shipping on orders over $50</p>
                </div>
                 <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-accent"/>
                    <p>Secure payments with Stripe</p>
                </div>
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-accent"/>
                    <p>100% satisfaction guarantee</p>
                </div>
             </CardContent>
          </Card>
          
          <Button size="lg" className="w-full" onClick={() => handleAddToCart(product)}>Add to Cart</Button>

          <Separator />

          <div>
            <h3 className="font-bold font-headline text-lg">Description</h3>
            <p className="text-muted-foreground mt-2">{product.description}</p>
          </div>
          
          <div>
            <h3 className="font-bold font-headline text-lg">Specifications</h3>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-headline font-bold text-center">You Might Also Like</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
               <Card key={related.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href={`/products/${related.id}`} className="block">
                  <CardHeader className="p-0">
                    <Image
                      src={related.imageUrl}
                      alt={related.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48"
                      data-ai-hint={related.dataAiHint}
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">{related.name}</CardTitle>
                    <CardDescription className="mt-2">{related.origin}</CardDescription>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-semibold text-primary">${related.price.toFixed(2)}</span>
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
    </div>
  );
}
