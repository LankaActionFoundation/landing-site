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
              Vision
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Inspiring investment in communities to eliminate poverty by
              providing sustainable opportunities and better circumstance for
              future generation
            </h4>

            <h1 className="text-7xl my-10 font-title text-white text-center">
              Mission
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Create sustainable opportunity and better circumstance for the
              future of Sri Lanka
            </h4>

            <h1 className="text-7xl my-10 font-title text-white text-center">
              Values
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Integrity to our Values
            </h4>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Respect for our collaborations
            </h4>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Sustainable Solutions
            </h4>
          </div>
        </div>
      </div>
    </PageWithNavAndFooter>
  );
}
