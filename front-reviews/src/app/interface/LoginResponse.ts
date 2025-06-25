export interface LoginResponse
 {
  status: string;
  message: string;
  user_info: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
  token_type: string;
}