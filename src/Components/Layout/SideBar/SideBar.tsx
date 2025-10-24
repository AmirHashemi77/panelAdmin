import type { FC } from "react";
import { FaCommentAlt, FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard, MdOutlineNoteAdd } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";

const SideBar: FC = () => {
  return (
    <div className="fixed top-0 right-0 w-1/5 bg-card h-screen p-4 border-l-2 border-l-blue shadow-2xl">
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-3 w-full">
          <img src="/image/profile.png" alt="profil" className="w-10 h-10 rounded-full object-fill object-center" />
          <p className="text-card-foreground font-bold">مرضیه خمسه</p>
        </div>
        <ul className="flex flex-col items-center gap-5 self-start w-full">
          <li className="flex items-center gap-3 bg-secondary  rounded-2xl px-4 py-2 w-full ">
            <MdDashboard className="text-secondary-foreground text-2xl" />
            <span className="text-secondary-foreground text-center ">داشبورد</span>
          </li>
          <li className="flex items-center gap-3   rounded-2xl px-4 py-2 w-full ">
            <RiArticleFill className="text-secondary-foreground text-2xl" />
            <span className="text-secondary-foreground text-center ">مقالات</span>
          </li>
          <li className="flex items-center gap-3   rounded-2xl px-4 py-2 w-full ">
            <FaUsers className="text-secondary-foreground text-2xl" />
            <span className="text-secondary-foreground text-center ">کاربران</span>
          </li>
          <li className="flex items-center gap-3   rounded-2xl px-4 py-2 w-full ">
            <MdOutlineNoteAdd className="text-secondary-foreground text-2xl" />
            <span className="text-secondary-foreground text-center ">اضافه کردن مقاله</span>
          </li>
          <li className="flex items-center gap-3   rounded-2xl px-4 py-2 w-full ">
            <FaCommentAlt className="text-secondary-foreground text-2xl" />
            <span className="text-secondary-foreground text-center ">مدیریت نظرات</span>
          </li>
          <li className="flex items-center gap-3   rounded-2xl px-4 py-2 w-full ">
            <IoSettingsSharp className="text-secondary-foreground text-2xl" />
            <span className="text-secondary-foreground text-center ">تنظیمات</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
