import React ,{useState} from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {

    const [show, setshow] = useState(false);

  return (
    <>
      <section className="navbar-bg  sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Nav.Link className="navbar-brand" to="#">
              Yadavpay
            </Nav.Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
             onClick={() => setshow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show? "show" : ""}`} >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Nav.Link className="nav-link active" aria-current="page" href="/">
                    Home
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/service">
                    services
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/about">
                    About
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/contact">
                    Contact
                  </Nav.Link>
                </li>
              </ul>
              <form className="d-flex">
              
                 <button className="btn btn-slyle" type="submit">
                  Sign Up
                </button>
                <button className="btn  btn-slyle btn-style-border" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
