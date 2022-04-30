import React, { useEffect, useState } from "react";
import Head from "next/head";
import PageWithNavAndFooter from "../../../components/layout/PageWithNavAndFooter";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "../../../components/Loading";

const IndividualBlog = () => {
  const [slug, setSlug] = useState(null);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.slug) {
      setSlug(router?.query?.slug);
    }
  }, [router]);

  const fetchSingleBlog = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/blogs/get_single_blog/${slug}`,
        {
          withCredentials: true,
        }
      );
      setBlog(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      router.push("/blog/1");
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    if (slug) {
      fetchSingleBlog();
    }
  }, [slug]);

  useEffect(() => {
    if (!loading && blog) {
      const watermark = document.querySelectorAll('[data-f-id="pbf"]');
      if (watermark) {
        [...watermark].map((w) => {
          w.classList.add("hidden");
        });
      }
    }
  }, [blog, loading]);

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>

      <PageWithNavAndFooter>
        {!loading && blog && (
          <>
            <div className="relative min-h-screen">
              <div
                className="
                w-full
                h-full
                top-0
                absolute
                z-30
                bg-gradient-to-b
                from-black/90
                via-black/70
                to-black/10
              "
              ></div>

              <img
                className="w-full h-full absolute top-0 z-20 object-cover"
                src={blog.thumbnail}
                alt="cover"
              />

              <div className="absolute inset-0 z-30 w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
                <h1 className="mt-10 text-white text-6xl font-title md:text-7xl text-center">
                  {blog.title}
                </h1>

                {/* <h5 className="mt-10 text-white text-base md:text-lg">
              {blog.updatedAt}
            </h5> */}
              </div>
            </div>

            <section className="w-full px-3">
              <div className="w-full min-h-screen max-w-6xl mx-auto py-20">
                <div
                  className="fr-view"
                  dangerouslySetInnerHTML={{
                    __html: blog.body,
                  }}
                ></div>
              </div>
            </section>
          </>
        )}

        {loading && (
          <div className="min-h-screen flex items-center justify-center">
            <Loading />
          </div>
        )}
      </PageWithNavAndFooter>
    </>
  );
};

export default IndividualBlog;
