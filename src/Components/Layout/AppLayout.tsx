import { type FC, type ReactNode } from "react";
import SideBar from "./SideBar/SideBar";
import LeftSideBar from "./SideBar/LeftSideBar/LeftSideBar";
import Header from "./Header/Header";

interface IProps {
  children: ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <div className="w-full relative">
      <SideBar />
      <LeftSideBar />
      <Header />
      <div className="w-3/5 mx-auto px-10 py-2">{children}</div>
    </div>
  );
};
export default AppLayout;
