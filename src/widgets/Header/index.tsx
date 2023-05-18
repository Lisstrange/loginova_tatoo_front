import React from "react";

import styles from "./index.module.scss";
import UI from "@/shared/UI";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>MyPortfolio</div>
          <UI.Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
