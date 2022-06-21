import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import PageWithNavAndFooter from "../../components/layout/PageWithNavAndFooter";
import Loading from "../../components/Loading";
import axios from "axios";
import Head from "next/head";
import TextInput from "../../components/inputs/TextInput";
import TextArea from "../../components/inputs/TestArea";
import Select from "../../components/inputs/Select";
import Select2 from "../../components/inputs/Select2";
import Projects from "../home/Projects";
import { Input } from "postcss";

const Contact = () => {
  const [projectList, setProjectList] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitState, setSubmitState] = useState(false);
  const [initialState, setInitialState] = useState(true);
  const [sentMessage, setSentMessage] = useState(' ');

  const [donations, setDonations] = useState(null);
  const [loading, setLoading] = useState(false);

  const stepCount = 1;

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

    console.log("projects", projectArr);

    setProjectList(projectArr);
  };

  useEffect(() => {
    if (currentStep >= stepCount) {
      setSubmitState(true);
    } else {
      setSubmitState(false);
    }

    if (currentStep > 1) {
      setInitialState(false);
    } else {
      setInitialState(true);
    }
  }, [currentStep]);

  useEffect(() => {
    getProjects();
  }, []);

  const nextStep = (step) => {
    if (step < stepCount) {
      step = step + 1;
      setCurrentStep(step);
    }
  };

  const prevStep = (step) => {
    if (step > 1) {
      step = step - 1;
      setCurrentStep(step);
    }
  };

  const formSubmit = (form) => {
    form.target.preventDefault();
    console.log("form", form.target["name"].value);
  };

  const Step = (stepId) => {
    return (
      <>
        <div
          className={currentStep === stepId ? "step active-step" : "step"}
        ></div>
      </>
    );
  };
  const opts = [
    { name: "aaaa", _id: "0123456" },
    { name: "bbb", _id: "0123456987" },
  ];

const handleSubmit = async (form) => {
  form.preventDefault();
  // console.log('formmmmmmmmmmmmmm',JSON.stringify(form.target));

const formData = new FormData(form.target);
// Create an object to hold the name/value pairs
const pairs = {};

// Add each name/value pair to the object
for (const [name, value] of formData) {
  pairs[name] = value;
}

// console.log('aaaaaaaaa', JSON.stringify(pairs, null, 2));
setSentMessage("Message recieved, thank you for contacting us");
form.target.reset();
setCurrentStep(1);
setSubmitState(false);
  await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pairs, null, 2),
  }).then((res) => {
    console.log('res',res.status);
    
  });
}

  return (
    <>
      

      <section className="bg-white w-full">
        <div
          className="ContactContainer grid grid-cols-1 md:grid-cols-2 gap-0 bg-orange"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Femergency%2Femergency-2.jpg?alt=media&token=4a0e6997-6555-494a-87f0-7262572924c2)`,
          }}
        >
          <div></div>
          <div className="contactForm">
            <div className="heading-2">
              <h2 className="mt-5 text-3xl md:text-5xl font-title text-gray-800  sm:w-auto  mx-auto block text-left font-bold pull-left">
                Request for Support
              </h2>
              
              <div className="clear-both"></div>
            </div>
            <br />
            <h3 className="text-center text-xl">{sentMessage}</h3>
            <br/>

            <div className="stepCont">
              <form onSubmit={(e)=>handleSubmit(e)}>
                <div
                  className={currentStep === 1 ? "step active-step" : "step"}
                >
                  <h3 className="StepHeading text-2xl ">Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div class="flex items-center border-b border-teal-500 py-2">
                      <input
                        name="name"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Name"
                        aria-label="Full name"
                        required
                      />
                    </div>

                    <div class="flex items-center border-b border-teal-500 py-2">
                      <input
                        name="email"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="email"
                        placeholder="Email"
                        aria-label="Full name"
                        required
                      />
                    </div>
                    <div class="flex items-center border-b border-teal-500 py-2">
                      <input
                        name="phone"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="tel"
                        placeholder="Phone"
                        aria-label="Full name"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div class="flex items-center border-b border-teal-500 py-2 mt-4">
                      <textarea
                        name="address"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder="Address"
                        aria-label="Full name"
                        required="required"
                      ></textarea>
                    </div>
                  </div>
                  <br/>
                  <h3 className="StepHeading text-2xl">What is the biggest struggle you're facing</h3>
                  <input type={'hidden'} name='project' value={'Emergency Relief'} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                    <div class="flex items-center border-b border-teal-500 py-2 mt-4">
                      <textarea
                        name="message"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder="Message"
                        aria-label="Full name"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* <div
                  className={currentStep === 2 ? "step active-step" : "step"}
                >
                  <h3 className="StepHeading text-2xl">What is the biggest </h3>
                  <br/>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div style={{ position: "relative" }}>
                      {projectList ? (
                        <select
                          name="project"
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          {projectList.map((project, i) => {
                            return (
                              <option value={project.name}>
                                {project.name}
                              </option>
                            );
                          })}
                          <option value={"Other"}>Other</option>
                        </select>
                      ) : (
                        ""
                      )}

                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                    <div class="flex items-center border-b border-teal-500 py-2 mt-4">
                      <textarea
                        name="message"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder="Message"
                        aria-label="Full name"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div> */}

                <div className="clear-both mt-8">
                  {!initialState ? (
                    <button
                      class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded pullLeft"
                      type="button"
                      onClick={(e) => {
                        prevStep(currentStep);
                      }}
                    >
                      Back
                    </button>
                  ) : (
                    ""
                  )}

                  {!submitState ? (
                    <button
                      class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded pullRight"
                      type="button"
                      onClick={(e) => {
                        nextStep(currentStep);
                      }}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded pullRight"
                      type="Submit"
                      onClick={(e) => {}}
                    >
                      Send
                    </button>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      {/* 2nd section */}
      {/* <Projects donations={donations}/> */}
          {/* end of 2nd section */}
    </>
  );
};
export default Contact;
//T2dutf
