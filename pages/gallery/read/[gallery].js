import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PageWithNavAndFooter from "../../../components/layout/PageWithNavAndFooter";
import Loading from "../../../components/Loading";
import axios from "axios";
import CustomPagination from "../../../components/inputs/CustomPagination";
// import ResponsiveGallery from 'react-responsive-gallery';
import GalleryItem from "../../../components/gallery/GalleryItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const SingleGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState({
    url: "",
    caption: "",
    desc: "",
  });
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(5);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const [imgs, setImgs] = useState([]);
  const [imgUrls, setImgUrls] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    var imgDetails = [];
    images.forEach((img) => {
      var imgDetail = {
        src: img.url,
        caption: img.caption,
      };
      imgUrls.push(img.url);
      imgDetails.push(imgDetail);
    });
    setImgs(imgDetails);
    // console.log("imgs", imgUrls);
  }, [images]);

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

  const ImgGallery = () => {
    // if (typeof window !== 'undefined') {
    //   //here `window` is available
    //   return (<>
    //   <ResponsiveGallery images={imgs} useLightBox={true}/>
    //   </>);
    // }
    // else{
    //   return(<></>);
    // }
  };
  const clickImage = (e) => {
    // console.log("e", e);
    setPhotoIndex(e);
    setIsOpen(true);
    console.log("photo index", imgs[photoIndex]);
  }
  const ImagesComp = imgs.map((imgDetail, i) => {
    return <GalleryItem image={imgDetail} clickImage={clickImage} imageIndex={i}/>;
  });

  

  return (
    <>
      {/* {selectedImage.url.length > 0 && (
        <div
          onClick={() => setSelectedImage({ url: "", caption: "", desc: "" })}
          className="w-screen h-full z-[300] fixed inset-0 bg-black/70 backdrop-filter backdrop-blur-xl"
        >
          <button
            onClick={() => setSelectedImage({ url: "", caption: "", desc: "" })}
            className="fixed top-0 right-0 z-[500] w-8 h-8 mt-10 mr-10 focus:outline-none bg-gray-600 outline-none rounded-md md:mt-10 md:mr-10 text-white"
          >
            <svg className=" text-white" fill="none" viewBox="0 0 24 24">
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

          <div className="w-full flex flex-col md:flex-row items-start justify-center h-full">
            <img
              src={selectedImage.url}
              alt=""
              className="object-contain md:object-cover w-full h-full md:w-4/6 md:h-full"
            />

            <div className="w-full md:w-2/6 flex-shrink-0 md:h-screen overflow-y-auto">
              <p className="p-5 pb-20 md:pb-0 md:p-5 md:mt-20 w-full flex-shrink-0 whitespace-pre-line text-white">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )} */}

{isOpen && imgs.length > 0 && (
 
          <Lightbox
            mainSrc={imgs[photoIndex].src}
            imageTitle={imgs[photoIndex].caption}
            nextSrc={imgs[(photoIndex + 1) % imgs.length]}
            prevSrc={imgs[(photoIndex + imgs.length - 1) % imgs.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              {
                const photoI = (photoIndex + imgs.length - 1) % imgs.length;
                setPhotoIndex(photoI);
              }
              
            }
            onMoveNextRequest={() =>
              {
                
                  const photoI = (photoIndex + 1) % imgs.length;
                  setPhotoIndex(photoI);

              }
              
            }
          />
        )}

      <PageWithNavAndFooter>
        <section className="min-h-screen">
          <div className="pt-48 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-gray-800 text-6xl font-title md:text-8xl text-center">
              {title}
            </h1>
          </div>

          <div className="w-full max-w-6xl mx-auto py-20 px-3 xl:px-0">
            {!loading && imgs.length > 0 && (
              <div className="">
                {/* {images.map((image) => (
                  <div
                    onClick={() => {
                      setSelectedImage({
                        url: image.url,
                        caption: image.caption,
                        desc: image.description,
                      });
                    }}
                    className="w-full h-full cursor-pointer"
                  >
                    <img
                      src={image.url}
                      alt=""
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                ))} */}

                {/* <ImgGallery /> */}
                {/* {imgs.length} */}
                <div className="image-list">{ImagesComp}</div>
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
