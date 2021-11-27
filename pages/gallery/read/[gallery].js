import React, { useState } from "react";
import PageWithNavAndFooter from "../../../components/layout/PageWithNavAndFooter";

const SingleGallery = () => {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1637248921272-55cb27d12a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    "https://images.unsplash.com/photo-1637452313272-9f5855b5f2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1637478847587-1740c47f65dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1637355054940-b18363493271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    "https://images.unsplash.com/photo-1637406301895-1ca32a5d0a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    "https://images.unsplash.com/photo-1637319975981-d02f99a7a6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    "https://images.unsplash.com/photo-1637323856940-58b83b43aa10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
    "https://images.unsplash.com/photo-1637406305183-ff6d191b5880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80",
    "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    "https://images.unsplash.com/photo-1637452313272-9f5855b5f2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1637478847587-1740c47f65dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1637355054940-b18363493271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    "https://images.unsplash.com/photo-1637452313272-9f5855b5f2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1637478847587-1740c47f65dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1637355054940-b18363493271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  ]);

  const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
      {selectedImage.length > 0 && (
        <div
          onClick={() => setSelectedImage("")}
          className="w-full h-full z-[300] fixed inset-0 bg-black/70 backdrop-filter backdrop-blur-xl p-3 md:p-20"
        >
          <button
            onClick={() => setSelectedImage("")}
            className="focus:outline-none outline-none fixed top-0 right-0 z-[500] w-8 h-8 mt-1 mr-1 md:mt-10 md:mr-10 text-white"
          >
            <svg
              className="fixed top-0 right-0 z-[500] w-8 h-8 mt-10 mr-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.25 6.75L6.75 17.25"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6.75 6.75L17.25 17.25"
              ></path>
            </svg>
          </button>

          <img
            src={selectedImage}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      )}

      <PageWithNavAndFooter>
        <div className="relative min-h-[70vh]">
          <div
            className="
            w-full
            h-full
            top-0
            absolute
            z-30
            bg-gradient-to-b
            from-black
            via-black/20
            to-black/5
          "
          ></div>

          <img
            className="w-full h-full absolute top-0 z-20 object-cover"
            src="https://images.unsplash.com/photo-1637355054941-c0426714da57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="cover"
          />

          <div className="absolute inset-0 z-30 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-white text-6xl font-title md:text-8xl text-center">
              Deepavali Festival
            </h1>
          </div>
        </div>

        <section className="min-h-screen">
          <div className="w-full max-w-6xl mx-auto py-20 px-3 xl:px-0">
            <div className="px-3 items-center justify-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {images.map((image) => (
                <div
                  onClick={() => {
                    setSelectedImage(image);
                  }}
                  className="w-full h-full cursor-pointer"
                >
                  <img src={image} alt="" className="w-full h-full" />
                </div>
              ))}
            </div>
            {/* <div className="w-full flex items-center justify-center">
                <Loading />
              </div> 
            */}
          </div>
        </section>
      </PageWithNavAndFooter>
    </>
  );
};

export default SingleGallery;
