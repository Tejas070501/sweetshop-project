import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We&apos;d love to hear from you! Visit us or drop us a line.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-headline text-3xl font-semibold mb-6">Our Location</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">SweetSpot Bakery</h3>
                  <p>17, Balewadi Highstreet</p>
                  <p>Pune</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Opening Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-3xl font-semibold mb-6">Contact Us</h2>
            <div className="space-y-4 text-muted-foreground">
               <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                   <a href="mailto:hello@sweetspot.com" className="hover:text-primary transition-colors">hello@sweetspot.com</a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
