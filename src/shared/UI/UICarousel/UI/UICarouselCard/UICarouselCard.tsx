import React from "react";

import styles from "./UICarouselCard.module.scss";

interface IUICarouselCardProps {
  children: React.ReactNode;
}

export const UICarouselCard: React.FC<IUICarouselCardProps> = ({
  children,
}) => {
  return <div className={styles.UICarouselCard}>{children}</div>;
};
