import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
     <div className="main-slider__nav">
        <div className="swiper-button-prev" id="main-slider__swiper-button-next" onClick={() => swiper.slideNext()}>
            <i className="icon-right-arrow icon-left-arrow"></i>
        </div>
        <div className="swiper-button-next" id="main-slider__swiper-button-prev" onClick={() => swiper.slidePrev()}>
            <i className="icon-right-arrow"></i>
        </div>
    </div>
  );
};

export default SwiperNavButtons