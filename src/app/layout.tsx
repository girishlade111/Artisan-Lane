import type { Metadata } from 'next';
import { Literata } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';

export const metadata: Metadata = {
  title: 'ArtisanLane',
  description: 'Curated artisanal coffee subscriptions.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

const literata = Literata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-literata',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${literata.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-body antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <WishlistProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </WishlistProvider>
        <Toaster />
      </body>
    </html>
  );
}
