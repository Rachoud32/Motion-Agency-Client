import React from 'react'
import { Link } from 'react-router-dom'
import ContactInfos from '../contact-blocks/ContactInfos'
import ContactForm from '../contact-blocks/ContactForm'
import Socials from '../contact-blocks/Socials'
import Map from '../contact-blocks/Map'

const Contact = () => {
  return (
    <>
      <section className="page-header">
          <div className="page-header-bg" style={{backgroundImage: "url(Assets/img/headers/contact-header-bg.jpg)"}}>
          </div>
          <div className="page-header-shape-1 float-bob-x-6"></div>
          <div className="page-header-shape-2 float-bob-x-7"></div>
          <div className="container">
              <div className="page-header__inner">
                  <ul className="thm-breadcrumb list-unstyled">
                      <li><Link to="index.html">Home</Link></li>
                      <li><span>/</span></li>
                      <li>contact</li>
                  </ul>
                  <h2>Contact</h2>
              </div>
          </div>
      </section>
      <ContactInfos/>
      <ContactForm/>
      <Map/>
      <Socials/>
    </>
  )
}

export default Contact