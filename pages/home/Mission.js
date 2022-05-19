import React from 'react';
import FilledButton from "../../components/buttons/FilledButton";

const Mission = () => {
    return(<>
    <section className="md:pt-32 2xl:pt-10 bg-brandTealDark w-full">
            <div className="w-full py-5 pb-20 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              <div className="mt-2 md:mt-0 w-full px-3 xl:px-3">
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

            {/* <div className="bg-brandLightBlue">
              <div className=" py-5 px-3 lg:px-0 w-full max-w-6xl mx-auto items-center justify-center gap-20">
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
                  <li className="text-sm text-gray-800">Trustworthy</li>
                </ul>
              </div>
            </div> */}
          </section>
    </>);
}

export default Mission;