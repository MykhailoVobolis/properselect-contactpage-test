import NavigationList from '../NavigationList/NavigationList';
import Logo from '../Logo/Logo';
import BurgerButton from '../BurgerButton/BurgerButton';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className="container">
      <nav className={css.navigation}>
        <Logo />
        <div className={css.navigationWrapper}>
          <NavigationList />
        </div>
        <div className={css.burgerWrapper}>
          <BurgerButton />
        </div>
      </nav>
    </div>
  );
}
