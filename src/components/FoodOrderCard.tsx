// import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Chip,
  Avatar,
} from "@mui/material";
import { Menu, Plus, Star } from "lucide-react";
import burger from "../assets/images/foodorderapp/app-burger.png";
import pizza from "../assets/images/foodorderapp/app-pizza.png";
import swarma from "../assets/images/foodorderapp/app-swarma.png";
import chiken from "../assets/images/foodorderapp/app-chiken.png";
import avater from "../assets/images/foodorderapp/app-avater.png";
import logo from "../assets/images/navbar/Logo.png";

interface FoodOrderCardProps {
  width?: number | string;
  height?: number | string;
}

const FoodOrderCard = ({
  width = 375,
  height = "auto",
}: FoodOrderCardProps) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        bgcolor: "#FAFAFA",
        position: "relative",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: "white",
          px: 2,
          pt: 2,
          pb: 1,
        }}
      >
        {/* Logo and Profile */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box component="img" src={logo} sx={{ width: 60 }}></Box>
          </Box>
          <Avatar src={avater} sx={{ width: 30, height: 30 }} />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "#333",
            mb: 2,
          }}
        >
          Order your favourite food!
        </Typography>

        {/* Search Bar and Menu Button */}
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <TextField
            placeholder="Search"
            size="small"
            sx={{
              flex: 1,
              bgcolor: "#F5F5F5",
              borderRadius: "12px",
              height: 30,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                border: "none",
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <Search size={16} color="#999" />
            //     </InputAdornment>
            //   ),
            // }}
          />
          <Box
            sx={{
              bgcolor: "#FF8C42",
              color: "white",
              borderRadius: "10px",
              width: 28,
              height: 28,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Menu size={14} />
          </Box>
        </Box>

        {/* Category Tabs */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Chip
            label="All"
            sx={{
              bgcolor: "#FF8C42",
              color: "white",
              fontWeight: 600,
              fontSize: 12,
              borderRadius: "20px",
            }}
          />
          <Chip
            label="Combos"
            sx={{
              bgcolor: "#F5F5F5",
              color: "#666",
              fontWeight: 600,
              fontSize: 12,
              borderRadius: "20px",
            }}
          />
          <Chip
            label="Ind"
            sx={{
              bgcolor: "#F5F5F5",
              color: "#666",
              fontWeight: 600,
              fontSize: 12,
              borderRadius: "20px",
            }}
          />
        </Box>
      </Box>

      {/* Food Items Grid */}
      <Box
        sx={{
          px: 2,
          pt: 2,
          pb: 1,
          // height: "60%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        >
          {/* Cheeseburger Card */}
          <Card
            sx={{
              borderRadius: "12px",
              // border: "2px dashed #FFB380",
              boxShadow: "0 2px 8px #1e1e1e",
              height: 120,
              // position: "relative",
            }}
          >
            <CardContent sx={{ p: 1.5 }}>
              <Box
                sx={{
                  bgcolor: "#FFF5EE",
                  borderRadius: "12px",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // height: 60,
                  // mb: 1,
                }}
              >
                <Box
                  component="img"
                  src={burger}
                  alt="Cheeseburger"
                  sx={{ width: 50, height: 40, objectFit: "contain" }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 10,
                  color: "#333",
                  // mb: 0.5,
                }}
              >
                Cheeseburger
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  color: "#999",
                  // mb: 1,
                }}
              >
                Wendy's Burger
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 10,
                      color: "#333",
                      fontWeight: 700,
                    }}
                  >
                    Rs.{" "}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 11,
                      color: "#FFB800",
                      fontWeight: 700,
                    }}
                  >
                    120
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Star size={10} fill="#FFB800" color="#FFB800" />
                  <Typography sx={{ fontSize: 11, fontWeight: 600 }}>
                    4.9
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Pizza Card */}
          <Card
            sx={{
              borderRadius: "12px",
              // border: "2px dashed #FFB380",
              boxShadow: "0 2px 8px #1e1e1e",
              height: 120,
            }}
          >
            <CardContent sx={{ p: 1.5 }}>
              <Box
                sx={{
                  bgcolor: "#FFF5EE",
                  borderRadius: "12px",
                  // p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // height: 50,
                  // mb: 1,
                }}
              >
                <Box
                  component="img"
                  src={pizza}
                  alt="Pizza"
                  sx={{ width: 40, height: 40, objectFit: "contain" }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 10,
                  color: "#333",
                  // mb: 0.5,
                }}
              >
                Pizza
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  color: "#999",
                  // mb: 1,
                }}
              >
                Italian Cheese Pizza
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 10,
                      color: "#333",
                      fontWeight: 700,
                    }}
                  >
                    Rs.{" "}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 10,
                      color: "#FFB800",
                      fontWeight: 700,
                    }}
                  >
                    220
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Star size={10} fill="#FFB800" color="#FFB800" />
                  <Typography sx={{ fontSize: 11, fontWeight: 600 }}>
                    4.9
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Shawarma Card */}
          <Card
            sx={{
              borderRadius: "12px",
              // border: "2px dashed #FFB380",
              boxShadow: "0 2px 8px #1e1e1e",
              height: 120,
            }}
          >
            <CardContent sx={{ p: 1.5 }}>
              <Box
                sx={{
                  bgcolor: "#FFF5EE",
                  borderRadius: "12px",
                  // p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // height: 60,
                  // mb: 1,
                }}
              >
                <Box
                  component="img"
                  src={swarma}
                  alt="Shawarma"
                  sx={{ width: 50, height: 50, objectFit: "contain" }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 10,
                  color: "#333",
                  // mb: 0.5,
                }}
              >
                Shawarma
              </Typography>
              <Typography
                sx={{
                  fontSize: 8,
                  color: "#999",
                  // mb: 1,
                }}
              >
                Chicken Shawarma
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 10,
                      color: "#333",
                      fontWeight: 700,
                    }}
                  >
                    Rs.{" "}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 10,
                      fontWeight: 700,
                      // textDecoration: "line-through",
                      color: "#FFB800",
                      // mr: 0.5,
                    }}
                  >
                    140
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Star size={10} fill="#FFB800" color="#FFB800" />
                  <Typography sx={{ fontSize: 11, fontWeight: 600 }}>
                    4.9
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Chicken Card with Price Tag */}
          <Card
            sx={{
              borderRadius: "12px",
              // border: "2px solid #4FC3F7",
              boxShadow: "0 2px 8px #1e1e1e",
              height: 120,
              // position: "relative",
            }}
          >
            <CardContent sx={{ p: 1.5 }}>
              <Box
                sx={{
                  bgcolor: "#E3F2FD",
                  borderRadius: "12px",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  // mb: 1,
                }}
              >
                <Box
                  component="img"
                  src={chiken}
                  alt="Chicken"
                  sx={{ width: 50, height: 40, objectFit: "contain" }}
                />
              </Box>
              {/* Price Tag */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 60,
                  right: 12,
                  // bgcolor: "#4FC3F7",
                  color: "#000",
                  px: 1.5,
                  // py: 0.5,
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: 10,
                }}
              >
                RS. <span style={{ color: "#ffb800" }}>250</span>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 10,
                  color: "#333",
                  // mb: 0.5,
                }}
              >
                Chicken
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  color: "#999",
                  // mb: 1,
                }}
              >
                Fried Chicken
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Floating Action Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: 25,
          left: 106,
          // transform: "translateX(-50%)",
          bgcolor: "#ff7b00ff",
          // color: "white",
          width: 36,
          height: 36,
          borderRadius: "60%",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Plus size={18} color="#fff" />
      </Box>

      {/* Bottom Navigation */}
    
    </Box>
  );
};

export default FoodOrderCard;
