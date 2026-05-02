
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, Truck, CreditCard, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ProductInteractions from '@/components/ProductInteractions';

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

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = product.isCombo
    ? products.filter(p => p.isCombo && p.id !== product.id).slice(0,3)
    : products.filter(p => !p.isCombo && p.id !== product.id && p.roast === product.roast).slice(0, 3);

  return (
<div className="container mx-auto px-3 md:px-6 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12">
        <ProductInteractions product={product} />
        <div className="space-y-4 md:space-y-6">
          <div>
            {product.origin && <p className="text-xs md:text-sm text-muted-foreground">{product.origin}</p>}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold">{product.name}</h1>
            {product.notes && <p className="text-sm md:text-lg text-muted-foreground mt-1 md:mt-2">Notes: {product.notes}</p>}
          </div>

          {product.rating && product.reviews && <ProductRating rating={product.rating} reviews={product.reviews} />}

          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            ${product.price.toFixed(2)}{' '}
            {product.originalPrice && (
              <span className="text-lg md:text-2xl text-muted-foreground line-through ml-2">${product.originalPrice.toFixed(2)}</span>
            )}
          </p>

          <Card className="bg-secondary/50">
             <CardContent className="p-3 md:p-4 space-y-2 md:space-y-3 text-xs md:text-sm">
                <div className="flex items-center gap-2 md:gap-3">
                    <Truck className="h-4 md:h-5 w-4 md:w-5 text-accent flex-shrink-0"/>
                    <p className="text-xs md:text-sm">Free shipping on orders over $50</p>
                </div>
                 <div className="flex items-center gap-2 md:gap-3">
                    <CreditCard className="h-4 md:h-5 w-4 md:w-5 text-accent flex-shrink-0"/>
                    <p className="text-xs md:text-sm">Secure payments with Stripe</p>
                </div>
                 <div className="flex items-center gap-2 md:gap-3">
                    <ShieldCheck className="h-4 md:h-5 w-4 md:w-5 text-accent flex-shrink-0"/>
                    <p className="text-xs md:text-sm">100% satisfaction guarantee</p>
                </div>
             </CardContent>
          </Card>
          
          <ProductInteractions product={product} isMainBuySection={true} />

          <Separator />

          <div>
            <h3 className="font-bold font-headline text-base md:text-lg">Description</h3>
            <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2">{product.description}</p>
          </div>

          {product.isCombo && product.comboProducts && (
             <div>
                <h3 className="font-bold font-headline text-base md:text-lg">What's Inside</h3>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground mt-1 md:mt-2 space-y-1">
                    {product.comboProducts.map((p) => (
                        <li key={p.id}><Link href={`/products/${p.id}`} className="text-primary hover:underline">{p.name}</Link></li>
                    ))}
                </ul>
            </div>
          )}

          {product.specs && (
            <div>
                <h3 className="font-bold font-headline text-base md:text-lg">Specifications</h3>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground mt-1 md:mt-2 space-y-1">
                    {Object.entries(product.specs).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-12 md:mt-20">
        <h2 className="text-xl md:text-3xl font-headline font-bold text-center">You Might Also Like</h2>
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {relatedProducts.map((related) => (
               <Card key={related.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href={`/products/${related.id}`} className="block">
                  <CardHeader className="p-0">
                    <Image
                      src={related.imageUrls[0]}
                      alt={related.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-40 md:h-48"
                      data-ai-hint={related.dataAiHint}
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-6">
                    <CardTitle className="font-headline text-base md:text-xl">{related.name}</CardTitle>
                    {related.origin && <CardDescription className="mt-1 md:mt-2 text-xs md:text-sm">{related.origin}</CardDescription>}
                    <div className="mt-3 md:mt-4 flex justify-between items-center">
                       <span className="text-base md:text-lg font-semibold text-primary">
                            ${related.price.toFixed(2)}{' '}
                            {related.originalPrice && <span className="text-xs md:text-sm text-muted-foreground line-through">${related.originalPrice.toFixed(2)}</span>}
                       </span>
                       <Button variant="outline" size="sm" asChild>
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
