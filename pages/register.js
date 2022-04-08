import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import FilledButton from "../components/buttons/FilledButton";
import Loading from "../components/Loading";

import Select from "../components/inputs/Select";
import TextInput from "../components/inputs/TextInput";
import useStateWithValidation from "../hooks/useStateWithValidation";

import axios from "axios";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  const router = useRouter();

  useEffect(() => {
    if (errors) {
      const el = document.querySelector("input[type=email]");
      el.focus();
    }
  }, [errors]);

  const registerUser = async (payload) => {
    try {
      setErrors(null);
      setLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ROUTE}/users/signup`,
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

  const [countries, setCountries] = useState([
    { name: "Afghanistan", code: "AF" },
    { name: "Åland Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "AndorrA", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory", code: "IO" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Cayman Islands", code: "KY" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Christmas Island", code: "CX" },
    { name: "Cocos (Keeling) Islands", code: "CC" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Congo, The Democratic Republic of the", code: "CD" },
    { name: "Cook Islands", code: "CK" },
    { name: "Costa Rica", code: "CR" },
    { name: "Cote D'Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" },
    { name: "Falkland Islands (Malvinas)", code: "FK" },
    { name: "Faroe Islands", code: "FO" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "French Guiana", code: "GF" },
    { name: "French Polynesia", code: "PF" },
    { name: "French Southern Territories", code: "TF" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Gibraltar", code: "GI" },
    { name: "Greece", code: "GR" },
    { name: "Greenland", code: "GL" },
    { name: "Grenada", code: "GD" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Guam", code: "GU" },
    { name: "Guatemala", code: "GT" },
    { name: "Guernsey", code: "GG" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Heard Island and Mcdonald Islands", code: "HM" },
    { name: "Holy See (Vatican City State)", code: "VA" },
    { name: "Honduras", code: "HN" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran, Islamic Republic Of", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Isle of Man", code: "IM" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jersey", code: "JE" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea, Democratic People'S Republic of", code: "KP" },
    { name: "Korea, Republic of", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People'S Democratic Republic", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libyan Arab Jamahiriya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Macao", code: "MO" },
    { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia, Federated States of", code: "FM" },
    { name: "Moldova, Republic of", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montserrat", code: "MS" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "Netherlands Antilles", code: "AN" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "Niue", code: "NU" },
    { name: "Norfolk Island", code: "NF" },
    { name: "Northern Mariana Islands", code: "MP" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestinian Territory, Occupied", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Pitcairn", code: "PN" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Qatar", code: "QA" },
    { name: "Reunion", code: "RE" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "RWANDA", code: "RW" },
    { name: "Saint Helena", code: "SH" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Pierre and Miquelon", code: "PM" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia and Montenegro", code: "CS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Georgia and the South Sandwich Islands", code: "GS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Svalbard and Jan Mayen", code: "SJ" },
    { name: "Swaziland", code: "SZ" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Taiwan, Province of China", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania, United Republic of", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tokelau", code: "TK" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Turks and Caicos Islands", code: "TC" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "United States Minor Outlying Islands", code: "UM" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Virgin Islands, British", code: "VG" },
    { name: "Virgin Islands, U.S.", code: "VI" },
    { name: "Wallis and Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ]);

  const [
    firstName,
    setFirstName,
    isFirstNameValid,
    firstNameError,
    setFirstNameTouched,
    setFirstNameBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length <= 0) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      setError("");
      return true;
    },
    ["First name cannot be empty"],
    ""
  );

  const [
    lastName,
    setLastName,
    isLastNameValid,
    lastNameError,
    setLastNameTouched,
    setLastNameBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length <= 0) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      setError("");
      return true;
    },
    ["Last name cannot be empty"],
    ""
  );

  const [
    email,
    setEmail,
    isEmailValid,
    emailError,
    setEmailTouched,
    setEmailBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length <= 0) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!value.match(mailformat)) {
        if (isTouched) {
          setError(errs[1]);
          return false;
        }
      }

      setError("");
      return true;
    },
    ["First name cannot be empty", "Invalid email format"],
    ""
  );

  const [
    address,
    setAddress,
    isAddressValid,
    addressError,
    setAddressTouched,
    setAddressBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length <= 0) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      setError("");
      return true;
    },
    ["Address cannot be empty"],
    ""
  );

  const [
    phoneNumber,
    setPhoneNumber,
    isPhoneNumberValid,
    phoneNumberError,
    setPhoneNumberTouched,
    setPhoneNumberBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length <= 0) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      const numberOnly = /^[0-9]*$/;
      if (!value.match(numberOnly)) {
        if (isTouched) {
          setError(errs[1]);
          return false;
        }
      }

      setError("");
      return true;
    },
    [
      "Phone number cannot be empty",
      "Phone number has to be a number and without spaces",
    ],
    ""
  );

  const [city, setCity, isCityValid, cityError, setCityTouched, setCityBlur] =
    useStateWithValidation(
      (value, errs, setError, isTouched) => {
        if (value.length <= 0) {
          if (isTouched) {
            setError(errs[0]);
            return false;
          }
        }

        setError("");
        return true;
      },
      ["City cannot be empty"],
      ""
    );

  const [
    postalCode,
    setPostalCode,
    isPostalCodeValid,
    postalCodeError,
    setPostalCodeTouched,
    setPostalCodeBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length <= 0) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      setError("");
      return true;
    },
    ["Postal code cannot be empty"],
    ""
  );

  const [
    province,
    setProvince,
    isProvinceValid,
    provinceError,
    setProvinceTouched,
    setProvinceBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length <= 0) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      setError("");
      return true;
    },
    ["Province cannot be empty"],
    ""
  );

  const [country, setCountry] = useState("");

  const [
    password,
    setPassword,
    isPasswordValid,
    passwordError,
    setPasswordTouched,
    setPasswordBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length < 8) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      if (value.search(/[a-z]/) < 0) {
        if (isTouched) {
          setError(errs[1]);
          return false;
        }
      }

      if (value.search(/[A-Z]/) < 0) {
        if (isTouched) {
          setError(errs[2]);
          return false;
        }
      }

      if (value.search(/[0-9]/) < 0) {
        if (isTouched) {
          setError(errs[3]);
          return false;
        }
      }

      setError("");
      return true;
    },
    [
      "Your password must be at least 8 characters.",
      "Your password must contain at least one letter.",
      "Your password must contain at least one capital letter.",
      "Your password must contain at least one digit.",
    ],
    ""
  );

  const [
    confirmPassword,
    setConfirmPassword,
    isConfirmPasswordValid,
    confirmPasswordError,
    setConfirmPasswordTouched,
    setConfirmPasswordBlur,
  ] = useStateWithValidation(
    (value, errs, setError, isTouched) => {
      if (value.length < 8) {
        if (isTouched) {
          setError(errs[0]);
          return false;
        }
      }

      if (value.search(/[a-z]/) < 0) {
        if (isTouched) {
          setError(errs[1]);
          return false;
        }
      }

      if (value.search(/[A-Z]/) < 0) {
        if (isTouched) {
          setError(errs[2]);
          return false;
        }
      }

      if (value.search(/[0-9]/) < 0) {
        if (isTouched) {
          setError(errs[3]);
          return false;
        }
      }

      if (value !== password) {
        if (isTouched) {
          setError(errs[4]);
          return false;
        }
      }

      setError("");
      return true;
    },
    [
      "Your confirmation password must be at least 8 characters.",
      "Your confirmation password must contain at least one letter.",
      "Your confirmation password must contain at least one capital letter.",
      "Your confirmation password must contain at least one digit.",
      "Your confirmation password do not match",
    ],
    ""
  );

  const [isError, setIsError] = useState(true);

  const checkErrors = () => {
    let err = false;
    if (!isFirstNameValid) {
      setIsError(true);
      err = true;
      return err;
    }
    if (!isLastNameValid) {
      setIsError(true);
      err = true;
      return err;
    }
    if (!isEmailValid) {
      setIsError(true);
      err = true;
      return err;
    }
    if (!isAddressValid) {
      setIsError(true);
      err = true;
      return err;
    }
    if (!isPhoneNumberValid) {
      setIsError(true);
      err = true;
      return err;
    }
    if (!isCityValid) {
      setIsError(true);
      err = true;
      return err;
    }
    if (!isPostalCodeValid) {
      setIsError(true);
      err = true;
      return err;
    }
    if (!isProvinceValid) {
      setIsError(true);
      err = true;
      return err;
    }

    if (!isPasswordValid) {
      setIsError(true);
      err = true;
      return err;
    }

    if (!isConfirmPasswordValid) {
      setIsError(true);
      err = true;
      return err;
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = checkErrors();
    if (err) {
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
        input.blur();
        input.focus();
      });
      inputs[0].focus();
      for (const input of inputs) {
        if ([...input.classList].includes("focus:ring-customRed")) {
          input.focus();
          return;
        }
      }
    }

    if (!err) {
      const payload = {
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
        city,
        postalCode,
        country,
        province,
        password,
      };
      console.log(payload);
      registerUser(payload);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Head>
        <title>LVAF | Register</title>
      </Head>
      {/* card */}
      <div className="p-5 w-full max-w-6xl mx-auto">
        {!loading && (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl w-full mx-auto p-5 bg-white border border-gray-300"
          >
            <div className="w-full flex items-center justify-center flex-col">
              {/* logo */}
              <img src="./logo.png" className="w-20 h-20" alt="" />
              {/* end of logo */}

              <h3 className="text-3xl w-full block text-center mt-5 text-gray-800 font-bold">
                Register
              </h3>
              <h6 className="mt-2 w-full block text-center text-xs text-gray-500">
                Enter your credentials to access your account
              </h6>
            </div>

            <div className="my-10 w-full flex flex-col md:flex-row items-start justify-between gap-5">
              {/* contact info */}
              <div className="w-full md:pr-5 flex flex-col items-center justify-center gap-5">
                <h3 className="w-full text-left text-xs uppercase tracking-wider font-semibold text-gray-400">
                  Personal information
                </h3>
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
                  <TextInput
                    label="First Name"
                    placeholder="Enter your first name"
                    value={firstName}
                    onBlur={() => {
                      setFirstNameTouched(true);
                      setFirstNameBlur(true);
                    }}
                    handler={(e) => setFirstName(e.target.value)}
                    error={firstNameError}
                  />

                  <TextInput
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={lastName}
                    onBlur={() => {
                      setLastNameTouched(true);
                      setLastNameBlur(true);
                    }}
                    handler={(e) => setLastName(e.target.value)}
                    error={lastNameError}
                  />
                </div>

                <TextInput
                  label="Address"
                  placeholder="Enter your address"
                  value={address}
                  onBlur={() => {
                    setAddressTouched(true);
                    setAddressBlur(true);
                  }}
                  handler={(e) => setAddress(e.target.value)}
                  error={addressError}
                />

                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
                  <TextInput
                    label="Phone number"
                    type="tel"
                    placeholder="+## ### ####"
                    value={phoneNumber}
                    handler={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    onBlur={() => {
                      setPhoneNumberTouched(true);
                      setPhoneNumberBlur(true);
                    }}
                    error={phoneNumberError}
                  />

                  <TextInput
                    label="City"
                    placeholder="Enter your city"
                    value={city}
                    onBlur={() => {
                      setCityTouched(true);
                      setCityBlur(true);
                    }}
                    handler={(e) => setCity(e.target.value)}
                    error={cityError}
                  />

                  <TextInput
                    label="Postal code"
                    placeholder="Enter your postal code"
                    value={postalCode}
                    onBlur={() => {
                      setPostalCodeTouched(true);
                      setPostalCodeBlur(true);
                    }}
                    handler={(e) => setPostalCode(e.target.value)}
                    error={postalCodeError}
                  />
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
                  <TextInput
                    label="Province/State"
                    placeholder="Province/State"
                    value={province}
                    onBlur={() => {
                      setProvinceTouched(true);
                      setProvinceBlur(true);
                    }}
                    handler={(e) => setProvince(e.target.value)}
                    error={provinceError}
                  />

                  <Select
                    label="Country"
                    handler={(e) => setCountry(e.name)}
                    selectedIndex={203}
                    options={countries}
                  />
                </div>

                <h3 className="w-full text-left text-xs uppercase tracking-wider font-semibold text-gray-400">
                  Account information
                </h3>

                <TextInput
                  label="Email"
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onBlur={() => {
                    setEmailTouched(true);
                    setEmailBlur(true);
                  }}
                  handler={(e) => setEmail(e.target.value)}
                  error={emailError || errors}
                />

                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
                  <TextInput
                    label="Password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onBlur={() => {
                      setPasswordTouched(true);
                      setPasswordBlur(true);
                    }}
                    handler={(e) => setPassword(e.target.value)}
                    error={passwordError}
                  />

                  <TextInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onBlur={() => {
                      setConfirmPasswordTouched(true);
                      setConfirmPasswordBlur(true);
                    }}
                    handler={(e) => setConfirmPassword(e.target.value)}
                    error={confirmPasswordError}
                  />
                </div>
              </div>
              {/* Contact info */}
            </div>

            {/* submit */}
            <div className="w-full flex justify-end">
              <div className="">
                <FilledButton
                  type="submit"
                  className="w-full"
                  color="yellow"
                  focusOffset="white"
                >
                  <span className="text-sm px-10 text-gray-800 font-semibold">
                    Register
                  </span>
                </FilledButton>
              </div>
            </div>
            {/* end of submit */}
          </form>
        )}

        {loading && <Loading />}
      </div>
      {/* end of card */}
    </div>
  );
}
