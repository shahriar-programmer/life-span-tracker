import React from "react";
import WeekBox from "./WeekBox";

type Props = {
  totalWeeks: number;
};

export default function ProgressDiv({ totalWeeks }: Props) {
  return (
    <div className="flex flex-col items-center">
      <p className="p-2">Age ( 0 - 72 )</p>
      <div className="flex items-center justify-center">
        <p className="p-2 -scale-100" style={{ writingMode: "vertical-rl" }}>
          Weeks
        </p>
        <WeekBox totalWeeks={totalWeeks} />
      </div>
    </div>
  );
}
