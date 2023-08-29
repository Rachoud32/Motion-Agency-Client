import React from 'react'
import ServiceDetailsSideBar from '../services-blocks/ServiceDetailsSideBar'
import ServiceDetailsMain from '../services-blocks/ServiceDetailsMain'
import { Link } from 'react-router-dom'

const ServiceDetails = () => {
  return (
    <>
    <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage: "url(Assets/img/headers/services-header-bg.jpg)"}}>
        </div>
        <div className="page-header-shape-1 float-bob-x-6"></div>
        <div className="page-header-shape-2 float-bob-x-7"></div>
        <div className="container">
            <div className="page-header__inner">
                <ul className="thm-breadcrumb list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><span>/</span></li>
                    <li>Service details</li>
                </ul>
                <h2>Service details</h2>
            </div>
        </div>
    </section>
    <section class="service-details">
      <div class="container">
          <div class="row">
            <ServiceDetailsSideBar/>
            <ServiceDetailsMain/>
          </div>
      </div>
    </section>            
  </>
  )
}

export default ServiceDetails