import { getCategories } from '@/actions/getCategories';
import { MainNav } from '@/components/MainNav';
import { NavbarAction } from '@/components/NavbarAction';
import { Container } from '@/components/ui/Container';

import Link from 'next/link';
import React from 'react';

export const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};
