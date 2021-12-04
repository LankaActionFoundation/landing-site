import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import CustomPagination from "../../components/inputs/CustomPagination";
import PageWithNavAndFooter from "../../components/layout/PageWithNavAndFooter";
import Loading from "../../components/Loading";
import axios from "axios";

const Blogs = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();
  const [pageCount, setPageCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

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

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/blogs/get_all_blogs?page=${currentPage}`,
        {
          withCredentials: true,
        }
      );
      setBlogs(data.data);
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
      fetchBlogs();
    }
  }, [currentPage]);

  const handlePageNavigate = (page) => {
    if (page) {
      router.push(`/blog/${page}`);
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
          "
        ></div>

        <img
          className="w-full h-full absolute top-0 z-20 object-cover"
          src="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="cover"
        />

        <div className="absolute inset-0 z-30 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
          <h1 className="mt-10 text-white text-6xl font-title md:text-7xl text-center">
            Marking World humanitarian day in 2021
          </h1>

          <h5 className="mt-10 text-white text-base md:text-lg">Aug 19 2021</h5>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto py-20 px-3 xl:px-0">
        {!loading && (
          <div className="px-3 items-start justify-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                widthFull
                title={blog.title}
                subTitle={blog.subtitle}
                thumbnail={blog.thumbnail}
                category="photo"
                slug={blog.slug}
                date="2021-10-30T05:46:08.353+00:00"
              />
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
    </PageWithNavAndFooter>
  );
};

export default Blogs;
