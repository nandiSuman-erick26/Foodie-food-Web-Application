import { Box, IconButton, Typography } from "@mui/material";
import { Heart, ShoppingBasket } from "lucide-react";
import type React from "react";
import type { FoodCardProps } from "../typescript/interface/component.interface";

const FoodCard: React.FC<FoodCardProps> = ({ item, addProductToCart }) => {
  return (
    <Box
      // key={idx}
      sx={{
        bgcolor: "#21292cb9",
        p: 2,
        borderRadius: 5,
        boxShadow: "0 4px 8px #070707ff",
        height: 380,
        width: 270,
      }}
    >
      <Box
        sx={{
          height: "40%",
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src={item?.image}
          alt="aboutus"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />
        <Box sx={{ position: "absolute", top: 10, right: 10 }}>
          <Heart
            color="#d68240"
            size={20}
            style={{
              backgroundColor: "#121a1d",
              borderRadius: "60%",
              padding: 6,
            }}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#d68240",
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: 20,
            py: 2,
          }}
        >
          {item?.name}
        </Typography>
        <Typography sx={{ py: 3, color: "#acacac94", fontSize: 12 }}>
          {item?.description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 1, alignItems:"center" }}>
        <Typography sx={{ color: "#d68240", fontSize: 18, fontWeight: 800 }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>Rs.</span>
          {item?.price}
        </Typography>
        <IconButton onClick={() => addProductToCart(item)} sx={{color:"#fff",":hover":{
          color:"#d68240"
        }}}>
          <ShoppingBasket
            
            size={20}
            style={{
              padding: 3,
              borderRadius: "60%",
              border: "1px solid #d68240",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FoodCard;
