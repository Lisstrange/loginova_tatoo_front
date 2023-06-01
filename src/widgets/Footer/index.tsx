import React from "react";

import styles from "./index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>MyPortfolio</div>
      <div className={styles.burger}></div>
    </footer>
  );
};

export default Footer;
