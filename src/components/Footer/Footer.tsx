import Logo from '../Logo/Logo';

import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className="container">
        <Logo />
        <h2 className={css.footerTitle}>
          Your trusted partner for expert global real estate Insights!
        </h2>
        <p className={css.descriptionFooter}>
          © Copyright 2025 Proper Select. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
