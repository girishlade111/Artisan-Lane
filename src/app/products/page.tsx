'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/lib/products';
import type { Product } from '@/lib/products';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Coffee Collection</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our curated selection of single-origin coffees from the world's most renowned growing regions.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Link href={`/products/${product.id}`} className="flex flex-col flex-grow">
              <CardHeader className="p-0">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-52"
                  data-ai-hint={product.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <CardDescription className="text-sm">{product.origin}</CardDescription>
                  <CardTitle className="font-headline text-xl mt-1">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">Notes: {product.notes}</p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xl font-semibold text-primary">${product.price.toFixed(2)}</span>
                </div>
              </CardContent>
            </Link>
             <div className="p-6 pt-0">
                <Button onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product)
                }} className="w-full">Add to Cart</Button>
              </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
