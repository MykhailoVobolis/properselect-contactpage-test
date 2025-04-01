import Link from 'next/link';
import NavigationList from '../NavigationList/NavigationList';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className="container">
      <nav className={css.navigation}>
        <Link className={css.mainLogo} href="/">
          <span className={css.accent}>proper</span>select
        </Link>
        <NavigationList />
      </nav>
    </div>
  );
}
