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
  slug,
  title,
  raised,
  goal,
  thumbnail,
  subtitle,
  widthFull = false,
}) => {
  const imgUrl = 'url("' + thumbnail + '")';
  return (
    // <div className="flex flex-col items-center justify-center">
    //   <div
    //     className={`
    //         w-72
    //         h-72
    //         rounded-full
    //         shadow-sm
    //         overflow-hidden
    //       `}
    //   >
    //     <img
    //       className="object-cover w-full h-full rounded-full"
    //       src={thumbnail}
    //       alt="card thumbanail"
    //     />
    //   </div>
    //   <div
    //     className={`flex flex-col items-center justify-center p-5 w-full ${
    //       widthFull ? "max-w-none" : "max-w-[300px]"
    //     }`}
    //   >
    //     <div className="w-full">
    //       <div className="w-full flex items-center justify-between gap-10">
    //         <div className="flex items-center justify-center gap-2">
    //           <h5 className="ml-1 text-xs uppercase tracking-wide">Raised</h5>
    //           <h5 className="text-xs uppercase tracking-wide font-bold">
    //             {removeDecimal(formatter.format(raised))}
    //           </h5>
    //         </div>
    //       </div>

    //       <div className="w-full mt-2">
    //         <Progress percentage={calcPercentage(raised, goal)} />
    //       </div>

    //       <div className="mt-2 flex items-center justify-end gap-2">
    //         <h5 className="ml-1 text-xs uppercase tracking-wide">Goal</h5>
    //         <h5 className="text-xs uppercase tracking-wide font-bold">
    //           {removeDecimal(formatter.format(goal))}
    //         </h5>
    //       </div>
    //     </div>

    //     <h2 className="mt-5 text-center text-lg md:text-xl font-bold text-gray-800">
    //       {title}
    //     </h2>

    //     <div className="mt-5 w-max">
    //       <Link href={`/donation/upcoming-projects/read/${slug}`}>
    //         <FilledButton color="orange">Learn more</FilledButton>
    //       </Link>
    //     </div>

    //   </div>
    // </div>
    <>
      <div className="flex flex-col LVProjectCard">
        <div className="ProjectImageCont">
          <img className="" src={thumbnail} alt="card thumbanail" />
        </div>
        <div className="ProjectTextCont">
          <div className="w-full mt-2">
            <span className="smallText pullLeft">
              Raised &nbsp; {removeDecimal(formatter.format(raised))}
            </span>
            <span className="smallText pullRight">
              Goal &nbsp; {removeDecimal(formatter.format(goal))}
            </span>
            <Progress percentage={calcPercentage(raised, goal)} />
            <h2 className="mt-5 text-left text-white text-lg md:text-3xl font-bold text-gray-800">
              {title}
            </h2>
            <p className="mt-5 text-left text-white">{subtitle}</p>
            
          </div>
          <Link href={'/donation/upcoming-projects/read/${slug}'}><div className="viewMore">View More</div></Link>
        </div>
        <div className="clear-both"></div>
      </div>
    </>
  );
};

export default CircularDonationCard;
