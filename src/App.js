import { Suspense, lazy, useEffect } from "react";
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./commun/Header";
import Footer from "./commun/Footer";
import "./App.css";
import "./Assets/css/style.css";
import "./Assets/css/responsive.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Home = lazy(() => import("./pages/Components/Home"));
const About = lazy(() => import("./pages/Components/About"));
const Services = lazy(() => import("./pages/Components/Services"));
const Works = lazy(() => import("./pages/Components/Works"));
const Contact = lazy(() => import("./pages/Components/Contact"));
const Loader = <div className="preloader"><img className="preloader__image" width="60" src='Assets/img/loader.png' alt="" /></div>

function App() {
  useEffect(() => {
		jQuery(window).on('scroll', function () {
			var menu = jQuery('.main-header');
			var WinOffset = jQuery(window).scrollTop();

			if (WinOffset >= 100) {
				menu.addClass('stricky-header stricked-menu stricky-fixed slideInDown main-menu animate');
			} else {
				menu.removeClass('stricky-header stricked-menu stricky-fixed slideInDown main-menu animate');
			}
		});
	}, [])
  return (
    <div className="page-wrapper">
      <Router>
        <Header />
        <Suspense fallback={Loader}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
