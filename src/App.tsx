import { RouterProvider } from "react-router-dom";
import { Route } from "./routes/Route";
import { Toaster } from "sonner";
import { AuthProvider } from "./hooks/context/auth/Auth.provider";
import { BlogProvider } from "./hooks/context/blog/Blog.provider";
import { CartProvider } from "./hooks/context/cart/Cart.provider";
// import { WishlistProvider } from "./hooks/context/wishlist/Wishlist.provider";
import { ChefProvider } from "./hooks/context/chef/Chef.provider";
import { ProductProvider } from "./hooks/context/product/Product.provider";
// import TestimonialCard from "./components/TestimonialCard";
// import FoodOrderCard from "./components/FoodOrderCard";

function App() {
  return (
    <>
      <AuthProvider>
        <BlogProvider>
          <ProductProvider>
            <CartProvider>
              <ChefProvider>
                {/* <WishlistProvider> */}
                <Toaster position="top-center" richColors />
                <RouterProvider router={Route} />
                {/* </WishlistProvider> */}
              </ChefProvider>
            </CartProvider>
          </ProductProvider>
        </BlogProvider>
      </AuthProvider>
    </>
  );
}

export default App;
