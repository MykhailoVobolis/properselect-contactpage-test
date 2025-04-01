'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import css from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) return null;

  return (
    <div className="container">
      <nav className={css.breadcrumbsNav} aria-label="breadcrumb">
        <ol className={css.breadcrumbs}>
          <li>
            <Link href="/">Home</Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;

            const formattedSegment =
              segment.charAt(0).toUpperCase() + segment.slice(1);

            return (
              <li key={href}>
                {isLast ? (
                  formattedSegment
                ) : (
                  <Link href={href}>{decodeURIComponent(segment)}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
