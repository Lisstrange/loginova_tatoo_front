import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./utils";
import { HOME_ROUTE } from "@/shared/routes/public-routes.utils";
import MainLayout from "@/processes/layouts/MainLayout";
import PageHome from "@/pages/PageHome";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<MainLayout />}>
          <Route index element={<PageHome />} />

          {publicRoutes.map(({ path, Component }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
