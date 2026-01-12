export interface ChefState {
  chef: any[] | null;
  loading: boolean;
  error: null;
}

export type ChefAction =
  | {
      type: "ADD_START";
    }
  | { type: "ADD_SUCCESS"; payload: any }
  | { type: "ADD_FAILED"; payload: any }
  | { type: "GET_ALL_CHEFS_START" }
  | { type: "GET_ALL_CHEFS_SUCCESS"; payload: any }
  | { type: "GET_ALL_CHEFS_FAILED"; payload: any };

export const chefInitialState: ChefState = {
  chef: [],
  loading: false,
  error: null,
};
export const chefReducer = (
  state: ChefState,
  action: ChefAction
): ChefState => {
  switch (action.type) {
    case "ADD_START":
      return { ...state, loading: true, error: null };
    case "ADD_SUCCESS":
      return { ...state, chef: action.payload, loading: false, error: null };
    case "ADD_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "GET_ALL_CHEFS_START":
      return { ...state, loading: true, error: null };
    case "GET_ALL_CHEFS_SUCCESS":
      return { ...state, chef: action.payload, loading: false, error: null };
    case "GET_ALL_CHEFS_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
