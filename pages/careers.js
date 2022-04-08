import Head from "next/head";
import { useEffect, useState } from "react";
import FilledButton from "../components/buttons/FilledButton";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";
import Input from "../components/inputs/Input";
import Select2 from "../components/inputs/Select2";
import countries from "../components/countries";
import { Formik } from "formik";
import * as yup from "yup";
import TextArea from "../components/inputs/TestArea";
import { Datepicker } from "../components/inputs/Datepicker";
import axios from "axios";
import Link from "next/link";
export default function Careers() {
  const [cvFile, setCvFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [done, setDone] = useState(false);

  const createCareer = async (formData) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/career`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (data) {
      setDone(true);
    }
  };

  const handleCv = (e) => {
    setFileError(null);
    const file = e.target.files[0];
    if (file.type === "application/pdf") {
      setCvFile(file);
    } else {
      resetFile();
      setFileError("Invalid file type");
    }
  };

  const resetFile = () => {
    document.getElementById("cv").value = null;
    setCvFile(null);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const personalInformationSchema = yup.object({
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
    address: yup.string().required("Address is required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
  });
  return (
    <>
      <Head>
        <title>LVAF | Careers</title>
      </Head>
      <Navbar color="black" />

      <div className="w-full max-w-screen-lg mx-auto mt-32 p-5 py-20 2xl:px-0 min-h-screen">
        {!done && (
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              address: "",
              city: "",
              state: "",
              country: "Sri Lanka",
            }}
            validationSchema={personalInformationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (cvFile) {
                var formData = new FormData();
                const data = JSON.stringify(values);
                formData.append("file", cvFile);
                formData.set("data", data);
                if (formData.get("data")) {
                  console.log(formData.get("data"));
                  createCareer(formData);
                  resetForm();
                  setCvFile(null);
                  document.getElementById("cv").value = null;
                  setSubmitting(false);
                }
              }
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
                  Career form
                </h3>
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
                  <label
                    className="inline-flex flex-shrink-0 whitespace-nowrap gap-2 text-sm font-medium text-gray-800"
                    htmlFor="cv"
                  >
                    Upload your CV (only pdf is allowed)
                  </label>
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      id="cv"
                      type="file"
                      onChange={handleCv}
                      className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:cursor-pointer
                      file:rounded-lg file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-brandTealDark
                      hover:file:bg-blue-100
                    "
                    />
                    <p className="mt-2 text-xs text-red-600">{fileError}</p>
                  </label>
                </div>
                <div className="w-full flex gap-3 justify-end py-4 px-5 bg-brandTealLight/20 border-t rounded-b-lg">
                  <div className="">
                    <FilledButton type="submit" color="teal">
                      <span className="text-sm font-medium">Send</span>
                    </FilledButton>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        )}

        {done && (
          <div className="h-[60vh] w-full flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">
              Form has been submitted. Good luck
            </h1>

            <Link href="/">
              <div className="mt-5">
                <FilledButton color="blue">Return to home</FilledButton>
              </div>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
