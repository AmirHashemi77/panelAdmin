import type { FC } from "react";
import Card from "../../../Common/Card";
import { toPersianNumber } from "../../../../utils/ToPersionDigits";
import { IoMdNotifications } from "react-icons/io";

// interface PropsType {}

const NotificationSection: FC = () => {
  return (
    <Card>
      <div className="w-full flex flex-col items-start gap-5">
        <h5 className="text-card-foreground text-2xl font-bold">اعلان ها</h5>

        <ul className="flex flex-col w-full items-center">
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-2">
            <div className="flex items-center gap-5">
              <span className="h-7 w-7 rounded-full flex items-center justify-center bg-blue2 ">
                <IoMdNotifications className="text-lg text-blue" />
              </span>
              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">نظر جدید اضافه شده</p>
                <p className="text-card-foreground text-xs font-medium opacity-40">همین حالا</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber(20)}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-2">
            <div className="flex items-center gap-5">
              <span className="h-7 w-7 rounded-full flex items-center justify-center bg-blue2 ">
                <IoMdNotifications className="text-lg text-blue" />
              </span>
              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">نظر جدید اضافه شده</p>
                <p className="text-card-foreground text-xs font-medium opacity-40">همین حالا</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber(20)}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-2">
            <div className="flex items-center gap-5">
              <span className="h-7 w-7 rounded-full flex items-center justify-center bg-blue2 ">
                <IoMdNotifications className="text-lg text-blue" />
              </span>
              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">نظر جدید اضافه شده</p>
                <p className="text-card-foreground text-xs font-medium opacity-40">همین حالا</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber(20)}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-2">
            <div className="flex items-center gap-5">
              <span className="h-7 w-7 rounded-full flex items-center justify-center bg-blue2 ">
                <IoMdNotifications className="text-lg text-blue" />
              </span>
              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">نظر جدید اضافه شده</p>
                <p className="text-card-foreground text-xs font-medium opacity-40">همین حالا</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber(20)}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-2">
            <div className="flex items-center gap-5">
              <span className="h-7 w-7 rounded-full flex items-center justify-center bg-blue2 ">
                <IoMdNotifications className="text-lg text-blue" />
              </span>
              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">نظر جدید اضافه شده</p>
                <p className="text-card-foreground text-xs font-medium opacity-40">همین حالا</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber(20)}</p>
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default NotificationSection;
