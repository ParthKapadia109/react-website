import React from "react";
import web from "../src/img/web.png";
import app from "../src/img/app.png";
import ps from "../src/img/ps.jpg";
import react from "../src/img/react.jpg";
import digi from "../src/img/digi.jpg";
import ai from "../src/img/ai.png";

import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center m-3 mb-4 border-black">Our services</h1>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <Card imgsrc={web} name="Websites" btnname="Click-more" />

                <Card imgsrc={app} name="Applications" btnname="Click-more" />

                <Card imgsrc={ps} name="Photoshop" btnname="Click-more" />

                <Card imgsrc={react} name="React js" btnname="Click-more" />

                <Card imgsrc={digi} name="Digital Marketing" btnname="Click-more" />

                <Card imgsrc={ai} name="Machine Learning" btnname="Click-more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
