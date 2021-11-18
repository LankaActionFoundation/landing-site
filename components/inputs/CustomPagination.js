import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

const CustomPagination = ({ currentPage, handler, pageCount = 3 }) => {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState(currentPage);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let index = 1; index <= pageCount; index++) {
      arr.push(index);
    }
    setPages(arr);
    setSelectedPage(currentPage);
  }, []);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (router) {
      handler(selectedPage);
    }
  }, [selectedPage]);

  return (
    <div className="w-full flex flex-wrap items-start justify-center gap-2 md:h-16">
      {pages.map((val) => (
        <button
          key={val}
          onClick={() => {
            setSelectedPage(val);
          }}
          className={`relative focus:outline-none ${
            val === selectedPage ? "bg-customYellow h-16 shadow-lg" : "h-10"
          } p-1 w-10 rounded-full flex items-start justify-center outline-none transition-all duration-300`}
        >
          <span
            className={`w-8 h-8 border border-gray-300 bg-white drop-shadow-lg rounded-full text-xs p-2`}
          >
            {val}
          </span>

          {val === selectedPage && (
            <span className="absolute mb-3 bottom-0 w-1 h-1 bg-white rounded-full"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default CustomPagination;
