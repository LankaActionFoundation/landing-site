import React from "react";
import dateFormat from "dateformat";

const formatDate = (date) => {
  return dateFormat(date, "mmmm dS, yyyy");
};

const BlogCard = ({
  title,
  subTitle,
  thumbnail,
  date,
  category,
  widthFull = false,
}) => {
  return (
    <div
      className={`
            relative
             max-h-[450px]
            ${widthFull ? "max-w-none" : "max-w-[300px]"}
            w-full
            rounded-xl
            border border-gray-300
            shadow-sm
            overflow-hidden
          `}
    >
      <div className="absolute h-10 w-full bottom-0 bg-gradient-to-t from-white"></div>

      {/* image */}
      <img
        className="object-cover w-full h-40 rounded-t-lg"
        src={thumbnail}
        alt="card thumbanail"
      />
      {/* <!-- endo of image --> */}

      <div class={`p-5 w-full ${widthFull ? "max-w-none" : "max-w-[300px]"}`}>
        <div class="w-full flex items-center justify-between gap-10">
          {/* <!-- category --> */}
          <div class="flex items-center justify-center text-gray-700">
            <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path
                d="M12.5 6C12.5 6.27614 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.27614 11.5 6C11.5 5.72386 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.72386 12.5 6Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.5 6C18.5 6.27614 18.2761 6.5 18 6.5C17.7239 6.5 17.5 6.27614 17.5 6C17.5 5.72386 17.7239 5.5 18 5.5C18.2761 5.5 18.5 5.72386 18.5 6Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.5 12C18.5 12.2761 18.2761 12.5 18 12.5C17.7239 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.7239 11.5 18 11.5C18.2761 11.5 18.5 11.7239 18.5 12Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.5 6C6.5 6.27614 6.27614 6.5 6 6.5C5.72386 6.5 5.5 6.27614 5.5 6C5.5 5.72386 5.72386 5.5 6 5.5C6.27614 5.5 6.5 5.72386 6.5 6Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.5 12C6.5 12.2761 6.27614 12.5 6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.7239 6.5 12Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.5 18C6.5 18.2761 6.27614 18.5 6 18.5C5.72386 18.5 5.5 18.2761 5.5 18C5.5 17.7239 5.72386 17.5 6 17.5C6.27614 17.5 6.5 17.7239 6.5 18Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <h5 class="ml-1 text-xs uppercase tracking-wide">{category}</h5>
          </div>
          {/* <!-- end of category --> */}

          {/* <!-- date --> */}
          <h5 class="text-xs text-gray-700">{formatDate(date)}</h5>
          {/* <!-- end of date --> */}
        </div>

        {/* <!-- title --> */}
        <h2 class="mt-5 text-lg md:text-xl font-bold text-gray-800">{title}</h2>
        {/* <!-- end of title --> */}

        {/* <!-- sub title --> */}
        <h4 class="mt-3 w-full break-words text-xs md:text-sm text-gray-600">
          {subTitle}
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
