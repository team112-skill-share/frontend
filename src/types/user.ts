import { Course } from "./courses";

export interface User {
  id: number;
  email: string;
  fullName: string;
  birthDate: string;
  phoneNumber: string;
  favourites: Course[];
}

export interface ChangePassword {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
}
