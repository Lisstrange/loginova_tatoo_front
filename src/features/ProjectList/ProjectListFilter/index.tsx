import React from "react";
import clsx from "clsx";
import { CategoryEnum } from "@/entities/posts/types";

import styles from "./index.module.scss";

interface IProjectListFilterProps {
  categories: Array<CategoryEnum>;
  selectedCategory: (categoryName: string) => void;
}

const ProjectListFilter: React.FC<IProjectListFilterProps> = ({
  categories,
  selectedCategory,
}) => {
  const [uniqCategories, setUniqCategories] = React.useState<
    string[] | CategoryEnum[]
  >(["All"]);

  const [selectedCategoryName, setSelectedCategoryName] =
    React.useState<string>(uniqCategories[0]);

  React.useEffect(() => {
    setUniqCategories((prev) => [
      ...prev,
      ...Array.from(new Set(categories).values()),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHandler = (name: string) => {
    selectedCategory(name);
    setSelectedCategoryName(name);
  };

  return (
    <div className={styles.root}>
      {uniqCategories?.map((name, i) => (
        <button
          onClick={() => onClickHandler(name)}
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
