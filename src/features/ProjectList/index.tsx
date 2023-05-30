import React from "react";
import type { CategoryEnum, ProjectItemType } from "@/entities/posts/types";
import ProjectListFilter from "./ProjectListFilter";
import $api from "@/shared/config/http";

import styles from "./index.module.scss";
import ProjectItem from "./ProgectItem";

interface IProjectListProps {}

const ProjectList: React.FC<IProjectListProps> = () => {
  const [posts, setPosts] = React.useState<Array<ProjectItemType>>([]);
  const [categories, setCategories] = React.useState<Array<CategoryEnum>>([]);

  React.useEffect(() => {
    console.log("Отрисовка");
    $api.get<Array<ProjectItemType>>("/posts").then((response) => {
      setPosts(response.data);
      setCategories(() => response.data.map(({ category }) => category));
    });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <div className={styles.info}>
          <p className={styles.title}>Hey, I'm Johan Stanworth</p>
          <p className={styles.description}>
            Freelance Creative & Professional Graphics Designer
          </p>
        </div>
        <ProjectListFilter categories={categories} />
      </div>
      <div className={styles.body}>
        {posts.map((data) => (
          <ProjectItem
            key={data.id}
            data={data}
            className={styles.projectItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
