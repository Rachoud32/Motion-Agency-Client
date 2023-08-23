import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage: "url(assets/images/backgrounds/services-header-bg.jpg)"}}>
        </div>
        <div className="page-header-shape-1 float-bob-x-6"></div>
        <div className="page-header-shape-2 float-bob-x-7"></div>
        <div className="container">
            <div className="page-header__inner">
                <ul className="thm-breadcrumb list-unstyled">
                    <li><Link to="index.html">Home</Link></li>
                    <li><span>/</span></li>
                    <li>services</li>
                </ul>
                <h2>Services</h2>
            </div>
        </div>
    </section>
  )
}

export default Services