import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";

export default function About() {
  return (
    <PageWithNavAndFooter>
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
              Water for everyone
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              The necessity of water to sustain life goes beyond just clean
              drinking water. Hygiene and food production also require water
              access. Water goes a long way in decreasing poverty, and providing
              opportunity for communities to flourish economically as well.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              We partner with local governments, businesses, and individuals,
              providing the support they need to bring clean water and
              sanitation systems to their own or surrounding rural communities.
              Then we ensure they have the resources they need to maintain those
              systems now and in the future. Specific support, programs, and
              projects will be placed based on needs within the given region.
            </h4>
          </div>
        </div>
      </div>
    </PageWithNavAndFooter>
  );
}
