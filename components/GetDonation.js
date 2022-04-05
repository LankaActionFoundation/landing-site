import React from "react";

const GetDonation = () => {
  return (
    <div className="hidden md:block mt-10 rounded-3xl p-2 bg-white/20  border border-white/30 backdrop-filter backdrop-blur-sm">
      <div className="rounded-2xl w-full mx-auto p-5 bg-white shadow-lg">
        <div className="w-full flex items-center justify-center">
          <div className="py-5 pb-10 flex items-center justify-center">
            <h3
              onClick={() => {
                setIsMonthlyDonation(false);
              }}
              className="mr-3 text-xs md:text-sm text-gray-800 font-medium uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              <div
                className={`p-3 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  !isMonthlyDonation && "bg-brandOrange text-white"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g strokeWidth="1.5" fill="none">
                    <path
                      d="M17 17H8c-1.667 0-5-1-5-5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 7h8c1.667 0 5 1 5 5c0 1.494-.465 2.57-1.135 3.331"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 14.5L17 17l-2.5 2.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 8V3L2 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              Single Donation
            </h3>
            <Switch
              checked={isMonthlyDonation}
              onChange={setIsMonthlyDonation}
              className={`${isMonthlyDonation ? "bg-gray-300" : "bg-gray-300"}
        relative 
        inline-flex flex-shrink-0 
        h-[38px] w-[74px] 
        border-2 border-transparent 
        rounded-full cursor-pointer 
        transition-colors ease-in-out duration-200 
        focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75
        `}
            >
              <span
                aria-hidden="true"
                className={`${
                  isMonthlyDonation ? "translate-x-9" : "translate-x-0"
                }
          pointer-events-none inline-block 
          h-[34px] w-[34px] 
          rounded-full 
          bg-white shadow-lg 
          transform ring-0 
          transition ease-in-out duration-200
          `}
              />
            </Switch>
            <h3
              onClick={() => {
                setIsMonthlyDonation(true);
              }}
              className="ml-3 text-xs md:text-sm text-gray-800 font-medium uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              Monthly Donation
              <div
                className={`p-3 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  isMonthlyDonation && "bg-brandOrange text-white"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g strokeWidth="1.5" fill="none">
                    <path
                      d="M17 17H8c-1.667 0-5-1-5-5s3.333-5 5-5h8c1.667 0 5 1 5 5c0 1.494-.465 2.57-1.135 3.331"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 14.5L17 17l-2.5 2.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </h3>
          </div>
        </div>
        <div className="flex items-start justify-center gap-5">
          <Select
            label="Choose donation kind"
            handler={(e) => console.log("selected", e)}
            options={[
              { id: 1, name: "Test", unavailable: false },
              { id: 2, name: "Test2", unavailable: false },
            ]}
          />

          {/* amounts select */}
          <div className="flex-shrink-0 flex flex-col items-start justify-center">
            <h4 className=" text-sm font-medium text-gray-700">Set Amount</h4>

            <div className="mt-1 flex items-center justify-center gap-2">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`px-2 py-2 rounded-xl
                  font-medium
                  text-sm
                  transform
                  active:scale-[0.98]
                  transition-transform
                  duration-100
                  border-2 border-gray-300 
                   focus:outline-none 
                  focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-white hover:bg-brandOrange hover:text-white hover:border-brandOrange focus-visible:ring-brandOrange
                  ${
                    parseInt(selectedAmount) === amount
                      ? "bg-brandOrange border-brandOrange text-white"
                      : "bg-transparent text-gray-800"
                  }
                  `}
                >
                  $ {amount}
                </button>
              ))}
            </div>
          </div>
          {/* end of amounts select */}
          <div className="w-full max-w-sm">
            <TextInput
              label="Amount"
              placeholder="Or enter amount"
              value={selectedAmount}
              handler={(e) => {
                setSelectedAmount(e.target.value);
              }}
            />
          </div>

          <div className="mt-[23px] w-full max-w-sm ">
            <FilledButton className="w-full" color="orange" focusOffset="white">
              <span className="text-sm text-gray-800 font-semibold">
                Donate
              </span>
            </FilledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDonation;
