import React, { useState } from "react";
import Head from "next/head";
import PageWithNavAndFooter from "../../../components/layout/PageWithNavAndFooter";
import Progress from "../../../components/Progress";
import TextInput from "../../../components/inputs/TextInput";
import FilledButton from "../../../components/buttons/FilledButton";
import { Switch } from "@headlessui/react";
import Select from "../../../components/inputs/Select";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const removeDecimal = (amount) => {
  return amount.split(".")[0];
};

const calcPercentage = (amount, goal) => {
  return Math.floor((amount * 100) / goal);
};

const IndividualDonation = () => {
  const [amounts, setAmounts] = useState([100, 500, 1000]);
  const [isMonthlyDonation, setIsMonthlyDonation] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link
          href="../css/froala_style.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <PageWithNavAndFooter>
        <div className="relative min-h-screen ">
          <div
            className="
            w-full
            h-full
            top-0
            absolute
            z-30
            bg-gradient-to-b
            from-black/90
            via-black/70
            to-black/10
          "
          ></div>

          <img
            className="w-full h-full absolute top-0 z-20 object-cover"
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2038&q=80"
            alt="cover"
          />

          <div className="absolute px-3 xl:px-0 inset-0 z-30 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-white text-6xl font-title md:text-8xl text-center">
              New Chances for children
            </h1>

            <h3 className="mt-5 text-sm italic text-white leading-6 w-full max-w-2xl text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              rerum cum? Optio minus numquam, id iusto eaque eos nesciunt
              provident excepturi tempore corporis facere! Ab culpa mollitia non
              totam porro soluta veritatis ullam quisquam! Omnis quas ab dolor
              possimus cumque. Sint hic natus beatae labore!
            </h3>

            {/* card */}
            <div className="absolute mx-3 xl:mx-0 bottom-0 mb-5 md:-mb-40 shadow-xl w-full md:block  rounded-3xl p-2 bg-white/20 backdrop-filter backdrop-blur-sm">
              <div className="rounded-2xl w-full mx-auto p-5 bg-white shadow-lg">
                {/* percent */}
                <div className="w-full flex justify-between mb-5">
                  <div className="flex items-center justify-center gap-2 text-gray-800">
                    <h5 className="ml-1 text-sm uppercase tracking-wide">
                      Raised
                    </h5>
                    <h5 className="text-sm uppercase tracking-wide font-bold">
                      {removeDecimal(formatter.format(70234))}
                    </h5>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-gray-800">
                    <h5 className="ml-1 text-sm uppercase tracking-wide">
                      <span className="font-bold">43%</span> funded
                    </h5>
                  </div>
                </div>
                <Progress percentage={43} />
                <div className="w-full flex justify-end mt-5">
                  <div className="flex items-center justify-center gap-2 text-gray-800">
                    <h5 className="ml-1 text-sm uppercase tracking-wide">
                      Goal
                    </h5>
                    <h5 className="text-sm uppercase tracking-wide font-bold">
                      {removeDecimal(formatter.format(70234))}
                    </h5>
                  </div>
                </div>
                {/* end of percent */}

                <div className="hidden w-full md:flex items-center justify-center">
                  <div className=" py-5 pb-10 flex items-center justify-center">
                    <h3
                      onClick={() => {
                        setIsMonthlyDonation(false);
                      }}
                      className="mr-3 text-xs md:text-sm text-gray-800 font-medium uppercase flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <div
                        className={`p-3 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out ${
                          !isMonthlyDonation && "bg-customYellow"
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
                      className={`${
                        isMonthlyDonation ? "bg-gray-300" : "bg-gray-300"
                      }
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
                          isMonthlyDonation && "bg-customYellow"
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
                <div className="hidden md:flex items-start justify-center gap-5">
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
                    <h4 className=" text-sm font-medium text-gray-700">
                      Set Amount
                    </h4>

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
                                text-gray-800 focus:outline-none 
                                focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-white hover:bg-customYellowHoverLight hover:border-customYellow focus-visible:ring-customYellow
                                ${
                                  parseInt(selectedAmount) === amount
                                    ? "bg-customYellow border-customYellow"
                                    : "bg-transparent"
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
                    <FilledButton
                      className="w-full"
                      color="yellow"
                      focusOffset="white"
                    >
                      <span className="text-sm text-gray-800 font-semibold">
                        Donate
                      </span>
                    </FilledButton>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card */}
          </div>
        </div>

        <section className="w-full">
          <div className="w-full min-h-screen max-w-6xl mx-auto py-20">
            <div
              className="fr-view"
              dangerouslySetInnerHTML={{
                __html: ``,
              }}
            ></div>
          </div>
        </section>
      </PageWithNavAndFooter>
    </>
  );
};

export default IndividualDonation;
