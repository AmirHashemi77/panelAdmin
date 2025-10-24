import type { FC } from "react";
import NotificationSection from "./NotificationSection";
import LastArticle from "./LastArticle";

const LeftSideBar: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-1/5 bg-transparent h-screen p-4 border-r-2 border-r-blue shadow-2xl">
      <div className="flex flex-col items-center gap-5 overflow-auto">
        <NotificationSection />
        <LastArticle />
      </div>
    </div>
  );
};
export default LeftSideBar;
