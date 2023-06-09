import React from "react";
import SingleWeek from "./SingleWeek";

type Props = {
  totalWeeks: number;
};

export default function WeekBox({ totalWeeks }: Props) {
  return (
      <div className="grid grid-flow-col gap-1 overflow-scroll lg:overflow-hidden grid-rows-52">
        {Array.from(Array(52 * 72).keys()).map((week) => (
          <SingleWeek week={week} totalWeeks={totalWeeks} key={week} />
        ))}
      </div>
  );
}
