'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link> {pathName === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href='/about-us'>About Us</Link>{' '}
          {pathName === '/about-us' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}
