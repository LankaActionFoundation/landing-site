import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";
import Head from "next/head";

export default function About() {
  return (
    <PageWithNavAndFooter>
      <Head>
        <title>Lanka Action Foundation | About</title>
      </Head>
      <div className="w-full mt-40 mb-20 px-3">
        <h1 className="text-7xl mb-10 font-title text-gray-800 text-center">
          About
        </h1>

        <h4 className="text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          Lanka Vision Action Foundation is a registered, non-profit charity
          dedicated to improving underprivileged communities in rural, Sri
          Lanka. Lanka Vision provides children and their loved ones access to
          clean water, basic necessities like food and hygiene, as well as,
          education and healthcare support.
        </h4>

        <h4 className="mt-5 text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          Our mission is to inspire communities to invest in a movement of
          change; to finally eliminate poverty and provide better circumstance
          for future generations. With our round the clock staff and volunteers,
          we are always looking for more people to get involved; and donors to
          help fund our projects. Each project is specific to a cause, some like
          our "Clean Water for Everyone" and "Rural Education Program" are
          on-going, while others are created, hosted, and supported by the
          foundations pillars, our partners support.
        </h4>

        <h4 className="mt-5 text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          Targeting each community within rural Sri Lanka, individually; we will
          be building sustainable housing for families, providing them with
          necessary resources for livelihood and aid them with education and
          healthcare. Specific support, programs, and projects will be placed
          based on needs within the given region.
        </h4>

        <h4 className="mt-5 text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          You can get involved as a local Sri Lankan by volunteering or becoming
          apart of our team. You can also host a fundraiser, become a corporate
          partner to sponsor projects and events, or donate. If you want to
          further commit from project based support, feel free to Sponsor a
          Child. All these programs are what ensures the safety, security, and
          development of rural communities in need. International volunteers are
          welcome as well. Use the links provided on the home page to learn
          more. Our online chat and email support is available 24/7 - contact us
          anytime!
        </h4>

        <h1 className="mt-10 text-7xl mb-10 font-title text-gray-800 text-center">
          Vision
        </h1>

        <h4 className="text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          Inspiring investment in communities to eliminate poverty by providing
          sustainable opportunities and better circumstance for future
          generation
        </h4>

        <h1 className="text-7xl my-10 font-title text-gray-800 text-center">
          Mission
        </h1>

        <h4 className="text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          Create sustainable opportunity and better circumstance for the future
          of Sri Lanka
        </h4>

        <h1 className="text-7xl my-10 font-title text-gray-800 text-center">
          Values
        </h1>

        <h4 className="text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          Integrity to our Values
        </h4>
        <h4 className="text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          Respect for our collaborations
        </h4>

        <h4 className="text-gray-800 text-base font-body max-w-3xl mx-auto text-left tracking-wide">
          Sustainable Solutions
        </h4>
      </div>
    </PageWithNavAndFooter>
  );
}
