import React, { useEffect, useState } from "react";
import Head from "next/head";
import PageWithNavAndFooter from "../../../../components/layout/PageWithNavAndFooter";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "../../../../components/Loading";
import dateFormat from "dateformat";
import link from "next/link";

const formatDate = (date) => {
  return dateFormat(date, "mmmm dS, yyyy");
};

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
  const [slug, setSlug] = useState(null);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.slug) {
      setSlug(router?.query?.slug);
    }
  }, [router]);

  const fetchSingleEvent = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/events/get_single_event/${slug}`,
        {
          withCredentials: true,
        }
      );
      console.log({ data });
      setEvent(data);
      setTabs(data.tabs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      router.push("/event/past-events/1");
      console.log(error);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    if (slug) {
      fetchSingleEvent();
    }
  }, [slug]);

  useEffect(() => {
    if (!loading && event) {
      const watermark = document.querySelectorAll('[data-f-id="pbf"]');
      if (watermark) {
        [...watermark].map((w) => {
          w.classList.add("hidden");
        });
      }
    }
  }, [event, loading]);

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
  const [selectedTab, setSelectedTab] = useState(
    tabs && tabs.length > 0 ? tabs[0].name : ""
  );

  return (
    <>
      <Head>
        <title>LVAF | {slug} </title>
        <link href="froala_style.min.css" rel="stylesheet" type="text/css" />
        <link
          href="https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js"
        ></script>
      </Head>

      <PageWithNavAndFooter>
        {!loading && event && (
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
              src={event.thumbnail}
              alt="cover"
            />

            <div className="absolute px-3 mt-10 xl:px-0 inset-0 z-30 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
              <h1 className="text-white text-4xl font-title md:text-5xl text-center">
                {event.title}
              </h1>

              {/* card */}
              <div className="mx-3 xl:mx-0 mt-10 border border-white/30 shadow-xl md:block  rounded-3xl p-2 bg-white/20 backdrop-filter backdrop-blur-sm">
                <div className="rounded-2xl w-full mx-auto p-1 bg-white/80 shadow-lg">
                  <div className="rounded-xl bg-customBlue w-full p-5">
                    <h2 className="text-xl w-full text-center md:text-2xl font-bold text-white">
                      {formatDate(event.date)}
                    </h2>
                  </div>
                  <div className="w-full mt-5 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center place-content-center gap-10">
                    {event.informations.map((info, i) => (
                      <div
                        key={i}
                        className="w-full flex items-center justify-start "
                      >
                        <h3 className="mr-2 text-xs font-bold md:whitespace-nowrap uppercase tracking-wide text-gray-800">
                          {info.field}
                        </h3>
                        <h4 className="text-sm  md:whitespace-nowrap text-gray-600">
                          {info.value}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end of card */}
            </div>
          </div>
        )}
        {!loading && event && (
          <section className="w-full">
            <div className="w-full px-3 xl:px-0 py-10 max-w-6xl mx-auto  items-start justify-between">
              <div
                className="fr-view"
                dangerouslySetInnerHTML={{
                  __html: event.eventDetails,
                }}
              ></div>
            </div>

            {tabs && tabs.length > 0 && (
              <div className="w-full px-10 xl:px-0 pb-10 max-w-6xl mx-auto">
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
                      key={tab.name}
                      onClick={() => setSelectedTab(tab.name)}
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
                          selectedTab === tab.name
                            ? "bg-customBlueHoverLight text-white shadow-md"
                            : "bg-transparent text-customBlue/80 hover:bg-customBlueHoverLight/[0.092] hover:text-customBlue shadow-none"
                        }
                      `}
                    >
                      {tab.name.split("_").join(" ")}
                    </button>
                  ))}
                </div>
                <div className="w-full  py-10 max-w-6xl mx-auto  items-start justify-between">
                  {tabs.map((tab) => {
                    if (tab.name === selectedTab) {
                      return (
                        <div
                          key={tab.name}
                          className="fr-view"
                          dangerouslySetInnerHTML={{
                            __html: tab.body,
                          }}
                        ></div>
                      );
                    }
                  })}
                </div>
              </div>
            )}

            {event.linkType === "gmap" && (
              <div className="w-full px-3 xl:px-0 pb-10 max-w-6xl mx-auto flex flex-col items-start justify-start">
                <h3 className="mb-5 px-3 py-2 text-sm md:text-base bg-customOrange rounded-3xl text-white font-semibold">
                  Google Map
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: event.link,
                  }}
                ></div>
              </div>
            )}

            {event.linkType !== "gmap" && (
              <div className="w-full px-3 xl:px-0 pb-10 max-w-6xl mx-auto flex flex-col items-start justify-start">
                <h3 className="mb-5 px-3 py-2 text-sm md:text-base bg-customOrange rounded-3xl text-white font-semibold">
                  Virtual Link
                </h3>
                <a
                  className="mb-5 text-base md:text-lg hover:text-customBlue text-gray-600 font-semibold"
                  href={event.link}
                >
                  {event.link}
                </a>
              </div>
            )}
          </section>
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
