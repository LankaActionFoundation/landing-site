import Head from "next/head";
import { useEffect, useState } from "react";
import FilledButton from "../components/buttons/FilledButton";

import Select from "../components/inputs/Select";
import TextInput from "../components/inputs/TextInput";
import { Switch } from "@headlessui/react";
import DonationCard from "../components/DonationCard";
import BlogCard from "../components/BlogCard";
import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";
import ImpactSection from "./home/ImpactSection";
import DonateRequestSectionTwo from "./home/DonateRequestSectionTwo";
import DonateRequestSectionOne from "./home/DonateRequestSectinsOne";
import axios from "axios";
import Loading from "../components/Loading";
import Hero from "./home/Hero";
import Qualities from "./home/Qualities";
import Mission from "./home/Mission";
import Projects from './home/Projects';
import Blogs from './home/Blogs';
import Contact from './home/Contac';
import UpcommingEvents from './home/UpcommingEvents';

export default function Home() {
  const [amounts, setAmounts] = useState([100, 500, 1000]);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [isMonthlyDonation, setIsMonthlyDonation] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [donations, setDonations] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHomepageBlog = async () => {
    console.log("local variable", process.env.NEXT_PUBLIC_SERVER_ROUTE);
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/blogs/get_homepage_blogs`,
        {
          withCredentials: true,
        }
      );
      setBlogs(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    fetchHomepageBlog();
  }, []);

  const fetchHomepageDonation = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/donation/get_homepage_donations`,
        {
          withCredentials: true,
        }
      );
      setDonations(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        console.log({ err });
      }
    }
  };

  useEffect(() => {
    fetchHomepageDonation();
  }, []);

  return (
    <>
      <div className="md:hidden z-50 fixed inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="p-3 pointer-events-auto absolute bottom-0 right-0 w-full">
            <a
              target="_blank"
              href="https://www.gofundme.com/f/help-sri-lanka-free-them-from-labour?utm_source=customer&utm_medium=copy_link_all&utm_campaign=p_cp+share-sheet"
            >
              <FilledButton color="yellow">
                <span className="text-black">Donate now</span>
              </FilledButton>
            </a>
          </div>
        </div>
      </div>
      <div className="font-body">
        <Head>
          <title>Lanka Vision Action Foundation</title>
        </Head>

        <PageWithNavAndFooter color="bg-black/70">
          {/* hero */}
          <Hero />
          {/* end of hero */}

          {/* Emergency contact */}


          {/* End of Emergency contact */}

          {/* 2nd section */}
          <Projects donations={donations}/>
          {/* end of 2nd section */}

          {/* Donate Request Section one */}
          <DonateRequestSectionOne />
          {/* end of the donate request section one */}

          {/* upcomming events */}

          {/* <UpcommingEvents /> */}

          {/* end upcomming events */}

          {/* 3rd section */}
          <Mission />
          {/* end of 3rd section */}

          {/* impact of your donation */}
          {/* <ImpactSection /> */}
          {/*end of  impact of your donation */}
          {/* Donate Request Section */}
          <DonateRequestSectionTwo />
          {/* end of the donate request section */}
          {/* 4th section */}

          <Qualities />

          {/* end of 4th section */}

          {/* 5th section */}
          <Blogs blogs={blogs}/>

          {loading && <Loading />}
          {/* end of 5th section */}
        </PageWithNavAndFooter>
      </div>
    </>
  );
}
