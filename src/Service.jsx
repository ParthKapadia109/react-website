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
        <h1 className="text-center m-3 mb-4 border-black text-decoration-underline ">Our services</h1>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <Card imgsrc={web} name="Websites" btnname="Click-more" description="Some quick example text to build on the card title and make up the bulk of the card's content." visit="/service/website" />

                <Card imgsrc={app} name="Application" btnname="Click-more" description="Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />

                <Card imgsrc={ps} name="Photoshop" btnname="Click-more" description="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text." />

                <Card imgsrc={react} name="React js" btnname="Click-more" description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />

                <Card imgsrc={digi} name="Digital Marketing" btnname="Click-more" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />

                <Card imgsrc={ai} name="Machine Learning" btnname="Click-more" description="Some quick example text to build on the card title and make up the
              bulk of the card's content." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
