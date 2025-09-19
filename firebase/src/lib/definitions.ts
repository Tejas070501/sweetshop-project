export type Sweet = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Milk-Based' | 'Flour-Based' | 'Nut-Based' | 'Frozen';
  imageUrl: string;
  imageHint: string;
  stock: number;
  isSpecial: boolean;
};

export type OrderItem = {
  sweetId: string;
  name: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  items: OrderItem[];
  total: number;
  date: string;
};

export type CartItem = {
  id: string;
  name:string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export type CartContextType = {
  items: CartItem[];
  addItem: (item: Sweet, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};
