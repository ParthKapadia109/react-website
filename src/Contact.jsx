import { Alert } from "bootstrap/dist/js/bootstrap.bundle";
import React, { useState } from "react";

const Contact = () => {
  const [data, nData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
    submit:"submit",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    nData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
      e.preventdefault(
          alert(`${data.submit}`)
      );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <div className="row">
                <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder="Mobile number"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email Id
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Textarea
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      name="msg"
                      value={data.msg}
                      onChange={InputEvent}
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <button
                      to="#"
                      type="submit"
                      name="submit"
                      value={data.submit}
                      onChange={InputEvent}
                      className="btn btn-outline-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
