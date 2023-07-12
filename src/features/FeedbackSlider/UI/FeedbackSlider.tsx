import React from "react";

import type { Feedback } from "@/entities/projects";

import styles from "./FeedbackSlider.module.scss";
import $api from "@/shared/config/http";
import UI from "@/shared/UI";

export const FeedbackSlider: React.FC = ({}) => {
  const [feedback, setFeedback] = React.useState<Array<Feedback>>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    $api
      .get<Array<Feedback>>("/feedback")
      .then((response) => {
        setFeedback(response.data);
        setIsLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <UI.Carousel>
      {feedback.map((data) => (
        <div key={data.id}>
          <UI.CarouselCard>
            <img
              className={styles.img}
              src={data.photo}
              alt={"Это картинка автора коммнетария =)" + data.photo}
            />

            <h4>{data.title}</h4>
            <p>{data.text}</p>
          </UI.CarouselCard>
        </div>
      ))}
    </UI.Carousel>
  );
};
