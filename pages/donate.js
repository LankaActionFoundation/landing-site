import { useEffect, useRef, useState } from "react";
import PageWithNavAndFooter from "../components/layout/PageWithNavAndFooter";

import FilledButton from "../components/buttons/FilledButton";

import Select from "../components/inputs/Select";
import TextInput from "../components/inputs/TextInput";
import { Switch } from "@headlessui/react";

export default function Donation() {
  const [amounts, setAmounts] = useState([100, 500, 1000]);
  const [isMonthlyDonation, setIsMonthlyDonation] = useState(false);

  const [selectedAmount, setSelectedAmount] = useState("");
  const [isselectedAmountTouched, setIsselectedAmountTouched] = useState(false);
  const [selectedAmountError, setSelectedAmountError] = useState("");

  useEffect(() => {
    const numberOnly = /^[0-9]*$/;
    if (selectedAmount.length > 0 && !selectedAmount.match(numberOnly)) {
      setSelectedAmountError("Amount has to be a number");
    } else {
      if (isselectedAmountTouched && selectedAmount.length <= 0) {
        setSelectedAmountError("Amount cannot be empty");
      } else {
        setSelectedAmountError("");
      }
    }
  }, [selectedAmount, isselectedAmountTouched]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isphoneNumberTouched, setIsphoneNumberTouched] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  useEffect(() => {
    const numberOnly = /^[0-9+]*$/;
    if (phoneNumber.length > 0 && !phoneNumber.match(numberOnly)) {
      setPhoneNumberError("Phone number has to be a number and without spaces");
    } else {
      if (isphoneNumberTouched && phoneNumber.length <= 0) {
        setPhoneNumberError("Phone number cannot be empty");
      } else {
        setPhoneNumberError("");
      }
    }
  }, [phoneNumber, isphoneNumberTouched]);

  const [firstName, setFirstName] = useState("");
  const [isfirstNameTouched, setIsfirstNameTouched] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");

  useEffect(() => {
    if (isfirstNameTouched && firstName.length <= 0) {
      setFirstNameError("First name cannot be empty");
    } else {
      setFirstNameError("");
    }
  }, [firstName, isfirstNameTouched]);

  const [address, setAddress] = useState("");
  const [isaddressTouched, setIsaddressTouched] = useState(false);
  const [addressError, setAddressError] = useState("");

  useEffect(() => {
    if (isaddressTouched && address.length <= 0) {
      setAddressError("Address cannot be empty");
    } else {
      setAddressError("");
    }
  }, [address, isaddressTouched]);

  const [lastName, setLastName] = useState("");
  const [islastNameTouched, setIslastNameTouched] = useState(false);
  const [lastNameError, setLastNameError] = useState("");

  useEffect(() => {
    if (islastNameTouched && lastName.length <= 0) {
      setLastNameError("Last name cannot be empty");
    } else {
      setLastNameError("");
    }
  }, [lastName, islastNameTouched]);

  const [email, setEmail] = useState("");
  const [isemailTouched, setIsemailTouched] = useState(false);
  const [emailError, setEmailError] = useState("");

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (isemailTouched && email.length <= 0) {
      setEmailError("Email cannot be empty");
    } else if (isemailTouched && !email.match(mailformat)) {
      setEmailError("Email format is not applicable");
    } else {
      setEmailError("");
    }
  }, [email, isemailTouched]);

  const [city, setCity] = useState("");
  const [iscityTouched, setIscityTouched] = useState(false);
  const [cityError, setCityError] = useState("");

  useEffect(() => {
    if (iscityTouched && city.length <= 0) {
      setCityError("city cannot be empty");
    } else {
      setCityError("");
    }
  }, [city, iscityTouched]);

  const [postalCode, setPostalCode] = useState("");
  const [ispostalCodeTouched, setIspostalCodeTouched] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState("");

  useEffect(() => {
    if (ispostalCodeTouched && postalCode.length <= 0) {
      setPostalCodeError("Postal Code cannot be empty");
    } else {
      setPostalCodeError("");
    }
  }, [postalCode, ispostalCodeTouched]);

  const [province, setProvince] = useState("");
  const [isprovinceTouched, setIsprovinceTouched] = useState(false);
  const [provinceError, setProvinceError] = useState("");

  useEffect(() => {
    if (isprovinceTouched && province.length <= 0) {
      setProvinceError("Province cannot be empty");
    } else {
      setProvinceError("");
    }
  }, [province, isprovinceTouched]);

  return (
    <PageWithNavAndFooter color="bg-blue-900/50">
      <div className="w-full min-h-[200vh] md:min-h-[160vh] relative h-full z-20">
        <div
          className="
            w-full
            h-full
            top-0
            absolute
            z-30
            bg-gradient-to-b
            from-black/90
            via-black/50
            to-customBlue/50
          "
        ></div>
        {/* 
            from-tempA/100
            via-tempA/70
            to-tempB/30
        https://images.pexels.com/photos/1098769/pexels-photo-1098769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 */}
        <img
          className="w-full h-full absolute top-0 z-20 object-cover"
          src="https://images.unsplash.com/6/mountain.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="cover"
        />

        {/* card */}
        <div className="absolute px-5 inset-0 z-40 mt-20 md:mt-52 max-w-6xl mx-auto">
          <div className="rounded-3xl p-2 bg-white/20 backdrop-filter backdrop-blur-sm">
            <div className="rounded-2xl w-full mx-auto p-5 bg-white shadow-lg">
              <div className="w-full flex items-center justify-center flex-col">
                <h6 className="w-full block text-center text-base md:text-lg text-gray-800">
                  Make a donation
                </h6>

                <h3 className="w-full my-5 block font-bold font-title text-center text-4xl md:text-5xl text-gray-800">
                  Be a force a hope.
                </h3>
              </div>

              <div className="w-full flex items-center justify-center">
                <div className="py-5 pb-10 flex items-center justify-center">
                  <h3
                    onClick={() => {
                      setIsMonthlyDonation(false);
                    }}
                    className="mr-3 text-xs md:text-sm text-gray-800 font-medium uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <div
                      className={`p-3 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out ${
                        !isMonthlyDonation && "bg-customYellow"
                      }`}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g strokeWidth="1.5" fill="none">
                          <path
                            d="M17 17H8c-1.667 0-5-1-5-5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M8 7h8c1.667 0 5 1 5 5c0 1.494-.465 2.57-1.135 3.331"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M14.5 14.5L17 17l-2.5 2.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M4 8V3L2 4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                    Single Donation
                  </h3>
                  <Switch
                    checked={isMonthlyDonation}
                    onChange={setIsMonthlyDonation}
                    className={`${
                      isMonthlyDonation ? "bg-gray-300" : "bg-gray-300"
                    }
                      relative 
                      inline-flex flex-shrink-0 
                      h-[38px] w-[74px] 
                      border-2 border-transparent 
                      rounded-full cursor-pointer 
                      transition-colors ease-in-out duration-200 
                      focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75
                      `}
                  >
                    <span
                      aria-hidden="true"
                      className={`${
                        isMonthlyDonation ? "translate-x-9" : "translate-x-0"
                      }
                        pointer-events-none inline-block 
                        h-[34px] w-[34px] 
                        rounded-full 
                        bg-white shadow-lg 
                        transform ring-0 
                        transition ease-in-out duration-200
                        `}
                    />
                  </Switch>
                  <h3
                    onClick={() => {
                      setIsMonthlyDonation(true);
                    }}
                    className="ml-3 text-xs md:text-sm text-gray-800 font-medium uppercase flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Monthly Donation
                    <div
                      className={`p-3 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out ${
                        isMonthlyDonation && "bg-customYellow"
                      }`}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g strokeWidth="1.5" fill="none">
                          <path
                            d="M17 17H8c-1.667 0-5-1-5-5s3.333-5 5-5h8c1.667 0 5 1 5 5c0 1.494-.465 2.57-1.135 3.331"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.5 14.5L17 17l-2.5 2.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </h3>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start justify-center gap-5">
                <Select
                  label="Choose donation kind"
                  handler={(e) => console.log("selected", e)}
                  options={[
                    { id: 1, name: "Test", unavailable: false },
                    { id: 2, name: "Test2", unavailable: false },
                  ]}
                />

                {/* amounts select */}
                <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center justify-center">
                  <h4 className=" text-sm font-medium text-gray-700">
                    Set Amount
                  </h4>

                  <div className="mt-1 flex items-center justify-center gap-2">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`px-2 py-2 rounded-xl
                                font-medium
                                text-sm
                                transform
                                active:scale-[0.98]
                                transition-transform
                                duration-100
                                border-2 border-gray-300 
                                text-gray-800 focus:outline-none 
                                focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-white hover:bg-customYellowHoverLight hover:border-customYellow focus-visible:ring-customYellow
                                ${
                                  parseInt(selectedAmount) === amount
                                    ? "bg-customYellow border-customYellow"
                                    : "bg-transparent"
                                }
                                `}
                      >
                        $ {amount}
                      </button>
                    ))}
                  </div>
                </div>
                {/* end of amounts select */}

                <div className="w-full md:max-w-sm">
                  <TextInput
                    label="Amount"
                    placeholder="Or enter amount"
                    value={selectedAmount}
                    handler={(e) => {
                      setSelectedAmount(e.target.value);
                    }}
                    onBlur={() => setIsselectedAmountTouched(true)}
                    error={selectedAmountError}
                  />
                </div>
              </div>

              <div className="my-10 w-full flex flex-col md:flex-row items-start justify-between gap-5">
                {/* contact info */}
                <div className="w-full md:pr-5 flex flex-col items-center justify-center gap-5 md:border-r border-gray-300">
                  <div className="w-full flex items-center justify-between gap-5">
                    <TextInput
                      label="First Name"
                      placeholder="Enter your first name"
                      value={firstName}
                      onBlur={() => setIsfirstNameTouched(true)}
                      handler={(e) => setFirstName(e.target.value)}
                      error={firstNameError}
                    />
                    <TextInput
                      label="Last Name"
                      placeholder="Enter your last name"
                      value={lastName}
                      onBlur={() => setIslastNameTouched(true)}
                      handler={(e) => setLastName(e.target.value)}
                      error={lastNameError}
                    />
                  </div>

                  <div className="w-full flex items-center justify-between gap-5">
                    <TextInput
                      label="Email"
                      type="email"
                      placeholder="Enter your Email"
                      value={email}
                      onBlur={() => setIsemailTouched(true)}
                      handler={(e) => setEmail(e.target.value)}
                      error={emailError}
                    />
                    <TextInput
                      label="Phone number"
                      type="tel"
                      placeholder="+## ### ####"
                      value={phoneNumber}
                      handler={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      onBlur={() => setIsphoneNumberTouched(true)}
                      error={phoneNumberError}
                    />
                  </div>

                  <TextInput
                    label="Address"
                    placeholder="Enter your address"
                    value={address}
                    onBlur={() => setIsaddressTouched(true)}
                    handler={(e) => setAddress(e.target.value)}
                    error={addressError}
                  />

                  <div className="w-full flex items-center justify-between gap-5">
                    <TextInput
                      label="City"
                      placeholder="Enter your city"
                      value={city}
                      onBlur={() => setIscityTouched(true)}
                      handler={(e) => setCity(e.target.value)}
                      error={cityError}
                    />
                    <TextInput
                      label="Postal code"
                      placeholder="Enter your postal code"
                      value={postalCode}
                      onBlur={() => setIspostalCodeTouched(true)}
                      handler={(e) => setPostalCode(e.target.value)}
                      error={postalCodeError}
                    />
                  </div>

                  <div className="w-full flex items-center justify-between gap-5">
                    <Select
                      label="Country"
                      handler={(e) => console.log("selected", e)}
                      options={[
                        { id: 1, name: "Test", unavailable: false },
                        { id: 2, name: "Test2", unavailable: false },
                      ]}
                    />
                    <TextInput
                      label="Province/State"
                      placeholder="Province/State"
                      value={province}
                      onBlur={() => setIsprovinceTouched(true)}
                      handler={(e) => setProvince(e.target.value)}
                      error={provinceError}
                    />
                  </div>
                </div>
                {/* Contact info */}

                {/* card info */}
                <div className="w-full flex flex-col items-center justify-center gap-5">
                  <TextInput
                    label="Card Number"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                  <TextInput label="Card Holder Name" placeholder="Name" />
                  <div className="w-full flex items-center justify-between gap-5">
                    <TextInput label="Expiry" placeholder="DD/MM" />
                    <TextInput label="Security code" placeholder="###" />
                  </div>
                </div>
                {/* end of card info */}
              </div>

              {/* submit */}
              <div className="w-full flex justify-end">
                <div className="">
                  <FilledButton
                    className="w-full"
                    color="yellow"
                    focusOffset="white"
                  >
                    <span className="text-sm px-10 text-gray-800 font-semibold">
                      Donate
                    </span>
                  </FilledButton>
                </div>
              </div>
              {/* end of submit */}
            </div>
          </div>
        </div>
        {/* end of card */}
      </div>
    </PageWithNavAndFooter>
  );
}
