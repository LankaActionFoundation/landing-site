import React from "react";

const GalleryCollectionCard = ({
  images = [1, 2],
  title = "Marking World humanitarian day 2021",
}) => {
  return (
    <div className="relative w-full h-80 hover:shadow-2xl rounded-3xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 rounded-3xl z-30 bg-gradient-to-b from-transparent  to-black/80"></div>
      <div className="px-5 py-5 absolute z-40 inset-x-0 bottom-0 rounded-3xl">
        <h3 className="text-white text-3xl font-title">{title}</h3>
      </div>

      <div className="absolute inset-0 z-20 w-full border border-gray-300 grid grid-cols-2 grid-rows-2 rounded-3xl overflow-hidden">
        {images.map((image) => (
          <div className="h-44 w-full overflow-hidden">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-10 w-full border border-gray-300 grid grid-cols-2 grid-rows-2 rounded-3xl overflow-hidden">
        {[1, 2, 3, 4].map(() => (
          <div className="h-44 w-full overflow-hidden">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <svg
                className="text-white w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 16L7.49619 12.5067C8.2749 11.5161 9.76453 11.4837 10.5856 12.4395L13 15.25M10.915 12.823C11.9522 11.5037 13.3973 9.63455 13.4914 9.51294C13.4947 9.50859 13.4979 9.50448 13.5013 9.50017C14.2815 8.51598 15.7663 8.48581 16.5856 9.43947L19 12.25M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCollectionCard;
