import React from "react";

import UI from "@/shared/UI";
import ProjectList from "@/features/ProjectList";
import { FeedbackSlider } from "@/features/FeedbackSlider";

import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ProjectList />
        <FeedbackSlider />
      </div>
    </div>
  );
};

export default HomePage;
