import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import SwiperNavButtons from "../others/SwiperNavButtons";

const Slider = () => {
  return (
    <section className="main-slider">
      <Swiper
        modules={[ Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
        spaceBetween={0}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        effect="fade"
        navigation={false}
        pagination={false}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="image-layer"
            style={{backgroundImage: 'url(Assets/img/sliders/main-slider-1-1.jpg)'}}>
          </div>
          <div className="main-slider-shape-1"></div>
          <div className="main-slider-shape-2"></div>
          <div className="main-slider-shape-3"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="main-slider__content">
                    <h2>Award <br/> winning <br/> consulting</h2>
                    <a href="about.html" className="thm-btn">Discover More</a>
                </div>
              </div>
            </div>   
          </div>  
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
        <div className="image-layer"
            style={{backgroundImage: 'url(Assets/img/sliders/main-slider-1-2.jpg)'}}>
          </div>
          <div className="main-slider-shape-1"></div>
          <div className="main-slider-shape-2"></div>
          <div className="main-slider-shape-3"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="main-slider__content">
                    <h2>Award <br/> winning <br/> consulting</h2>
                    <a href="about.html" className="thm-btn">Discover More</a>
                </div>
              </div>
            </div>   
          </div> 
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
        <div className="image-layer"
            style={{backgroundImage: 'url(Assets/img/sliders/main-slider-1-3.jpg)'}}>
          </div>
          <div className="main-slider-shape-1"></div>
          <div className="main-slider-shape-2"></div>
          <div className="main-slider-shape-3"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="main-slider__content">
                    <h2>Award <br/> winning <br/> consulting</h2>
                    <a href="about.html" className="thm-btn">Discover More</a>
                </div>
              </div>
            </div>   
          </div> 
        </SwiperSlide>

        <SwiperNavButtons/>
        
      </Swiper>
    </section>
  );
};

export default Slider;
