import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import FilledButton from "../components/buttons/FilledButton";
import Loading from "../components/Loading";
import Link from "next/link";

import axios from "axios";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState([]);
  const [triggerSubmit, setTriggerSubmit] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isEmailFocussed, setIsEmailFocussed] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordFocussed, setIsPasswordFocussed] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (errors) {
      setEmailError(true);
      setPasswordError(true);
      setIsPasswordTouched(true);
      setIsEmailTouched(true);
      setError([errors]);
    }
  }, [errors]);

  const signin = async (payload) => {
    try {
      setErrors(null);
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/users/signin`,
        payload,
        {
          withCredentials: true,
        }
      );
      router.push("/");
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
    if (passwordError) {
      gsap.to(passwordRef.current, 0.05, {
        x: 3,
        yoyo: true,
        repeat: 7,
      });
    }
  }, [passwordError]);

  useEffect(() => {
    if (triggerSubmit) {
      setTriggerSubmit(false);
      if (error.length <= 0) {
        let payload = {
          usernameOrEmail: email,
          password,
        };
        console.log(payload);
        setErrors(null);
        setError([]);
        signin(payload);
      }
    }
  }, [triggerSubmit, error]);

  useEffect(() => {
    setTriggerSubmit(false);
    if (isEmailTouched) {
      checkEmailError();
    }
  }, [email]);

  useEffect(() => {
    setTriggerSubmit(false);
    if (isPasswordTouched) {
      checkPasswordError();
    }
  }, [password]);

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

  const checkPasswordError = () => {
    const passwordLengthPropmt = "Your password must be at least 8 characters.";
    const passwordLetterPropmt =
      "Your password must contain at least one letter.";
    const passwordDigitPropmt =
      "Your password must contain at least one digit.";
    const passwordCapitalPropmt =
      "Your password must contain at least one capital letter.";

    const displayPasswordError = () => {
      if (isError) {
        let err = error;
        const updErr = err.filter(
          (err) =>
            err !== passwordCapitalPropmt &&
            err !== passwordDigitPropmt &&
            err !== passwordLengthPropmt &&
            err !== passwordLetterPropmt
        );
        if (!error.includes(errorPrompt)) {
          setError([errorPrompt, ...updErr]);
        }
      } else {
        setPasswordError(false);
        setError(
          error.filter(
            (err) =>
              err !== passwordCapitalPropmt &&
              err !== passwordDigitPropmt &&
              err !== passwordLengthPropmt &&
              err !== passwordLetterPropmt
          )
        );
      }
    };

    let isError = false;
    let errorPrompt = "";
    if (password.length < 8) {
      setPasswordError(true);
      setIsPasswordFocussed(true);
      errorPrompt = passwordLengthPropmt;
      isError = true;
      displayPasswordError();
      return;
    } else {
      setPasswordError(false);
      setIsPasswordFocussed(false);
      setError(error.filter((err) => err !== passwordLengthPropmt));
    }

    if (password.search(/[a-z]/) < 0) {
      setPasswordError(true);
      setIsPasswordFocussed(true);
      errorPrompt = passwordLetterPropmt;
      isError = true;
      displayPasswordError();
      return;
    } else {
      setError(error.filter((err) => err !== passwordLetterPropmt));
    }

    if (password.search(/[A-Z]/) < 0) {
      setPasswordError(true);
      setIsPasswordFocussed(true);
      errorPrompt = passwordCapitalPropmt;
      isError = true;
      displayPasswordError();
      return;
    } else {
      setError(error.filter((err) => err !== passwordCapitalPropmt));
    }

    if (password.search(/[0-9]/) < 0) {
      setPasswordError(true);
      setIsPasswordFocussed(true);
      errorPrompt = passwordDigitPropmt;
      isError = true;
      displayPasswordError();
      return;
    } else {
      setError(error.filter((err) => err !== passwordDigitPropmt));
    }

    if (!isError) {
      displayPasswordError();
    }
  };

  const checkForAllErrors = () => {
    setIsEmailTouched(true);
    setIsPasswordTouched(true);
    checkPasswordError();
    checkEmailError();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForAllErrors();
    setError([]);
    setTriggerSubmit(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailBlur = () => {
    setIsEmailFocussed(false);
    setIsEmailTouched(true);
    checkEmailError();
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocussed(false);
    setIsPasswordTouched(true);
    checkPasswordError();
  };

  return (
    <div className="w-full min-h-screen p-3 flex items-center justify-center">
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
              <svg className="w-14 h-14" viewBox="0 0 387 260" fill="none">
                <path
                  d="M195.341 14.1154L202.707 34.0232L203.489 36.1357L205.601 36.9174L225.509 44.284L205.601 51.6505L203.489 52.4322L202.707 54.5447L195.341 74.4525L187.974 54.5447L187.192 52.4322L185.08 51.6505L165.172 44.284L185.08 36.9174L187.192 36.1357L187.974 34.0232L195.341 14.1154Z"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
                <path
                  d="M364.643 85.0689C339.545 61.3161 291.591 45.6304 257.083 71.1758C224.367 98.9621 211.851 139.03 234.003 177.399"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
                <path
                  d="M330.394 154.775C313.02 154.775 298.936 140.276 298.936 122.391"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
                <path
                  d="M364.629 84.8416L381.283 65.9512V130.718"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
                <path
                  d="M330.394 154.827V177.231L359.856 199.186L381.283 183.504V127.943"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
                <path
                  d="M351.173 115.378L358.013 122.218"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
                <path
                  d="M4.99996 24.4927L235.232 254.725"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
                <path
                  d="M98.0725 44.0869L254.826 200.841"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
                <path
                  d="M49.087 137.159L151.957 240.029"
                  stroke="currentColor"
                  strokeWidth="9.7971"
                  strokeLinecap="round"
                />
              </svg>
              {/* end of logo */}

              <h3 className="text-3xl w-full block text-center mt-5 text-gray-800 font-bold">
                Welcome Back
              </h3>
              <h6 className="mt-2 w-full block text-center text-xs text-gray-500">
                Enter your credentials to access your account
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

                {/* password */}
                <div
                  ref={passwordRef}
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
              ${
                passwordError && isPasswordFocussed
                  ? "ring-2 ring-customRed border-transparent"
                  : ""
              }
              ${
                !passwordError && isPasswordFocussed
                  ? "ring-2 ring-customBlue border-transparent"
                  : ""
              }
            `}
                >
                  <svg
                    className={`w-5 h-5 
                ${isPasswordFocussed && passwordError ? "text-customRed" : ""} 
                ${!isPasswordFocussed ? "text-gray-600" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="10"
                      width="18"
                      height="12"
                      rx="2"
                      fill="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 10V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C13.3261 1 14.5979 1.52678 15.5355 2.46447C16.4732 3.40215 17 4.67392 17 6V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    value={password}
                    onChange={handlePasswordChange}
                    onFocus={() => setIsPasswordFocussed(true)}
                    onBlur={handlePasswordBlur}
                    placeholder="Password"
                    className="w-full px-3 py-2 focus:outline-none text-sm text-gray-800"
                  />

                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                    className="
                focus:outline-none
                text-gray-500
                focus:text-customBlue
                hover:text-customBlue
                transform
                active:scale-90
                transition-transform
                duration-100
              "
                  >
                    {showPassword && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="11.6797"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    )}

                    {!showPassword && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5.67969 3L21.6797 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.0546 4.79034C14.2347 4.26823 14.8039 3.99094 15.326 4.171C18.4478 5.24759 21.0835 7.65277 22.8918 10.8024C23.3668 11.6297 23.4799 12.6014 23.2316 13.4974C23.084 14.0296 22.5329 14.3414 22.0007 14.1939C21.4685 14.0463 21.1567 13.4953 21.3042 12.9631C21.4117 12.5756 21.3626 12.1557 21.1573 11.7982C19.5394 8.98025 17.2514 6.95057 14.674 6.06172C14.1519 5.88167 13.8746 5.31245 14.0546 4.79034ZM8.7503 4.94112C8.95814 5.45281 8.71183 6.0361 8.20014 6.24394C5.82167 7.21006 3.71737 9.15927 2.2022 11.7983C1.9326 12.2679 1.9326 12.8449 2.2022 13.3145C4.42466 17.1854 7.89339 19.5564 11.6798 19.5564C14.367 19.5564 16.8801 18.3688 18.9146 16.299C19.3017 15.9051 19.9349 15.8996 20.3288 16.2868C20.7226 16.6739 20.7281 17.3071 20.341 17.7009C17.9956 20.0871 14.9897 21.5564 11.6798 21.5564C6.99415 21.5564 2.94527 18.6255 0.467746 14.3103C-0.155911 13.2241 -0.155916 11.8888 0.467735 10.8025C2.16221 7.85116 4.58162 5.55506 7.44748 4.39097C7.95917 4.18313 8.54246 4.42944 8.7503 4.94112Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.5892 11.8251C14.748 12.457 14.6968 13.1233 14.4434 13.7235C14.1899 14.3236 13.748 14.825 13.1844 15.1517C12.6208 15.4785 11.9662 15.6129 11.3194 15.5347C10.6726 15.4564 10.0689 15.1698 9.59949 14.7181C9.13007 14.2663 8.82045 13.6741 8.71743 13.0308C8.61441 12.3875 8.7236 11.7282 9.02848 11.1524C9.33337 10.5767 9.81738 10.1159 10.4074 9.83956C10.9973 9.56327 11.6612 9.48653 12.2987 9.62095"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {/* end of password */}

                <FilledButton
                  type="submit"
                  color={"blue"}
                  class="mt-2 py-3 flex items-center justify-center"
                >
                  Login
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
          Forgot your password?{" "}
          <span>
            <span className="hover:underline text-customBlue">
              <Link href="/reset-password-token">Reset password</Link>
            </span>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Signin;
