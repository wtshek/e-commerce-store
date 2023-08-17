import { cn } from '@/lib/utils';
import { Image as ImageType } from '@/types';

import Image from 'next/image';
import React, { FC } from 'react';

import { Tab } from '@headlessui/react';

interface GalleryTab {
  image: ImageType;
}

export const GalleryTab: FC<GalleryTab> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};
