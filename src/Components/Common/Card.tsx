import type { FC, ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  className?: string;
}

const Card: FC<PropsType> = ({ children, className }) => {
  return <div className={`bg-card rounded-2xl p-4 shadow-xl w-full ${className}`}>{children}</div>;
};
export default Card;
