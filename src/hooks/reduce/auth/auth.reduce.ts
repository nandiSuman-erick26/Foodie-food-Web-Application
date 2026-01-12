import Cookies from "js-cookie";

export interface AuthState {
  user: any;
  token: string | null;
  isAuthenticate: boolean;
  loading: boolean;
  error: null | string;
}

export type AuthAction =
  | { type: "AUTH_START" }
  | { type: "AUTH_SIGNUP" }
  | {
      type: "AUTH_LOGIN";
      payload: any[];
    }
  | { type: "AUTH_LOGOUT" }
  | { type: "AUTH_FAILED"; payload: any };

export const loadAuthInitialState = (): AuthState => {
  const token = Cookies.get("token");
  const user = localStorage.getItem("user");
  return {
    user: user ? JSON.parse(user) : null,
    token: token || null,
    isAuthenticate: Boolean(token),
    loading: false,
    error: null,
  };
};

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: null };
    case "AUTH_SIGNUP":
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "AUTH_LOGIN":
      return {
        ...state,
        loading: false,
        user: action.payload,
        token: action.payload ? "true" : "",
        isAuthenticate: true,
        error: null,
      };
    case "AUTH_LOGOUT":
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        isAuthenticate: false,
        error: null,
      };
    case "AUTH_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
