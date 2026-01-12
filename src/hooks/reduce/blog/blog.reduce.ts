import type { Blog } from "../../../typescript/interface/blog.interface";

export interface BlogState {
  blog: Blog[];
  loading: boolean;
  error: null;
}
export type BlogAction =
  | { type: "BLOG_ADD_START" }
  | { type: "BLOG_ADD_SUCCESS"; payload:any}
  | { type: "BLOG_ADD_FAILED"; payload: any }
  | { type: "GET_ALL_BLOG_START" }
  | { type: "GET_ALL_BLOG_SUCCESS"; payload: any }
  | { type: "GET_ALL_BLOG_FAILED"; payload: any };

export const blogInitialState: BlogState = {
  blog: [],
  loading: false,
  error: null,
};
export const blogReducer = (
  state: BlogState,
  action: BlogAction
): BlogState => {
  switch (action.type) {
    case "BLOG_ADD_START":
      return { ...state, loading: true, error: null };
    case "BLOG_ADD_SUCCESS":
      return {
        ...state,
        blog: [action.payload, ...state.blog],
        loading: false,
        error: null,
      };
    case "BLOG_ADD_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "GET_ALL_BLOG_START":
      return { ...state, loading: true, error: null };
    case "GET_ALL_BLOG_SUCCESS":
      return { ...state, blog: action.payload, loading: false, error: null };
    case "GET_ALL_BLOG_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
