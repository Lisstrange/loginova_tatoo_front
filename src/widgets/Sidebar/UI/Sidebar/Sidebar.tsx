import React, { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import UI from "@/shared/UI";
import { sidebarLinks } from "../../utils/sidebar-links";
import UserIcon from "../../icons/user-2-svgrepo-com.svg";

import styles from "./Sidebar.module.scss";

interface ISidebarProps {}

export const Sidebar: React.FC<ISidebarProps> = () => {
  const [toggle, setToggle] = useState(false);

  const NavLinkClickHandler = () => {
    setToggle(false);
  };
  return (
    <nav className={clsx(styles.nav, toggle && styles.expanded)}>
      <UI.Burger onClick={() => setToggle(!toggle)} active={toggle} />
      <ul className={styles.navItems}>
        {sidebarLinks.map(({ path, alias }, i) => (
          <div
            key={i}
            className={styles.itemWrapper}
            onClick={NavLinkClickHandler}
          >
            <UserIcon />
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
