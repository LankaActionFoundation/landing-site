import Head from "next/head";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import FilledButton from "../components/buttons/FilledButton";
import Loading from "../components/Loading";
import Link from "next/link";

import axios from "axios";
import { useRouter } from "next/dist/client/router";

const reset_password_token = () => {
  const router = useRouter();
  const [error, setError] = useState([]);
  const [triggerSubmit, setTriggerSubmit] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isEmailFocussed, setIsEmailFocussed] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const emailRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (errors) {
      setEmailError(true);
      setIsEmailTouched(true);
      setIsEmailFocussed(true);
      setError([errors]);
    }
  }, [errors]);

  const sendToken = async (payload) => {
    try {
      setErrors(null);
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/users/send-reset-password-token`,
        payload,
        {
          withCredentials: true,
        }
      );
      router.push("/signin");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error?.response?.data?.msg) {
        let err = error.response.data.msg;
        setErrors(err);
      }
    }
  };

  useEffect(() => {
    if (emailError) {
      gsap.to(emailRef.current, 0.05, {
        x: 3,
        yoyo: true,
        repeat: 7,
      });
    }
  }, [emailError]);

  useEffect(() => {
    if (triggerSubmit) {
      setTriggerSubmit(false);
      if (error.length <= 0) {
        console.log({ email });
        setErrors(null);
        sendToken({ email });
      }
    }
  }, [triggerSubmit, error]);

  useEffect(() => {
    setTriggerSubmit(false);
    if (isEmailTouched) {
      checkEmailError();
    }
  }, [email]);

  const checkEmailError = () => {
    const emailEmptyPrompt = "Email cannot be empty";
    const emailFormatPrompt = "Invalid email format";

    if (email.length <= 0) {
      setEmailError(true);
      setIsEmailFocussed(true);
      if (!error.includes(emailEmptyPrompt)) {
        let err = error;
        const updErr = err.filter((err) => err !== emailFormatPrompt);
        setError([emailEmptyPrompt, ...updErr]);
      }
      return;
    } else {
      setEmailError(false);
      setError(error.filter((err) => err !== emailEmptyPrompt));
    }

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      setEmailError(true);
      setIsEmailFocussed(true);
      if (!error.includes(emailFormatPrompt)) {
        let err = error;
        const updErr = err.filter((err) => err !== emailEmptyPrompt);
        setError([emailFormatPrompt, ...updErr]);
      }
      return;
    } else {
      setEmailError(false);
      setError(
        error.filter(
          (err) => err !== emailFormatPrompt && err !== emailEmptyPrompt
        )
      );
    }
  };

  const checkForAllErrors = () => {
    setIsEmailTouched(true);
    checkEmailError();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForAllErrors();
    if (error[0] === "user not found!") {
      setError([]);
    }
    setTriggerSubmit(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    setIsEmailFocussed(false);
    setIsEmailTouched(true);
    checkEmailError();
  };

  return (
    <div className="w-full min-h-screen p-3 flex items-center justify-center">
      <Head>
        <title>Lanka Action Foundation | Reset password</title>
      </Head>
      <div className="w-full max-w-md flex flex-col items-center justify-center">
        <div className="w-full overflow-hidden max-w-md rounded-2xl border border-gray-300 flex flex-col items-center justify-start">
          <div
            className={`w-full bg-red-100 transition-all duration-300 ${
              error.length > 0 ? "h-auto py-2 px-3" : "h-0"
            }`}
          >
            <ul className="flex flex-col items-start justify-center list-disc list-inside">
              {error &&
                error.map((err, ind) => (
                  <li key={ind} className="text-red-600 text-sm font-medium">
                    {err}
                  </li>
                ))}
            </ul>
          </div>

          {!loading && (
            <div className="w-full h-[450px] p-10 px-10 flex flex-col items-center justify-center">
              {/* logo */}
              <img src="./logo.png" className="w-20 h-20" alt="" />
              {/* end of logo */}

              <h3 className="text-3xl w-full block text-center mt-5 text-gray-800 font-bold">
                Reset password
              </h3>

              <h6 className="mt-2 w-full block text-center text-xs text-gray-500">
                Enter your new password to reset your account
              </h6>

              <form
                onSubmit={handleSubmit}
                className="mt-12 w-full flex gap-6 flex-col"
              >
                {/* email */}
                <div
                  ref={emailRef}
                  className={`
                      px-3
                      py-1
                      w-full
                      flex
                      items-center
                      justify-start
                      border border-gray-300
                      rounded-xl
                      overflow-hidden
                      focus:outline-none
                      ${
                        !emailError && isEmailFocussed
                          ? "ring-2 ring-customBlue border-transparent"
                          : ""
                      }
                      ${
                        emailError && isEmailFocussed
                          ? "ring-2 ring-customRed border-transparent"
                          : ""
                      }
                `}
                >
                  <svg
                    className={`w-5 h-5 
                    ${isEmailFocussed && emailError ? "text-customRed" : ""} 
                    ${isEmailFocussed && !emailError ? "text-customBlue" : ""} 
                    ${!isEmailFocussed ? "text-gray-600" : ""}`}
                    viewBox="0 0 26 24"
                    fill="currentColor"
                  >
                    <path
                      d="M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <input
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={() => setIsEmailFocussed(true)}
                    onBlur={handleEmailBlur}
                    type="text"
                    placeholder="Email"
                    className="w-full px-3 py-2 focus:outline-none text-sm text-gray-800"
                  />
                </div>
                {/* end of email */}

                <FilledButton
                  type="submit"
                  color={"blue"}
                  class="mt-2 py-3 flex items-center justify-center"
                >
                  Send email
                </FilledButton>
              </form>
            </div>
          )}

          {loading && (
            <div className="h-[450px] flex items-center justify-center">
              <Loading />
            </div>
          )}
        </div>
        <h4 className="mt-5 text-xs text-gray-600">
          Have an account?{" "}
          <span>
            <span className="hover:underline text-customBlue">
              <Link href="/signin">Login</Link>
            </span>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default reset_password_token;
