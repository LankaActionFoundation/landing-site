import Head from "next/head";
import { useEffect, useState } from "react";
import FilledButton from "../../components/buttons/FilledButton";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import PageWithNavAndFooter from "../../components/layout/PageWithNavAndFooter";
import Input from "../../components/inputs/Input";
import Select2 from "../../components/inputs/Select2";
import countries from "../../components/countries";
import { Formik } from "formik";
import * as yup from "yup";
import TextArea from "../../components/inputs/TestArea";
import {
  Datepicker,
  DatepickerEnd,
  DatepickerStart,
} from "../../components/inputs/Datepicker";
import axios from "axios";
import VolunteerSVG from "../../components/VolunteerSVG";
import Link from "next/link";
import { useRouter } from "next/router";

export default function InternationalForm() {
  const [projectList, setProjectList] = useState([]);
  const router = useRouter();

  const getProjects = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/donation/get_projects`
    );

    let projectArr = [];

    data.projects.forEach((proj) => {
      let obj = {};
      obj.name = proj.title;
      obj._id = proj._id;
      projectArr.push(obj);
    });

    setProjectList(projectArr);
  };

  const createVolunteer = async (form) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/volunteer`,
      form
    );

    console.log(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const personalInformationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("phone is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    dob: yup.date().required("Date of birth is required"),
    passport: yup.string().required("Passport is required"),
    nationality: yup.string().required("Nationality is required"),
    address: yup.string().required("Address is required"),
    starting_date: yup.date().required("Starting date is required"),
    ending_date: yup.date().required("Starting date is required"),
    project: yup.string(),
    why_do_you_want_to_work: yup.string().required("This is required"),
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      {/* <Navbar color="black" /> */}

      <div className="mt-32 p-5 2xl:px-0 min-h-screen">
        <div className="mb-10 w-full max-w-4xl mx-auto">
          <VolunteerSVG />
        </div>
        <h1 className="text-3xl md:text-7xl text-center text-gray-800 font-bold">
          Volunteer
        </h1>

        <div className="w-full mb-20 text-base max-w-xl mx-auto tracking-wide leading-snug">
          <p className="mt-5 text-gray-900">
            Because as a child of the universe you has to fulfill your
            responsibility, you need to actively engage to uplift the community
            and you want to change the world to a better place.
          </p>
          <p className="mt-5 text-gray-900">
            We are always looking for locals on the island to help support Lanka
            Vision. We need people on sites to collect information, distribute
            goods, meet other locals for community development, and to lead a
            variety of projects per region. We are also always looking for extra
            hands, ears, and support for running the site, programs, and so on.
            Since we are non profit there is limited paid staff. We count on
            community support to help those in need.
          </p>
          <p className="mt-5 text-gray-900">
            International volunteers are also always welcome. If you are
            visiting and want to get hands-on, we may not assign you to teach a
            class, or check out water sites in regions. Instead, we might ask
            you to distribute food and medicine or help out at an event.
          </p>
          <p className="mt-5 text-gray-900">
            If you are interested, get in touch and we'll get you organized
            based on location, interests, time and commitment. Whether you have
            3 hours or 3 months; there is always room for support. We encourage
            anyone and everyone to get involved. Bettering communities, you will
            surely better yourself by giving back to those in need!
          </p>

          <p className="mt-5 text-gray-900">
            Join us by clicking the form below
          </p>

          <div className="mt-5 w-full flex justify-between gap-10">
            <div className="w-full">
              <Link href="/volunteer/international-form">
                <FilledButton color="green">
                  International Volunteer
                </FilledButton>
              </Link>
            </div>

            <div className="w-full">
              <Link href="/volunteer/local-form">
                <FilledButton color="orange">Local Volunteer</FilledButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full fixed inset-0 z-30 flex items-center justify-center h-screen">
        <div
          onClick={() => router.back()}
          className="fixed z-20 inset-0 bg-black/30"
        ></div>
        <div className="z-30 overflow-y-auto h-screen py-10">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              passport: "",
              nationality: "",
              dob: new Date(),
              address: "",
              starting_date: new Date(),
              ending_date: new Date(),
              project: projectList.length > 0 ? projectList[0]._id : "",
              why_do_you_want_to_work: "",
            }}
            validationSchema={personalInformationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              createVolunteer({ ...values, type: "international" });
              setSubmitting(false);
              resetForm();
              router.back();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                className="border rounded-lg bg-white/80 backdrop-blur-md backdrop-filter"
                onSubmit={handleSubmit}
              >
                <div className="px-5 py-5 pb-3 border-b  flex items-center justify-between">
                  <h3 className="w-full text-xl font-semibold text-gray-800 ">
                    International Volunteer form
                  </h3>
                  <div
                    onClick={() => router.back()}
                    className="bg-gray-300 rounded-md p-2 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9.75 9.75L14.25 14.25"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M14.25 9.75L9.75 14.25"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="w-full p-5 flex flex-col gap-5">
                  <div className="flex flex-col md:flex-row items-start justify-center gap-5">
                    <Input
                      name="First name"
                      label="First name"
                      placeholder="First name"
                      value={values.firstName}
                      isTouched={touched.firstName}
                      onChange={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      error={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                          ? errors.firstName
                          : ""
                      }
                    />
                    <Input
                      name="Last name"
                      label="Last name"
                      placeholder="Last name"
                      value={values.lastName}
                      isTouched={touched.lastName}
                      onChange={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      error={
                        errors.lastName && touched.lastName && errors.lastName
                          ? errors.lastName
                          : ""
                      }
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start justify-center gap-5">
                    <Input
                      name="Passport"
                      label="Passport"
                      placeholder="Passport"
                      value={values.passport}
                      isTouched={touched.passport}
                      onChange={handleChange("passport")}
                      onBlur={handleBlur("passport")}
                      error={
                        errors.passport && touched.passport && errors.passport
                          ? errors.passport
                          : ""
                      }
                    />
                    <Datepicker
                      label="Date of birth"
                      st_date={values.dob}
                      onChange={(e) => {
                        values.dob = e;
                      }}
                    />
                    <Input
                      name="Phone"
                      label="Phone"
                      placeholder="94#########"
                      value={values.phone}
                      isTouched={touched.phone}
                      onChange={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      error={
                        errors.phone && touched.phone && errors.phone
                          ? errors.phone
                          : ""
                      }
                    />
                    <Input
                      name="Email"
                      label="Email"
                      placeholder="Email"
                      value={values.email}
                      isTouched={touched.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      error={
                        errors.email && touched.email && errors.email
                          ? errors.email
                          : ""
                      }
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start justify-center gap-5">
                    <Input
                      name="Nationality"
                      label="Nationality"
                      placeholder="Nationality"
                      value={values.nationality}
                      isTouched={touched.nationality}
                      onChange={handleChange("nationality")}
                      onBlur={handleBlur("nationality")}
                      error={
                        errors.nationality &&
                        touched.nationality &&
                        errors.nationality
                          ? errors.nationality
                          : ""
                      }
                    />
                    <Input
                      name="Address"
                      label="Address"
                      placeholder="Address"
                      value={values.address}
                      isTouched={touched.address}
                      onChange={handleChange("address")}
                      onBlur={handleBlur("address")}
                      error={
                        errors.address && touched.address && errors.address
                          ? errors.address
                          : ""
                      }
                    />
                  </div>
                  <div className="mb-5 flex flex-col md:flex-row items-start justify-center gap-5">
                    <DatepickerStart
                      label="Starting date"
                      startDate={startDate}
                      endDate={endDate}
                      setStartDate={(e) => {
                        values.starting_date = e;
                        setStartDate(e);
                      }}
                    />
                    <DatepickerEnd
                      label="Ending date"
                      startDate={startDate}
                      endDate={endDate}
                      setEndDate={(e) => {
                        values.ending_date_date = e;
                        setEndDate(e);
                      }}
                    />
                  </div>

                  <div className="mb-5 flex flex-col md:flex-row items-start justify-center gap-5">
                    {projectList.length > 0 && (
                      <Select2
                        name="Select a project"
                        label="Select a project"
                        onChange={(e) => {
                          values.project = e._id;
                        }}
                        value={values.project}
                        opts={projectList}
                      />
                    )}
                    <TextArea
                      name="Why do you want to work with us"
                      label="Why do you want to work with us"
                      placeholder="Why do you want to work with us"
                      value={values.why_do_you_want_to_work}
                      isTouched={touched.why_do_you_want_to_work}
                      onChange={handleChange("why_do_you_want_to_work")}
                      onBlur={handleBlur("why_do_you_want_to_work")}
                      error={
                        errors.why_do_you_want_to_work &&
                        touched.why_do_you_want_to_work &&
                        errors.why_do_you_want_to_work
                          ? errors.why_do_you_want_to_work
                          : ""
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex gap-3 justify-end py-4 px-5 bg-brandTealLight/20 border-t rounded-b-lg">
                  <div className="">
                    <FilledButton type="submit" color="teal">
                      <span className="text-sm font-medium">Save</span>
                    </FilledButton>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
