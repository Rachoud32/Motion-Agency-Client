import React from "react";
import { Link } from "react-router-dom";

const WorkDetails = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: "url(Assets/img/headers/works-header-bg.jpg)",
          }}
        ></div>
        <div className="page-header-shape-1 float-bob-x-6"></div>
        <div className="page-header-shape-2 float-bob-x-7"></div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>Work Details</li>
            </ul>
            <h2>Work Details</h2>
          </div>
        </div>
      </section>

      <section className="case-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="case-details__img">
                <img src="Assets/img/works/work-1-2.webp" alt="" />
                <div className="case-details__details-box">
                  <ul className="list-unstyled case-details__details">
                    <li>
                      <div className="case-details__details-icon">
                        <span className="far fa-user-circle"></span>
                      </div>
                      <div className="case-details__details-content">
                        <span className="case-details__details-sub-title">
                          Client
                        </span>
                        <p className="case-details__details-title">Jessica Brown</p>
                      </div>
                    </li>
                    <li>
                      <div className="case-details__details-icon">
                        <span className="far fa-bookmark"></span>
                      </div>
                      <div className="case-details__details-content">
                        <span className="case-details__details-sub-title">
                          Category
                        </span>
                        <p className="case-details__details-title">Branding</p>
                      </div>
                    </li>
                    <li>
                      <div className="case-details__details-icon">
                        <span className="far fa-clock"></span>
                      </div>
                      <div className="case-details__details-content">
                        <span className="case-details__details-sub-title">
                          Date
                        </span>
                        <p className="case-details__details-title">
                          20 October, 2021
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-12 case-details__content">
              <h4 className="case-details__content-title">
                Mammut Interactive Corporate Design
              </h4>
              <div className="row">
                <div className="col-lg-6 wow animate__fadeIn">
                  <p className="case-details__content-text-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  It has
                  <p className="case-details__content-text-2">
                    {" "}
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>

                <div className="col-lg-4 offset-lg-1 line-height-26 wow animate__fadeIn">
                  <ul className="list-style-6 margin-twelve-left">
                    <li className="">
                      <label className="">Client:</label>Jason Richardson
                    </li>
                    <li className="">
                      <label className="">Industry:</label>Adventure / Travel
                    </li>
                    <li className="">
                      <label className="">Services:</label>Design, Art Direction,
                      Website
                    </li>
                    <li className="">
                      <label className="">Date:</label>January 16th, 2017
                    </li>
                    <li className="">
                      <label className="">Website:</label>
                      <Link to="/" target="_blank" rel="noreferrer">
                        www.mammutadventure.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-md">
          <div className="row">
            <img src="Assets/img/works/project-block-2.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div class="container-md">
          <div className="row">
            <img src="Assets/img/works/project-block-3.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-md">
          <div className="row">
            <img src="Assets/img/works/project-block-4.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-md">
          <div className="row">
            <img src="Assets/img/works/project-block-5.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-md">
          <div className="row">
            <img src="Assets/img/works/project-block-6.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-md">
          <div className="row">
            <img src="Assets/img/works/project-block-7.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-md">
          <div className="row">
            <img src="Assets/img/works/project-block-8.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-md">
          <div className="row">
            <img src="Assets/img/works/project-block-9.png" alt=""/>
          </div>
        </div>
      </section>

      {/*<section
        className="background-extras"
        style={{ background: "var(--motion-black)" }}
      >
        <div class="container-fluid padding-five-lr md-padding-30px-lr">
          <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 align-items-center justify-content-center">
            <div class="col">
              <img src="Assets/img/works/work-1-1.webp" alt="brochure image" />
            </div>

            <div class="col">
              <img src="Assets/img/works/work-1-1.webp" alt="brochure image" />
            </div>

            <div class="col">
              <img src="Assets/img/works/work-1-1.webp" alt="brochure image" />
            </div>
          </div>
        </div>
      </section>*/}

      <section class="work-more-details wow animate__fadeIn pb-0">
        <div class="container">
          <div class="row margin-eight-bottom md-margin-50px-bottom sm-margin-20px-bottom">
            <div class="col-12 col-lg-6 last-paragraph-no-margin md-margin-30px-bottom wow animate__fadeInUp">
              <h5 class="font-weight-300 text-extra-dark-gray">
                Holistic brand redesign focusing product design, interface
                design, studio photograph style, icon design, editorial design,
                web design &amp; motion design.
              </h5>
              <p class="font-weight-300 text-medium text-medium-gray">
                - Paul Rand / Creative Director
              </p>
            </div>
            <div className="col-12 col-xl-5 col-lg-6 offset-xl-1 wow animate__fadeInUp">
              <p>
                Koordinaten bilden die Grundlage für Einsatz des Produktes
                ausgerichtete Corporate Design. Reale Daten wie zum Beispiel
                Wetterdaten, Geografische Flächen und Höhenmeter, werden in das
                Design in mit einbezogen. Die neu gestaltete Marke zeichnet sich
                sowohl durch userorientierte Einsatz. die in Grundlage für das
                Einsatz von des Produktes ausgerichtete Corporate Voin Design.
                in Reale Daten wie zum Beispiel Wetterdaten, Geog rafische
                Koordi naten und Höhenmeter, werden in das Design mit
                einbezogen.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center wow animate__fadeInUp">
              <img src="images/portfolio-detail-design.png" alt="" />
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
                  <li class="count">
                    <Link to="#"></Link>
                  </li>
                  <li class="count">
                    <Link to="#"></Link>
                  </li>
                  <li class="count">
                    <Link to="#"></Link>
                  </li>
                  <li class="count">
                    <Link to="#"></Link>
                  </li>
                  <li class="previous">
                    <Link to="#" aria-label="Next">
                      Next<i class="icon-right-arrow"></i>
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
