import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1text-capitalize d-flex justify-content-center flex-column">
              <h1>
                {props.name}
                <strong className="brand-name m-3">Parth Kapadia.</strong>
              </h1>
              <p className="my-3  text-capitalize">
                we are the team of talented developer making websites
              </p>
              <div className="mt-3 text-capitalize">
                <NavLink
                  to={props.visit}
                  className=" btn btn-outline-primary"
                >
                  {props.btnname}
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 header-img ">
              <img
                src={props.imgsrc}
                className="figure-img img-fluid rounded animation"
                alt="scooter"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
