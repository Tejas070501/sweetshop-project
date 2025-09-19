'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Sweet } from '@/lib/definitions';
import { formatCurrency } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { useToast } from '@/hooks/use-toast';

interface SweetCardProps {
  sweet: Sweet;
}

export function SweetCard({ sweet }: SweetCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addItem(sweet);
    toast({
      title: "Added to cart!",
      description: `1 x ${sweet.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={sweet.imageUrl}
            alt={sweet.name}
            data-ai-hint={sweet.imageHint}
            fill
            className="object-cover"
          />
          {sweet.isSpecial && <Badge className="absolute right-2 top-2">Special</Badge>}
           {sweet.stock === 0 && <Badge variant="destructive" className="absolute left-2 top-2">Sold Out</Badge>}
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="font-headline text-2xl">{sweet.name}</CardTitle>
        <CardDescription className="mt-2 text-base">{sweet.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-6 pt-0">
        <p className="text-xl font-bold text-primary">{formatCurrency(sweet.price)}</p>
        <Button onClick={handleAddToCart} disabled={sweet.stock === 0}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Purchase
        </Button>
      </CardFooter>
    </Card>
  );
}
