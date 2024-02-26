export interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginUserModel {
  userEmail: string;
  userPassword: string;
}
