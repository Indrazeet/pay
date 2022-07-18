import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    deserunt eaque alias similique
                  </p>
                  <figure>
                    <img
                      src="./images/pic-6.jpg"
                      alt="countactusimg"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* right side contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          id=""
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          id=""
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          id=""
                          placeholder="Add Address"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          id=""
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                    <div class="form-check from-checkbox-style">
                      <input
                        class="form-check-input "
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        
                      />
                      <label class="form-check-label main-hero-para" >
                        I agree that the theepatechnical may contact me at the
                        email address or phone number above
                      </label>
                    </div>
                    <button type="submit" className="btn btn-slyle w-100"  > Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
