import React from "react";
import styles from "./AboutPage.module.scss";

import { FileSlider } from "@/features/FileSlider";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fileslider}>
        <FileSlider />
      </div>
    </div>
  );
};

export default AboutPage;
