import Image from "next/image";
import Link from "next/link";
import React from "react";
import FilledButton from "../../components/buttons/FilledButton";

const Hero = () => {

  // bg-gradient-to-b
            // from-black/0
            // via-black/5
            // to-brandTealDark
  return (
    <>
      <section className="h-screen" id="section05">
        {/* bg image */}
        <div className="w-full relative h-full z-20">
          <div
            className="
            w-full
            h-2/4
            absolute
            top-0
            z-30
            bg-gradient-to-b
            from-black/0
            via-brandTealDark/20
            to-brandTealDark
          "
          style={{top: '50%',  }}>
            <div
                  className="absolute bottom-0  md:flex-none flex flex-col justify-end py-10 px-3 xl:py-10 max-w-6xl mx-auto  homeTextCont heroTextCont"
                  style={{}}
                >
                  

                  <h2 className="mt-2 mb-7 text-2xl md:text-5xl tracking-wide leading-loose text-white px-2 py-2" style={{textWrap:'break-word', color:'#000', backgroundColor: '#fff'}}>
                  Sri Lankan economic crisis puts millions at risk.
                  </h2>
                  
                  <div className='relative w-32 align-center clear-both'>
                  <a
              href="/request"
            >
              {/* <FilledButton color="yellow">
                <span className="text-black">Request help</span>
              </FilledButton> */}
              <div className="viewMore2 mx-2">Request Help</div>
            </a>
            {/* <a href={`/request`}><div className="viewMore clear-both">View More</div></a> */}
                  </div>
                  {/* card */}

                  {/* end of card */}
                </div>
          </div>
          <video
            muted={true}
            loop={true}
            autoPlay={true}
            className="w-full h-full absolute top-0 z-20 object-cover 
            "
          >
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fhomepage%2Fhome-video.mp4?alt=media&token=4a2e53e2-1557-4c25-923e-d887571aa181"
            ></source>
          </video>

          {/* <Image className="" src={`https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2FdonateRequest%2Fdonate-one.jpg?alt=media&token=b404cc55-d903-4f94-bb9b-cfc115b7d53f`} alt="card thumbanail" layout="fill" objectFit="cover"/> */}

          
          {/* end of hero */}
        </div>
        {/* <a href="#sectionNext"><span></span></a> */}
        {/* end of bg image */}
      </section>
    </>
  );
};

export default Hero;
