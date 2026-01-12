// import React from "react";
import {
  Card,
  CardContent,
  Box,
  // IconButton,
  Typography,
  // Button,
  Slider,
} from "@mui/material";
import { Minus, Plus, Star, ChevronLeft, Search } from "lucide-react";
import burger from "../assets/images/foodorderapp/burger.png";

interface BurgerCardProps {
  width?: number | string;
  height?: number | string;
}

const BurgerCard = ({ width = 320, height = "auto" }: BurgerCardProps) => {
  return (
    <Card
      sx={{
        width: width,
        height: height,
        borderRadius: 5,
        // padding: 2,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        position: "relative",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <CardContent sx={{ padding: 2, "&:last-child": { paddingBottom: 2 } }}>
        {/* Header Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <ChevronLeft size={24} strokeWidth={2.5} />
          </Box>
          <Box>
            <Search size={24} strokeWidth={2.5} />
          </Box>
        </Box>

        {/* Main Image Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            // height: 192,
            bgcolor: "grey.50",
            borderRadius: "16px",
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={burger}
            alt="Cheeseburger Wendy's Burger"
            sx={{
              width: 160,
              filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: "black",
            lineHeight: 1,
            fontSize: "1.25rem",
          }}
        >
          Cheeseburger Wendy's Burger
        </Typography>

        {/* Rating & Time */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            // mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Star size={16} style={{ color: "#fb923c", fill: "#fb923c" }} />
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "grey.700",
              }}
            >
              4.9
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "grey.400",
              fontWeight: 500,
            }}
          >
            26 mins
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            color: "grey.400",
            fontSize: "0.75rem",
            lineHeight: 1.6,
            // mb: 3,
          }}
        >
          The Cheeseburger Wendy's Burger is a classic fast food burger that
          packs a punch of flavor in every bite.
        </Typography>

        {/* Spicy Slider */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              fontWeight: 700,
              // mb: 1,
            }}
          >
            <Typography
              sx={{
                color: "success.main",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              Spicy
            </Typography>
          </Box>
          <Slider
            value={75}
            sx={{
              color: "#fdba74",
              // height: 8,
              // "& .MuiSlider-track": {
              //   border: "none",
              //   bgcolor: "#fdba74",
              // },
              // "& .MuiSlider-rail": {
              //   bgcolor: "#fed7aa",
              // },
              // "& .MuiSlider-thumb": {
              //   height: 16,
              //   width: 16,
              //   bgcolor: "#fdba74",
              //   border: "2px solid white",
              //   boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              //   "&:hover": {
              //     boxShadow: "0 0 0 8px rgba(253, 186, 116, 0.16)",
              //   },
              // },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // mt: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 700,
                color: "success.main",
                textTransform: "uppercase",
              }}
            >
              Mild
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 700,
                color: "error.main",
                textTransform: "uppercase",
              }}
            >
              Hot
            </Typography>
          </Box>
        </Box>

        {/* Footer Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Counter */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 22,
                height: 22,
                bgcolor: "#ff8400ff",
                color: "white",
                borderRadius: 90,
                textAlign: "center",
              }}
            >
              <Minus size={12} strokeWidth={3} />
            </Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                color: "black",
              }}
            >
              2
            </Typography>
            <Box
              sx={{
                width: 22,
                height: 22,
                bgcolor: "#ff8400ff",
                color: "white",
                borderRadius: 90,
                textAlign: "center",
              }}
            >
              <Plus size={12} strokeWidth={3} />
            </Box>
          </Box>

          {/* Add to Cart Button */}
          <Box
            // variant="outlined"
            sx={{
              flex: 1,
              py: 1.5,
              // px: 3,
              borderRadius: "16px",
              border: "2px solid #fed7aa",
              color: "#7c2d12",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "none",
              textAlign: "center",
            }}
          >
            Add to Cart
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BurgerCard;
