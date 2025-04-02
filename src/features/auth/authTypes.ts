import { User } from "../user/userType";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    user: User;
    referralDetails: any | null;
    token: string;
  };
}
