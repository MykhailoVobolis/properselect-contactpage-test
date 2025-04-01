'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import css from './NavigationList.module.css';

export default function NavigationList() {
  const pathname = usePathname();

  return (
    <ul className={css.navMenu}>
      <li>
        <Link href="/" className={pathname === '/' ? css.active : ''}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/">Countries</Link>
      </li>
      <li>
        <Link href="/">Advertising</Link>
      </li>
      <li>
        <Link href="/">Calculators</Link>
      </li>
      <li>
        <Link href="/">News & Articles</Link>
      </li>
      <li>
        <Link href="/">Market analys</Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={pathname === '/contact' ? css.active : ''}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
