import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRouteConfig } from "./config";
import { publicRoutePaths } from "@/shared/config/routes";
import MainLayout from "@/processes/layouts/MainLayout/UI/MainLayout";

const AppRouter: React.FC = () => (
  <Routes>
    <Route path={publicRoutePaths.home} element={<MainLayout />}>
      {Object.values(publicRouteConfig).map(({ path, element, index }) => (
        <Route
          key={path}
          index={index}
          path={path}
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              {element}
            </React.Suspense>
          }
        />
      ))}
    </Route>
  </Routes>
);

export default AppRouter;
