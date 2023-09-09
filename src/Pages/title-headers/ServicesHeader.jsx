import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const ServicesHeader = () => (
    <section className="page-header">
        <Parallax className="page-header-bg" bgImage={"Assets/img/headers/services-header-bg.jpg"} strength={500}>
            <div className='page-header-overlay'></div>
            <div className='page-header-content d-flex align-items-end'>
                <div className="page-header-shape-1 float-bob-x-6"></div>
                <div className="page-header-shape-2 float-bob-x-7"></div>
                <div className="container page-header-container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link to="index.html">Home</Link></li>
                            <li><span>/</span></li>
                            <li>Services</li>
                        </ul>
                        <h2>Services</h2>
                    </div>
                </div>
            </div>
        </Parallax>
    </section>
    );

export default ServicesHeader