import React from "react";

const ImpactCard = ({
  title,
  thumbnail,
  description,
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
          

        </div>

        {/* 
            <!-- title --> */}
        <h2 className="mt-5 text-center text-lg md:text-xl font-bold text-gray-800">
          {title}
        </h2>

        
          <p className="text-center textWrap">{description}</p>

        {/* <!-- end of title --> */}
      </div>
    </div>
  );
};

export default ImpactCard;
