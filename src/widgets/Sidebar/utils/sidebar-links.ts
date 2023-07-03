import {
  ABOUT_ROUTE,
  WORKS_ROUTE,
  CONTACTS_ROUTE,
  SERVICES_ROUTE,
} from "@/shared/routes/public-routes.utils";
import { Pathname } from "react-router-dom";

type SidebarLinks = {
  path: Pathname;
  alias: string;
};

export const sidebarLinks: SidebarLinks[] = [
  {
    path: ABOUT_ROUTE,
    alias: "Обо мне",
  },
  {
    path: CONTACTS_ROUTE,
    alias: "Связаться со мной",
  },
  {
    path: SERVICES_ROUTE,
    alias: "Услуги",
  },
  {
    path: WORKS_ROUTE,
    alias: "Мои работы",
  },
];
