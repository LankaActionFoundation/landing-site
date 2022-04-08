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
    <>
      <div className="md:hidden z-50 fixed inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="p-3 pointer-events-auto absolute bottom-0 right-0 w-full">
            <a
              target="_blank"
              href="https://www.gofundme.com/f/help-sri-lanka-free-them-from-labour?utm_source=customer&utm_medium=copy_link_all&utm_campaign=p_cp+share-sheet"
            >
              <FilledButton color="yellow">
                <span className="text-black">Donate now</span>
              </FilledButton>
            </a>
          </div>
        </div>
      </div>
      <div className="font-body">
        <Head>
          <title>Lanka Vision Action Foundation</title>
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
              <div className="absolute bottom-0 mt-16 md:mt-96 top-0 inset-x-0 z-30">
                <div className="relative pb-20 md:pb-0 md:h-auto h-screen md:flex-none flex flex-col justify-end w-full py-3 px-3 xl:px-0 max-w-6xl mx-auto">
                  <h4 className="text-base md:text-2xl text-white">
                    <span className="text-base md:text-2xl text-brandOrange">
                      We,{" "}
                    </span>
                    Lanka Vision Action Foundation{" "}
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
                      With the 360&#176; welfare approach to community
                      development, we can transform communities by enriching
                      them and ensuring the proper development in all necessary
                      areas. The mission and goals of Lanka Vision Action
                      Foundation envisions
                    </h3>

                    <div className="mt-5 w-full flex items-center lg:justify-start justify-center">
                      <a
                        target="_blank"
                        href="https://www.gofundme.com/f/help-sri-lanka-free-them-from-labour?utm_source=customer&utm_medium=copy_link_all&utm_campaign=p_cp+share-sheet"
                      >
                        <div className="hidden md:block w-full max-w-xs lg:w-36 ">
                          <FilledButton color="yellow">
                            <span className="text-black">Donate now</span>
                          </FilledButton>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 w-full h-full px-3 lg:p-0 grid grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-10">
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

                  <h1 className="mt-5 text-white text-sm text-center font-medium">
                    Standard Health and Safe Motherhood
                  </h1>
                </div>

                <div className="lg:-ml-20 w-full h-[250px] bg-white/10 p-5 flex flex-col items-center justify-center rounded-2xl">
                  <svg
                    aria-hidden="true"
                    className="w-20 h-20 text-white"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 48 48"
                  >
                    <g fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="m37.264 25.955l-.165-.353c-.715-1.524-.923-3.138-.987-4.57a37.973 37.973 0 0 1-.02-2.09c0-.09.002-.18.003-.267c.006-.566.012-1.08 0-1.574a10.152 10.152 0 0 0-1.772-5.473a12.078 12.078 0 0 0-4.804-3.58l-.032-.014l-.033-.015a19.632 19.632 0 0 0-8.159-1.755h-.002a13.477 13.477 0 0 0-9.435 3.841a12.906 12.906 0 0 0-3.884 9.215c.002 2.044.597 4.376 1.63 6.532c1.036 2.162 2.44 3.997 3.917 5.133l.78.6l.007 8.916c.325.402.957.898 1.904 1.328c1.159.526 2.323.739 2.997.683l.081-.006h.082c1.956-.002 2.871-.556 3.265-.892a1.97 1.97 0 0 0 .308-.327l-.004-5.536l2.497.644h.004l.012.003l.079.02c.074.016.19.042.34.072c.303.06.743.138 1.273.203c1.077.132 2.45.202 3.776.006c1.338-.197 2.452-.637 3.218-1.371c.714-.684 1.341-1.83 1.34-3.925l-.002-1.71l1.681-.266h.002l.008-.002a1.234 1.234 0 0 0 .065-.012a6.092 6.092 0 0 0 1.16-.351c.321-.136.553-.278.69-.398a.763.763 0 0 0 .06-.058a1.285 1.285 0 0 0-.094-.342c-.11-.278-.297-.6-.536-.932a8.603 8.603 0 0 0-.936-1.086l-.021-.02l-.009-.008v-.001l-.284-.262ZM24.943 38.332s.802.207 2 .351c3.541.427 10.543.311 10.537-7.282c0 0 3.302-.522 3.635-2.41c.333-1.888-2.206-4.239-2.206-4.239c-.864-1.842-.838-4.012-.815-6.05a45.37 45.37 0 0 0 0-1.65a12.154 12.154 0 0 0-2.165-6.618a14.076 14.076 0 0 0-5.647-4.236a21.632 21.632 0 0 0-8.99-1.934a15.477 15.477 0 0 0-10.837 4.415a14.906 14.906 0 0 0-4.48 10.643c.003 4.8 2.757 10.502 6.327 13.249l.006 8.494c1.014 2.122 4.834 3.625 7.065 3.44c4.739-.003 5.573-2.74 5.573-2.74l-.003-3.433Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M26.698 20.494c.49 0 .57-.092.726-.266c.09-.101.206-.23.44-.386a3.932 3.932 0 0 0 2.194.634l2.479-.88a3.828 3.828 0 0 0 1.357-2.202a3.754 3.754 0 0 0-.37-2.542a3.91 3.91 0 0 0-1.932-1.749a3.74 3.74 0 0 0-1.356-2.118l-2.42-.822h-.273a3.885 3.885 0 0 0-2.273-1.53l-4.189-.28a3.907 3.907 0 0 0-2.308.995a3.933 3.933 0 0 0-3.008.504a3.782 3.782 0 0 0-1.418 1.621l-1.97 1.361a3.685 3.685 0 0 0-.752 2.235c-.005.336.041.67.137.994a3.685 3.685 0 0 0 .263 4.852c.055.685.301 1.342.712 1.9c.411.558.972.996 1.62 1.267a5.825 5.825 0 0 1 1.853 1.793c.472.724.667 1.543.772 2.395l4.116-.004l-.004-3.977c-.001-.706.2-1.399.583-2c.058-.09.112-.179.165-.264c.293-.478.53-.867 1.082-1.132a4.356 4.356 0 0 0 1.607-1.049c.64.424 1.394.65 2.167.65Zm-12.723-.136l8-1.252l-5.193-5.75l-2.807 7.002Zm8.495-4.676l2.368-4.4l4.483 2.324l-2.368 4.4l-4.483-2.324Z"
                        clip-rule="evenodd"
                      />
                      <path d="M33.978 23.842a1.5 1.5 0 1 1-3 .003a1.5 1.5 0 0 1 3-.003Z" />
                      <path
                        fill-rule="evenodd"
                        d="m20.985 32.353l-4 .003l-.002-2l4-.003l.002 2Zm.003 4l-4 .003l-.001-2l4-.003l.001 2Zm.003 4l-4 .003l-.001-2l4-.003l.001 2Z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>

                  <h1 className="mt-5 text-white text-sm text-center font-medium">
                    Early Childhood Development
                  </h1>
                </div>

                <div className="w-full h-[250px] bg-white/10 p-5 flex flex-col items-center justify-center rounded-2xl">
                  <svg
                    aria-hidden="true"
                    className="w-20 h-20 text-white"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M26 13a4.005 4.005 0 0 0 4-4V6h-3a3.979 3.979 0 0 0-2.747 1.106A6.004 6.004 0 0 0 19 4h-3v3a6.007 6.007 0 0 0 6 6h1v13H11v-5h1a4.005 4.005 0 0 0 4-4v-3h-3a3.979 3.979 0 0 0-2.747 1.106A6.004 6.004 0 0 0 5 12H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h28v-2h-5V13Zm-1-3a2.002 2.002 0 0 1 2-2h1v1a2.002 2.002 0 0 1-2 2h-1Zm-14 8a2.002 2.002 0 0 1 2-2h1v1a2.002 2.002 0 0 1-2 2h-1Zm-2 1H8a4.005 4.005 0 0 1-4-4v-1h1a4.005 4.005 0 0 1 4 4Zm14-8h-1a4.005 4.005 0 0 1-4-4V6h1a4.005 4.005 0 0 1 4 4Z"
                    />
                  </svg>

                  <h1 className="mt-5 text-white text-sm text-center font-medium">
                    Youth and Community Development
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

                  <h1 className="mt-5 text-white text-sm text-center font-medium">
                    Quality Education
                  </h1>
                </div>
              </div>
            </div>

            <div className="bg-brandLightBlue">
              <div className=" py-5 px-3 lg:px-0 w-full max-w-6xl mx-auto items-center justify-center gap-20">
                {/* <ul className="list-disc flex items-center justify-center gap-2">
                  <li className="text-sm text-gray-800">100% transparent</li>
                </ul>
                <ul className="list-disc flex items-center justify-center gap-2">
                  <li className="text-sm text-gray-800">Dedicated</li>
                </ul>
                <ul className="list-disc flex items-center justify-center gap-2">
                  <li className="text-sm text-gray-800">Compassionate</li>
                </ul>
                <ul className="list-disc flex items-center justify-center gap-2">
                  <li className="text-sm text-gray-800">Trustworthy</li>
                </ul> */}
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
                <div className="mt-10 w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-14">
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
                We as Lanka Vision Action Foundation take massive action for
                transformative change. Eliminating poverty, one community at a
                time
              </h2>

              <h5 className="w-full my-10 max-w-5xl mx-auto block text-center text-base md:text-lg text-white">
                We are committed to uplift the communities by providing quality
                education, basic necessities, including proper sanitation for an
                appropriate social protection mechanism. Our team and volunteers
                are pledged to operate following our values
              </h5>

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="w-full py-20 bg-white/10 p-5 rounded-xl flex items-center justify-center flex-col">
                  <svg
                    aria-hidden="true"
                    className="w-16 h-16 text-white"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"
                    />
                  </svg>

                  <h2 className="mt-1 text-xl md:text-3xl text-white/80">
                    Compassionate
                  </h2>
                </div>

                <div className="w-full py-20 bg-white/10 p-5 rounded-xl flex items-center justify-center flex-col">
                  <svg
                    aria-hidden="true"
                    className="w-16 h-16 text-white"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="currentColor"
                      d="M49.725 16.293c-.027.27-.043.578-.05.912l-3.834 1.831c-.537-.088-3.2.067-7.172-1.893c-1.007-.497-1.991-.761-2.936-.761a5.41 5.41 0 0 0-2.459.595c-1.003-.217-2.448-.773-3.293-.771c-1.912.01-6.259 1.567-7.463 1.7c-1.178.129-2.391.453-3.612.969c-2.219-.646-5.001-1.701-6.491-2.284L2 9v24.41l7.654 3.642c.111-.13.238-.33.376-.578l.237.11c.116.3.244.599.384.896c-.84 1.414-.94 3.007-.269 4.392c.575 1.185 1.646 2.017 2.839 2.25c.065.738.313 1.452.731 2.071c.75 1.107 1.942 1.768 3.191 1.768c.113 0 .226-.005.338-.018c.178.481.439.929.778 1.317c.754.867 1.81 1.364 2.896 1.364c.08 0 .158-.002.237-.008c.138.524.373 1.02.701 1.462c.755 1.02 1.92 1.627 3.118 1.627c.744 0 1.455-.228 2.082-.655c1.212.778 2.266 1.325 3.201 1.661c.469.191.957.289 1.455.289c1.178 0 2.321-.55 3.137-1.512c.303-.358.549-.758.729-1.186a3.78 3.78 0 0 0 1.087.162c1.252 0 2.439-.613 3.26-1.685a4.715 4.715 0 0 0 .83-1.711c.086.006.171.009.256.009c1.447 0 2.832-.849 3.611-2.216a4.735 4.735 0 0 0 .629-2.336c1.43-.213 2.689-1.23 3.302-2.713c.604-1.461.44-3.073-.403-4.417l3.895-2.195c.1.342.198.657.293.913L62 31.098V10.642l-12.275 5.651m-.001 3.037c.062 1.082.175 2.305.321 3.582c-.8-1.344-1.81-1.957-3.064-2.262l2.743-1.32m-5.228 23.756c-2.148-.739-6.619-5.995-6.619-5.995h.088c.455-.032 1.438-.511 2.541-.282c-1.732-1.488-3.637-.229-4.934-1c.301.965 1.748 1.269 2.119 1.281l4.284 4.982c1.94 2.255.589 5.045-1.356 5.489c-1.305-.635-4.99-5.018-4.99-5.018c.126-.023.873-.257 1.634-.157c-1.757-1.314-3.749-.174-4.931-.999c.67 1.655 2.877 1.231 3.108 1.191l2.292 2.926c1.834 2.34.393 5.043-1.555 5.409c-1.727-.607-2.848-2.767-2.848-2.767c.174-.028.756-.287 1.584-.167c-1.473-1.291-3.188-.12-4.219-.855c.637 1.388 2.225 1.072 2.314 1.062c1.588 2.501-.059 5.109-2.027 5.187h-.002l-.002.001c-1.182-.205-2.42-1.15-3.818-2.12c.48-.532.904-1.467.904-1.467c1.404-2.542-.418-4.79-2.299-4.597c1.526.417 2.67 2.365 1.479 4.528l-.523.88c-.568 1.035-1.455 1.66-2.107 1.583c-1.004-.122-2.419-1.588-1.824-3.656c.23-.21 2.448-3.603 2.448-3.603c1.525-2.456-.187-4.807-2.073-4.727c1.502.507 2.555 2.521 1.26 4.611l-1.803 2.811c-.615.994-1.411 1.557-2.17 1.453c-1.178-.16-2.004-1.597-1.815-3.08c-.01.009 1.298-1.454 1.298-1.454c1.738-2.271.25-4.807-1.633-4.94c1.447.674 2.309 2.798.832 4.731l-.638.782c-.7.918-1.543 1.385-2.281 1.201c-1.288-.323-1.958-2.733-1.349-3.39c.479-.517 1.824-2.154 1.824-2.154c1.737-2.272.251-4.807-1.634-4.942c1.448.676 2.31 2.8.833 4.734l-.638.78c-.704.926-1.55 1.391-2.293 1.202c-1.548-.392-2.321-2.782-.84-4.722c0 0-.503-1.598-.73-2.281l-.746-.346c1.749-4.075 4.391-13.069 4.513-16.057c1.288.459 4.688 1.437 5.049 1.439l-.002.002c3.66-1.15 7.496-1.023 9.246-1.699c.567-.216 1.695-.23 2.891.454c-.747.655-1.453 1.435-2.186 2.162c-1.752 1.739-8.266 4.451-7.01 7.303c1.084 2.461 4.137 4.979 9.258 1.026l2.88-.396l4.479 2.21l5.74 5.895c2.047 2.098.888 4.946-1.003 5.556m1.44-6.495c-.658-1.23-2.709-3.247-4.645-4.896l-.012-.012c.893.036 1.83-1.402 3.041-1.513c-.846-.646-2.248.1-2.685.218c-2.409.648-6.153-2.383-6.153-2.383l-3.582.516s-4.26 5.199-7.849.916c-1.949-2.326 5.114-5.364 6.854-7.093c2.229-2.215 4.215-4.925 7.882-3.079c3.046 1.536 4.246 1.441 8.332 2.152c1.218.213 2.062.771 2.967 1.86c.426 3.584 1.115 7.559 1.776 10.325c-.341.287-3.264 2.253-5.926 2.989"
                    />
                  </svg>
                  <h2 className="mt-1 text-xl md:text-3xl text-white/80">
                    Dedicated
                  </h2>
                </div>

                <div className="w-full py-20 bg-white/10 p-5 rounded-xl flex items-center justify-center flex-col">
                  <svg
                    aria-hidden="true"
                    className="w-16 h-16 text-white"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="currentColor"
                      d="M8.783 41.535c8.403 8.401 21.644 8.987 30.734 1.78l1.894 1.892l-1.573 1.572l12.844 12.843c-.478.756-.685 1.338-.446 1.575l.703.702c1.143 1.145 10.104-7.819 8.961-8.962l-.703-.701c-.237-.238-.818-.033-1.572.445L46.779 39.838l-1.572 1.572l-1.893-1.893c7.206-9.091 6.621-22.333-1.779-30.735c-9.044-9.043-23.708-9.043-32.752 0c-9.045 9.046-9.043 23.709 0 32.753m2.729-30.022c7.536-7.537 19.759-7.537 27.293 0c7.537 7.535 7.537 19.758 0 27.293c-7.536 7.538-19.755 7.536-27.293 0c-7.534-7.537-7.536-19.756 0-27.293"
                    />
                    <path
                      fill="currentColor"
                      d="M8.683 23.902a16.585 16.585 0 0 0 3.789 5.879c6.513 6.514 17.076 6.514 23.592-.003a16.61 16.61 0 0 0 4.813-10.243c2.256 5.949 1 12.926-3.79 17.716c-6.515 6.515-17.078 6.515-23.593 0C9.84 33.6 8.239 28.674 8.683 23.902"
                    />
                  </svg>
                  <h2 className="mt-1 text-xl md:text-3xl text-white/80">
                    100% Transparent
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

                    <div className="mt-10 w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-14">
                      {blogs.map((blog) => (
                        <div className="w-full md:max-w-xs">
                          <BlogCard
                            widthFull
                            slug={blog.slug}
                            title={blog.title}
                            subTitle={blog.subtitle}
                            thumbnail={blog.thumbnail}
                            category={blog.category}
                            date={blog.updated_at}
                          />
                        </div>
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
    </>
  );
}
