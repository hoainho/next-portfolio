import { AnimationAction } from "three";

export type ActionModelType = {
  [x: string]: AnimationAction | null;
};

export type SkillCategoriesI  = {
  FRONTEND: string;
  BACKEND: string;
  DATABASE: string;
  SERVICE: string;
  VERSION_CONTROL: string;
  DEVOPS: string;
  STATE_MANAGEMENT: string;
  OTHER: string;
}

export type SkillType = {
  imageUrl: string;
  name: string;
  yoe: number;
  type: string;
  order: number;
};

export type ExperienceType  = {
  title: string;
  company_name: string;
  company_link: string;
  icon: string;
  icon_bg: string;
  date: string;
  points: string[];
}

export type ProjectType = {
  icon_url: string;
  theme: string;
  name: string;
  descriptions: string[];
  link: string;
}