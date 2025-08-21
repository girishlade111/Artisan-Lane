import Link from 'next/link';
import { Coffee, Instagram, Linkedin, Github, Codepen, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { href: "https://www.instagram.com/girish_lade_/", icon: Instagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/girish-lade-075bba201/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/girishlade111", icon: Github, label: "GitHub" },
    { href: "https://codepen.io/Girish-Lade-the-looper", icon: Codepen, label: "Codepen" },
    { href: "mailto:girishlade111@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
                <Coffee className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold font-headline text-primary">ArtisanLane</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
                Discover your perfect coffee, from the world's best artisans to your cup.
            </p>
          </div>
          <div className="md:col-span-2">
             <h3 className="font-semibold mb-4 font-headline text-foreground">Explore</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
              <Link href="/recommend" className="text-muted-foreground hover:text-primary transition-colors">AI Recommender</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            </nav>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 font-headline text-foreground">Support</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            </nav>
          </div>
           <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 font-headline text-foreground">Legal</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            </nav>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ArtisanLane. All rights reserved.</p>
            <div className="flex gap-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
             </div>
        </div>
      </div>
    </footer>
  );
}
