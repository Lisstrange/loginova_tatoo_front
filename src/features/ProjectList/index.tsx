import React from "react";
import type { CategoryEnum, Post } from "@/entities/posts/types";
import ProjectListFilter from "./ProjectListFilter";
import $api from "@/shared/config/http";

import styles from "./index.module.scss";

interface IProjectListProps {}

const ProjectList: React.FC<IProjectListProps> = () => {
  const [posts, setPosts] = React.useState<Array<Post>>([]);
  const [categories, setCategories] = React.useState<
    Array<keyof typeof CategoryEnum>
  >([]);

  React.useEffect(() => {
    $api
      .get<Array<Post>>("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .then(() => setCategories(() => posts.map(({ category }) => category)));
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
        <ProjectListFilter />
      </div>
    </div>
  );
};

export default ProjectList;
