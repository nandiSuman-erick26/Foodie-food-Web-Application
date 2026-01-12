import { Box, Typography } from "@mui/material";
// import React from "react";
import CommonHeader from "../components/CommonHeader";
import { useContext } from "react";
import { ProductContext } from "../hooks/context/product/Product.create";
import FoodCard from "../components/FoodCard";
import { CartContext } from "../hooks/context/cart/Cart.create";
import { toast } from "sonner";

const Menu = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { productState } = context;
  console.log(productState);

  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { cartState, addProductToCart } = ctx;
  console.log("menutsx cartstate----------", cartState);

  //=====================================================
  //================catagory Filter======================
  const category_Filteration = Array.from(
    new Set(
      (productState?.product || [])
        .map((c) => c?.item_catagory?.toString().trim())
        .filter(Boolean)
    )
  );

  const handleProductAdd = async (data: any) => {
    const cartItem = {
      product_id: data?.$id || data?.id,
      product_price: Number(data?.item_price),
      product_qty: 1,
      total_price: Number(data?.item_price),
      product_image: data?.item_image,
      product_name: data?.item_name,
    };
    await addProductToCart(cartItem as any);
    toast.success("Item added to Cart! Visit cart for the detail!");
  };
  //===================================================
  return (
    <Box>
      <CommonHeader />
      <Box
        sx={{
          bgcolor: "#121a1d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "60%",
            padding: 5,
            gap: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            our delicious menu
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff65", textAlign: "center" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quas
            natus suscipit similique atque aliquam ex! Accusantium vero eligendi
            placeat
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            {category_Filteration.map((category) => (
              <Box
                key={category}
                sx={{
                  border: "1px solid #ffffff8a",
                  borderRadius: 2,
                  p: 1,
                  color: "#fff",
                  cursor: "pointer",
                  ":hover": {
                    boxShadow: "0 2px 9px #0ab0ec60",
                    border: "1px solid #d68240",
                    color: "#d68240",
                  },
                }}
              >
                {category}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
            padding: 6,
          }}
        >
          {productState?.product?.map((prod, idx) => (
            <FoodCard
              key={idx}
              item={{
                name: prod?.item_name,
                description: prod?.item_description,
                price: prod?.item_price,
                image: prod?.item_image,
                catagoty: prod?.item_catagory,
                id: prod?.$id || prod?.id,
              }}
              addProductToCart={() => handleProductAdd(prod)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
