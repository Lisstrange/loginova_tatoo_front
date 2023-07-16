import React from "react";
import styles from "./AboutPage.module.scss";

import { FileSlider } from "@/features/FileSlider";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <FileSlider />
      </div>
    </div>
  );
};

export default AboutPage;
