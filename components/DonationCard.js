import React from "react";
import Progress from "./Progress";

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

const DonationCard = ({
  title,
  subTitle,
  raised,
  goal,
  thumbnail,
  widthFull = false,
}) => {
  return (
    <div
      className={`
            relative
             max-h-[450px]
            ${widthFull ? "max-w-none" : "max-w-[300px]"}
            w-full
            rounded-xl
            border border-gray-300
            shadow-sm
            overflow-hidden
          `}
    >
      <div className="absolute h-10 w-full bottom-0 bg-gradient-to-t from-white"></div>

      {/* image */}
      <img
        className="object-cover w-full h-40 rounded-t-lg"
        src={thumbnail}
        alt="card thumbanail"
      />
      {/* <!-- endo of image --> */}

      <div
        className={`p-5 w-full ${widthFull ? "max-w-none" : "max-w-[300px]"}`}
      >
        <div className="w-full flex items-center justify-between gap-10">
          <div className="flex items-center justify-center gap-2">
            <h5 className="ml-1 text-xs uppercase tracking-wide">Raised</h5>
            <h5 className="text-xs uppercase tracking-wide font-bold">
              {removeDecimal(formatter.format(raised))}
            </h5>
          </div>
          <h5 className="text-xs text-gray-700">453</h5>
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

        {/* 
            <!-- title --> */}
        <h2 className="mt-5 text-lg md:text-xl font-bold text-gray-800">
          {title}
        </h2>
        {/* <!-- end of title --> */}

        {/* <!-- sub title --> */}
        <h4 className="mt-3 w-full break-words text-xs md:text-sm text-gray-600">
          {subTitle}
        </h4>

        {/* <!-- end of sub title --> */}
      </div>
    </div>
  );
};

export default DonationCard;
