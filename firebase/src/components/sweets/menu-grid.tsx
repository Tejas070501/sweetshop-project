'use client';

import { useState, useMemo } from 'react';
import type { Sweet } from '@/lib/definitions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SweetCard } from './sweet-card';
import { Candy, Cake, Wheat, IceCream } from 'lucide-react';

const WrappedSweetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.2 7.8l-7.4-7.4c-.8-.8-2-.8-2.8 0L2.2 8.2c-.8.8-.8 2 0 2.8l7.4 7.4c.8.8 2 .8 2.8 0l7.8-7.8c.8-.8.8-2 0-2.8M10 14L14 10"
      ></path>
    </svg>
);


interface MenuGridProps {
  sweets: Sweet[];
}

const categories = ['All', 'Milk-Based', 'Flour-Based', 'Nut-Based', 'Frozen'] as const;
type Category = typeof categories[number];

const categoryIcons: { [key in Category]: React.ComponentType<{ className?: string }> } = {
  'All': Candy,
  'Milk-Based': Cake,
  'Flour-Based': Wheat,
  'Nut-Based': () => <WrappedSweetIcon className="h-4 w-4" />,
  'Frozen': IceCream
}

export function MenuGrid({ sweets }: MenuGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredSweets = useMemo(() => {
    return sweets.filter((sweet) => {
      const matchesCategory = activeCategory === 'All' || sweet.category === activeCategory;
      const matchesSearch = sweet.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            sweet.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [sweets, searchTerm, activeCategory]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <Input
          placeholder="Search for a sweet treat..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return(
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
              >
                <Icon className="mr-2 h-4 w-4"/>
                {category}
              </Button>
            )
          })}
        </div>
      </div>
      {filteredSweets.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSweets.map((sweet) => (
            <SweetCard key={sweet.id} sweet={sweet} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/30 py-24 text-center">
            <h3 className="font-headline text-2xl font-semibold">No Treats Found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
