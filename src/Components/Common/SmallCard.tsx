import type { FC, ReactNode } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface PropsType {
  icon?: ReactNode;
  title: string;
  value: string;
  valueChange?: string;
  valueChangeType?: "increase" | "decrease";
  date: string;
  className?: string;
}

const SmallCard: FC<PropsType> = ({ className, icon, title, value, valueChange, valueChangeType, date }) => {
  return (
    <div className={`bg-card p-3 rounded-2xl ${className} `}>
      <div className="flex flex-col items-start w-full gap-2">
        <div className="flex items-center gap-2">
          {icon && icon}
          <h5 className="text-card-foreground font-medium font-vazir text-lg text-nowrap">{title}</h5>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-2xl font-semibold font-vazir">{value}</h4>
          <div className="flex items-center gap-2">
            {valueChangeType === "decrease" && <TiArrowSortedDown className="text-red text-xs" />}
            {valueChangeType === "increase" && <TiArrowSortedUp className="text-green text-xs" />}
            <p className={`text-xs ${valueChangeType === "increase" ? "text-green" : "text-red"} font-vazir`}>{valueChange}</p>
          </div>
        </div>
        <p className="text-xs text-card-foreground opacity-50 font-vazir">{date}</p>
      </div>
    </div>
  );
};
export default SmallCard;
