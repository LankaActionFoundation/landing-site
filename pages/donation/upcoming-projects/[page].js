import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import DonationCard from "../../../components/DonationCard";
import CustomPagination from "../../../components/inputs/CustomPagination";
import PageWithNavAndFooter from "../../../components/layout/PageWithNavAndFooter";
import Loading from "../../../components/Loading";
import axios from "axios";
import Head from "next/head";
import CircularDonationCard from "../../../components/CircularDonationCard";
import Link from "next/link";

const Donations = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();
  const [pageCount, setPageCount] = useState(5);
  const [donations, setDonations] = useState(null);
  const [featured, setFeatured] =  useState(null);
  const [loading, setLoading] = useState(false);

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

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/donation/get_all_upcomming_donations?page=${currentPage}`,
        {
          withCredentials: true,
        }
      );
      setDonations(data.data);
      setPageCount(data.pages);
      // console.log(data);
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


  const fetchFeaturedProject = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/donation/get_featured_project`,
        {
          withCredentials: true,
        }
      );
      setFeatured(data.data);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  const fetchAPI = async () => {
 


  const response = await fetch('/api/getpastprojects', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: ''
  });

  const data = await response.json();

  // console.log('aaaaaaaaaaaa', data.data.documents);

  }

  useEffect(() => {
    if (currentPage) {
      fetchDonations();
      fetchAPI();
      fetchFeaturedProject();
      // console.log('api',`${process.env.NEXT_PUBLIC_API_ENDPOINT}`);
    }
  }, [currentPage]);

  const handlePageNavigate = (page) => {
    if (page) {
      router.push(`/donation/upcoming-projects/${page}`);
    }
  };

  return (
    <PageWithNavAndFooter>
      <Head>
        <title>LVAF| Upcoming Projects</title>
      </Head>
      {!loading && donations && (
        <>
          
          <div className="w-full">

            <div className="w-full max-w-7xl mx-auto px-3 lg:px-0 pt-20 md:mt-20">
              
                {featured? featured.map((f) => (
                    <>
                    <div className="featured-project-image" style={{}}>
                      <img src={f.thumbnail}/>
                      </div>
                      <div className="featured-project-text pt-10 md:pt-40">
                <h2 className="mt-5 text-left text-teal text-lg md:text-4xl font-bold text-gray-800 text-center">
                  {f.title}
                </h2>
                <p className="mt-5 text-justify featured-project-paragraph text-md md:text-3xl p-5 pt-0 text-bold">
                  {f.subtitle}
                </p>

                <Link href={`/donation/upcoming-projects/read/${f.slug}`}><div className="viewMore">View More</div></Link>
              </div>
                    </>
                  )): ""}
              

              <div className="clear-both"></div>

            </div>

          </div>
          <div className="w-full max-w-7xl mx-auto px-3 lg:px-0 pt-20">
            <div className="px-3 items-center justify-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {donations.map((donation) => (
                <CircularDonationCard
                  type="upcoming"
                  key={donation._id}
                  widthFull
                  title={donation.title}
                  subTitle={donation.subtitle}
                  thumbnail={donation.thumbnail}
                  raised={donation.reached}
                  goal={donation.goal}
                  slug={donation.slug}
                  subtitle={donation.subtitle}
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
        </>
      )}

      {loading && (
        <div className="min-h-screen flex items-center justify-center">
          <Loading />
        </div>
      )}
    </PageWithNavAndFooter>
  );
};

export default Donations;
