import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import WorkDetailsHeader from "../title-headers/WorkDetailsHeader";

const WorkDetails = () => {
  return (
    <>
      <WorkDetailsHeader/>

      <section className="case-details">
        <div className="container">
          <div className="row">

            <div className="col-xl-12 case-details__content">
              <span className="section-title__tagline">get to know us</span>
              <h4 className="case-details__content-title">
                The challenge
              </h4>
              <div className="row">
                <div className="col-lg-7 pe-5 wow animate__fadeIn">
                  <p className="case-details__content-text-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.<br/>
                    It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>

                <div className="col-lg-5 wow animate__fadeIn">
                  <div className="case-details__details-box">
                  <ul className="list-unstyled case-details__details">
                    
                    <li>
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                          <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                        </div>
                        <div className="case-details__details-sub-title">
                          Client
                        </div>
                      </div>
                      <p className="case-details__details-title">Jessica Brown</p>
                    </li>

                    <li>
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                          <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                        </div>
                        <div className="case-details__details-content d-flex">
                          <span className="case-details__details-sub-title">
                            Industry
                          </span>
                        </div>  
                      </div>
                      <p className="case-details__details-title">Travel</p>
                    </li>

                    <li>
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                        <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                        </div>
                        <div className="case-details__details-content d-flex">
                          <span className="case-details__details-sub-title">
                            Services
                          </span>
                        </div>
                      </div>
                      <p className="case-details__details-title"> Design, Art Direction, Website</p>
                    </li>

                    <li>
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                          <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                        </div>
                        <div className="case-details__details-content d-flex">
                          <span className="case-details__details-sub-title">
                            Date
                          </span>
                        </div>
                      </div>
                      <p className="case-details__details-title"> January 16th, 2017</p>
                    </li>

                    <li>
                    <div className="d-flex">
                      <div className="case-details__details-icon">
                        <FontAwesomeIcon icon={faUserCircle} size="lg"/>  
                      </div>
                      <div className="case-details__details-content d-flex">
                        <span className="case-details__details-sub-title">
                          Website
                        </span>
                       </div>
                      </div>
                      <p className="case-details__details-title">
                          work.com
                        </p>
                    </li>
                    
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-fluid p-0">
          <div className="row">
            <img src="Assets/img/works/project-block-1.webp" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="Assets/img/works/thumbs/project-block-6-1.webp" alt=""/>
            </div>
            <div className="col-lg-6">
              <img src="Assets/img/works/thumbs/project-block-7-1.webp" alt=""/>
            </div>
          </div>
        </div>
      </section>

      <section className="work-more-details wow animate__fadeIn">
        <div className="container">
          <div className="row margin-eight-bottom md-margin-50px-bottom sm-margin-20px-bottom">
            <div className="testimonial-block-custombg"></div>
            <div className="col-12 col-lg-6 pe-5 testimonial-block wow animate__fadeInUp">
              <h5 className="mb-4">
                Holistic brand redesign focusing product design, interface
                design, studio photograph style, icon design, editorial design,
                web design &amp; motion design.
              </h5>
              <p className="section-title__tagline">
                Paul Rand / Creative Director
              </p>
            </div>
            <div className="col-12 col-xl-5 col-lg-6 offset-xl-1 extra-details wow animate__fadeInUp">
              <h4 className="case-details__content-title">
                Concept
              </h4>
              <p>
                  Koordinaten bilden die Grundlage für Einsatz des Produktes
                  ausgerichtete Corporate Design. Reale Daten wie zum Beispiel
                  Wetterdaten, Geografische Flächen und Höhenmeter, werden in das
                  Design in mit einbezogen. Die neu gestaltete Marke zeichnet sich
                  sowohl durch userorientierte Einsatz.
                </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-fluid p-0">
          <div className="row">
            <img src="Assets/img/works/project-block-9.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block mb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                <img src="Assets/img/works/thumbs/project-block-8-1.webp" alt=""/>
            </div>
            <div className="col-lg-6">
              <img src="Assets/img/works/thumbs/project-block-8-2.webp" alt=""/>
            </div>
          </div>
        </div>
      </section>

      <section className="wow animate__fadeIn pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="case-details__pagination-box">
                <ul className="case-details__pagination list-unstyled">
                  <li className="next">
                    <Link to="#" aria-label="Previous">
                      <i className="icon-right-arrow"></i>Prev
                    </Link>
                  </li>
                  <li className="count">
                    <Link to="#"></Link>
                  </li>
                  <li className="count">
                    <Link to="#"></Link>
                  </li>
                  <li className="count">
                    <Link to="#"></Link>
                  </li>
                  <li className="count">
                    <Link to="#"></Link>
                  </li>
                  <li className="previous">
                    <Link to="#" aria-label="Next">
                      Next<i className="icon-right-arrow"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkDetails;
