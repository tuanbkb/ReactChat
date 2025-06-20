import { User } from "../../types/user";

export interface UserState {
  user: User;
  isLoggedIn: boolean;
  error: string | null;
}

export interface UserAction {
  type: string;
  payload: any;
}
