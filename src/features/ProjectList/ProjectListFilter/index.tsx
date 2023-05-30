import React from "react";
import clsx from "clsx";
import { CategoryEnum } from "@/entities/posts/types";

import styles from "./index.module.scss";

interface IProjectListFilterProps {
  categories: Array<CategoryEnum>;
}

const ProjectListFilter: React.FC<IProjectListFilterProps> = ({
  categories,
}) => {
  const [selectedCategoryName, setSelectedCategoryName] =
    React.useState<string>(categories[0]);

  return (
    <div className={styles.root}>
      {categories?.map((name, i) => (
        <button
          onClick={() => setSelectedCategoryName(name)}
          className={clsx(
            styles.categoryName,

            /* Если selectedCategoryName равен name, то прокидываем className "active" */
            selectedCategoryName === name && styles.active
          )}
          key={i}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ProjectListFilter;
