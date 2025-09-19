'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { useCart } from '@/contexts/cart-context';
import { Button } from '../ui/button';
import { formatCurrency } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';
import { CartItemCard } from './cart-item-card';

export function CartSheet({ children }: { children: React.ReactNode }) {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className='font-headline text-2xl'>Your Cart ({totalItems})</SheetTitle>
          <SheetDescription>
            Review your items and proceed to checkout when you're ready.
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 pr-4">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <CartItemCard key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>
            <Separator className="my-4" />
            <SheetFooter className="sm:flex-col sm:gap-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className='font-body'>{formatCurrency(totalPrice)}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
                    <SheetClose asChild>
                        <Button>Place Order</Button>
                    </SheetClose>
                </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
            <h3 className="font-headline text-xl font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground">Add some sweet treats to get started!</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
