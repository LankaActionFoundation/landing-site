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

const Contact = () => {
    const [projectList, setProjectList] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
    const [submitState, setSubmitState] = useState(false);
    const [initialState, setInitialState] = useState(true);

  const stepCount = 2;

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

    console.log('projects', projectArr);

    setProjectList(projectArr);
  };

  useEffect(() => {
    if(currentStep >= stepCount)
    {
        setSubmitState(true);
    }
    else{
        setSubmitState(false);
    }

    if(currentStep > 1)
    {
        setInitialState(false);
    }
    else{
        setInitialState(true);
    }

  }, [currentStep]);

  useEffect(() => {
    getProjects();
  }, []);

  const nextStep = (step) => {
      if(step < stepCount)
      {
        step = step + 1;
        setCurrentStep(step);
      }
 
  }

  const prevStep = (step) => {
    if(step > 1)
    {
        step = step - 1;
        setCurrentStep(step);
    }
  }

const formSubmit = (form) => {
    form.preventDefault();
    console.log('form', form.target['name'].value);
}

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
  return (
    <PageWithNavAndFooter>
      <Head>
        <title>LVAF | Contact</title>
      </Head>

      <section className="bg-white w-full">
        <div
          className="ContactContainer grid grid-cols-1 md:grid-cols-2 gap-0"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2FdonateRequest%2Fdonate.jpg?alt=media&token=6efa6a85-6d91-41eb-ab67-65446ad1092d)`,
          }}
        >
          <div></div>
          <div className="contactForm">
            <div className="stepCont">
              <form onSubmit={formSubmit}>
                <div
                  className={currentStep === 1 ? "step active-step" : "step"}
                >
                  <h3 className="StepHeading">Contact Details</h3>
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
                        required ="required"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div
                  className={currentStep === 2 ? "step active-step" : "step"}
                >
                  <h3 className="StepHeading">Request Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      <div style={{position: 'relative'}}>
                          {projectList ? <select
                          name="project"
                      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                        {
                            projectList.map((project, i) => {
                                return(<option value={project.name}>{project.name}</option>)
                            })
                        }
                      <option value={'Other'}>Other</option>
                    </select> : ""

                          }
                          
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg></div>
                    
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
                </div>

                <div className="clear-both mt-8">

                {!initialState ? <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded pullLeft"
                    type="button"
                  onClick={(e) => {prevStep(currentStep)}}>
                    Back
                  </button> : '' }


                    {!submitState ? <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded pullRight"
                    type="button"
                  onClick={(e) => {nextStep(currentStep)}}>
                    Next
                  </button> : <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded pullRight"
                    type="Submit"
                  onClick={(e) => {}}>
                    Send
                  </button> }
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWithNavAndFooter>
  );
};
export default Contact;
//T2dutf
