export interface SignInFields {
  email: string;
  password: string;
}

export interface SignUpFields extends SignInFields {
  name: string;
}

export interface SignUpResponse extends Omit<SignInFields, 'password'> {
  id: string;
}

export interface SignInResponse {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}
