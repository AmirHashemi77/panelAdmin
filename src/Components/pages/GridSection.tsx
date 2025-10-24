import type { FC, ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const GridSection: FC<PropsType> = ({ children }) => {
  return <div className="w-full grid grid-cols-12 grid-rows-12 gap-4">{children}</div>;
};
export default GridSection;
