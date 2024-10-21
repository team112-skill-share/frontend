export interface User {
  email: string;
  fullName: string;
  birthDate: string;
  phoneNumber: string;
}

export interface ChangePassword {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
}
