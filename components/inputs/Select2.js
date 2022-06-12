import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const Select2 = ({
  opts = [],
  name = "",
  label,
  error,
  value,
  onBlur,
  isTouched,
  onChange,
  additionalInfo,
  position = "bottom",
}) => {
  const [selected, setSelected] = useState(opts[0]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  useEffect(() => {
    if (value) {
      const cn = opts.filter((op) => op._id === value)[0];
      setSelected(cn);
    }
  }, [value]);
  console.log('aaaaaaa',opts);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          {label && (
            <Listbox.Label>
              <label
                htmlFor={name.toLowerCase()}
                className="inline-flex gap-2 mb-1 text-sm font-medium text-gray-800"
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
            </Listbox.Label>
          )}
          <Listbox.Button className="relative cursor-pointer w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:ring-offset-2 focus-visible:border-gray-300 text-sm">
            <span className="block truncate">
              {selected?.name ? selected.name : ""}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.25 10.75L12 14.25L8.75 10.75"
                ></path>
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={`absolute ${
                position === "top" && "bottom-0 mb-10"
              } w-full z-50 py-1 overflow-auto text-sm bg-white rounded-md border-t-0 shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              {opts.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `${
                      active ? "text-blue-900 bg-brandBlue/10" : "text-gray-900"
                    }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-brandBlue" : "text-brandBlue"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <svg
                            className="w-6 h-6 text-currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
                            ></path>
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select2;
