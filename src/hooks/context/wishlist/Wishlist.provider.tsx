// import { useReducer } from "react";
// import {
//   wishlistInitialState,
//   wishlistReducer,
// } from "../../reduce/wishlist/wishlist.provider";
// import { WishlistContext } from "./Wishlist.create";

// export const WishlistProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [wishlistState, wishlistDispatch] = useReducer(
//     wishlistReducer,
//     wishlistInitialState
//   );
//   return (
//     <WishlistContext.Provider value={{ wishlistState }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };
