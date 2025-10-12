import type { FC } from "react";

const SideBar: FC = () => {
  return (
    <div className="fixed top-0 right-0 w-1/6 bg-card h-screen p-4 border-l-2 border-l-blue">
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-3 w-full">
          <img src="/image/download.jpg" alt="profil" className="w-10 h-10 rounded-full object-fill object-center" />
          <p className="text-card-foreground font-bold">مرضیه خمسه</p>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
