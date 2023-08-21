import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="main-header clearfix">
      <nav className="main-menu clearfix">
        <div className="main-menu-wrapper clearfix">
          <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__logo">
                logo
              </div>
              <div className="main-menu-wrapper__main-menu">
                <a href="/" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                  <ul className="main-menu__list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
              </div>  

             

          </div>
        </div>     
      </nav>
    </header>    
  )
}

export default Header