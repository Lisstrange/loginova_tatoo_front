import React from "react";
import $api from "@/shared/config/http";

import styles from "./FilSlider.module.scss";
import Slider, { Settings } from "react-slick";

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

export const FileSlider: React.FC = ({}) => {
  const [files, setFiles] = React.useState<Array<string>>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    $api
      .get<Array<string>>("/files_about_me")
      .then((response) => {
        console.log(response);

        setFiles(response.data);
        setIsLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <Slider {...settings}>
      {files?.length &&
        files.map((data) =>
          data.toLowerCase().includes(".mp4") ||
          data.toLowerCase().includes(".mov") ? (
            <video className={styles.filecard} autoPlay loop muted>
              <source src={data} type="video/mp4" />
            </video>
          ) : (
            <img className={styles.filecard} src={data} alt="memes" />
          )
        )}
    </Slider>
  );
};
