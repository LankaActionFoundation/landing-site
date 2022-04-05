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
              <Link href="/careers">
                <h3 className="cursor-pointer hover:underline text-white text-sm">
                  Careers
                </h3>
              </Link>
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
              <Link href="/">
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
          <div className="hidden md:flex items-start justify-start gap-5">
            <div className="">
              <span className="flex items-center justify-start gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    fill="currentColor"
                  />
                </svg>
                <h6 className="text-xs  italic">hello@lankaaction.com</h6>
              </span>
            </div>

            <div className="">
              <span className="flex items-center justify-start gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>

                <h6 className="text-xs italic">
                  645, Wiliam Gopallawa Mawatha, Kandy, Sri Lanka.
                </h6>
              </span>
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
                <FilledButton color="orange">
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
                { name: "Careers", url: "/careers" },
                { name: "Become an ally", url: "/become-an-ally" },
              ]}
            />
            <PopoverBtn
              name="Events"
              links={[
                { name: "upcoming events", url: "/event/1" },
                { name: "Host an Event", url: "/#" },
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
                <h6 className="text-sm text-brandOrange">0812064264</h6>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
