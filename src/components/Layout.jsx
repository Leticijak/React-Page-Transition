import React from "react";
import Header from "./Header";
import Hero from "./Hero";

const Layout = ({ children, image, title, desc }) => {
  return (
    <>
      <Header />
      <Hero image={image} title={title} desc={desc} />
      {children}
    </>
  );
};

export default Layout;
