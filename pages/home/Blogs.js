import React from "react";
import Link from "next/link";
import FilledButton from "../../components/buttons/FilledButton";
import BlogCard from "../../components/BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <>
      <section className="bg-white w-full">
        <div className="w-full py-20 max-w-6xl mx-auto px-3 lg:px-0">
          <div className="">
            {blogs && blogs.length > 0 && (
              <>
                <div className="heading-2">
                  <h2 className="mt-5 text-3xl md:text-5xl font-title text-gray-800  sm:w-auto  mx-auto block text-left font-bold pull-left">
                    Latest Articles
                  </h2>
                  <div className="viewAll">
                    <Link href={"/blog/1"}>View All</Link>
                  </div>
                  <div className="clear-both"></div>
                </div>

                <div className="mt-10 w-full lg:w-auto flex flex-col md:flex-row items-center justify-center gap-4">
                  {blogs.map((blog) => (
                    <div className="w-full lg:max-w-md">
                      <BlogCard
                        widthFull
                        slug={blog.slug}
                        title={blog.title}
                        subTitle={blog.subtitle}
                        thumbnail={blog.thumbnail}
                        category={blog.category}
                        date={blog.updated_at}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
