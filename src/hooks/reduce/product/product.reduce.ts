export interface ProductState {
  product: any[] | null;
  loading: boolean;
  error: null;
}
export type ProductAction =
  | { type: "PROD_ADD_START" }
  | { type: "PROD_ADD_SUCCESS"; payload: any }
  | { type: "PROD_ADD_FAILED"; payload: any }
  | { type: "GET_ALL_PRODUCT_START" }
  | { type: "GET_ALL_PRODUCT_SUCCESS"; payload: any }
  | { type: "GET_ALL_PRODUCT_FAILED"; payload: any };
export const productInitialState: ProductState = {
  product: [],
  loading: false,
  error: null,
};
export const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "PROD_ADD_START":
      return { ...state, loading: true, error: null };
    case "PROD_ADD_SUCCESS":
      return { ...state, product: action.payload, loading: false, error: null };
    case "PROD_ADD_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "GET_ALL_PRODUCT_START":
      return { ...state, loading: true, error: null };
    case "GET_ALL_PRODUCT_SUCCESS":
      return { ...state, product: action.payload, loading: false, error: null };
    case "GET_ALL_PRODUCT_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
