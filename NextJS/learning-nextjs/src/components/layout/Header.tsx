import {useTheme} from 'next-themes'
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import  Logo  from '../../../public/svg/Logo.svg'

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  const {theme, setTheme} = useTheme()
  return (
    <header className='sticky top-0 z-50 dark:#383838 light:#fafafa'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Learning Next.js
        </UnstyledLink>
        <Logo width='5rem' height='5rem'/>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className=" py-2 rounded-md text-sm"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >Toggle to {theme === 'dark' ? 'light' : 'dark'}
        </button>
      </div>
    </header>
  );
}
