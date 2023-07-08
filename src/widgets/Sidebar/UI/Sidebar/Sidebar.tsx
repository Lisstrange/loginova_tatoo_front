import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Transition } from "react-transition-group";

import UI from "@/shared/UI";
import { sidebarLinks } from "../../utils/sidebar-links";
import styles from "./Sidebar.module.scss";

interface ISidebarProps {}

export const Sidebar: React.FC<ISidebarProps> = () => {
  const [toggle, setToggle] = useState(false);
  const nodeRef = useRef(null);
  const layoutRef = useRef<HTMLDivElement>(null);

  const onClose = () => {
    setToggle(false);
  };

  useEffect(() => {
    if (toggle) {
      layoutRef.current.addEventListener("click", onClose);
    }
  }, [toggle]);

  return (
    <Transition nodeRef={nodeRef} in={toggle} timeout={100}>
      {(state) => (
        <div ref={nodeRef} className={styles.sidebar}>
          <div ref={layoutRef} className={clsx(styles.layout, styles[state])} />
          <nav className={clsx(styles.nav, toggle && styles.expanded)}>
            <UI.Burger
              onClick={(e) => {
                e.preventDefault();
                setToggle(!toggle);
              }}
              active={toggle}
            />
            <ul className={styles.navItems}>
              {sidebarLinks.map(({ path, alias, Icon }, i) => (
                <div key={i} className={styles.itemWrapper} onClick={onClose}>
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
      )}
    </Transition>
  );
};
