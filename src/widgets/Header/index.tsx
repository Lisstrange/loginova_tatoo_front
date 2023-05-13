import React from "react";
import UI from "@/shared/UI";

import styles from "./index.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyPortfolio</div>
      <UI.Burger />
    </header>
  );
};

export default Header;
