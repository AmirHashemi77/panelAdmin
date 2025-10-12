import { type FC, type ReactNode } from "react";
import SideBar from "./SideBar/SideBar";

interface IProps {
  children: ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="w-full relative">
      <SideBar />
      {children}
    </div>
  );
};
export default AppLayout;
