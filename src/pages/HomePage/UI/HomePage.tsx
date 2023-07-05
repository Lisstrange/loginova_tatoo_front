import React from "react";

import UI from "@/shared/UI";
import ProjectList from "@/features/ProjectList";

import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ProjectList />
        <UI.Carousel />
      </div>
    </div>
  );
};

export default HomePage;
