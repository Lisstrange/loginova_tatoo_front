import { RouteProps } from "react-router-dom";

import { AuthRoutesEnum, authRoutePaths } from "@/shared/config/routes";

import MainPage from "@/pages/MainPage";
import FundingPage from "@/pages/FundingPage";
import DashboardPage from "@/pages/DashboardPage";
import PersonalDataPage from "@/pages/PersonalDataPage";
import CreditBonusesPage from "@/pages/CreditBonusesPage";
import MT4DemoPage from "@/pages/MT4DemoPage";
import CopytradingPage from "@/pages/CopytradingPage";
import DownloadTerminalsPage from "@/pages/DownloadTerminalsPage";
import BecomePartnersPage from "@/pages/BecomePartnersPage";
import MyDocumentsPage from "@/pages/MyDocumentsPage";
import SafetyPage from "@/pages/SafetyPage";

export const authRouteConfig: Record<AuthRoutesEnum, RouteProps> = {
  [AuthRoutesEnum.HOME]: {
    path: authRoutePaths.home,
    element: <MainPage />,
  },
  [AuthRoutesEnum.FUNDING]: {
    path: authRoutePaths.funding,
    element: <FundingPage />,
  },
  [AuthRoutesEnum.DASHBOARD]: {
    path: authRoutePaths.dashboard,
    element: <DashboardPage />,
  },
  [AuthRoutesEnum.PERSONAL_DATA]: {
    path: authRoutePaths.personal_data,
    element: <PersonalDataPage />,
  },
  [AuthRoutesEnum.CREDIT_BONUSES]: {
    path: authRoutePaths.credit_bonuses,
    element: <CreditBonusesPage />,
  },
  [AuthRoutesEnum.MT4_DEMO]: {
    path: authRoutePaths.mt4_demo,
    element: <MT4DemoPage />,
  },
  [AuthRoutesEnum.COPYTRADING]: {
    path: authRoutePaths.copytrading,
    element: <CopytradingPage />,
  },
  [AuthRoutesEnum.DOWNLOAD_TERMINALS]: {
    path: authRoutePaths.download_terminals,
    element: <DownloadTerminalsPage />,
  },
  [AuthRoutesEnum.BECOME_PARTNER]: {
    path: authRoutePaths.become_partners,
    element: <BecomePartnersPage />,
  },
  [AuthRoutesEnum.MY_DOCUMENTS]: {
    path: authRoutePaths.my_documents,
    element: <MyDocumentsPage />,
  },
  [AuthRoutesEnum.SAFETY]: {
    path: authRoutePaths.safety,
    element: <SafetyPage />,
  },
};
