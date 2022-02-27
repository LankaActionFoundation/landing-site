import Head from "next/head";
import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";

export default function About() {
  return (
    <PageWithNavAndFooter>
      <Head>
        <title>Lanka Action Foundation | Rural education program</title>
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
              Rural Education Program
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Ease of information through education can systemically reduce
              poverty, and increase the livelihoods of communities socially and
              economically. Education provides knowledge, mindset, and
              opportunity for betterment in many childrens lives. To be educated
              is a wealth generations can pass on. Developing better education
              in rural communities is essential to reducing health issues,
              spread of disease, and growing community through innovation,
              resources, organization and management.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              We partner with local government, business, community leaders and
              aid to provide accessible education through teachers, books, and
              other tools required. One village may need a school house, while
              another needs pens and books. Perhaps a road to make travel to
              community development sites more effective. We ensure children in
              rural communities have what they need to learn. Specific support,
              programs, and projects will be placed based on needs within the
              given region.
            </h4>
          </div>
        </div>
      </div>
    </PageWithNavAndFooter>
  );
}
