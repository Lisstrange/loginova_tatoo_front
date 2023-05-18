import React from "react";

import styles from "./index.module.scss";
import clsx from "clsx";

export type UICarouselPageType = {};

interface IUICarouselProps {
  pages: Array<UICarouselPageType>;
}

const syncedSecondary = true;
const UICarousel: React.FC<IUICarouselProps> = () => {
  const [count, setCount] = React.useState<number>(1);
  const [current, setCurrent] = React.useState<number>(
    Math.round(el.item.index - el.item.count / 2 - 0.5)
  );

  if(current < 0) {
    current = count;
  }
  if(current > count) {
    current = 0;
  }

  React.useEffect(() => {}, []);

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: true,
      dots: true,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
        '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  return (
    <div className={styles.root}>
      <svg width="100%" height="100%" viewBox="0 0 11 20">
        <path
          fill="none"
          strokeWidth="1px"
          stroke="#000"
          d="M9.554,1.001l-8.607,8.607l8.607,8.606"
        />
      </svg>
      <div className={clsx(styles.sync, styles.owlCarousel, styles.owlTheme)}>
        <div className="item">
          <h1>1</h1>
        </div>
        <div className="item">
          <h1>2</h1>
        </div>
        <div className="item">
          <h1>3</h1>
        </div>
        <div className="item">
          <h1>4</h1>
        </div>
        <div className="item">
          <h1>5</h1>
        </div>
        <div className="item">
          <h1>6</h1>
        </div>
        <div className="item">
          <h1>7</h1>
        </div>
        <div className="item">
          <h1>8</h1>
        </div>
      </div>
      <svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1">
        <path
          fill="none"
          strokeWidth="1px"
          stroke="#000"
          d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"
        />
      </svg>
    </div>
  );
};

export default UICarousel;
