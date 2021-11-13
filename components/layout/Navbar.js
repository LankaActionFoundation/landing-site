import React from "react";
import Link from "next/link";

import PopoverBtn from "../buttons/PopoverBtn";
import FilledButton from "../buttons/FilledButton";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-filter backdrop-blur-lg text-white">
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
              <h6 className="text-xs  italic">comapny@email.com</h6>
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

              <h6 className="text-xs italic">Colombo, Srilanka</h6>
            </span>
          </div>
        </div>
        {/*end of info */}

        <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-5">
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
              <Link href="#">
                <span className="hover:underline cursor-pointer"> Sign in</span>
              </Link>{" "}
              |{" "}
              <Link href="#">
                <span className="hover:underline cursor-pointer">Register</span>
              </Link>
            </span>
          </div>

          {/* donate */}
          <div className="w-32">
            <FilledButton color="yellow">
              <span className="uppercase text-sm font-bold text-black">
                Donate
              </span>
            </FilledButton>
          </div>
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
        <div className="">
          <svg className="w-14 h-14 " viewBox="0 0 387 260" fill="none">
            <path
              d="M195.341 14.1154L202.707 34.0232L203.489 36.1357L205.601 36.9174L225.509 44.284L205.601 51.6505L203.489 52.4322L202.707 54.5447L195.341 74.4525L187.974 54.5447L187.192 52.4322L185.08 51.6505L165.172 44.284L185.08 36.9174L187.192 36.1357L187.974 34.0232L195.341 14.1154Z"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
            <path
              d="M364.643 85.0689C339.545 61.3161 291.591 45.6304 257.083 71.1758C224.367 98.9621 211.851 139.03 234.003 177.399"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
            <path
              d="M330.394 154.775C313.02 154.775 298.936 140.276 298.936 122.391"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
            <path
              d="M364.629 84.8416L381.283 65.9512V130.718"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
            <path
              d="M330.394 154.827V177.231L359.856 199.186L381.283 183.504V127.943"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
            <path
              d="M351.173 115.378L358.013 122.218"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
            <path
              d="M4.99996 24.4927L235.232 254.725"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
            <path
              d="M98.0725 44.0869L254.826 200.841"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
            <path
              d="M49.087 137.159L151.957 240.029"
              stroke="currentColor"
              strokeWidth="9.7971"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* links */}
        <div className="hidden md:flex items-center justify-center">
          <PopoverBtn
            name="About us"
            links={[
              { name: "Mission,Vission,Focus", url: "/#" },
              { name: "Our Impact", url: "/#" },
              { name: "Partners", url: "/#" },
              {
                name: "Accountability and transparency",
                url: "/#",
              },
            ]}
          />

          <PopoverBtn
            name="Our work"
            links={[
              { name: "Mission,Vission,Focus", url: "/#" },
              { name: "Our Impact", url: "/#" },
              { name: "Partners", url: "/#" },
              {
                name: "Accountability and transparency",
                url: "/#",
              },
            ]}
          />

          <PopoverBtn
            name="How can you help"
            links={[
              { name: "Mission,Vission,Focus", url: "/#" },
              { name: "Our Impact", url: "/#" },
              { name: "Partners", url: "/#" },
              {
                name: "Accountability and transparency",
                url: "/#",
              },
            ]}
          />

          <PopoverBtn
            name="The latest"
            links={[
              { name: "Mission,Vission,Focus", url: "/#" },
              { name: "Our Impact", url: "/#" },
              { name: "Partners", url: "/#" },
              {
                name: "Accountability and transparency",
                url: "/#",
              },
            ]}
          />
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
              <h6 className="text-sm text-customYellow">666 6666 666</h6>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
