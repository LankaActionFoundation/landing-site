import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import DonationCard from "../../../components/DonationCard";
import CustomPagination from "../../../components/inputs/CustomPagination";
import PageWithNavAndFooter from "../../../components/layout/PageWithNavAndFooter";
import Loading from "../../../components/Loading";
import axios from "axios";
import Head from "next/head";
import CircularDonationCard from "../../../components/CircularDonationCard";

const Donations = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();
  const [pageCount, setPageCount] = useState(5);
  const [donations, setDonations] = useState(null);
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
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/donation/get_all_past_donations?page=${currentPage}`,
        {
          withCredentials: true,
        }
      );
      setDonations(data.data);
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
      fetchDonations();
    }
  }, [currentPage]);

  const handlePageNavigate = (page) => {
    if (page) {
      router.push(`/donation/past-projects/${page}`);
    }
  };

  return (
    <PageWithNavAndFooter>
      <Head>
        <title>LVAF| Past Projects</title>
      </Head>
      {!loading && donations && (
        <>
          

          <div className="w-full max-w-7xl mx-auto px-3 lg:px-0 pt-20 mt-20">
            <div className="px-3 items-center justify-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {donations.map((donation) => (
                <CircularDonationCard
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
