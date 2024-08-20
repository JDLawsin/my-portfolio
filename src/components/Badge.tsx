interface Props {
  text: string;
}

const Badge = ({ text }: Props) => (
  <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-500 ring-2 ring-inset ring-vermicelles">
    {text}
  </span>
);

export default Badge;
