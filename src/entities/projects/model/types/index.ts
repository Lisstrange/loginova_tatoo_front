export enum CategoryEnum {
  All = "All",
  Design = "design",
  Photography = "photography",
  Branding = "branding",
}

export type Project = {
  id: number;
  photo: string;
  title: string;
  category: CategoryEnum;
  descripton: string;
};

export type Feedback = {
  id: number;
  photo: string;
  title: string;
  text: string;
  author: string;
};
