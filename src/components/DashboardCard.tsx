import React from "react";

function DashboardCard({
  title,
  subTitle,
  value,
  color,
}: {
  title: string;
  subTitle: string;
  value: number;
  color: string;
}) {
  return (
    <div
      className={`flex flex-col gap-2 bg-${color}-400   p-5 rounded-lg text-white`}
    >
      <div className="font-bold text-xl">{title}</div>
      <div className="flex">
        <div>{subTitle}: </div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default DashboardCard;
