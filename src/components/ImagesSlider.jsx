import React from 'react';
import { Carousel } from 'antd';
import './image-slide.css';

// IMAGES
import slider1 from './images/slider-1.jpg';
import slider2 from './images/slider-2.jpg';
import slider3 from './images/slider-3.jpg';
import slider4 from './images/slider-4.jpg';
import slider5 from './images/slider-5.jpg';


const ImagesSlider = () => {
  return (

    <div>

      <div>
        <Carousel autoplay>

          <div className="slider-1">
          </div>

          <div className="slider-2">
          </div>

          <div className="slider-3">
          </div>

          <div className="slider-4">
          </div>

          <div className="slider-5">
          </div>

        </Carousel>
      </div>

      <div className="slider-mobile"></div>


    </div>

  );
};

export default ImagesSlider;