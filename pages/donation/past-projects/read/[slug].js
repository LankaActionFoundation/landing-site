import React, { useEffect, useState } from "react";
import Head from "next/head";
import PageWithNavAndFooter from "../../../../components/layout/PageWithNavAndFooter";
import Progress from "../../../../components/Progress";
import TextInput from "../../../../components/inputs/TextInput";
import FilledButton from "../../../../components/buttons/FilledButton";
import { Switch } from "@headlessui/react";
import Select from "../../../../components/inputs/Select";
import { useRouter } from "next/router";
import Loading from "../../../../components/Loading";
import axios from "axios";

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

  const [slug, setSlug] = useState(null);
  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.slug) {
      setSlug(router?.query?.slug);
    }
  }, [router]);

  const fetchSingleDonation = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/donation/get_single_donation/${slug}`,
        {
          withCredentials: true,
        }
      );
      console.log({ data });
      setDonation(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      router.push("/donation/1");
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    if (slug) {
      fetchSingleDonation();
    }
  }, [slug]);

  useEffect(() => {
    if (!loading && donation) {
      const watermark = document.querySelector('[data-f-id="pbf"]');
      watermark.classList.add("hidden");
    }
  }, [donation, loading]);

  return (
    <>
      <Head>
        <title>{slug}</title>
        <link
          href="../css/froala_style.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <PageWithNavAndFooter>
        {!loading && donation && (
          <>
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
                src={donation.thumbnail}
                alt="cover"
              />

              <div className="absolute px-3 xl:px-0 inset-0 z-30 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
                <h1 className="text-white text-6xl font-title md:text-8xl text-center">
                  {donation.title}
                </h1>

                <h3 className="mt-5 text-sm italic text-white leading-6 w-full max-w-2xl text-center">
                  {donation.subtitle}
                </h3>

                <a
                  target="_blank"
                  href="https://www.gofundme.com/f/help-sri-lanka-free-them-from-labour?utm_source=customer&utm_medium=copy_link_all&utm_campaign=p_cp+share-sheet"
                >
                  <div className="mt-10 w-32 md:w-auto">
                    <FilledButton color="orange">
                      <span className="uppercase whitespace-nowrap text-sm font-bold text-black">
                        Donate now
                      </span>
                    </FilledButton>
                  </div>
                </a>

                {/* card */}
                <div className="absolute mx-3 xl:mx-0 bottom-0 mb-5 md:-mb-20 shadow-xl w-full md:block border border-white/30  rounded-3xl p-2 bg-white/20 backdrop-filter backdrop-blur-sm">
                  <div className="rounded-2xl w-full mx-auto p-5 bg-white shadow-lg">
                    {/* percent */}
                    <div className="w-full flex justify-between mb-5">
                      <div className="flex items-center justify-center gap-2 text-gray-800">
                        <h5 className="ml-1 text-sm uppercase tracking-wide">
                          Raised
                        </h5>
                        <h5 className="text-sm uppercase tracking-wide font-bold">
                          {removeDecimal(formatter.format(donation.reached))}
                        </h5>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-gray-800">
                        <h5 className="ml-1 text-sm uppercase tracking-wide">
                          <span className="font-bold">
                            {calcPercentage(donation.reached, donation.goal)}%
                          </span>{" "}
                          funded
                        </h5>
                      </div>
                    </div>
                    <Progress
                      percentage={calcPercentage(
                        donation.reached,
                        donation.goal
                      )}
                    />
                    <div className="w-full flex justify-end mt-5">
                      <div className="flex items-center justify-center gap-2 text-gray-800">
                        <h5 className="ml-1 text-sm uppercase tracking-wide">
                          Goal
                        </h5>
                        <h5 className="text-sm uppercase tracking-wide font-bold">
                          {removeDecimal(formatter.format(donation.goal))}
                        </h5>
                      </div>
                    </div>
                    {/* end of percent */}

                    {false && (
                      <>
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
                                isMonthlyDonation
                                  ? "bg-gray-300"
                                  : "bg-gray-300"
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
                                  isMonthlyDonation
                                    ? "translate-x-9"
                                    : "translate-x-0"
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

                          <div className="mt-[23px] w-32">
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
                      </>
                    )}
                  </div>
                </div>
                {/* end of card */}
              </div>
            </div>

            <section className="md:mt-32 px-3 xl:px-0 w-full">
              <div className="w-full min-h-screen max-w-6xl mx-auto py-20">
                <div
                  className="fr-view"
                  dangerouslySetInnerHTML={{
                    __html: donation.body,
                  }}
                ></div>
              </div>
            </section>
          </>
        )}

        {loading && (
          <div className="min-h-screen flex items-center justify-center">
            <Loading />
          </div>
        )}
      </PageWithNavAndFooter>
    </>
  );
};

export default IndividualDonation;
