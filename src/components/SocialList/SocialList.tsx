import SocialItem from '../SocialItem/SocialItem';

import css from './SocialList.module.css';

interface SocialItems {
  iconName: string;
  text: string;
}

const socialData: SocialItems[] = [
  { iconName: 'icon-Instagram', text: 'Instagram' },
  { iconName: 'icon-facebook', text: 'FaceBook' },
  { iconName: 'icon-linkedIn', text: 'LinkedIn' },
  { iconName: 'icon-twitter', text: 'Twitter' },
  { iconName: 'icon-cursor', text: 'Subscribe us!' },
];

export default function SocialList() {
  return (
    <ul className={css.socialListGroup}>
      {socialData.map(({ iconName, text }) => (
        <li key={iconName} className={css.socialItem}>
          <SocialItem iconName={iconName} text={text} />
        </li>
      ))}
    </ul>
  );
}
