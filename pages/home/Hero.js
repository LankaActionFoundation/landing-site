import Image from "next/image";
import React from "react";

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
          style={{top: '50%',  }}></div>
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
        <a href="#sectionNext"><span></span></a>
        {/* end of bg image */}
      </section>
    </>
  );
};

export default Hero;
