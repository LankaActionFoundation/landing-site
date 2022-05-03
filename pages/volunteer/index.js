import Head from "next/head";
import Link from "next/link";
import FilledButton from "../../components/buttons/FilledButton";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import PageWithNavAndFooter from "../../components/layout/PageWithNavAndFooter";
import VolunteerSVG from "../../components/VolunteerSVG";

export default function Volunteer() {
  return (
    <>
      <Head>
        <title>LVAF| Volunteer</title>
      </Head>
      <Navbar color="black" />
      <div className="mt-32 p-5 2xl:px-0 min-h-screen">
        <div className="mb-10 w-full max-w-4xl mx-auto">
          <VolunteerSVG />
        </div>
        <h1 className="text-3xl md:text-7xl text-center text-gray-800 font-bold">
          Volunteer
        </h1>

        <div className="w-full mb-20 mt-10 text-base max-w-screen-lg mx-auto tracking-wide leading-snug">
          <div className="w-full relative h-full md:aspect-video flex md:flex-col flex-col-reverse">
            <div className="bg-white/70 backdrop-blur-md backdrop-filter md:absolute mt-2 md:mt-0 md:p-5 md:m-2 rounded-lg inset-x-0 bottom-0">
              <p className="text-gray-900">
                Because as a child of the universe you have to fulfill your
                responsibility, you need to actively engage to uplift the
                community and you want to change the world to a better place.
              </p>
              <p className="mt-5 text-gray-900">
                We are always looking for locals on the island to help support
                Lanka Vision. We need people on sites to collect information,
                distribute goods, meet other locals for community development,
                and lead a variety of projects per region. We are also always
                looking for extra hands, ears, and support for running the site,
                programs, and so on. Since we are non-profit there is limited
                paid staff. We count on community support to help those in need.
              </p>
            </div>

            <img
              className="w-full h-full aspect-square rounded-lg object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fvolunteer%2Fimage_01.jpg?alt=media&token=7aecdec9-d4e9-49ea-ae26-4cf8635d483f"
              alt=""
            />
          </div>

          <div className="mt-10 w-full relative h-full md:aspect-video flex md:flex-col flex-col-reverse">
            <div className="bg-white/70 backdrop-blur-md backdrop-filter md:absolute mt-2 md:mt-0 md:p-5 md:m-2 rounded-lg inset-x-0 bottom-0">
              <p className="text-gray-900">
                International volunteers are also always welcome. If you are
                visiting and want to get hands-on, we may not assign you to
                teach a class, or check out water sites in regions. Instead, we
                might ask you to distribute food and medicine or help out at an
                event.
              </p>
              <p className="mt-5 text-gray-900">
                If you are interested, get in touch and we'll get you organized
                based on location, interests, time and commitment. Whether you
                have 3 hours or 3 months; there is always room for support. We
                encourage anyone and everyone to get involved. Bettering
                communities, you will surely better yourself by giving back to
                those in need!
              </p>
            </div>

            <img
              className="w-full h-full rounded-lg aspect-square object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fvolunteer%2Fimage_02.jpg?alt=media&token=ddb45e31-4ea7-4c5b-82b4-73fcb05864c0"
              alt=""
            />
          </div>

          <p className="w-full text-center mt-5 text-gray-900">
            Join us by clicking below
          </p>

          <div className="mt-5 w-full flex justify-between gap-10">
            <div className="w-full">
              <Link href="/volunteer/international-form">
                <FilledButton color="green">
                  International Volunteer
                </FilledButton>
              </Link>
            </div>

            <div className="w-full">
              <Link href="/volunteer/local-form">
                <FilledButton color="orange">Local Volunteer</FilledButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
