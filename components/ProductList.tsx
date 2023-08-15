import { NoResult } from '@/components/ui/NoResult';
import { ProductCard } from '@/components/ui/ProductCard';
import { Product } from '@/types';

import React, { FC } from 'react';

interface ProductListProps {
  items: Product[];
  title: string;
}

export const ProductList: FC<ProductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
