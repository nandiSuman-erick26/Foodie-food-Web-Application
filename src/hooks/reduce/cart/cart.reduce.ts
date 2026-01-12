import type {
  CartItem,
} from "../../../typescript/interface/cart.interface";

export interface CartState {
  // cart_id: string | null;
  cart_length: number;
  cart_total_price: number;
  cart: CartItem[];
  loading: boolean;
  error: null;
}

export type CartAction =
  | { type: "START" }
  | { type: "ADD_ITEM"; payload: CartItem[] }
  | { type: "REMOVE_ITEM"; payload: CartItem[] }
  | { type: "INCREASE_QTY"; payload: CartItem[] }
  | { type: "DECREASE_QTY"; payload: CartItem[] }
  | { type: "RESET_CART" }
  | { type: "FAILED"; payload: any }
  | {
      type: "CALCULATE_TOTAL";
      payload: { cart_length: number; cart_total_price: number };
    };
export const cartInitialState: CartState = {
  // cart_id: null,
  cart_length: 0,
  cart_total_price: 0,
  cart: [],
  loading: false,
  error: null,
};

export const getCartInitialData = (): CartState => {
  const localeStorageCartData = localStorage.getItem("cartData");
  if (localeStorageCartData) {
    try {
      return JSON.parse(localeStorageCartData);
    } catch (error) {
      console.log("Something went wrong!", error);
      return cartInitialState;
    }
  }
  return cartInitialState;
};


export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true, error: null };
    case "ADD_ITEM":
      return { ...state, cart: action.payload, loading: false, error: null };
    case "REMOVE_ITEM":
      return { ...state, cart: action.payload, loading: false, error: null };
    case "INCREASE_QTY":
      return { ...state, cart: action.payload, loading: false, error: null };
    case "DECREASE_QTY":
      return { ...state, cart: action.payload, loading: false, error: null };
    case "RESET_CART":
      return { ...cartInitialState };
    case "CALCULATE_TOTAL":
      return {
        ...state,
        cart_length: action.payload.cart_length,
        cart_total_price: action.payload.cart_total_price,
      };
    case "FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
