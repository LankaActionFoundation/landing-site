import React, { useState } from "react";
import Head from "next/head";
import PageWithNavAndFooter from "../../../components/layout/PageWithNavAndFooter";

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
  const [tabs, setTabs] = useState([
    {
      name: "Facilities",
      value: "published",
    },
    {
      name: "Map Location",
      value: "unpublished",
    },
  ]);
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

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

          <div className="absolute px-3 mt-10 xl:px-0 inset-0 z-30 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-white text-6xl font-title md:text-8xl text-center">
              Fundraising base communication
            </h1>

            {/* card */}
            <div className="mx-3 xl:mx-0 mt-10 border border-white/30 shadow-xl w-full max-w-md md:block  rounded-3xl p-2 bg-white/20 backdrop-filter backdrop-blur-sm">
              <div className="rounded-2xl w-full mx-auto p-1 bg-white/80 shadow-lg">
                <div className="rounded-xl bg-customBlue w-full p-5">
                  <h2 className="text-xl w-full text-center md:text02xl font-bold text-white">
                    May 30th 2021
                  </h2>
                </div>
                <div className="w-full mt-5 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center place-content-center gap-10">
                  <div className="w-full flex items-center justify-start ">
                    <h3 className="mr-2 text-xs font-bold uppercase tracking-wide text-gray-800">
                      Speaker
                    </h3>
                    <h4 className="text-sm text-gray-600">Bruce Lee</h4>
                  </div>
                  <div className="w-full flex items-center justify-start ">
                    <h3 className="mr-2 text-xs font-bold uppercase tracking-wide text-gray-800">
                      Organized by
                    </h3>
                    <h4 className="text-sm text-gray-600">Bruce Lee</h4>
                  </div>
                  <div className="w-full flex items-center justify-start ">
                    <h3 className="mr-2 text-xs font-bold uppercase tracking-wide text-gray-800">
                      Venue
                    </h3>
                    <h4 className="text-sm text-gray-600">London</h4>
                  </div>
                  <div className="w-full flex items-center justify-start ">
                    <h3 className="mr-2 text-xs font-bold uppercase tracking-wide text-gray-800">
                      Phone
                    </h3>
                    <h4 className="text-sm text-gray-600">London</h4>
                  </div>
                  <div className="w-full flex items-center justify-start ">
                    <h3 className="mr-2 text-xs font-bold uppercase tracking-wide text-gray-800">
                      Email
                    </h3>
                    <h4 className="text-sm text-gray-600">London</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* end of card */}
          </div>
        </div>

        <section className="w-full">
          <div className="w-full py-10 max-w-6xl mx-auto  items-start justify-between">
            {/* dangerouslySetInnerHTML={{
                __html: ``,
              }} */}
            <div className="fr-view w-full">
              <h1 className="text-5xl font-bold font-title text-gray-800">
                Event details
              </h1>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo odit aut doloribus ullam facilis, quas dicta veritatis
                esse alias eligendi magni minima vel saepe molestiae cum ab
                dolore a illo! Impedit magni tempore dignissimos mollitia
                consequuntur, quo corrupti porro atque molestias rem vero.
                Explicabo sequi earum, suscipit inventore alias veritatis iusto
                quas assumenda illum at, totam, dolores hic. Aspernatur quam
                nostrum eos quaerat, quo magni itaque fugiat rem eveniet cum
                laboriosam? Saepe, voluptatem? Tempora facilis iste commodi rem
                error, fugit quibusdam ipsa dolorum. Labore aspernatur sunt
                dolore incidunt assumenda repellat quasi mollitia sed, inventore
                veritatis distinctio ducimus numquam odio ad!
              </p>
            </div>
          </div>

          <div className="w-full pb-10 max-w-6xl mx-auto">
            <div
              className="
                        w-full
                        p-2
                        mt-5
                        rounded-xl
                        bg-customBlueHoverLight/[0.062]
                        border
                        flex
                        items-center
                        justify-evenly
                        gap-2
                      "
            >
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedTab(tab.value)}
                  className={`
                        py-3
                        px-3
                        w-full
                        rounded-lg
                        text-xs
                        leading-5
                        font-medium
                        focus:outline-none
                        uppercase
                        tracking-wide
                        transition-all
                        duration-300
                        outline-none
                        ${
                          selectedTab === tab.value
                            ? "bg-customBlueHoverLight text-white shadow-md"
                            : "bg-transparent text-customBlue/80 hover:bg-customBlueHoverLight/[0.092] hover:text-customBlue shadow-none"
                        }
                      `}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      </PageWithNavAndFooter>
    </>
  );
};

export default IndividualDonation;
