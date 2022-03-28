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
import { Datepicker } from "../../components/inputs/Datepicker";
import axios from "axios";
export default function LocalForm() {
  const [projectList, setProjectList] = useState([]);

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
    nic: yup.string().required("NIC is required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    dob: yup.date().required("Date of birth is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    starting_date: yup.date().required("Starting date is required"),
    project: yup.string(),
    why_do_you_want_to_work: yup.string().required("This is required"),
  });
  return (
    <>
      <Navbar color="black" />

      <div className="w-full max-w-screen-lg mx-auto mt-32 p-5 py-20 2xl:px-0 min-h-screen">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            nic: "",
            phone: "",
            email: "",
            dob: new Date(),
            address: "",
            city: "",
            state: "",
            starting_date: new Date(),
            project: projectList.length > 0 ? projectList[0]._id : "",
            why_do_you_want_to_work: "",
          }}
          validationSchema={personalInformationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log({ values });
            createVolunteer({ ...values, type: "local" });
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
                Local Volunteer form
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
                      errors.firstName && touched.firstName && errors.firstName
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
                    name="Nic"
                    label="Nic"
                    placeholder="Nic"
                    value={values.nic}
                    isTouched={touched.nic}
                    onChange={handleChange("nic")}
                    onBlur={handleBlur("nic")}
                    error={
                      errors.nic && touched.nic && errors.nic ? errors.nic : ""
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
                  <Datepicker
                    label="Starting date"
                    st_date={values.starting_date}
                    onChange={(e) => {
                      values.starting_date = e;
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
      <Footer />
    </>
  );
}
