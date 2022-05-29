import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TextInput = ({
  name = "",
  type = "text",
  label,
  error,
  placeholder,
  onBlur,
  value,
  onChange,
  handler,
}) => {
  const textInput = useRef(null);

  useEffect(() => {
    if (error) {
      gsap.to(textInput.current, 0.05, {
        x: 3,
        yoyo: true,
        repeat: 7,
      });
    }
  }, [error]);

  return (
    <div className="min-h-[85px] flex flex-col w-full">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div
        ref={textInput}
        className="mt-1 border border-gray-300 rounded-xl shadow-sm"
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          id={name.toLowerCase()}
          className={` w-full px-3 py-2 bg-white border ${
            error ? "border-red-300" : "border-gray-300"
          }  text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-offset-1 focus:ring-brandTealDark focus:outline-none ${
            error
              ? "ring-2 ring-offset-1 ring-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
          placeholder={placeholder}
        />
      </div>

      <div className="text-xs font-medium mt-1 text-customRed">{error}</div>
    </div>
  );
};

export default TextInput;
