import Link from 'next/link';

import css from './Logo.module.css';

export default function Logo() {
  return (
    <Link className={css.mainLogo} href="/">
      <span className={css.accent}>proper</span>select
    </Link>
  );
}
