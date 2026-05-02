'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Trash2, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-3 md:px-6 py-8 md:py-12">
      <div className="mb-6 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-headline font-bold flex items-center gap-2 md:gap-3">
          <ShoppingCart className="h-6 md:h-10 w-6 md:w-10 text-primary" /> Your Shopping Cart
        </h1>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-12 md:py-20">
          <p className="text-lg md:text-2xl text-muted-foreground mb-4">Your cart is empty.</p>
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            {cart.map((item) => (
              <Card key={item.id} className="flex flex-col sm:flex-row items-center p-3 md:p-4 shadow-sm gap-3 md:gap-4">
                <Image
                  src={item.imageUrls[0]}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover w-20 h-20 md:w-24 md:h-24"
                  data-ai-hint={item.dataAiHint}
                />
                <div className="flex-grow text-center sm:text-left w-full">
                  <h2 className="font-bold text-base md:text-lg">{item.name}</h2>
                  <p className="text-sm md:text-base text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                    className="w-12 md:w-16 text-center"
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-4 md:h-5 w-4 md:w-5 text-destructive" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="md:col-span-1 order-first md:order-last">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="flex justify-between text-sm md:text-base">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-base md:text-lg border-t pt-3 md:pt-4">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-3 md:mt-4" size="lg">Proceed to Checkout</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
