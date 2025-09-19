'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { X } from 'lucide-react';
import type { CartItem } from '@/lib/definitions';
import { formatCurrency } from '@/lib/utils';
import { useCart } from '@/contexts/cart-context';

interface CartItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <div className="flex items-start gap-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-muted-foreground">{formatCurrency(item.price)}</p>
        <div className="mt-2 flex items-center">
          <Input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value, 10))}
            className="h-8 w-16"
          />
        </div>
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeItem(item.id)}>
        <X className="h-4 w-4" />
        <span className="sr-only">Remove item</span>
      </Button>
    </div>
  );
}
