import Header from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";
import clsx from "clsx";
import { useState } from "react";

interface MainLayoutProps {
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = (className) => {
  const [active, setActive] = useState(false);
  const childToParent = (childStatus: boolean) => {
    setActive(childStatus);
  };
  return (
    <>
      <main className={styles.main}>
        <Sidebar childToParent={childToParent} />
        <div
          className={clsx(
            styles.pageWrapper,
            { active } && styles.pageWrapperBackground
            // className
          )}
        >
          <Header />
          <Outlet />
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
