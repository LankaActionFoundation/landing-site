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
            className="w-full h-full absolute top-0 z-20 object-cover"
          >
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fhomepage%2Fhome-video.mp4?alt=media&token=4a2e53e2-1557-4c25-923e-d887571aa181"
            ></source>
          </video>

          {/* hero */}
          {/* <div className="absolute bottom-0 mt-16 md:mt-96 xl:mt-[35rem] top-0 inset-x-0 z-30">
            <div
              className="absolute bottom-0 pb-20 md:pb-0 md:h-auto h-screen md:flex-none flex flex-col justify-end w-full py-3 px-3 xl:px-0 max-w-6xl mx-auto"
              style={{ marginLeft: "50%", transform: "translate(-50%)" }}
            >
              <h4 className="text-base md:text-2xl text-white">
                <span className="text-base md:text-2xl text-brandOrange">
                  We,{" "}
                </span>
                Lanka Vision Action Foundation{" "}
              </h4>

              <h1 className="mt-2 mb-7 text-xl md:text-5xl tracking-wide leading-loose text-white">
                Transforming the{" "}
                <span className="text-brandOrange text-xl md:text-6xl">
                  most vulnerable communities
                </span>{" "}
                in Sri Lanka towards a
                <span className="text-brandOrange text-xl md:text-6xl">
                  {" "}
                  sustainable standard of living.
                </span>
              </h1>

              
            </div>
          </div> */}
          {/* end of hero */}
        </div>
        <a href="#sectionNext"><span></span></a>
        {/* end of bg image */}
      </section>
    </>
  );
};

export default Hero;
