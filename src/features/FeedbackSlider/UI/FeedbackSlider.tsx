import React from "react";

import type { Feedback } from "@/entities/projects";
import Slider, { Settings } from "react-slick";
import $api from "@/shared/config/http";

import styles from "./FeedbackSlider.module.scss";

const settings: Settings = {
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

export const FeedbackSlider: React.FC = ({}) => {
  const [feedback, setFeedback] = React.useState<Array<Feedback>>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    $api
      .get<Array<Feedback>>("/feedback")
      .then((response) => {
        console.log(response);

        setFeedback(response.data);
        setIsLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <Slider {...settings}>
      {feedback.length &&
        feedback.map((data) => (
          <div className={styles.card}>
            <img
              className={styles.img}
              src={data.photo}
              alt={"Это картинка автора коммнетария =) " + data.photo}
            />
            <div className={styles.textWrapper}>
              <h4>{data.title || "TITLE"}</h4>
              <p>{data.text || "TEXT"}</p>
              <h5>{data.author || "AUTHOR"}</h5>
            </div>
          </div>
        ))}
    </Slider>
  );
};
