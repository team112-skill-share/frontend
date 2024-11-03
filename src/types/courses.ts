import { ReviewOfCurrentCourse } from "./reviews";

export interface RequestCourse {
  company: string;
  phoneNumber: string;
  email: string;
  workField: string;
  description: string;
}

export interface CourseContent {
  id: number;
  name: string;
  text: string;
}

export interface CourseImages {
  id: number;
  url: string;
}

export enum Format {
  Group = "GROUP",
  Personal = "PERSONAL",
}

export enum CourseType {
  Online = "ONLINE",
  Offline = "OFFLINE",
}

export interface Course {
  id: number;
  author: string;
  title: string;
  cardImage: string;
  duration: string;
  type: CourseType;
  format: Format;
  certificate: boolean;
  trial: boolean;
  price: number;
  categoryId: number;
  source: string;
  averageRating: number;
  reviewsCount: number;
}

export interface CreateCourse {
  id: number;
  author: string;
  title: string;
  cardImage: string;
  duration: string;
  type: CourseType;
  format: Format;
  certificate: boolean;
  trial: boolean;
  price: number;
  categoryId: number;
  source: string;
  contents: Omit<CourseContent, "id">[];
  images: Omit<CourseImages, "id">[];
}

export interface CurrentCourse {
  id: number;
  author: string;
  title: string;
  duration: string;
  type: CourseType;
  format: Format;
  certificate: boolean;
  trial: boolean;
  price: number;
  categoryId: number;
  source: string;
  contents: CourseContent[];
  images: CourseImages[];
  reviews: ReviewOfCurrentCourse[];
}
