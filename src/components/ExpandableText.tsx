import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  length: number;
  className: string;
}

const ExpandableText = ({ children, length, className }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p className={className}>
      {isExpanded
        ? children
        : children && children.toString().length > length
        ? `${children?.toString().slice(0, length)}...`
        : `${children?.toString().slice(0, length)}`}
      <span
        onClick={toggleText}
        className="ml-1 cursor-pointer hover:underline text-vermicelles"
      >
        {children && children.toString().length > length
          ? isExpanded
            ? "Show less"
            : "Show more"
          : ""}
      </span>
    </p>
  );
};

export default ExpandableText;
