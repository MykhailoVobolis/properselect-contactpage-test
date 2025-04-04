import Link from 'next/link';
import SvgIcon from '../SvgIcon';

import css from './SocialItem.module.css';

interface SocialItemProps {
  iconName: string;
  text: string;
}

export default function SocialItem({ iconName, text }: SocialItemProps) {
  return (
    <Link
      className={css.socialLinkWrapper}
      href="https://monoestate.com/home"
      aria-label={`Go to ${text}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SvgIcon
        className={css.socialIcon}
        name={iconName}
        width={24}
        height={24}
      />
      <span className={css.itemName}>{text}</span>
    </Link>
  );
}
