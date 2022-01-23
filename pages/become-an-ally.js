import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";

export default function About() {
  return (
    <PageWithNavAndFooter>
      <div className="w-full min-h-[200vh] md:min-h-[160vh]  relative h-full z-20">
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
              Become an ally
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Partners like our donors and volunteers are the pillars of Lanka
              Vision Action Foundation; fundamental to the organization and
              support of our mission . Our partners are individuals or
              organizations committed to longterm support. Some create programs
              within their business structures to constantly give back while
              others make it a point to provide resource or commitment
              long-term. Healthcare practitioners, educators, manufacturers of
              supplies, and so forth - we need your support, get involved today!
            </h4>
          </div>
        </div>
      </div>
    </PageWithNavAndFooter>
  );
}
