import React from "react";
import clsx from "clsx";

import styles from "./index.module.scss";

interface IUILogoProps {
  className?: string;
}

const UILogo: React.FC<IUILogoProps> = ({ className }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <a className={styles.text} href="/">
        Привет я Нелли
      </a>
    </div>
  );
};

export default UILogo;
