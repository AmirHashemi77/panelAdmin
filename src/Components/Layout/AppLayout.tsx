import { type FC, type ReactNode } from "react";
import SideBar from "./SideBar/SideBar";
import LeftSideBar from "./SideBar/LeftSideBar/LeftSideBar";

interface IProps {
  children: ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="w-full relative">
      <SideBar />
      <LeftSideBar />
      {children}
    </div>
  );
};
export default AppLayout;
