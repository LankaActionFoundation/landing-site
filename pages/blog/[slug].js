import { useRouter } from "next/dist/client/router";
import React from "react";
import PageWithNavAndFooter from "../../components/layout/PageWithNavAndFooter";
import Head from "next/head";

const IndividualBlog = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link
          href="../css/froala_style.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

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
            from-black/90
            via-black/50
            to-customBlue/50
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

            <h5 className="mt-10 text-white text-base md:text-lg">
              Aug 19 2021
            </h5>
          </div>
        </div>

        <section className="w-full">
          <div className="w-full max-w-6xl mx-auto py-20">
            <div
              className="fr-view"
              dangerouslySetInnerHTML={{
                __html: ``,
              }}
            ></div>
          </div>
        </section>
      </PageWithNavAndFooter>
    </>
  );
};

export default IndividualBlog;
