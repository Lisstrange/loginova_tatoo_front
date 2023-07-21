import React, { createRef } from "react";
import type { Project } from "@/entities/projects/model/types";
import { CategoryEnum } from "@/entities/projects/model/types";
import ProjectListFilter from "./ProjectListFilter";
import $api from "@/shared/config/http";
import ProjectItem from "./ProjectItem";
import styles from "./index.module.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface IProjectListProps {}

type ProjectAnimatedItem = Project & { nodeRef: any };

const ProjectList: React.FC<IProjectListProps> = () => {
  const [posts, setPosts] = React.useState<Array<Project>>([]);
  const [categories, setCategories] = React.useState<Array<CategoryEnum>>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const [selectedCategoryName, setSelectedCategoryName] =
    React.useState<CategoryEnum>(CategoryEnum.All);
  const [filtredPosts, setFiltredPosts] = React.useState<ProjectAnimatedItem[]>(
    posts.map((item) => ({ ...item, nodeRef: createRef() }))
  );

  React.useEffect(() => {
    $api
      .get<Array<Project>>("/posts")
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
        return [...posts] as ProjectAnimatedItem[];
      }

      return [
        ...posts.filter((item) => {
          if (item.category === selectedCategoryName)
            return {
              ...item,
              nodeRef: createRef(),
            };
        }),
      ] as ProjectAnimatedItem[];
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
      <TransitionGroup className={styles.body}>
        {filtredPosts.map((data) => (
          <CSSTransition
            key={data.id}
            nodeRef={data.nodeRef}
            timeout={500}
            classNames={"opacity"}
          >
            <ProjectItem key={data.id} data={data} />
          </CSSTransition>
        ))}
      </TransitionGroup>
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
