import SvgIcon from '../SvgIcon';

import css from './BurgerButton.module.css';

export default function BurgerButton() {
  return (
    <button>
      <SvgIcon
        className={css.burgerIcon}
        name={'icon-burger'}
        width={24}
        height={24}
      />
    </button>
  );
}
