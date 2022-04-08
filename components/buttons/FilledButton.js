import React from "react";

const FilledButton = ({
  type = "button",
  color,
  focusOffset,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
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
        "bg-brandYellow hover:bg-brandYellow/80 focus-visible:ring-brandYellow"
      }
      ${
        color === "teal" &&
        "bg-brandTeal hover:bg-brandTeal/80 focus-visible:ring-brandTeal"
      }
      ${
        color === "orange" &&
        "bg-brandOrange hover:bg-brandOrange/90 focus-visible:ring-brandOrange"
      }
      ${
        color === "blue" &&
        "bg-customBlue hover:bg-customBlueHoverLight focus-visible:ring-customBlue"
      }
      ${
        color === "green" &&
        "bg-brandGreenLight hover:bg-brandGreenLight/90 focus-visible:ring-brandGreenLight"
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
