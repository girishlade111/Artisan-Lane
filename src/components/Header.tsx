
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Coffee, User, ShoppingCart, ChevronDown, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { products } from '@/lib/products';

export default function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const productCategories = Array.from(new Set(products.map(p => p.roast))).sort();

  return (
    <header className="py-3 px-4 md:py-4 md:px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="text-lg md:text-xl font-bold font-headline text-primary">ArtisanLane</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors focus-visible:ring-0 focus-visible:ring-offset-0">
                Products
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem key="all" asChild>
                <Link href="/products">All Products</Link>
              </DropdownMenuItem>
              {productCategories.map(category => (
                <DropdownMenuItem key={category} asChild>
                  <Link href="/products">{category} Roast</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/recommend" className="hover:text-primary transition-colors">AI Recommender</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {wishlist.length}
                </span>
              )}
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            <Link 
              href="/" 
              className="px-4 py-3 rounded-lg hover:bg-muted text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="px-4 py-3 rounded-lg hover:bg-muted text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Products
            </Link>
            {productCategories.map(category => (
              <Link 
                key={category}
                href="/products" 
                className="px-4 py-3 rounded-lg hover:bg-muted text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category} Roast
              </Link>
            ))}
            <Link 
              href="/recommend" 
              className="px-4 py-3 rounded-lg hover:bg-muted text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Recommender
            </Link>
            <Link 
              href="/account" 
              className="px-4 py-3 rounded-lg hover:bg-muted text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
