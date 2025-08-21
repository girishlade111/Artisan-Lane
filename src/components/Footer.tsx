import Link from 'next/link';
import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold font-headline text-primary">ArtisanLane</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ArtisanLane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
