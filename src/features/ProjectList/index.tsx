import React from "react";

import { CategoryEnum, ProjectItemType } from "@/entities/posts/types";
import ProjectListFilter from "./ProjectListFilter";
import $api from "@/shared/config/http";

import styles from "./index.module.scss";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC = () => {
  const [posts, setPosts] = React.useState<Array<ProjectItemType>>([]);
  const [categories, setCategories] = React.useState<Array<CategoryEnum>>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    $api
      .get<Array<ProjectItemType>>("/posts")
      .then((response) => {
        setPosts(response.data);
        setCategories(() => response.data.map(({ category }) => category));
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  console.log(posts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

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
            className={styles.projectItem}
            key={data.id}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
/* <div className={styles.body}>
        {posts.map(({ id, category, descripton, photo, title }) => (
          <div key={id} className={styles.post}>
            {title}
            <img src={photo} alt={title} />
          </div>
        ))}
      </div> */
