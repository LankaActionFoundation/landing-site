import React from 'react';
import Link from "next/link";

const Qualities = () => {

    return(<>
    <section className="bg-white w-full">
            <div className="w-full py-20 max-w-6xl mx-auto px-3 lg:px-0">
              <h2 className="mt-5 text-3xl md:text-6xl font-title text-brandTealDark w-full mx-auto block text-center font-bold">
                We are looking for international partners to join hands with us to eleminate poverty and uplift the comunity.
              </h2>

              <h5 className="w-full my-10 max-w-5xl mx-auto block text-center text-base md:text-lg text-brandTealDark">
                We are committed to uplift the communities by providing quality
                education, basic necessities, including proper sanitation for an
                appropriate social protection mechanism. Our team and volunteers
                are pledged to operate following our values.
              </h5>

      <div style={{position:'relative', marginTop:'100px'}}><Link href={`/become-an-ally`}><div className="viewMore">Join us</div></Link></div>
              
            </div>
          </section>
    </>);
}

export default Qualities;