import React, { useEffect, useRef } from "react";

const TextInput = ({ label, error, placeholder, value, handler }) => {
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
          id={label}
          value={value}
          onChange={handler}
          placeholder={placeholder}
          className={`
           focus:outline-none focus:ring-2
            w-full
            px-2
            py-2
            sm:text-sm
            border-gray-300
            rounded-xl

            ${
              error
                ? "focus:ring-customRed ring-2 ring-customRed"
                : "focus:ring-customBlue"
            }`}
        />
      </div>

      <div className="text-xs font-medium mt-1 text-customRed">{error}</div>
    </div>
  );
};

export default TextInput;
