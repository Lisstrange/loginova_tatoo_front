export enum CategoryEnum {
  Design = "design",
  Photography = "photography",
  Branding = "branding",
}

export type Post = {
  id: number;
  photo: string;
  title: string;
  category: CategoryEnum;
  descripton: string;
};
