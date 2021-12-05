import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PageWithNavAndFooter from "../../../components/layout/PageWithNavAndFooter";
import Loading from "../../../components/Loading";
import axios from "axios";
import CustomPagination from "../../../components/inputs/CustomPagination";

const SingleGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(5);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handlePageNavigate = (page) => {
    if (page) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    if (router.query.gallery) {
      const gallery = router.query.gallery;
      setId(gallery);
      // if (page <= pageCount) {
      //   setCurrentPage(page);
      // } else {
      //   setCurrentPage(1);
      // }
    }
  }, [router]);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/folder/get_user_folder_medias/${id}?page=${currentPage}`,
        {
          withCredentials: true,
        }
      );
      setImages(data.medias);
      setTitle(data.title);
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
    if (id) {
      fetchGallery();
    }
  }, [id, currentPage]);

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
        {!loading && title && (
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
                {title}
              </h1>
            </div>
          </div>
        )}

        <section className="min-h-screen">
          <div className="w-full max-w-6xl mx-auto py-20 px-3 xl:px-0">
            {!loading && images.length > 0 && (
              <div className="px-3 items-center justify-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {images.map((image) => (
                  <div
                    onClick={() => {
                      setSelectedImage(image.url);
                    }}
                    className="w-full h-full cursor-pointer"
                  >
                    <img src={image.url} alt="" className="w-full h-full" />
                  </div>
                ))}
              </div>
            )}
            {loading && (
              <div className="w-full flex items-center justify-center">
                <Loading />
              </div>
            )}
          </div>
          {!loading && (
            <div className="w-full max-w-6xl mx-auto py-10">
              <div className="w-full flex items-center justify-center">
                <CustomPagination
                  currentPage={currentPage}
                  handler={handlePageNavigate}
                  pageCount={pageCount}
                />
              </div>
            </div>
          )}
        </section>
      </PageWithNavAndFooter>
    </>
  );
};

export default SingleGallery;
