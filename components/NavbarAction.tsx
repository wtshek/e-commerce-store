'use client';

import { Button } from '@/components/ui/Button';
import useCart from '@/hooks/useCart';

import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const route = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const onShoppingBagClick = () => {
    route.push('/cart');
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={onShoppingBagClick}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
