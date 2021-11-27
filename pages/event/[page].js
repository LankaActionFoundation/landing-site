import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import CustomPagination from "../../components/inputs/CustomPagination";
import PageWithNavAndFooter from "../../components/layout/PageWithNavAndFooter";
import Loading from "../../components/Loading";

const Donations = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();
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

  const handlePageNavigate = (page) => {
    if (page) {
      router.push(`/event/${page}`);
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
            via-black/70
            to-black/20
          "
        ></div>

        <img
          className="w-full h-full absolute top-0 z-20 object-cover"
          src="https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="cover"
        />

        <div className="absolute inset-0 z-30 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
          <h1 className="text-white text-6xl font-title md:text-8xl text-center">
            Fundraiser Funding
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

      <div className="w-full max-w-6xl mx-auto py-20 px-3 xl:px-0">
        <div className="px-3 items-center justify-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
            <BlogCard
              key={val}
              widthFull
              title="New Chance for children"
              subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                      commodi corrupti, unde dolores autem consequatur? Quae officiis
                      ducimus eos officia!"
              thumbnail="https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          ))}
        </div>
        {/* <div className="w-full flex items-center justify-center">
          <Loading />
        </div> */}
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
    </PageWithNavAndFooter>
  );
};

export default Donations;
