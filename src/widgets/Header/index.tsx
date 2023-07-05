import React from "react";

import styles from "./index.module.scss";
import UI from "@/shared/UI";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <UI.Logo />
          {/* <UI.Burger /> */}
          {/* <UI.Navbar  /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
