import type { FC, ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const Card: FC<PropsType> = ({ children }) => {
  return <div className="bg-card rounded-2xl p-4 shadow-xl w-full">{children}</div>;
};
export default Card;
