import React from "react";
import Slider from "react-slick";
import $api from "@/shared/config/http";
import styles from "./index.module.scss";

import type { FeedbackItemType } from "@/entities/posts/types";

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

interface ISimpleSliderProps {}

const SimpleSlider: React.FC<ISimpleSliderProps> = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [feedback, setFeedback] = React.useState<Array<FeedbackItemType>>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    $api
      .get<Array<FeedbackItemType>>("/feedback")
      .then((response) => {
        console.log("start to fill feedback");
        console.log(feedback);
        console.log(response.data);
        setFeedback(response.data);
        console.log(feedback);
        setIsLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <Slider {...settings}>
      {feedback.map((data) => (
        <div>
          <div className={styles.card}>
            <h4>data.title</h4>
            <p>data.text</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
