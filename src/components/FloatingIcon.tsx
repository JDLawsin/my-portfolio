import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  position: keyof typeof positioning;
}

const positioning = {
  "top-left": "left-0 top-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

const FloatingIcon = ({ children, position = "top-left" }: Props) => (
  <div
    className={`absolute rounded-full bg-grayish-blue flex items-center justify-center mx-2 my-2 ${positioning[position]}`}
  >
    {children}
  </div>
);

export default FloatingIcon;
