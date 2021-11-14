import React from "react";

const FilledButton = ({ color, focusOffset, children }) => {
  return (
    <button
      className={`
      w-full
      px-2 py-2 rounded-xl
      font-medium
      text-sm
      transform
      active:scale-[0.98]
      transition-transform
      duration-100
      border-2 border-transparent text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 
      ${
        color === "yellow" &&
        "bg-customYellow hover:bg-customYellowHoverLight focus-visible:ring-customYellow"
      }
      ${
        color === "green" &&
        "bg-customGreen hover:bg-customGreenHoverLight focus-visible:ring-customGreen"
      }
      ${
        focusOffset === "white"
          ? "focus-visible:ring-offset-white "
          : "focus-visible:ring-offset-black "
      }
      `}
    >
      {children}
    </button>
  );
};

export default FilledButton;
