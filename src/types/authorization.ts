export interface SignInFields {
  email: string;
  password: string;
}

export interface SignUpFields extends SignInFields {
  name: string;
}
