import Head from "next/head";
import { useEffect, useState } from "react";
import FilledButton from "../components/buttons/FilledButton";

import Select from "../components/inputs/Select";
import TextInput from "../components/inputs/TextInput";
import { Switch } from "@headlessui/react";
import DonationCard from "../components/DonationCard";
import BlogCard from "../components/BlogCard";
import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";
import CircularDonationCard from "../components/CircularDonationCard";
import axios from "axios";
import Link from "next/link";
import Loading from "../components/Loading";

export default function Home() {
  const [amounts, setAmounts] = useState([100, 500, 1000]);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [isMonthlyDonation, setIsMonthlyDonation] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [donations, setDonations] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHomepageBlog = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/blogs/get_homepage_blogs`,
        {
          withCredentials: true,
        }
      );
      setBlogs(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    fetchHomepageBlog();
  }, []);

  const fetchHomepageDonation = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/donation/get_homepage_donations`,
        {
          withCredentials: true,
        }
      );
      setDonations(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    fetchHomepageDonation();
  }, []);

  return (
    <div className="font-body">
      <Head>
        <title>Lanka Action Foundation</title>
      </Head>

      <PageWithNavAndFooter color="bg-black/70">
        {/* hero */}
        <section className="h-screen">
          {/* bg image */}
          <div className="w-full relative h-full z-20">
            <div
              className="
            w-full
            h-full
            top-0
            absolute
            z-30
            bg-gradient-to-b
            from-black/90
            via-black/50
            to-brandTealDark
          "
            ></div>
            <video
              muted={true}
              loop={true}
              autoPlay={true}
              className="w-full h-full absolute top-0 z-20 object-cover"
            >
              <source
                type="video/mp4"
                src="https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fhomepage%2Fhome-video.mp4?alt=media&token=4a2e53e2-1557-4c25-923e-d887571aa181"
              ></source>
            </video>

            {/* hero */}
            <div className="absolute mt-16 md:mt-96 top-0 inset-x-0 z-30">
              <div className="w-full mt-5 py-3 px-3 xl:px-0 max-w-6xl mx-auto">
                <h4 className="text-base md:text-2xl text-white">
                  <span className="text-base md:text-xl text-brandOrange">
                    Lanka Action Foundation{" "}
                  </span>
                  Nonprofit Foundation
                </h4>

                <h1 className="mt-6 mb-14 text-3xl md:text-6xl tracking-wide leading-loose text-white">
                  Transforming the{" "}
                  <span className="text-brandOrange text-4xl md:text-7xl">
                    most vulnerable communities
                  </span>{" "}
                  in Sri Lanka towards a
                  <span className="text-brandOrange text-4xl md:text-7xl">
                    {" "}
                    sustainable standard of living.
                  </span>
                </h1>

                {/* card */}

                {/* end of card */}
              </div>
            </div>
            {/* end of hero */}
          </div>
          {/* end of bg image */}
        </section>
        {/* end of hero */}

        {/* 2nd section */}
        <section className="bg-brandTealDark w-full">
          <div className="w-full py-20 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="mt-20 md:mt-0 w-full px-3 xl:px-3">
              <h4 className="text-xl w-full text-center lg:text-left md:text-2xl text-white">
                What we do
                <div className="mt-2 flex items-center lg:justify-start justify-center">
                  <div className=" h-[5px] w-10 bg-white rounded-full"></div>
                </div>
              </h4>
              <div className="w-full flex items-start justify-between gap-5">
                <div className="w-full lg:max-w-md">
                  <h1 className="mt-6 text-center lg:text-left font-title text-5xl md:text-6xl tracking-wide font-bold text-white">
                    The mission and goals of our organization
                  </h1>

                  <h3 className="mt-5 text-center lg:text-left  text-base text-white">
                    Charity of the global movement encouraging the power of
                    people and organizations to transform their communties and
                    the world, what can we do to make some changes.
                  </h3>

                  <div className="mt-5 w-full flex items-center lg:justify-start justify-center">
                    <a
                      target="_blank"
                      href="https://www.gofundme.com/f/help-sri-lanka-free-them-from-labour?utm_source=customer&utm_medium=copy_link_all&utm_campaign=p_cp+share-sheet"
                    >
                      <div className="w-full max-w-xs lg:w-36 ">
                        <FilledButton color="yellow">
                          <span className="text-black">Donate now</span>
                        </FilledButton>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 w-full h-full px-3 lg:p-0 grid md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-10">
              <div className="lg:-ml-20 h-[250px] w-full bg-white/10 p-5 flex flex-col items-center justify-center rounded-2xl">
                <svg
                  aria-hidden="true"
                  className="w-20 h-20 text-white"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M159.88 175.82h64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16h-64v-64a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v64h-64a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16zm408.19 160.31a39.91 39.91 0 0 0-55.93-8.47l-119.67 88.18H271.86a16 16 0 0 1 0-32h78.24c16 0 30.75-10.87 33.37-26.61a32.06 32.06 0 0 0-31.62-37.38h-160a117.7 117.7 0 0 0-74.12 26.25l-46.5 37.74H15.87a16.11 16.11 0 0 0-16 16v96a16.11 16.11 0 0 0 16 16h347a104.8 104.8 0 0 0 61.7-20.27L559.6 392a40 40 0 0 0 8.47-55.87z"
                    fill="currentColor"
                  />
                </svg>

                <h1 className="mt-5 text-white text-sm font-medium">
                  Medical Services
                </h1>
              </div>

              <div className="lg:-ml-20 w-full h-[250px] bg-white/10 p-5 flex flex-col items-center justify-center rounded-2xl">
                <svg
                  className="w-20 h-20 text-white"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <g fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207L1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </g>
                </svg>

                <h1 className="mt-5 text-white text-sm font-medium">
                  Orphanages Care
                </h1>
              </div>

              <div className="w-full h-[250px] bg-white/10 p-5 flex flex-col items-center justify-center rounded-2xl">
                <svg
                  className="w-20 h-20 text-white"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <g fill="currentColor">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
                  </g>
                </svg>

                <h1 className="mt-5 text-white text-sm font-medium">
                  Gift Giving
                </h1>
              </div>

              <div className="w-full h-[250px] bg-white/10 p-5 flex flex-col items-center justify-center rounded-2xl">
                <svg
                  className="w-20 h-20 text-white"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 10L2.54 7.02L3 18H1l.48-11.41L0 6l10-4l10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5s1-.22 1-.5s-.45-.5-1-.5zm0 6l5.57-2.23c.71.94 1.2 2.07 1.36 3.3c-.3-.04-.61-.07-.93-.07c-2.55 0-4.78 1.37-6 3.41A6.986 6.986 0 0 0 4 12c-.32 0-.63.03-.93.07c.16-1.23.65-2.36 1.36-3.3z"
                    fill="currentColor"
                  />
                </svg>

                <h1 className="mt-5 text-white text-sm font-medium">
                  School Education
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-brandLightBlue">
            <div className="hidden py-5 px-3 lg:px-0 w-full max-w-6xl mx-auto md:flex items-center justify-center gap-20">
              <ul className="list-disc flex items-center justify-center gap-2">
                <li className="text-sm text-gray-800">100% transparent</li>
              </ul>
              <ul className="list-disc flex items-center justify-center gap-2">
                <li className="text-sm text-gray-800">Dedicated</li>
              </ul>
              <ul className="list-disc flex items-center justify-center gap-2">
                <li className="text-sm text-gray-800">Compassionate</li>
              </ul>
              <ul className="list-disc flex items-center justify-center gap-2">
                <li className="text-sm text-gray-800">Respected</li>
              </ul>
            </div>
          </div>
        </section>
        {/* end of 2nd section */}

        {/* 3rd section */}
        <section className="bg-white w-full">
          <div className="w-full max-w-6xl mx-auto py-10 px-3 lg:px-0">
            {/* <h5 className="w-full block text-center text-base md:text-lg text-gray-800">
              Give a hand to make
            </h5> */}

            <h2 className="mt-5 text-3xl md:text-4xl font-title text-gray-800 w-full max-w-lg xl:max-w-none mx-auto block text-center font-bold">
              The smallest donation can change someone’s life. <br />
            </h2>

            {donations && donations.length > 0 && (
              <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-3 justify-center  items-center gap-14">
                {donations.map((donation) => (
                  <CircularDonationCard
                    widthFull
                    slug={donation.slug}
                    title={donation.title}
                    thumbnail={donation.thumbnail}
                    raised={parseInt(donation.reached)}
                    goal={parseInt(donation.goal)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
        {/* end of 3rd section */}

        {/* 4th section */}
        <section className="bg-brandTealDark w-full">
          <div className="w-full py-20 max-w-6xl mx-auto px-3 lg:px-0">
            <h2 className="mt-5 text-3xl md:text-6xl font-title text-white w-full mx-auto block text-center font-bold">
              LVAF takes massive action for massive change. Abolishing poverty,
              one community at a time.
            </h2>

            <h5 className="w-full my-10 max-w-5xl mx-auto block text-center text-base md:text-lg text-white">
              We’re focused on providing better education, health facilities,
              and basic necessities including food and water. Our goal is to
              furnish better conditions for future generations.
            </h5>

            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="w-full py-20 bg-white/10 p-5 rounded-xl flex items-center justify-center flex-col">
                <h1 className="text-2xl md:text-5xl font-bold text-white">
                  $50K
                </h1>
                <h2 className="mt-1 text-xl md:text-3xl text-white/80">
                  Raised
                </h2>
              </div>

              <div className="w-full py-20 bg-white/10 p-5 rounded-xl flex items-center justify-center flex-col">
                <h1 className="text-2xl md:text-5xl font-bold text-white">
                  300+
                </h1>
                <h2 className="mt-1 text-xl md:text-3xl text-white/80">
                  Volunteers
                </h2>
              </div>

              <div className="w-full py-20 bg-white/10 p-5 rounded-xl flex items-center justify-center flex-col">
                <h1 className="text-2xl md:text-5xl font-bold text-white">
                  48+
                </h1>
                <h2 className="mt-1 text-xl md:text-3xl text-white/80">
                  Countries
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* end of 4th section */}

        {/* 5th section */}
        <section className="bg-white w-full">
          <div className="w-full py-20 max-w-6xl mx-auto px-3 lg:px-0">
            {/* <div className="w-full mt-5 flex flex-col md:flex-row items-start justify-between gap-10">
              <div className="w-full">
                <h2 className="text-5xl md:text-7xl font-title text-gray-800 font-bold">
                  Become Support Partner
                </h2>
                <h3 className="mt-[10px] text-sm md:text-lg">
                  Provide financing support to help individuals build livelihood
                </h3>
              </div>

              <div className="md:mt-5 w-full md:w-auto">
                <FilledButton className="w-full" color="green">
                  <span className="px-5 text-white uppercase whitespace-nowrap">
                    Get in touch
                  </span>
                </FilledButton>
              </div>
            </div>

            <div className="mt-20 flex flex-col flex-wrap md:flex-row items-center justify-center gap-10">
              <div className="bg-gray-100 p-5 rounded-lg">
                <img className="w-32 h-32" src="./charity-logo.png" alt="" />
              </div>
              <div className="bg-gray-100 p-5 rounded-lg">
                <img className="w-32 h-32" src="./charity-logo.png" alt="" />
              </div>
              <div className="bg-gray-100 p-5 rounded-lg">
                <img className="w-32 h-32" src="./charity-logo.png" alt="" />
              </div>
              <div className="bg-gray-100 p-5 rounded-lg">
                <img className="w-32 h-32" src="./charity-logo.png" alt="" />
              </div>
            </div> */}
            <div className="">
              {blogs && blogs.length > 0 && (
                <>
                  <div className="w-full flex flex-col md:flex-row items-start justify-between">
                    <h2 className="text-3xl md:text-6xl font-title text-gray-800 font-bold">
                      Latest Articles
                    </h2>

                    <div className="md:mt-5 w-full md:w-auto">
                      <Link href="/blog/1">
                        <FilledButton className="w-full" color="green">
                          <span className="px-5 text-white uppercase whitespace-nowrap">
                            All Articles
                          </span>
                        </FilledButton>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-3 justify-center  items-center gap-14">
                    {blogs.map((blog) => (
                      <BlogCard
                        widthFull
                        slug={blog.slug}
                        title={blog.title}
                        subTitle={blog.subtitle}
                        thumbnail={blog.thumbnail}
                        category={blog.category}
                        date={blog.updated_at}
                      />
                    ))}
                  </div>
                </>
              )}
              {loading && <Loading />}
            </div>
          </div>
        </section>
        {/* end of 5th section */}
      </PageWithNavAndFooter>
    </div>
  );
}
