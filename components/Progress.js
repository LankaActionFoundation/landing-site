import React from "react";

const Progress = ({ percentage }) => {
  return (
    <div className="progressCont w-full relative h-4 rounded-full bg-brandGreenLight/20 p-[3px] overflow-hidden">
      {/* <div className="absolute w-full flex items-center justify-center inset-0 z-20 text-gray-900 text-xs font-bold">
        {percentage}%
      </div> */}
      <div
        style={{ width: `${percentage}%` }}
        className="h-full bg-brandGreenLight rounded-full"
      ></div>
    </div>
  );
};

export default Progress;
