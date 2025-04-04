import NavigationList from '../NavigationList/NavigationList';
import Logo from '../Logo/Logo';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className="container">
      <nav className={css.navigation}>
        <Logo />
        <NavigationList />
      </nav>
    </div>
  );
}
