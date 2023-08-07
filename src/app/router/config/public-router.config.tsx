import { RouteProps } from "react-router-dom";
import { PublicRoutesEnum, publicRoutePaths } from "@/shared/config/routes";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ContactsPage from "@/pages/ContactsPage";
import ServicesPage from "@/pages/ServicesPage";
import WorksPage from "@/pages/WorksPage";
import TelegramPage from "@/pages/TelegramPage";

export const publicRouteConfig: Record<PublicRoutesEnum, RouteProps> = {
  [PublicRoutesEnum.HOME]: {
    index: true,
    element: <HomePage />,
  },
  [PublicRoutesEnum.ABOUT_ROUTE]: {
    path: publicRoutePaths.about,
    element: <AboutPage />,
  },
  [PublicRoutesEnum.CONTACTS_ROUTE]: {
    path: publicRoutePaths.contacts,
    element: <TelegramPage />,
  },
  [PublicRoutesEnum.SERVICES_ROUTE]: {
    path: publicRoutePaths.services,
    element: <ServicesPage />,
  },
  [PublicRoutesEnum.WORKS_ROUTE]: {
    path: publicRoutePaths.works,
    element: <WorksPage />,
  },
};
