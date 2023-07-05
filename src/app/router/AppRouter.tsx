import React from "react";
import { Routes, Route } from "react-router-dom";
import { authRouteConfig, publicRouteConfig } from "./config";

const AppRouter: React.FC = () => (
  <Routes>
    {/*  isAuth |  */}
    {/*         |  */}
    {/*        \|/ */}
    {Object.values(authRouteConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <React.Suspense fallback={<div>Loading</div>}>
            <div className="page-wrapper">{element}</div>
          </React.Suspense>
        }
      />
    ))}
    {Object.values(publicRouteConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <React.Suspense fallback={<div>Loading</div>}>
            {element}
          </React.Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
