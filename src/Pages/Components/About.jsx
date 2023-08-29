import React from 'react'
import { Link } from 'react-router-dom'
import Experience from '../about-blocks/Experience'
import Consultation from '../about-blocks/Consultation'
import Quality from '../about-blocks/Quality'
import Mission from '../about-blocks/Mission'
import Team from '../about-blocks/Team'
import Clients from '../about-blocks/Clients'

const About = () => {
  return (
    <>
      <section className="page-header">
          <div className="page-header-bg" style={{backgroundImage: "url(Assets/img/headers/about-header-bg.jpg)"}}>
          </div>
          <div className="page-header-shape-1 float-bob-x-6"></div>
          <div className="page-header-shape-2 float-bob-x-7"></div>
          <div className="container">
              <div className="page-header__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                      <li><Link to="index.html">Home</Link></li>
                        <li><span>/</span></li>
                      <li>about</li>
                  </ul>
                  <h2>About us</h2>
              </div>
          </div>
      </section>
      <Experience/>
      <Consultation/>
      <Quality/>
      <Mission/>
      <Team/>
      <Clients/>
    </>
  )
}

export default About