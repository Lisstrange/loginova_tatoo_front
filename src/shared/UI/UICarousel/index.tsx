import React from "react";
import { Settings as CarouselSettings } from 'react-slick';
import Slider, {Settings} from 'react-slick';

import styles from "./index.module.scss";
import { render } from "@testing-library/react";

export type UICarouselPageType = {};

interface IUICarouselProps {
  pages: Array<UICarouselPageType>;
}

interface SliderSettings {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 320,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true }
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true }
    }
  ]
};

const UICarousel2: React.FC<IUICarouselProps> = () => {
  render() {
    console.log('slider render');
    return (
    <Slider {...this.props.settings}></Slider>
    )};
};

const UICarousel: React.FC<IUICarouselProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.window}>
        <div className={styles.item}></div>
      </div>
    </div>
  );
};

export default 1;
