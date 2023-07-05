import React from "react";
import clsx from "clsx";
import { CategoryEnum } from "@/entities/posts/types";
import styles from "./index.module.scss";

interface IProjectListFilterProps {
  categories: Array<CategoryEnum>;
  selectedCategory: (categoryName: CategoryEnum) => void;
}

const ProjectListFilter: React.FC<IProjectListFilterProps> = ({
  categories,
  selectedCategory,
}) => {
  const [uniqCategories, setUniqCategories] = React.useState<CategoryEnum[]>([
    CategoryEnum.All,
  ]);

  const [selectedCategoryName, setSelectedCategoryName] =
    React.useState<CategoryEnum>(uniqCategories[0]);

  React.useEffect(() => {
    setUniqCategories((prev) => [
      ...prev,
      ...Array.from(new Set(categories).values()),
    ]);
  }, []);

  const onClickHandler = (name: CategoryEnum) => {
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
