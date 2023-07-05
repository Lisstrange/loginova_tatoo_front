export enum AuthRoutesEnum {
  MAIN = "main",
  TELEGRAM = "telegram",
  ESTB = "estb",
  ESTB_ITEM = "estb_item",
  CUSTOMERS = "customers",
  CUSTOMER_ITEM = "customer_item",
  SETTINGS = "settings",
  SUPPORT = "support",
}

export const authRoutePaths: Record<AuthRoutesEnum, string> = {
  [AuthRoutesEnum.MAIN]: "/",
  [AuthRoutesEnum.TELEGRAM]: "/telegram",
  [AuthRoutesEnum.ESTB]: "/establishment",
  [AuthRoutesEnum.ESTB_ITEM]: "/establishment/:id",
  [AuthRoutesEnum.CUSTOMERS]: "/customers",
  [AuthRoutesEnum.CUSTOMER_ITEM]: "/customers/:id",
  [AuthRoutesEnum.SETTINGS]: "/settings",
  [AuthRoutesEnum.SUPPORT]: "/support",
};
