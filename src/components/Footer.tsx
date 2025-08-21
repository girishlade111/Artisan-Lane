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
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-8 text-center md:text-left md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
                <Coffee className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold font-headline text-primary">ArtisanLane</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
                Discover your perfect coffee, from the world's best artisans to your cup.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4 font-headline">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-semibold mb-4 font-headline">Follow Us</h3>
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
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
             </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ArtisanLane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
