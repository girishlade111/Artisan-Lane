
'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/products';

interface ProductInteractionsProps {
    product: Product;
    isMainBuySection?: boolean;
}

export default function ProductInteractions({ product, isMainBuySection = false }: ProductInteractionsProps) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [activeImage, setActiveImage] = useState(product.imageUrls[0]);

  const isWishlisted = wishlist.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  }

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  if (isMainBuySection) {
    return (
        <div className="flex items-center gap-4">
            <Button size="lg" className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
            <Button size="lg" variant="outline" onClick={handleWishlistToggle} className="px-4">
              <Heart className={cn("h-6 w-6", isWishlisted && "fill-destructive text-destructive")} />
              <span className="sr-only">Add to wishlist</span>
            </Button>
        </div>
    )
  }

  return (
    <div className="space-y-4">
      <Image
        src={activeImage || product.imageUrls[0]}
        alt={product.name}
        width={800}
        height={800}
        className="rounded-lg shadow-lg object-cover w-full aspect-square"
        data-ai-hint={product.dataAiHint}
      />
      <div className="grid grid-cols-4 gap-4">
        {product.imageUrls.map((url, index) => (
          <button key={index} onClick={() => setActiveImage(url)} className={cn("rounded-lg overflow-hidden border-2 transition", activeImage === url ? "border-primary" : "border-transparent")}>
            <Image
              src={url}
              alt={`${product.name} thumbnail ${index + 1}`}
              width={200}
              height={200}
              className="object-cover w-full aspect-square"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
