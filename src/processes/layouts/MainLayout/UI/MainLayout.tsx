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
  return (
    <>
      <main className={styles.main}>
        <Sidebar />
        <div className={clsx(styles.pageWrapper)}>
          <Header />
          <Outlet />
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
