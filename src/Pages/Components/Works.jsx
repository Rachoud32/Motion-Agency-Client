import React from "react";
import { Link } from "react-router-dom";
import Work from "./WorkList";

const Portfolio = () => {
  return (
    <>
      <section className="page-header">
          <div className="page-header-bg" style={{backgroundImage: "url(Assets/img/headers/works-header-bg.jpg)"}}>
          </div>
          <div className="page-header-shape-1 float-bob-x-6"></div>
          <div className="page-header-shape-2 float-bob-x-7"></div>
          <div className="container">
              <div className="page-header__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                      <li><Link to="/">Home</Link></li>
                      <li><span>/</span></li>
                      <li>works</li>
                  </ul>
                  <h2>Works</h2>
              </div>
          </div>
      </section>
      <Work/>
    </>
  );
};

export default Portfolio;
