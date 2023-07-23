import { FC } from "react";

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

export type ReferalLink = {
  id: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  ref_link: string;
};
