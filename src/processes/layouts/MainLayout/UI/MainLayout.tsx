import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./index.module.scss";

const MainLayout: React.FC = () => (
  <>
    <main>
      <Outlet />
    </main>
  </>
);

export default MainLayout;
