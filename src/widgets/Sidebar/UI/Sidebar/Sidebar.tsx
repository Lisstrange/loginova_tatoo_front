import React, { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import UI from "@/shared/UI";
import { sidebarLinks } from "../../utils/sidebar-links";
import styles from "./Sidebar.module.scss";

interface ISidebarProps {
  childToParent: (childStatus: boolean) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ childToParent }) => {
  const [toggle, setToggle] = useState(false);

  const NavLinkClickHandler = () => {
    setToggle(false);
    childToParent(false);
  };

  let mySidebar: HTMLElement | null = document.getElementById("sidebar");

  function handleClickOutside(event: MouseEvent) {
    if (mySidebar && !mySidebar.contains(event.target as Node)) {
      console.log("Клик вне области объекта");
      NavLinkClickHandler();
    }
  }

  document.addEventListener("click", handleClickOutside);

  return (
    <div id="sidebar" className={styles.sidebar}>
      <nav className={clsx(styles.nav, toggle && styles.expanded)}>
        <UI.Burger
          onClick={() => (setToggle(!toggle), childToParent(!toggle))}
          active={toggle}
        />
        <ul className={styles.navItems}>
          {sidebarLinks.map(({ path, alias, Icon }, i) => (
            <div
              key={i}
              className={styles.itemWrapper}
              onClick={() => NavLinkClickHandler()}
            >
              <NavLink
                className={({ isActive }) =>
                  clsx(styles.navLink, isActive && styles.navLinkActive)
                }
                to={path}
              >
                <Icon className={styles.icon} />
                {alias}
              </NavLink>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { Sidebar };
