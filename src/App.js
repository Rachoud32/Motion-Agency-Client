import { Suspense, lazy, useEffect, useState } from "react";
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./commun/Header";
import Footer from "./commun/Footer";
import Gototop from "./pages/others/Scrolltop";
import "./App.css";
import "./Assets/css/style.css";
import "./Assets/css/responsive.css";
import "animate.css"
import { jarallax } from "jarallax";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Home = lazy(() => import("./pages/components/Home"));
const About = lazy(() => import("./pages/components/About"));
const Services = lazy(() => import("./pages/components/Services"));
const ServiceDetails = lazy(() => import("./pages/components/ServiceDetails"));
const Works = lazy(() => import("./pages/components/Works"));
const Contact = lazy(() => import("./pages/components/Contact"));
const Page404 = lazy(() => import("./pages/components/Page404"));
const Loader = <div className="preloader"><img className="preloader__image" width="60" src='Assets/img/loader.png' alt="" /></div>

function App() {
  const [showSecondNav, setShowSecondNav] = useState(false)

  useEffect(() => {
		jQuery(window).on("scroll", function () {
      if (jQuery(".stricked-menu").length) {
        var headerScrollPos = 130;
        var stricky = jQuery(".stricked-menu");
        if (jQuery(window).scrollTop() > headerScrollPos) {
          stricky.addClass("stricky-fixed");
        } else if (jQuery(this).scrollTop() <= headerScrollPos) {
          stricky.removeClass("stricky-fixed");
        }
      }
      if (jQuery(".sticky-header__content").length) {
          setShowSecondNav(true)
        } else {
          setShowSecondNav(false)
      }
    });

    jarallax(document.querySelectorAll('.jarallax'), {
      type: 'scroll',
      speed: 0.2
    });
    
	}, [])
  
  return (
    <div className="page-wrapper">
      <Router>
        <Header showSecondNav={showSecondNav} />
        <Suspense fallback={Loader}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
        <Footer />
        <Gototop/>
      </Router>
    </div>
  );
}

export default App;
