import type { FC } from "react";
import Card from "../../../Common/Card";
import { toPersianNumber } from "../../../../utils/ToPersionDigits";

// interface PropsType {}

const LastArticle: FC = () => {
  return (
    <Card>
      <div className="w-full flex flex-col items-start gap-5">
        <h5 className="text-card-foreground text-2xl font-bold">آخرین مقالات</h5>

        <ul className="flex flex-col w-full items-center">
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-3">
            <div className="flex items-center gap-5">
              <img src="/image/ChatGPT Image Aug 15, 2025, 03_19_41 PM.png" className="h-7 w-7 rounded-full object-cover object-center" />

              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">روش های کنترل استرس</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber("1404/5/20")}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-3">
            <div className="flex items-center gap-5">
              <img src="/image/ChatGPT Image Aug 15, 2025, 03_19_41 PM.png" className="h-7 w-7 rounded-full object-cover object-center" />

              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">روش های کنترل استرس</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber("1404/5/20")}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-3">
            <div className="flex items-center gap-5">
              <img src="/image/ChatGPT Image Aug 15, 2025, 03_19_41 PM.png" className="h-7 w-7 rounded-full object-cover object-center" />

              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">روش های کنترل استرس</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber("1404/5/20")}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-3">
            <div className="flex items-center gap-5">
              <img src="/image/ChatGPT Image Aug 15, 2025, 03_19_41 PM.png" className="h-7 w-7 rounded-full object-cover object-center" />

              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">روش های کنترل استرس</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber("1404/5/20")}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-3">
            <div className="flex items-center gap-5">
              <img src="/image/ChatGPT Image Aug 15, 2025, 03_19_41 PM.png" className="h-7 w-7 rounded-full object-cover object-center" />

              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">روش های کنترل استرس</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber("1404/5/20")}</p>
          </li>
          <li className="flex items-center justify-between w-full border-b border-b-white/25 py-3">
            <div className="flex items-center gap-5">
              <img src="/image/ChatGPT Image Aug 15, 2025, 03_19_41 PM.png" className="h-7 w-7 rounded-full object-cover object-center" />

              <div className="flex flex-col items-start gap-1">
                <p className="text-card-foreground text-xs font-medium">روش های کنترل استرس</p>
              </div>
            </div>
            <p className="text-card-foreground text-xs font-medium opacity-40">{toPersianNumber("1404/5/20")}</p>
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default LastArticle;
