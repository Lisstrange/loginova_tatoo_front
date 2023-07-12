import React from "react";
import clsx from "clsx";

import type { Project } from "@/entities/projects/model/types";

import styles from "./index.module.scss";

interface IProjectItemProps {
  className?: string;
  data: Project;
}

const ProjectItem: React.FC<IProjectItemProps> = ({ className, data }) => {
  const { category, photo, title } = data;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p>{category}</p>
      </div>
      <img
        className={styles.img}
        src={photo}
        alt={"Здесь должна быть картинка " + title}
      />
    </div>
  );
};

export default ProjectItem;
