import clsx from "clsx";
import { Outlet } from "react-router-dom";

import Header from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";

import styles from "./MainLayout.module.scss";

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
