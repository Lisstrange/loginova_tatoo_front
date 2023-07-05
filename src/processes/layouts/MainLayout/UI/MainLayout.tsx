import Header from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";

const MainLayout: React.FC = () => {
  return (
    <>
      <main className={styles.main}>
        <Sidebar />
        <div className={styles.pageWrapper}>
          <Header />
          <Outlet />
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
