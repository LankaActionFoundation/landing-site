import Head from "next/head";
import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";

export default function About() {
  return (
    <PageWithNavAndFooter>
      <div className="w-full min-h-[200vh] md:min-h-[160vh] relative h-full z-20">
        <Head>
          <title>Lanka Action Foundation | Volunteer</title>
        </Head>
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
            to-customBlue/40
          "
        ></div>
        {/* 
            from-tempA/100
            via-tempA/70
            to-tempB/30
        https://images.pexels.com/photos/1098769/pexels-photo-1098769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 */}
        <img
          className="w-full h-full absolute top-0 z-20 object-cover"
          src="https://images.unsplash.com/6/mountain.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="cover"
        />
        <div className="absolute px-5 inset-0 z-40 mt-20 md:mt-52 max-w-6xl mx-auto">
          <div className="bg-black/50 p-5 py-10 pb-24 rounded-2xl backdrop-blur-lg backdrop-filter">
            <h1 className="text-7xl mb-10 font-title text-white text-center">
              Volunteer
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Because as a child of the universe you has to fulfill your
              responsibility, you need to actively engage to uplift the
              community and you want to change the world to a better place.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              We are always looking for locals on the island to help support
              Lanka Vision. We need people on sites to collect information,
              distribute goods, meet other locals for community development, and
              to lead a variety of projects per region. We are also always
              looking for extra hands, ears, and support for running the site,
              programs, and so on. Since we are non profit there is limited paid
              staff. We count on community support to help those in need.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              International volunteers are also always welcome. If you are
              visiting and want to get hands-on, we may not assign you to teach
              a class, or check out water sites in regions. Instead, we might
              ask you to distribute food and medicine or help out at an event.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              If you are interested, get in touch and we'll get you organized
              based on location, interests, time and commitment. Whether you
              have 3 hours or 3 months; there is always room for support. We
              encourage anyone and everyone to get involved. Bettering
              communities, you will surely better yourself by giving back to
              those in need!
            </h4>
          </div>
        </div>
      </div>
    </PageWithNavAndFooter>
  );
}
