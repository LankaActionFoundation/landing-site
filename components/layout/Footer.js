import React, { useState } from "react";
import Link from "next/dist/client/link";
const Footer = () => {
  const [links, setLinks] = useState([
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "News and Article", url: "#" },
        { name: "How it worked", url: "#" },
        { name: "Latest Events", url: "#" },
        { name: "Contact", url: "#" },
      ],
    },

    {
      title: "Fundraising",
      links: [
        { name: "Education", url: "#" },
        { name: "Design", url: "#" },
        { name: "Film and Video", url: "#" },
        { name: "Technology", url: "#" },
        { name: "Games", url: "#" },
      ],
    },
  ]);
  return (
    <footer className="pattern w-full pb-10 px-3 xl:px-0">
      <div className="w-full max-w-6xl mx-auto pt-20 pb-10 px-3 xl:px-0 border-b border-gray-300 border-opacity-60">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-20">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
            <svg
              className="w-14 h-14 text-white"
              viewBox="0 0 387 260"
              fill="none"
            >
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

            <h3 className="mt-5 text-sm leading-7 text-white w-full min-w-lg flex-shrink-0 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              laboriosam dolore cumque maiores molestias aliquam soluta corrupti
              itaque odio labore eum nam, quas praesentium earum suscipit
              similique iure odit? Reprehenderit velit at dicta inventore sed
              maiores aut praesentium vel sunt.
            </h3>
          </div>

          {/* links */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            {links.map((lnk) => (
              <div
                key={lnk.title}
                className="flex flex-col items-start justify-start"
              >
                <h3 className="mb-5 text-xs uppercase text-center md:text-left w-full tracking-wider text-white font-semibold">
                  {lnk.title}
                </h3>

                {lnk.links.map((link) => (
                  <div
                    key={link.name}
                    className="text-sm mb-3 text-white hover:underline text-center w-full md:text-left flex-shrink-0 whitespace-nowrap"
                  >
                    <Link
                      className="flex-shrink-0 whitespace-nowrap"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            ))}

            <div className="flex flex-col items-start justify-start">
              <h3 className="mb-5 text-xs text-center md:text-left w-full uppercase tracking-wider text-white font-semibold">
                Contact
              </h3>

              <div className="flex items-center text-center md:text-left w-full md:w-auto justify-center gap-2">
                <svg
                  className="text-customGreen w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                  ></path>
                </svg>

                <h5 className="text-sm text-white whitespace-nowrap">
                  999-999-999
                </h5>
              </div>

              <div className="mt-3 flex items-center text-center md:text-left w-full md:w-auto justify-center gap-2">
                <svg
                  className="text-customGreen w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.5 6.5L12 12.25L18.5 6.5"
                  ></path>
                </svg>

                <h5 className="text-sm text-white whitespace-nowrap">
                  donation@email.com
                </h5>
              </div>

              <div className="mt-3 flex items-center text-center md:text-left w-full justify-center gap-2">
                <svg
                  className="text-customGreen w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z"
                  ></path>

                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z"
                  ></path>

                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z"
                  ></path>
                </svg>

                <h5 className="text-sm text-white whitespace-nowrap">
                  45, Colombo, Sri Lanka
                </h5>
              </div>
            </div>
          </div>
          {/* end of links */}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto pt-5">
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-white">
          <h4>&copy; copyrights {new Date().getFullYear()} by donation</h4>
          <div className="mt-2 md:mt-0 flex items-center justify-center gap-5">
            <h4>Privacy policy</h4>
            <h4>Terms and use</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
