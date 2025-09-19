'use client';

import Link from 'next/link';
import { GalleryHorizontal, Home, Mail, Shield, ShoppingCart, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/cart-context';
import { CartSheet } from '../cart/cart-sheet';

const DiyaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
      <path
        fill="currentColor"
        d="M512 896a415.49 415.49 0 0 1-209.34-58.88a8 8 0 0 1 3.52-15.04c139.46-39.42 273.7-39.42 413.12 0a8 8 0 0 1 3.52 15.04A415.49 415.49 0 0 1 512 896M208 704h608a32 32 0 1 0 0-64H208a32 32 0 1 0 0 64m318.53 96.54a111.49 111.49 0 0 1-29.06-21.82C494.2 775.45 491.55 768 480 768s-14.2 7.45-17.47 10.72a111.49 111.49 0 0 1-29.06 21.82C394 816.58 368 794.62 368 752c0-70.4 57.6-128 128-128h32c70.4 0 128 57.6 128 128c0 42.62-26 64.58-65.47 48.54M512 512c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88s-39.4 88-88 88m0-240c-35.35 0-64 28.65-64 64s28.65 64 64 64s64-28.65 64-64s-28.65-64-64-64m-40-72a32 32 0 1 1-64 0a32 32 0 1 1 64 0m144-64a32 32 0 1 1-64 0a32 32 0 1 1 64 0M328 128a32 32 0 1 1-64 0a32 32 0 1 1 64 0"
      ></path>
    </svg>
);


const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/admin', label: 'Admin', icon: Shield },
];

export function Header() {
  const { totalItems } = useCart();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <DiyaIcon className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline text-lg">SweetSpot</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">
              <UserPlus className="mr-2" /> Register
            </Link>
          </Button>
          <CartSheet>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </CartSheet>
        </div>
      </div>
    </header>
  );
}