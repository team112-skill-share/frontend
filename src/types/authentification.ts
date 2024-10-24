export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  repeatPassword: string;
}

export interface RestorePassword {
  newPassword: string;
  repeatPassword: string;
}

export interface RestoreData extends RestorePassword {
  token: string;
}
