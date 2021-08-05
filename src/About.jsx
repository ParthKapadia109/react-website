import React from "react";
import web from "../src/img/about.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="This is our about page"
        visit="/contact"
        imgsrc={web}
        btnname="Contact Now"
      />
    </>
  );
};
export default About;
