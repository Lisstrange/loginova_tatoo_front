import PageAbout from "@/pages/PageAbout";
import PageContacts from "@/pages/PageContacts";
import PageServices from "@/pages/PageServices";
import PageWorks from "@/pages/PageWorks";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  SERVICES_ROUTE,
  WORKS_ROUTE,
} from "@/shared/routes/public-routes.utils";
import React from "react";
import type { Pathname } from "react-router-dom";

interface AppRoute {
  path: Pathname;
  Component: React.FC;
  alias: string;
}

export const publicRoutes: Array<AppRoute> = [
  {
    path: ABOUT_ROUTE,
    Component: PageAbout,
    alias: "Обо мне",
  },
  {
    path: CONTACTS_ROUTE,
    Component: PageContacts,
    alias: "Связаться со мной",
  },
  {
    path: SERVICES_ROUTE,
    Component: PageServices,
    alias: "Услуги",
  },
  {
    path: WORKS_ROUTE,
    Component: PageWorks,
    alias: "Мои работы",
  },
];
