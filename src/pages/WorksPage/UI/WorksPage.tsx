import React from "react";

import UI from "@/shared/UI";
import ProjectList from "@/features/ProjectList";
import { FeedbackSlider } from "@/features/FeedbackSlider";

import styles from "./WorksPage.module.scss";

const WorksPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ProjectList />
      </div>
    </div>
  );
};

export default WorksPage;
