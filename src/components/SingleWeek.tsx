import React from "react";

type Props = {
  week: number;
  totalWeeks: number;
};

export default function SingleWeek({ week, totalWeeks }: Props) {
  return (
    <div
      className={`w-3 h-3 text-xs border border-gray-700 bg[#2d333b] ${
        week < totalWeeks && "bg-red-400/60 border-0"
      }`}
    ></div>
  );
}
