import Head from "next/head";
import Link from "next/link";
import FilledButton from "../components/buttons/FilledButton";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";
import VolunteerSVG from "../components/VolunteerSVG";
import { Formik } from "formik";
import * as yup from "yup";
import Input from "../components/inputs/Input";
import TextArea from "../components/inputs/TestArea";
import { Datepicker } from "../components/inputs/Datepicker";
import axios from "axios";

export default function Ally() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const personalInformationSchema = yup.object({
    nameOfBusiness: yup.string().required("Name of business is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    country: yup.string().required("Country is required"),
  });

  const createAlly = async (form) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/ally`,
      form
    );

    //console.log(data);
  };

  return (
    <>
      <Navbar color="black" />
      <div className="mt-32 p-5 2xl:px-0 min-h-screen">
        <div className="mb-10 w-full max-w-4xl mx-auto">
          <VolunteerSVG />
        </div>
        <h1 className="text-3xl md:text-7xl text-center text-gray-800 font-bold">
          Become an Ally
        </h1>

        <div className="w-full text-base max-w-xl mx-auto tracking-wide leading-snug">
          <p className="mt-5 text-gray-900">
            Partners like our donors and volunteers are the pillars of Lanka
            Vision Action Foundation; fundamental to the organization and
            support of our mission . Our partners are individuals or
            organizations committed to longterm support. Some create programs
            within their business structures to constantly give back while
            others make it a point to provide resource or commitment long-term.
            Healthcare practitioners, educators, manufacturers of supplies, and
            so forth - we need your support, get involved today!
          </p>
        </div>

        <div className="w-full mt-10 mb-20 max-w-xl mx-auto">
          <Formik
            initialValues={{
              nameOfBusiness: "",
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              city: "",
              state: "",
              country: "Sri Lanka",
            }}
            validationSchema={personalInformationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              createAlly({ ...values });
              setSubmitting(false);
              resetForm();
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
                className="border rounded-lg bg-white"
                onSubmit={handleSubmit}
              >
                <h3 className="w-full px-5 py-5 pb-3 border-b text-xl font-semibold text-gray-800 ">
                  Become an Ally form
                </h3>
                <div className="w-full p-5 flex flex-col gap-5">
                  <Input
                    name="Name of business"
                    label="Name of business"
                    placeholder="Name of business"
                    value={values.nameOfBusiness}
                    isTouched={touched.nameOfBusiness}
                    onChange={handleChange("nameOfBusiness")}
                    onBlur={handleBlur("nameOfBusiness")}
                    error={
                      errors.nameOfBusiness &&
                      touched.nameOfBusiness &&
                      errors.nameOfBusiness
                        ? errors.nameOfBusiness
                        : ""
                    }
                  />
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
                  {/* <div className="flex flex-col md:flex-row items-start justify-center gap-5">
                    <Input
                      name="Nic"
                      label="Nic"
                      placeholder="Nic"
                      value={values.nic}
                      isTouched={touched.nic}
                      onChange={handleChange("nic")}
                      onBlur={handleBlur("nic")}
                      error={
                        errors.nic && touched.nic && errors.nic
                          ? errors.nic
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
                  </div> */}
                  <div className="flex flex-col md:flex-row items-start justify-center gap-5">
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
                  {/* <div className="flex flex-col md:flex-row items-start justify-center gap-5">
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
                  </div> */}
                  <div className="mb-5 flex flex-col md:flex-row items-start justify-center gap-5">
                    <Input
                      name="Country"
                      label="Country"
                      placeholder="Country"
                      value={values.country}
                      isTouched={touched.country}
                      onChange={handleChange("country")}
                      onBlur={handleBlur("country")}
                      error={
                        errors.country && touched.country && errors.country
                          ? errors.country
                          : ""
                      }
                    />
                    <Input
                      name="City"
                      label="City"
                      placeholder="City"
                      value={values.city}
                      isTouched={touched.city}
                      onChange={handleChange("city")}
                      onBlur={handleBlur("city")}
                      error={
                        errors.city && touched.city && errors.city
                          ? errors.city
                          : ""
                      }
                    />
                    <Input
                      name="State"
                      label="State"
                      placeholder="State"
                      value={values.state}
                      isTouched={touched.state}
                      onChange={handleChange("state")}
                      onBlur={handleBlur("state")}
                      error={
                        errors.state && touched.state && errors.state
                          ? errors.state
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
      <Footer />
    </>
  );
}
