import { getBillboard } from '@/actions/getBillboard';
import { getProducts } from '@/actions/getProducts';
import { Billboard } from '@/components/Billboard';
import { ProductList } from '@/components/ProductList';
import { Container } from '@/components/ui/Container';

import React from 'react';

export const revalidate = 0;

export const Page = async () => {
  const billboard = await getBillboard('64d69e5a78c9483a05c03d67');
  const products = await getProducts({
    isFeatured: true,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
