import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageWithNavAndFooter = ({ color, children }) => {
  return (
    <>
      <Navbar color={color} />
      {children}
      <Footer />
    </>
  );
};

export default PageWithNavAndFooter;
