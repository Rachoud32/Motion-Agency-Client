import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Commun/Header";
import Footer from "./Commun/Footer";
import "./App.css";
import "./Assets/css/style.css";
import "./Assets/css/responsive.css";

const Home = lazy(() => import("./Pages/Components/Home"));
const About = lazy(() => import("./Pages/Components/About"));
const Services = lazy(() => import("./Pages/Components/Services"));
const Portfolio = lazy(() => import("./Pages/Components/Portfolio"));
const Contact = lazy(() => import("./Pages/Components/Contact"));
const Loader = <div className="preloader"><img className="preloader__image" width="60" src='Assets/img/loader.png' alt="" /></div>

function App() {
  return (
    <div className="page-wrapper">
      <Router>
        <Header />
        <Suspense fallback={Loader}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
