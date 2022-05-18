import React, { useEffect, useState } from "react";
import Link from "next/link";

import PopoverBtn from "../buttons/PopoverBtn";
import FilledButton from "../buttons/FilledButton";

import axios from "axios";
import router from "next/router";
import Spinner from "../Spinner";

const Navbar = ({ color }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const profile = async () => {
    try {
      setErrors(null);
      setLoading(true);
      const { data: profile } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/users/profile`,
        {
          withCredentials: true,
        }
      );
      setUser(profile);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setUser(null);
      console.log(error);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        setErrors(err);
      }
    }
  };

  const handleLogout = async () => {
    try {
      setErrors(null);
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      document.cookie = "sessionId=; Max-Age=-99999999;";
      setLoading(false);
      router.push("/");
    } catch (error) {
      setLoading(false);
      setUser(null);
      console.log(error);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        setErrors(err);
      }
    }
  };

  useEffect(() => {
    profile();
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  const getScrollPercent = () => {
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (getScrollPercent() >= 5) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      {isNavOpen && (
        <div
          onClick={() => {
            setIsNavOpen(false);
          }}
          className="fixed z-[100] inset-0 bg-black/70 backdrop-filter backdrop-blur-sm"
        ></div>
      )}

      {isNavOpen && (
        <nav
          className={`w-60 flex-1 h-full fixed top-0 left-0 z-[101] p-5 overflow-y-auto`}
        >
          <div className="">
            <Link href="/">
              <img src="/Logo.png" className="w-12 h-12 object-cover" alt="" />
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <Link href="/about">
              <h3 className="text-white cursor-pointer hover:underline text-xs font-bold tracking-wide uppercase">
                About us
              </h3>
            </Link>

            <h3 className="text-white text-xs font-bold tracking-wide uppercase">
              Projects
            </h3>

            <div className="ml-5 flex flex-col items-start justify-center gap-5">
              <Link href="/donation/upcoming-projects/1">
                <h3 className="cursor-pointer hover:underline text-white text-sm">
                  Upcoming projects
                </h3>
              </Link>
              <Link href="/donation/past-projects/1">
                <h3 className="cursor-pointer hover:underline text-white text-sm">
                  Past projects
                </h3>
              </Link>
            </div>

            <h3 className="text-white text-xs font-bold tracking-wide uppercase">
              Get Involved
            </h3>

            <div className="ml-5 flex flex-col items-start justify-center gap-5">
              <Link href="/volunteer">
                <h3 className="cursor-pointer hover:underline text-white text-sm">
                  Volunteer
                </h3>
              </Link>
              {/* <Link href="/careers">
                <h3 className="cursor-pointer hover:underline text-white text-sm">
                  Careers
                </h3>
              </Link> */}
              <Link href="/become-an-ally">
                <h3 className="cursor-pointer hover:underline text-white text-sm">
                  Become an ally
                </h3>
              </Link>
            </div>

            <h3 className="text-white text-xs font-bold tracking-wide uppercase">
              Events
            </h3>

            <div className="ml-5 flex flex-col items-start justify-center gap-5">
              <Link href="/event/1">
                <h3 className="cursor-pointer hover:underline text-white text-sm">
                  Upcoming events
                </h3>
              </Link>
              <Link href="/host-an-event">
                <h3 className="cursor-pointer hover:underline text-white text-sm">
                  Host an event
                </h3>
              </Link>
            </div>

            <Link href="/blog/1">
              <h3 className="cursor-pointer hover:underline text-white text-xs font-bold tracking-wide uppercase">
                Blog
              </h3>
            </Link>
            <Link href="/gallery/1">
              <h3 className="cursor-pointer hover:underline text-white text-xs font-bold tracking-wide uppercase">
                Gallery
              </h3>
            </Link>
          </div>
        </nav>
      )}

      <nav
        className={`w-full fixed top-0 z-50 ${
          !isNavScrolled ? "bg-transparent" : "bg-black/70"
        }  ${
          color !== "black" ? "bg-black/70" : "bg-black"
        } backdrop-filter backdrop-blur-lg text-white`}
      >
        <div
          className="
            hidden
            w-full
            py-3
            px-3
            xl:px-0
            max-w-6xl
            mx-auto
            md:flex
            items-center
            justify-between
            border-b border-gray-300 border-opacity-25
          "
        >
          {/* info */}
          <div className=" items-start justify-start gap-5">
            <div className="hidden">
              <span className="flex items-center justify-start gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    fill="currentColor"
                  />
                </svg>
                <h6 className="text-xs  italic">
                  <a href="mailto:info@lankaaction.com">info@lankaaction.com</a>
                </h6>
              </span>
            </div>

            <div className="w-full ml-3 flex items-center justify-start gap-3">
              <a
                target="blank"
                href="https://www.facebook.com/Lanka-Vision-Action-Foundation-107342631884683/?ref=pages_you_manage"
              >
                <svg
                  className="text-white w-5 h-5"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  />
                </svg>
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/lankavisionactionfoundation"
              >
                <svg
                  className="text-white w-5 h-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599c.28.28.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233c0-2.136.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92c.28-.28.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334z"
                  />
                </svg>
              </a>
              <a target="blank" href="https://twitter.com/LankaVision">
                <svg
                  className="text-white w-5 h-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                  />
                </svg>
              </a>
              <a
                target="blank"
                href="https://www.youtube.com/channel/UC1oy0OshwhiBdrmF0CTri4w/featured"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133l-232 135z"
                  />
                </svg>
              </a>
              <a target="blank" href="#">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a target="blank" href="https://www.tiktok.com/@lankaaction">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/*end of info */}

          <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-5">
            {loading && (
              <div className="w-8 h-8">
                <Spinner />
              </div>
            )}
            {!user && !loading && (
              <div className="flex items-center justify-center gap-2 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>

                <span className=" text-sm">
                  <Link href="/signin">
                    <span className="hover:underline cursor-pointer">
                      {" "}
                      Sign in
                    </span>
                  </Link>{" "}
                  |{" "}
                  <Link href="/register">
                    <span className="hover:underline cursor-pointer">
                      Register
                    </span>
                  </Link>
                </span>
              </div>
            )}

            {user && !loading && (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="text-white text-sm">{user.firstName}</h3>
                <button
                  onClick={handleLogout}
                  className="mx-3 focus:outline-none focus:underline hover:underline text-white text-sm"
                >
                  Logout
                </button>
              </div>
            )}

            {/* donate */}
            <a
              target="_blank"
              href="https://www.gofundme.com/f/help-sri-lanka-free-them-from-labour?utm_source=customer&utm_medium=copy_link_all&utm_campaign=p_cp+share-sheet"
            >
              <div className="w-32 md:w-auto">
                <FilledButton color="yellow">
                  <span className="uppercase whitespace-nowrap text-sm font-bold text-black">
                    Donate now
                  </span>
                </FilledButton>
              </div>
            </a>
            {/* end of donate */}
          </div>
        </div>

        <div
          className="
            w-full
            py-3
            px-3
            xl:px-0
            max-w-6xl
            mx-auto
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center justify-start gap-2">
            <div
              className="block md:hidden"
              onClick={() => {
                setIsNavOpen(true);
              }}
            >
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 5.75H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 18.25H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 12H19.25"
                ></path>
              </svg>
            </div>
            {/* logo */}
            <Link href="/">
              <img src="/Logo.png" className="w-12 h-12 object-cover" alt="" />
            </Link>
          </div>

          {/* links */}
          <div className="hidden md:flex items-center justify-center">
            <Link href="/about">
              <button className="px-3 py-2 text-sm text-white rounded-xl ">
                About us
              </button>
            </Link>
            {/* <PopoverBtn
              name="About us"
              links={[{ name: "Mission,Visvoion", url: "/vision-mission" }]}
            /> */}

            <PopoverBtn
              name="Projects"
              links={[
                {
                  name: "Upcoming projects",
                  url: "/donation/upcoming-projects/1",
                },
                { name: "Past projects", url: "/donation/past-projects/1" },
              ]}
            />

            <PopoverBtn
              name="Get involved"
              links={[
                { name: "Volunteer", url: "/volunteer" },
                // { name: "Careers", url: "/careers" },
                { name: "Become an ally", url: "/become-an-ally" },
              ]}
            />
            <PopoverBtn
              name="Events"
              links={[
                { name: "upcoming events", url: "/event/1" },
                { name: "Host an Event", url: "/host-an-event" },
              ]}
            />

            <Link href="/blog/1">
              <button className="px-3 py-2 text-sm text-white rounded-xl ">
                Blog
              </button>
            </Link>
            <Link href="/gallery/1">
              <button className="px-3 py-2 text-sm text-white rounded-xl ">
                Gallery
              </button>
            </Link>
          </div>
          {/* end of links */}

          <div className="">
            <div className="flex items-center justify-start gap-2">
              <svg className="w-8 h-8 " fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 18.25C15.5 18.25 19.25 16.5 19.25 12C19.25 7.5 15.5 5.75 12 5.75C8.5 5.75 4.75 7.5 4.75 12C4.75 13.0298 4.94639 13.9156 5.29123 14.6693C5.50618 15.1392 5.62675 15.6573 5.53154 16.1651L5.26934 17.5635C5.13974 18.2547 5.74527 18.8603 6.43651 18.7307L9.64388 18.1293C9.896 18.082 10.1545 18.0861 10.4078 18.1263C10.935 18.2099 11.4704 18.25 12 18.25Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"
                ></path>
              </svg>

              <div className="flex flex-col items-start justify-start">
                <h6 className="text-xs text-gray-200">Call Anytime</h6>
                <h6 className="text-sm text-brandOrange">
                  <a href="tel: +94722999555">+94 722 999 555</a>,{" "}
                  <a href="tel: +14167883939">+1 416 788 3939</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
