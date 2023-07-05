import React from "react";
import type { ProjectItemType } from "@/entities/posts/types";
import { CategoryEnum } from "@/entities/posts/types";
import ProjectListFilter from "./ProjectListFilter";
import $api from "@/shared/config/http";
import ProjectItem from "./ProjectItem";
import styles from "./index.module.scss";

interface IProjectListProps {}

const ProjectList: React.FC<IProjectListProps> = () => {
  const [posts, setPosts] = React.useState<Array<ProjectItemType>>([]);
  const [categories, setCategories] = React.useState<Array<CategoryEnum>>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const [selectedCategoryName, setSelectedCategoryName] =
    React.useState<CategoryEnum>(CategoryEnum.All);
  const [filtredPosts, setFiltredPosts] =
    React.useState<ProjectItemType[]>(posts);

  React.useEffect(() => {
    $api
      .get<Array<ProjectItemType>>("/posts")
      .then((response) => {
        setPosts(response.data);
        setCategories(() => response.data.map(({ category }) => category));
        setIsLoading(false);
      })
      .catch((e) => setError(e.message));
  }, []);

  React.useEffect(() => {
    setFiltredPosts(() => {
      if (selectedCategoryName === CategoryEnum.All) {
        return [...posts];
      }

      return [
        ...posts.filter((item) => item.category === selectedCategoryName),
      ];
    });
  }, [posts, selectedCategoryName]);

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
        <ProjectListFilter
          selectedCategory={(categoryName: CategoryEnum) =>
            setSelectedCategoryName(categoryName)
          }
          categories={categories}
        />
      </div>
      <div className={styles.body}>
        {filtredPosts.map((data) => (
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
/* <div className={styles.body}>
        {posts.map(({ id, category, descripton, photo, title }) => (
          <div key={id} className={styles.post}>
            {title}
            <img src={photo} alt={title} />
          </div>
        ))}
      </div> */
