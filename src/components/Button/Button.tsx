'use client';

import SvgIcon from '../SvgIcon';

import css from './Button.module.css';

export default function Button() {
  return (
    <button type="submit" className={css.formButton}>
      Submit
      <SvgIcon
        className={css.iconButton}
        name={'icon-send'}
        width={24}
        height={24}
      />
    </button>
  );
}
