import { Content, Image } from "./content";
import { ReviewOfCurrentCourse } from "./reviews";

export interface RequestCourse {
  company: string;
  phoneNumber: string;
  email: string;
  workField: string;
  description: string;
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
  contents: Omit<Content, "id">[];
  images: Omit<Image, "id">[];
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
  contents: Content[];
  images: Image[];
  reviews: ReviewOfCurrentCourse[];
}
