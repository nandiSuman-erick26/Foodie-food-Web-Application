import React, { createContext } from "react";
import type { CartAction, CartState } from "../../reduce/cart/cart.reduce";
import type { CartItem } from "../../../typescript/interface/cart.interface";

export const CartContext = createContext<{
  cartState : CartState
   cartDispatch: React.Dispatch<CartAction>
   addProductToCart: (prod: CartItem)=>void
   increaseQuantity: (prod: CartItem)=>void
   decreaseQuantity: (prod: CartItem)=>void
   removeItem: (prod: CartItem)=>void
   emptyCart: ()=>void
}|null>(null)