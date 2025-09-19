import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const DiyaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
      <path
        fill="currentColor"
        d="M512 896a415.49 415.49 0 0 1-209.34-58.88a8 8 0 0 1 3.52-15.04c139.46-39.42 273.7-39.42 413.12 0a8 8 0 0 1 3.52 15.04A415.49 415.49 0 0 1 512 896M208 704h608a32 32 0 1 0 0-64H208a32 32 0 1 0 0 64m318.53 96.54a111.49 111.49 0 0 1-29.06-21.82C494.2 775.45 491.55 768 480 768s-14.2 7.45-17.47 10.72a111.49 111.49 0 0 1-29.06 21.82C394 816.58 368 794.62 368 752c0-70.4 57.6-128 128-128h32c70.4 0 128 57.6 128 128c0 42.62-26 64.58-65.47 48.54M512 512c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88s-39.4 88-88 88m0-240c-35.35 0-64 28.65-64 64s28.65 64 64 64s64-28.65 64-64s-28.65-64-64-64m-40-72a32 32 0 1 1-64 0a32 32 0 1 1 64 0m144-64a32 32 0 1 1-64 0a32 32 0 1 1 64 0M328 128a32 32 0 1 1-64 0a32 32 0 1 1 64 0"
      ></path>
    </svg>
);


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <DiyaIcon className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">SweetSpot</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SweetSpot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}