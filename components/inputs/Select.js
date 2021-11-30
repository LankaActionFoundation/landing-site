import React, { Fragment, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import gsap from "gsap";

const Select = ({
  label,
  error = "",
  options = [],
  handler,
  selectedIndex = 0,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[selectedIndex]);
  const selectButton = useRef(null);

  useEffect(() => {
    if (error) {
      gsap.to(selectButton.current, 0.05, {
        x: 3,
        yoyo: true,
        repeat: 7,
      });
    }
  }, [error]);

  useEffect(() => {
    handler(selectedOption);
  }, [selectedOption]);

  return (
    <div className="w-full min-h-[85px]">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              {label}
            </Listbox.Label>

            <div className="relative mt-1">
              <Listbox.Button
                ref={selectButton}
                id={label + "_select"}
                className={`
                relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-xl shadow-sm 
                border border-gray-300 cursor-default
                focus:outline-none
                sm:text-sm
                ${
                  open &&
                  error &&
                  "ring-2 ring-customRed focus:ring-customRed border-none"
                }
                ${
                  open &&
                  !error &&
                  "ring-2 ring-customBlue focus:ring-customBlue border-none"
                }
                ${
                  !open &&
                  error &&
                  "ring-2 ring-customRed focus:ring-customRed focus:border-none border-none"
                }
                ${
                  !open &&
                  !error &&
                  "focus:ring-2  focus:ring-customBlue focus:border-none border border-gray-300"
                }
            `}
              >
                <span className="block truncate">{selectedOption.name}</span>
                <span
                  className="
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    pr-2
                    pointer-events-none
                    "
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 8.0368L11.9632 15L18.9263 8.0368"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Listbox.Button>

              <div className="absolute bottom-0 -mb-5 text-xs font-medium text-customRed">
                {error}
              </div>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className="absolute
                            z-50
                            w-full
                            py-1
                            mt-1
                            overflow-auto
                            text-base
                            bg-white
                            rounded-md
                            shadow-lg
                            max-h-60
                            ring-1 ring-black ring-opacity-5
                            focus:outline-none
                            sm:text-sm"
                >
                  {options.map((option, i) => (
                    <Listbox.Option
                      key={i}
                      //disabled={option.unavailable}
                      value={option}
                      as="div"
                    >
                      {({ active, selected, disabled }) => (
                        <li
                          className={`${
                            active
                              ? "text-blue-900 bg-blue-100"
                              : "text-gray-900"
                          }
                        ${
                          disabled &&
                          "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {option.name}
                          </span>

                          {selected && (
                            <span
                              className="
                                absolute
                                inset-y-0
                                left-0
                                flex
                                items-center
                                pl-3
                                text-amber-600
                                "
                            >
                              <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M4 12.3137L9.65685 17.9706L20.9706 6.65687"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                          )}
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
