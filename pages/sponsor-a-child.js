import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";

export default function About() {
  return (
    <PageWithNavAndFooter>
      <div className="w-full min-h-[300vh] md:min-h-[230vh] relative h-full z-20">
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
              Sponsor a child
            </h1>
            <h4 className="text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Your sponsorship helps to change a specific child's life for the
              better. Rather than relying on individual projects geared at
              specific needs like food, clothing, etc. Sponsorship ensures a
              single child is cared for through out. They will be given adequate
              nutrition, education and healthcare and/or the resources to access
              them.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              You can sponsor a child by signing up to pledge the minimum
              monthly amount. Alternatively you can make an annual payment. Each
              sponsor is provided information about their child. Children may
              choose to send notes, pictures, etc. We do not make this a
              requirement for them, nor do we provide promised gifts to our
              donors as we want to extend every dollar possible to the
              betterment of these rural communities.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              With support from partners that want to provide tokens of
              appreciation or specific programs, you may be rewarded and / or
              recognized for your support. We provide donation receipts for
              donations above x value.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Though Sri Lanka as an entire country has a poverty rate of
              roughly 5% and a literacy rate comparable to developed countries.
              These statistics do not accurately demonstrate the circumstances
              of rural populations. Over 80% of the countries poverty come from
              rural communities. In 2019 it was reported that 7 of every 1000
              babies born in Sri Lanka will die before reaching the age of 5.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              In the year 2000, the demographic & health survey done by the
              department of census and statistics Sri Lanka found that only
              25.2% of people residing in the Estates had access to safe
              drinking water. The survey also reported that only 31% of people
              residing in the Estates had electricity and only 18% of families
              in rural communities had a fridge. These statistics comply similar
              findings regarding sanitation, education, and healthcare support.
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              According to the{" "}
              <a
                href="https://www.wfp.org/countries/sri-lanka"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                World Food Programme
              </a>
              , 22% of Sri Lankans are undernourished or malnourished which
              signifies that many citizens lack necessary vitamins and minerals.
              Climate change also negatively affects the poverty rate in Sri
              Lanka as severe floods and droughts threaten food security and
              limit access to clean water. Overview of Poverty in Sri Lanka
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Shakeela Jabbar and Dinushka Senanayake wrote in an overview of
              poverty on the island: "Income per capita by decile is used to
              measure relative poverty by calculating the share of income
              received by the lowest two deciles as a percentage of income
              received by the highest decile. The same method applies for
              calculating relative poverty using expenditure (both food and non
              food) deciles. In the year 2002 the lowest two deciles earned only
              2.5% of the total income, while the highest decile earned 41.8% of
              the total income. Furthermore, in 2002 the lowest four deciles4
              (earned 10.2% of total income) earnings amounted to just 25% of
              the highest decile which also emphasizes that relative poverty is
              considerably high in Sri Lanka. Hence, in Sri Lanka one third of
              the total population earn little more than two third (67.9%) of
              the total income while the other two third of the population earn
              just around one third (32.1%) of the total income. It is also note
              worthy to state that in Sri Lanka more than 70% of the households
              spend more than half of their total expenditure on food and drinks
              which are basic necessities."
            </h4>
            <h4 className="mt-5 text-white text-base font-body max-w-3xl mx-auto text-left tracking-wide">
              Poverty in Sri Lanka is predominantly a rural phenomenon. Ninety
              percent of the total poor reside in the rural areas. The need for
              help in developing rural Sri Lanka is evident. Use our site to Get
              Involved or Support the mission today!
            </h4>
          </div>
        </div>
      </div>
    </PageWithNavAndFooter>
  );
}
