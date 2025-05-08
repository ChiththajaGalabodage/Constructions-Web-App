import React from "react";

//import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import About from "./About";
import ServiceImg from "../../assets/images/construction1.jpg";
import ConstrutionImg from "../../assets/images/construction2.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Sction*/}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constructions</span>
                <h1>
                  Crafting dreams with <br /> precision & excellence
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outstanding craftsmanship and precise <br /> attention to
                  detail. With years of experience and a dedication to quality.
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary large">Contact Now</a>
                  <a className="btn btn-secondary ms-2 large">View projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about us section */}
        <About />

        {/* our Srevices*/}
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>our services</span>
              <h2>Our construction services</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Civil construction is a core sector within the
                        construction industry that focuses on the design,
                        development, and maintenance of infrastructure that
                        supports modern society.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Civil construction is a core sector within the
                        construction industry that focuses on the design,
                        development, and maintenance of infrastructure that
                        supports modern society.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Civil construction is a core sector within the
                        construction industry that focuses on the design,
                        development, and maintenance of infrastructure that
                        supports modern society.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ServiceImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Civil construction is a core sector within the
                        construction industry that focuses on the design,
                        development, and maintenance of infrastructure that
                        supports modern society.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Why Choose Us*/}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>
                Created in close partnership with our clients and collaborators,
                this approach merges industry expertise, decades of experience,
                <br />
                innovation, and flexibility to consistently deliver excellence.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>

                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>

                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-Edge Solutions</h3>
                  </div>

                  <p>
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects */}
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>our projects</span>
              <h2>Discover our diverse range of projects</h2>
              <p>
                We offer a diverse array of construction services, spanning
                residential, commercial, and industrial projects.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ConstrutionImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Goa Project 2025</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Civil construction is a core sector within the
                        construction industry that focuses on the design,
                        development, and maintenance of infrastructure that
                        supports modern society.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ConstrutionImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Goa Project 2025</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Civil construction is a core sector within the
                        construction industry that focuses on the design,
                        development, and maintenance of infrastructure that
                        supports modern society.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ConstrutionImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Goa Project 2025</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Civil construction is a core sector within the
                        construction industry that focuses on the design,
                        development, and maintenance of infrastructure that
                        supports modern society.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ConstrutionImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Goa Project 2025</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Civil construction is a core sector within the
                        construction industry that focuses on the design,
                        development, and maintenance of infrastructure that
                        supports modern society.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
