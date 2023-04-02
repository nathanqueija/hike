import Image from 'next/image';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export const Logo = () => {
  return (
    <UnstyledLink href='/'>
      <div className='flex gap-4'>
        <Image
          src='/images/logo/pin_transparent.png'
          alt='Hike | Rise above the clouds'
          width={50}
          height={30}
        />
        <div className='flex flex-col justify-center align-middle'>
          <span className='font-anton text-4xl tracking-[12px]'>HIKE</span>
          <span className='text-xs tracking-tight'>RISE ABOVE THE CLOUDS</span>
        </div>
      </div>
    </UnstyledLink>
  );
};

export const LogoHorizontal = () => {
  return (
    <UnstyledLink href='/'>
      <div className='flex gap-4'>
        <Image
          src='/images/logo/pin_transparent.png'
          alt='Hike | Rise above the clouds'
          width={50}
          height={30}
        />
        <div className='flex flex-col justify-center align-middle'>
          <span className='font-anton text-4xl tracking-[12px]'>HIKE</span>
          <span className='text-xs tracking-tight'>RISE ABOVE THE CLOUDS</span>
        </div>
      </div>
    </UnstyledLink>
  );
};
