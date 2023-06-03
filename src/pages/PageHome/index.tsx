import React from "react";

import UI from "@/shared/UI";

import styles from "./index.module.scss";
import ProjectList from "@/features/ProjectList";

const PageHome: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ProjectList />
        <UI.Carousel />
      </div>
    </div>
  );
};

export default PageHome;
