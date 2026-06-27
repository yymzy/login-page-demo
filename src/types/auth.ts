export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface FormErrors {
  email?: string;
  password?: string;
}

export interface SocialProvider {
  id: string;
  name: string;
  icon: string;
  color: string;
}
