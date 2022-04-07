import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageWithNavAndFooter = ({ color, children }) => {
  return (
    <>
      <Navbar color={color} />
      <div className="w-full h-full bg-customWhite">{children}</div>
      <Footer />
    </>
  );
};

export default PageWithNavAndFooter;
