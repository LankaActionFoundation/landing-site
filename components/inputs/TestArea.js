import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import parse from "html-react-parser";

const TextArea = ({
  name = "",
  placeholder = "",
  icon,
  label,
  rows = 3,
  error,
  value,
  onBlur,
  isTouched,
  onChange,
  additionalInfo,
}) => {
  const input_container = useRef(null);
  useEffect(() => {
    if (error) {
      input_container.current?.classList.add("error");
      const errEl = document.querySelectorAll(".error > input")[0];
      errEl.focus();

      gsap.to(input_container.current, {
        x: 3,
        yoyo: true,
        repeat: 7,
        duration: 0.05,
      });
    } else {
      input_container.current?.classList.remove("error");
    }
  }, [error, input_container.current]);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name.toLowerCase()}
          className="inline-flex gap-2 mb-2 text-sm font-medium text-gray-800"
        >
          {label}

          {additionalInfo && (
            <div className="">
              <span className="italic text-[10px] text-gray-500">
                <sup>*</sup>
                {additionalInfo}
              </span>
            </div>
          )}
        </label>
      )}
      <div ref={input_container} className="w-full relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          {icon && parse(icon)}
        </div>
        <textarea
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows}
          id={name.toLowerCase()}
          className={`${icon && "pl-10"} w-full px-3 py-2 bg-white border ${
            error ? "border-red-300" : "border-gray-300"
          }  text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none ${
            error
              ? "ring-2 ring-offset-1 ring-red-500 focus:ring-red-500"
              : "focus:ring-blue-500"
          }`}
          placeholder={placeholder}
        />
      </div>
      <div className="mt-1 text-sm text-red-600">{error}</div>
    </div>
  );
};

export default TextArea;
