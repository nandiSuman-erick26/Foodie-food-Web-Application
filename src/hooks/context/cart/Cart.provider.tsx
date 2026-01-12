import { useEffect, useReducer } from "react";
import { CartContext } from "./Cart.create";
import { cartReducer, getCartInitialData } from "../../reduce/cart/cart.reduce";
import type { CartItem } from "../../../typescript/interface/cart.interface";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    getCartInitialData()
  );

  const calculateCartTotal = () => {
    let cartValue = 0;
    cartState?.cart.forEach((item) => {
      cartValue += item?.total_price;
    });

    if (
      cartValue !== cartState.cart_total_price ||
      cartState.cart.length !== cartState.cart_length
    ) {
      cartDispatch({
        type: "CALCULATE_TOTAL",
        payload: {
          cart_length: cartState?.cart.length,
          cart_total_price: cartValue,
        },
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartState));
    calculateCartTotal();
  }, [cartState,cartState.cart]);

  const addProductToCart = async (prod: CartItem) => {
    console.log("data for cart adding-------", prod);
    cartDispatch({ type: "START" });
    try {
      const existingItem = cartState?.cart?.find(
        (item) => item?.product_id === prod?.product_id
      );

      let cartlist;
      if (existingItem) {
        cartlist = cartState?.cart?.map((i) =>
          i.product_id === prod?.product_id
            ? {
                ...i,
                product_qty: i?.product_qty + 1,
                total_price: i?.product_price * i?.product_qty,
                product_name: i?.product_name,
                product_image: i?.product_image,
              }
            : i
        );
      } else {
        cartlist = [
          ...cartState?.cart,
          {
            product_id: prod?.product_id,
            product_price: Number(prod?.product_price),
            product_qty: 1,
            total_price: Number(prod?.product_price),
            product_image: prod?.product_image,
            product_name: prod?.product_name,
          },
        ];
      }
      cartDispatch({ type: "ADD_ITEM", payload: cartlist });
    } catch (error) {
      console.log("fail to add item into cart", error);
      cartDispatch({ type: "FAILED", payload: error });
    }
  };

  //=============================================================

  const increaseQuantity = (prodID: CartItem) => {
    console.log("fetching ID to increase the cart product", prodID);
    cartDispatch({ type: "START" });
    try {
      const newCart = cartState?.cart.map((item) => {
        if (item?.product_id === prodID?.product_id) {
          const newQty = item?.product_qty + 1;
          return {
            ...item,
            product_qty: newQty,
            total_price: Number(item?.product_price) * newQty,
          };
        }
        return item;
      });
      cartDispatch({ type: "INCREASE_QTY", payload: newCart });
    } catch (error) {
      console.log("failed to increase item", error);

      cartDispatch({ type: "FAILED", payload: error });
    }
  };

  const decreaseQuantity = (prodID: CartItem) => {
    console.log("fetching ID to decrease the cart product", prodID);

    try {
      const newCart = cartState?.cart.map((item) => {
        if (item?.product_id === prodID?.product_id && item?.product_qty > 0) {
          const newQty = item?.product_qty - 1;
          return {
            ...item,
            product_qty: newQty,
            total_price: Number(item?.product_price) * newQty,
          };
        }
        return item;
      });
      cartDispatch({ type: "DECREASE_QTY", payload: newCart });
    } catch (error) {
      console.log("failed to decrease item", error);

      cartDispatch({ type: "FAILED", payload: error });
    }
  };

  const removeItem = (prod: CartItem) => {
    console.log("Cart after Product Remove", prod);
    cartDispatch({ type: "START" });
    try {
      const newCart = cartState?.cart.filter(
        (item) => item?.product_id !== prod?.product_id
      );

      cartDispatch({ type: "REMOVE_ITEM", payload: newCart });
    } catch (error) {
      console.log("Unable to remove item", error);
      cartDispatch({ type: "FAILED", payload: error });
    }
  };

  const emptyCart = () => {
    cartDispatch({ type: "RESET_CART" });
  };
  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addProductToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
