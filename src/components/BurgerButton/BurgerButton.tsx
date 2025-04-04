import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';

import css from './BurgerButton.module.css';

export default function BurgerButton() {
  return (
    <Link className={css.burgerBtn} href="/contact">
      <RxHamburgerMenu size={24} />
    </Link>
  );
}
