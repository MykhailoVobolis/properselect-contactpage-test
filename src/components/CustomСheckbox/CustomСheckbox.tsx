'use client';

import { useField } from 'formik';
import css from './CustomСheckbox.module.css';

export default function CustomСheckbox() {
  const [field] = useField({ name: 'agree', type: 'checkbox' });

  return (
    <div className={css.checkboxContainer}>
      <label className={css.checkboxLabel}>
        <input type="checkbox" {...field} className={css.hiddenCheckbox} />
        <span className={css.customCheckbox}></span>
        <span>
          I have read and agree to Proper Select{' '}
          <a className={css.checkboxLink} href="/terms">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className={css.checkboxLink} href="/privacy-policy">
            Privacy Policy
          </a>
        </span>
      </label>
    </div>
  );
}
