import React from "react";
import clsx from "clsx";

import styles from "./index.module.scss";
import { publicRoutes } from "@/app/router/utils";

interface UINavbarProps {
  className?: string;
  toggle?: boolean;
}

const UINavbar: React.FC<UINavbarProps> = ({ className, toggle }) => {
  return (
    <div className={clsx(styles.navbar, toggle && styles.active, className)}>
      <nav>
        <ul className={styles.ul}>
          {publicRoutes.map(({ path, Component, alias }, i) => (
            <li key={i}>
              <a className={styles.NavLink} href={path}>
                {alias}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UINavbar;
