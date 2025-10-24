import type { FC } from "react";
import { FcSearch } from "react-icons/fc";
import { MdPerson } from "react-icons/md";
import { TbBrandOpenai } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className="w-3/5 mx-auto p-10">
      <div className="flex items-center justify-between w-full gap-5">
        <h1 className="text-2xl font-vazir font-bold ">داشبورد</h1>
        <div className="flex items-center gap-2 flex-1 bg-card px-2 py-3 rounded-2xl relative">
          <FcSearch />
          <input type="text" placeholder="جستجو ..." className="h-full flex-1 bg-transparent border-0 outline-0 focus:outline-0 focus:border-0" />
        </div>
        <div className="flex items-center gap-2">
          <a href="https://chatgpt.com/" target="_blank" className="bg-card-foreground/20 border border-card-foreground p-2 rounded-lg relative group">
            <TbBrandOpenai className="text-card-foreground text-2xl" />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-full right-1/2 translate-x-1/2 bg-card text-card-foreground text-center text-xs p-2 rounded-xl text-nowrap font-vazir">
              ChatGPT
            </div>
          </a>
          <Link to="/" className="bg-card-foreground/20 border border-card-foreground p-2 rounded-lg relative group">
            <MdPerson className="text-card-foreground text-2xl" />
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-full right-1/2 translate-x-1/2 bg-card text-card-foreground text-center text-xs p-2 rounded-xl text-nowrap font-vazir">
              صفحه مدیر
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
