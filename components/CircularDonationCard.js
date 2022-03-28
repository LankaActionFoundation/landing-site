import React from "react";
import Progress from "./Progress";
import Link from "next/link";
import FilledButton from "./buttons/FilledButton";

const calcPercentage = (amount, goal) => {
  return Math.floor((amount * 100) / goal);
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const removeDecimal = (amount) => {
  return amount.split(".")[0];
};

const CircularDonationCard = ({
  title,
  raised,
  goal,
  thumbnail,
  slug,
  widthFull = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`
            w-72
            h-72
            rounded-full
            shadow-sm
            overflow-hidden
          `}
      >
        {/* image */}
        <img
          className="object-cover w-full h-full rounded-full"
          src={thumbnail}
          alt="card thumbanail"
        />
        {/* <!-- endo of image --> */}
      </div>
      <div
        className={`flex flex-col items-center justify-center p-5 w-full ${
          widthFull ? "max-w-none" : "max-w-[300px]"
        }`}
      >
        <div className="w-full">
          <div className="w-full flex items-center justify-between gap-10">
            <div className="flex items-center justify-center gap-2">
              <h5 className="ml-1 text-xs uppercase tracking-wide">Raised</h5>
              <h5 className="text-xs uppercase tracking-wide font-bold">
                {removeDecimal(formatter.format(raised))}
              </h5>
            </div>
            {/* <h5 className="text-xs text-gray-700">453</h5> */}
          </div>

          <div className="w-full mt-2">
            <Progress percentage={calcPercentage(raised, goal)} />
          </div>

          <div className="mt-2 flex items-center justify-end gap-2">
            <h5 className="ml-1 text-xs uppercase tracking-wide">Goal</h5>
            <h5 className="text-xs uppercase tracking-wide font-bold">
              {removeDecimal(formatter.format(goal))}
            </h5>
          </div>
        </div>

        {/* 
            <!-- title --> */}
        <h2 className="mt-5 text-center text-lg md:text-xl font-bold text-gray-800">
          {title}
        </h2>

        <div className="mt-5 w-max">
          <FilledButton color="orange">Learn more</FilledButton>
        </div>

        {/* <!-- end of title --> */}
      </div>
    </div>
  );
};

export default CircularDonationCard;
