import React from "react";
import Slider from "react-slick";

import styles from "./UICarousel.module.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 320,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true },
    },
  ],
};

interface IUICarouselProps {
  children: React.ReactNode;
}

export const UICarousel: React.FC<IUICarouselProps> = ({ children }) => (
  <Slider className={styles.slider} {...settings}>
    {children}
  </Slider>
);
