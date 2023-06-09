export enum CategoryEnum {
  All = "All",
  Design = "design",
  Photography = "photography",
  Branding = "branding",
}

export type ProjectItemType = {
  id: number;
  photo: string;
  title: string;
  category: CategoryEnum;
  descripton: string;
};

export type FeedbackItemType = {
  id: number;
  title: string;
  text: string;
};
