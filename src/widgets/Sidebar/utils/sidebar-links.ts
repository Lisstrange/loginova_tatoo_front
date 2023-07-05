import { Pathname } from "react-router-dom";

import { publicRoutePaths } from "@/shared/config/routes";

import UserIcon from "../icons/user.svg";
import CheckList from "../icons/check_list.svg";
import Gallery from "../icons/gallery.svg";
import Telegram from "../icons/telegram.svg";

type SidebarLinks = {
  path: Pathname;
  alias: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const sidebarLinks: SidebarLinks[] = [
  {
    path: publicRoutePaths.about,
    alias: "Обо мне",
    icon:  UserIcon,
  },
  {
    path: publicRoutePaths.contacts,
    alias: "Связаться со мной",
    icon:  Telegram,
  },
  {
    path: publicRoutePaths.services,
    alias: "Услуги",
    icon:  CheckList,
  },
  {
    path: publicRoutePaths.works,
    alias: "Мои работы",
    icon:  Gallery,
  },
];
