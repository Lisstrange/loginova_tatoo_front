export enum PublicRoutesEnum {
  HOME = "home",
  ABOUT_ROUTE = "about",
  WORKS_ROUTE = "works",
  CONTACTS_ROUTE = "contacts",
  SERVICES_ROUTE = "services",
}

export const publicRoutePaths: Record<PublicRoutesEnum, string> = {
  [PublicRoutesEnum.HOME]: "/",
  [PublicRoutesEnum.ABOUT_ROUTE]: "/about",
  [PublicRoutesEnum.WORKS_ROUTE]: "/works",
  [PublicRoutesEnum.CONTACTS_ROUTE]: "/contacts",
  [PublicRoutesEnum.SERVICES_ROUTE]: "/services",
};
