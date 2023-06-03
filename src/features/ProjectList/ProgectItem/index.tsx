import React from "react";

import styles from "./index.module.scss";
import { ProjectItemType } from "@/entities/posts/types";
import clsx from "clsx";
interface IProjectItemProps {
  className?: string;
  data: ProjectItemType;
}

const ProjectItem: React.FC<IProjectItemProps> = ({ className, data }) => {
  const { category, id, photo, title } = data;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p>{category}</p>
      </div>
      <img
        className={styles.img}
        src={photo}
        alt={" Здесь должна была быть картинка " + title}
      />
    </div>
  );
};

export default ProjectItem;
