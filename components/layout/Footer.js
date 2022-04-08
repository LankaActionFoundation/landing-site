import React, { useState } from "react";
import Link from "next/dist/client/link";
import TextInput from "../../components/inputs/TextInput";
import FilledButton from "../../components/buttons/FilledButton";
const Footer = () => {
  const [links, setLinks] = useState([
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "News and Article", url: "/blog/1" },
        { name: "Latest Events", url: "/event/1" },
        { name: "Contact", url: "#" },
        // { name: "Careers", url: "/careers" },
      ],
    },
  ]);
  return (
    <footer className="pattern w-full pb-20 md:pb-10 px-3 xl:px-0">
      <div className="w-full max-w-6xl mx-auto pt-20 pb-10 px-3 xl:px-0 border-b border-gray-300 border-opacity-60">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-20">
          <div className="w-full md:w-[700px] flex flex-col items-center justify-center md:items-start md:justify-start">
            <Link href="/">
              <img src="/Logo.png" className="w-14 h-14 object-cover" alt="" />
            </Link>

            <h3 className="mt-5 text-white text-sm font-medium">
              Subscribe to our newsletter
            </h3>
            <div className="w-full flex items-start justify-between gap-3">
              <TextInput
                className="w-full"
                name="subscribe"
                placeholder="Email"
                type="email"
              />
              <div className="mt-1 w-min">
                <FilledButton color="yellow">
                  <span className="text-gray-800">Subscribe</span>
                </FilledButton>
              </div>
            </div>
            <p className="text-white text-sm">
              Uplifting and strengtthening vulnerable communities in Sri Lanka
            </p>
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
                  <a href="tel: +94722999555">+94 722 999 555</a>
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
                  <a href="mailto:info@lankaaction.com">info@lankaaction.com</a>
                </h5>
              </div>

              <div className="mt-3 flex items-start text-center md:text-left w-full justify-center gap-2">
                <svg
                  className="text-customGreen w-5 h-5 flex-shrink-0"
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

                <h5 className="text-sm text-white">
                  645, Wiliam Gopallawa Mawatha, Kandy, Sri Lanka.
                </h5>
              </div>
              <div className="w-full mt-5 flex items-center justify-center md:justify-center gap-3">
                <a
                  target="blank"
                  href="https://www.facebook.com/Lanka-Vision-Action-Foundation-107342631884683/?ref=pages_you_manage"
                >
                  <svg
                    className="text-customGreen w-5 h-5"
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
                    className="text-customGreen w-5 h-5"
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
                    className="text-customGreen w-5 h-5"
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
                    className="w-6 h-6 text-customGreen"
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
                    className="w-5 h-5 text-customGreen"
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
                    className="w-5 h-5 text-customGreen"
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
          </div>
          {/* end of links */}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto pt-5">
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-white">
          <h4>
            &copy; copyrights {new Date().getFullYear()} by lanka vision action
            foundation
          </h4>
          <div className="mt-2 md:mt-0 flex items-center justify-center gap-5">
            <h4>Privacy policy</h4>
            <h4>Terms and conditions</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
