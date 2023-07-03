import React, { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import UI from "@/shared/UI";
import { sidebarLinks } from "../../utils/sidebar-links";

import styles from "./Sidebar.module.scss";

interface ISidebarProps {}

export const Sidebar: React.FC<ISidebarProps> = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={clsx(styles.nav, toggle && styles.expanded)}>
      <UI.Burger onClick={() => setToggle(!toggle)} />
      <ul className={styles.navItems}>
        {sidebarLinks.map(({ path, alias }, i) => (
          <div
            key={i}
            className={styles.itemWrapper}
            onClick={() => setToggle(false)}
          >
            <NavLink
              className={({ isActive }) =>
                clsx(styles.navLink, isActive && styles.navLinkActive)
              }
              to={path}
            >
              {alias}
            </NavLink>
          </div>
        ))}
      </ul>
    </nav>
  );
};