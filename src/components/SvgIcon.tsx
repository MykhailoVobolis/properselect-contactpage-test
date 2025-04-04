interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export default function SvgIcon({ name, ...props }: SvgIconProps) {
  return (
    <svg {...props} aria-hidden="true">
      <use xlinkHref={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
