import { Box, IconButton, Typography } from "@mui/material";
import { Heart, ShoppingBasket } from "lucide-react";
import type React from "react";
import type { FoodCardProps } from "../typescript/interface/component.interface";

const FoodCard: React.FC<FoodCardProps> = ({ item, addProductToCart }) => {
  return (
    <Box
      sx={{
        bgcolor: "#21292cb9",
        p: 2,
        borderRadius: 5,
        boxShadow: "0 4px 8px #070707ff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box
        sx={{
          height: 180,
          width: "100%",
          position: "relative",
          mb: 1,
        }}
      >
        <img
          src={item?.image}
          alt={item?.name}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: 16,
          }}
        />
        <Box sx={{ position: "absolute", top: 10, right: 10 }}>
          <Heart
            color="#d68240"
            size={20}
            style={{
              backgroundColor: "rgba(18, 26, 29, 0.8)",
              borderRadius: "50%",
              padding: 6,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#d68240",
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: 20,
            mt: 1,
          }}
        >
          {item?.name}
        </Typography>
        <Typography
          sx={{
            color: "#acacac94",
            fontSize: 13,
            lineHeight: 1.5,
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item?.description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 2,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography sx={{ color: "#d68240", fontSize: 18, fontWeight: 800 }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>Rs.</span>
          {item?.price}
        </Typography>
        <IconButton
          onClick={() => addProductToCart(item)}
          sx={{
            color: "#fff",
            p: 1,
            bgcolor: "rgba(214, 130, 64, 0.1)",
            "&:hover": {
              bgcolor: "#d68240",
              color: "#fff",
            },
          }}
        >
          <ShoppingBasket size={20} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FoodCard;
