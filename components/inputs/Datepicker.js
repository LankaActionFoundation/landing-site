import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { format } from "date-fns";

const Datepicker = ({ label, st_date, onChange }) => {
  const [startDate, setStartDate] = useState(st_date);

  useEffect(() => {
    onChange(startDate.toString());
  }, [startDate]);

  return (
    <div className="">
      {label && (
        <label className="inline-flex gap-2 mb-2 text-sm font-medium text-gray-800">
          {label}
        </label>
      )}
      <div className="flex items-center justify-center max-w-2xl mx-auto space-x-4">
        <div className="relative w-64">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
            popperClassName="react-datepicker-center"
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="flex items-center justify-between px-2 py-2">
                <h2 className="text-lg">
                  <span className="font-semibold text-gray-800">
                    {format(date, "MMMM")}
                  </span>
                  <span className="ml-2 text-gray-600">
                    {format(date, "yyyy")}
                  </span>
                </h2>

                <div className="space-x-2">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    type="button"
                    className={`
                        ${
                          prevMonthButtonDisabled &&
                          "cursor-not-allowed opacity-50"
                        }
                        inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-brandRed
                    `}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.25 8.75L9.75 12L13.25 15.25"
                      ></path>
                    </svg>
                  </button>

                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    type="button"
                    className={`
                    ${
                      nextMonthButtonDisabled && "cursor-not-allowed opacity-50"
                    }
                    inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-brandRed
                `}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

const DatepickerStart = ({ label, startDate, endDate, setStartDate }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-flex gap-2 mb-1 text-sm font-medium text-gray-800">
          {label}
        </label>
      )}
      <div className="flex items-center justify-center w-full mx-auto space-x-4">
        <div className="relative w-full">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            endDate={endDate}
            startDate={startDate}
            minDate={new Date()}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
            popperClassName="react-datepicker-center"
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="flex items-center justify-between px-2 py-2">
                <h2 className="text-lg">
                  <span className="font-semibold text-gray-800">
                    {format(date, "MMMM")}
                  </span>
                  <span className="ml-2 text-gray-600">
                    {format(date, "yyyy")}
                  </span>
                </h2>

                <div className="space-x-2">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    type="button"
                    className={`
                        ${
                          prevMonthButtonDisabled &&
                          "cursor-not-allowed opacity-50"
                        }
                        inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-brandRed
                    `}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.25 8.75L9.75 12L13.25 15.25"
                      ></path>
                    </svg>
                  </button>

                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    type="button"
                    className={`
                    ${
                      nextMonthButtonDisabled && "cursor-not-allowed opacity-50"
                    }
                    inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-brandRed
                `}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

const DatepickerEnd = ({ label, startDate, endDate, setEndDate }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-flex gap-2 mb-1 text-sm font-medium text-gray-800">
          {label}
        </label>
      )}
      <div className="flex items-center justify-center w-full mx-auto space-x-4">
        <div className="relative w-full">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            endDate={endDate}
            startDate={startDate}
            minDate={new Date()}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
            popperClassName="react-datepicker-center"
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="flex items-center justify-between px-2 py-2">
                <h2 className="text-lg">
                  <span className="font-semibold text-gray-800">
                    {format(date, "MMMM")}
                  </span>
                  <span className="ml-2 text-gray-600">
                    {format(date, "yyyy")}
                  </span>
                </h2>

                <div className="space-x-2">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    type="button"
                    className={`
                        ${
                          prevMonthButtonDisabled &&
                          "cursor-not-allowed opacity-50"
                        }
                        inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-brandRed
                    `}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M13.25 8.75L9.75 12L13.25 15.25"
                      ></path>
                    </svg>
                  </button>

                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    type="button"
                    className={`
                    ${
                      nextMonthButtonDisabled && "cursor-not-allowed opacity-50"
                    }
                    inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-brandRed
                `}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export { Datepicker, DatepickerStart, DatepickerEnd };
