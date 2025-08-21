'use client';

import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { X, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';
import type { Product } from '@/lib/products';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product: Product) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast({
      title: "Moved to cart",
      description: `${product.name} has been moved to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-headline font-bold flex items-center gap-3">
          <Heart className="h-10 w-10 text-primary" /> Your Wishlist
        </h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-muted-foreground mb-4">Your wishlist is empty.</p>
          <p className="text-muted-foreground mb-8">Looks like you haven’t added anything to your wishlist yet.</p>
          <Link href="/products">
            <Button>Explore Products</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <Card key={item.id} className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
               <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-background/50 hover:bg-background/80"
                onClick={() => removeFromWishlist(item.id)}
               >
                <X className="h-5 w-5 text-muted-foreground" />
                <span className="sr-only">Remove from wishlist</span>
              </Button>
              <Link href={`/products/${item.id}`}>
                <Image
                  src={item.imageUrls[0]}
                  alt={item.name}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover w-full h-52"
                  data-ai-hint={item.dataAiHint}
                />
              </Link>
              <CardContent className="p-4">
                <div className="flex-grow">
                  <h2 className="font-bold font-headline text-lg truncate" title={item.name}>{item.name}</h2>
                  <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <Button 
                    className="w-full mt-4" 
                    onClick={() => handleMoveToCart(item)}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Move to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
