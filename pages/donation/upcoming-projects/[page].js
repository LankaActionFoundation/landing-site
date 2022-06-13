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

  const fetchAPI = async () => {
  //   var data = JSON.stringify({
  //     "collection": "donations",
  //     "database": "myFirstDatabase",
  //     "dataSource": "lankaaction",
  //     "filter": {
  //       "isComplete": "true"
  //     },
  // });
              
  // var config = {
  //     method: 'post',
  //     url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/action/find`,
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Request-Headers': '*',
  //         'api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
  //     },
  //     data : data
  // };
              
  // axios(config)
  //     .then(function (response) {
  //         console.log('api-projects',JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //         console.log('api-error',error);
  //     });


  const response = await fetch('/api/getpastprojects', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: ''
  });

  const data = await response.json();

  console.log('aaaaaaaaaaaa', data.data.documents);

  }

  useEffect(() => {
    if (currentPage) {
      fetchDonations();
      fetchAPI();
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
          

          <div className="w-full max-w-7xl mx-auto px-3 lg:px-0 pt-20 mt-20">
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
