import { Pathname } from "react-router-dom";

import { publicRoutePaths } from "@/shared/config/routes";

type SidebarLinks = {
  path: Pathname;
  alias: string;
};

export const sidebarLinks: SidebarLinks[] = [
  {
    path: publicRoutePaths.about,
    alias: "Обо мне",
  },
  {
    path: publicRoutePaths.contacts,
    alias: "Связаться со мной",
  },
  {
    path: publicRoutePaths.services,
    alias: "Услуги",
  },
  {
    path: publicRoutePaths.works,
    alias: "Мои работы",
  },
];
