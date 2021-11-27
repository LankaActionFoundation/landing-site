import React, { useState } from "react";
import BlogCard from "../../components/BlogCard";
import GalleryCollectionCard from "../../components/GalleryCollectionCard";
import PageWithNavAndFooter from "../../components/layout/PageWithNavAndFooter";

const index = () => {
  const [galleries, setGalleries] = useState([
    {
      title: "Baloon Festival",
      images: [
        "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
        "https://images.unsplash.com/photo-1637452313272-9f5855b5f2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1637478847587-1740c47f65dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1637355054940-b18363493271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      ],
    },
    {
      title: "Deepavali Festival",
      images: [
        "https://images.unsplash.com/photo-1637406301895-1ca32a5d0a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        "https://images.unsplash.com/photo-1637319975981-d02f99a7a6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        "https://images.unsplash.com/photo-1637323856940-58b83b43aa10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
        "https://images.unsplash.com/photo-1637406305183-ff6d191b5880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80",
      ],
    },
    {
      title: "Baloon Festival",
      images: [
        "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
        "https://images.unsplash.com/photo-1637452313272-9f5855b5f2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1637478847587-1740c47f65dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1637355054940-b18363493271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      ],
    },
    {
      title: "Baloon Festival",
      images: [
        "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
        "https://images.unsplash.com/photo-1637452313272-9f5855b5f2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1637478847587-1740c47f65dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1637355054940-b18363493271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      ],
    },
  ]);

  return (
    <PageWithNavAndFooter>
      <div className="relative min-h-screen">
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
            Gallery
          </h1>

          <h3 className="mt-5 text-sm italic text-white leading-6 w-full max-w-2xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            rerum cum? Optio minus numquam, id iusto eaque eos nesciunt
            provident excepturi tempore corporis facere! Ab culpa mollitia non
            totam porro soluta veritatis ullam quisquam! Omnis quas ab dolor
            possimus cumque. Sint hic natus beatae labore!
          </h3>
        </div>
      </div>

      <section className="min-h-screen">
        <div className="w-full max-w-6xl mx-auto py-20 px-3 xl:px-0">
          <div className="px-3 items-center justify-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {galleries.map((gallery) => (
              <GalleryCollectionCard
                title={gallery.title}
                images={gallery.images}
              />
            ))}
          </div>
          {/* <div className="w-full flex items-center justify-center">
                <Loading />
              </div> 
            */}
        </div>
      </section>
    </PageWithNavAndFooter>
  );
};

export default index;
