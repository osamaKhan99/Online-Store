import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      aytoplayspeed: 2000,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'ease-in-out'
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="featured_image"
              alt="Fresh and Organnic Products"
              src="https://187547-590708-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/06/slider-1-min-1.jpg"
              width="100%"
            />
          </div>
          <div>
            <img
              className="featured_image"
              alt="100% Natural Vegies"
              src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/11/Banner-Why-on-demand-grocery-apps-are-gaining-huge-popularity-in-India.png"
              width="100%"
            />
          </div>
          <div>
            <img
              className="featured_image"
              alt="GO easy and Shop grocery online :) "
              src="https://bareillyneeds.com/wp-content/uploads/2020/02/slider-2.jpg"
              width="100%"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
