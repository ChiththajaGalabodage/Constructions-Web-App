import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ServiceImg from "../../assets/images/construction1.jpg";

const Services = () => {
  return (
    <>
      <Header />
      <Hero
        preHeading="Quality. Integrity. Value"
        heading="Services"
        text="We excel at transforming visions into reality <br />
              through outstanding craftsmanship and precise."
      />
      <section className="section-3 bg-light py-5">
        <div className="container py-5">
          <div className="section-header text-center">
            <span>our services</span>
            <h2>Our construction services</h2>
            <p>
              We offer a diverse array of construction services, spanning
              residential, commercial, and industrial projects.
            </p>
          </div>
          <div className="row pt-4">
            <div className="col-md-4 col-lg-4">
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
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Specialty construction is a niche sector within the
                      construction industry that focuses on projects requiring
                      specialized skills, materials, and techniques.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Industrial Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Industrial construction is a specialized sector within the
                      construction industry that focuses on the design,
                      development, and construction of facilities for industrial
                      use.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Building Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Building construction is a broad and essential sector
                      within the construction industry that focuses on the
                      creation of structures designed for human occupancy and
                      use.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
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
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Specialty construction is a niche sector within the
                      construction industry that focuses on projects requiring
                      specialized skills, materials, and techniques.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Industrial Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Industrial construction is a specialized sector within the
                      construction industry that focuses on the design,
                      development, and construction of facilities for industrial
                      use.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Building Construction</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Building construction is a broad and essential sector
                      within the construction industry that focuses on the
                      creation of structures designed for human occupancy and
                      use.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />`
    </>
  );
};

export default Services;
