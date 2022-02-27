import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";
import Head from "next/head";

export default function About() {
  return (
    <PageWithNavAndFooter>
      <Head>
        <title>Lanka Action Foundation | About</title>
      </Head>
      <div className="w-full min-h-[200vh] md:min-h-[160vh] relative h-full z-20">
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
              About
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Lanka Vision Action Foundation is a registered, non-profit charity
              dedicated to improving underprivileged communities in rural, Sri
              Lanka. Lanka Vision provides children and their loved ones access
              to clean water, basic necessities like food and hygiene, as well
              as, education and healthcare support.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Our mission is to inspire communities to invest in a movement of
              change; to finally eliminate poverty and provide better
              circumstance for future generations. With our round the clock
              staff and volunteers, we are always looking for more people to get
              involved; and donors to help fund our projects. Each project is
              specific to a cause, some like our "Clean Water for Everyone" and
              "Rural Education Program" are on-going, while others are created,
              hosted, and supported by the foundations pillars, our partners
              support.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Targeting each community within rural Sri Lanka, individually; we
              will be building sustainable housing for families, providing them
              with necessary resources for livelihood and aid them with
              education and healthcare. Specific support, programs, and projects
              will be placed based on needs within the given region.
            </h4>

            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              You can get involved as a local Sri Lankan by volunteering or
              becoming apart of our team. You can also host a fundraiser, become
              a corporate partner to sponsor projects and events, or donate. If
              you want to further commit from project based support, feel free
              to Sponsor a Child. All these programs are what ensures the
              safety, security, and development of rural communities in need.
              International volunteers are welcome as well. Use the links
              provided on the home page to learn more. Our online chat and email
              support is available 24/7 - contact us anytime!
            </h4>
          </div>
        </div>
      </div>
    </PageWithNavAndFooter>
  );
}
