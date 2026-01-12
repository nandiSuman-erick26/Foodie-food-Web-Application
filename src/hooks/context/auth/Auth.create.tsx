import React, { createContext } from "react";
import type { AuthAction, AuthState } from "../../reduce/auth/auth.reduce";
import type {
  LoginSchema,
  signupSchema,
} from "../../../typescript/interface/form.interface";
import type { AdminData } from "../../../typescript/interface/admin.interface";

export const AuthContext = createContext<{
  authState: AuthState;
  authDispatch: React.Dispatch<AuthAction>;
  adminLogin: (data: AdminData) => void;
  registerUser: (data: signupSchema) => void;
  loginUser: (data: LoginSchema) => void;
  adminLogout: ()=>void;
  logoutUser: () => void;
} | null>(null);
