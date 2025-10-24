import type { FC, ReactNode } from "react";
import GridSection from "../Components/pages/GridSection";
import SmallCard from "../Components/Common/SmallCard";
import { IoEye } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import Card from "../Components/Common/Card";

const cardData: {
  icon: ReactNode;
  title: string;
  value: string;
  valueChange: string;
  valueChangeType: "increase" | "decrease";
  date: string;
  className: string;
}[] = [
  {
    icon: (
      <div className="flex items-center justify-center bg-orange/30 p-2 rounded-lg">
        <IoEye className="text-sm text-orange" />
      </div>
    ),
    title: "بازدید هفتگی",
    value: "1350",
    valueChange: "20",
    valueChangeType: "increase",
    date: "۱۶ روز پیش",
    className: "col-span-3 row-span-3",
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-green/30 p-2 rounded-lg">
        <FaComment className="text-sm text-green" />
      </div>
    ),
    title: "کامنت ها",
    value: "134",
    valueChange: "2",
    valueChangeType: "increase",
    date: "2 روز پیش",
    className: "col-span-3 row-span-3",
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-blue/30 p-2 rounded-lg">
        <GrArticle className="text-sm text-blue" />
      </div>
    ),
    title: "مقالات اضافه شده",
    value: "1350",
    valueChange: "20",
    valueChangeType: "increase",
    date: "۱۶ روز پیش",
    className: "col-span-3 row-span-3",
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-yellow/30 p-2 rounded-lg">
        <IoEye className="text-sm text-yellow" />
      </div>
    ),
    title: "بازدید هفتگی",
    value: "876",
    valueChange: "10",
    valueChangeType: "decrease",
    date: "۱۶ روز پیش",
    className: "col-span-3 row-span-3",
  },
];

const Home: FC = () => {
  return (
    <div className="flex items-center gap-5 w-full">
      <GridSection>
        {cardData.map((item) => {
          return <SmallCard date={item.date} title={item.title} value={item.value} className={item.className} icon={item.icon} valueChange={item.valueChange} valueChangeType={item.valueChangeType} />;
        })}
        <Card className="col-span-8 row-span-9">a</Card>
        <Card className="col-span-2 row-span-3">b</Card>
        <Card className="col-span-2 row-span-3">c</Card>
        <Card className="col-span-4 row-span-6">d</Card>
      </GridSection>
    </div>
  );
};
export default Home;
