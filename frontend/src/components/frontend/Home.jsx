import React from "react";

//import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import About from "./About";
import ServiceImg from "../../assets/images/construction1.jpg";

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
      </main>
      <Footer />
    </>
  );
};

export default Home;
