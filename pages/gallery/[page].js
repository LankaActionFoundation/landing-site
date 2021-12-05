import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import GalleryCollectionCard from "../../components/GalleryCollectionCard";
import CustomPagination from "../../components/inputs/CustomPagination";
import PageWithNavAndFooter from "../../components/layout/PageWithNavAndFooter";
import axios from "axios";

const index = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(5);

  useEffect(() => {
    if (router.query.page || currentPage) {
      const page = parseInt(router.query.page);
      if (page <= pageCount) {
        setCurrentPage(page);
      } else {
        setCurrentPage(1);
      }
    }
  }, [router]);

  const fetchGalleries = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/folder/get_all_user_folders?page=${currentPage}`,
        {
          withCredentials: true,
        }
      );
      setGalleries(data.medias);
      setPageCount(data.pages);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    if (currentPage) {
      fetchGalleries();
    }
  }, [currentPage]);

  const handlePageNavigate = (page) => {
    if (page) {
      router.push(`/gallery/${page}`);
    }
  };

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
                key={gallery._id}
                id={gallery._id}
                title={gallery.title}
                images={gallery.thumbnails}
              />
            ))}
          </div>
          <div className="w-full max-w-6xl mx-auto py-10">
            <div className="w-full flex items-center justify-center">
              <CustomPagination
                currentPage={currentPage}
                handler={handlePageNavigate}
                pageCount={pageCount}
              />
            </div>
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
