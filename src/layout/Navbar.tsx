// import React from 'react'

import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { ShoppingBasket } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/navbar/Logo.png";
import { useContext, useEffect, useState } from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cookie from "js-cookie";
import { toast } from "sonner";
import { AuthContext } from "../hooks/context/auth/Auth.create";
import { CartContext } from "../hooks/context/cart/Cart.create";
const navbarArr = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/our-menu",
    name: "Menu",
  },
  {
    path: "/about-us",
    name: "About Us",
  },
  {
    path: "/our-chef",
    name: "Chef",
  },
  {
    path: "/our-blogs",
    name: "Blog",
  },
  {
    path: "/contact-us",
    name: "Contact",
  },
];
const Navbar = () => {
  const context = useContext(AuthContext);
  const ctx = useContext(CartContext);
  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const cartLength = ctx?.cartState?.cart_length || 0;
  const { authState, logoutUser } = context;

  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const token = Cookie.get("token");
  const role = Cookie.get("role");
  console.log("token", token);
  console.log("role", role);

  useEffect(() => {
    if (location.state?.pleaseLogin) {
      setOpen(true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state]);
  const handleLogout = async () => {
    try {
      logoutUser();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleSwitchToSignup = () => {
    setOpen(false);
    setOpenSignup(true);
  };
  const handleSwitchToLogin = () => {
    setOpenSignup(false);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: 65,
        width: { xs: "95%", sm: "90%", md: "85%", lg: "80%" },
        maxWidth: 1384,
        borderRadius: "20px",
        position: "fixed",
        top: 25,
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "#92929223",
        backdropFilter: "blur(0)",
        boxShadow: "0 2px 2px #e0e0e0",
        border: "0.5px solid #ffffff75",
        zIndex: 1000,
      }}
    >
      <Box
        component="img"
        src={logo}
        sx={{
          padding: 3,
        }}
      ></Box>
      {navbarArr?.map((item, idx) => {
        const isActive = location.pathname === item.path;
        return (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                color: isActive ? "#d68240" : "#fff",
                fontSize: 20,
                cursor: "pointer",
                ":hover": { fontSize: 22, color: "#d68240" },
              }}
              onClick={() => navigate(item?.path)}
            >
              {item?.name}
            </Box>
          </Box>
        );
      })}
      <Box sx={{ padding: 3, display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton
          sx={{ color: "#fff", ":hover": { color: "#d68240" } }}
          onClick={() => navigate("/my-cart")}
        >
          <ShoppingBasket size={20} />
          {cartLength > 0 && authState.isAuthenticate === true && (
            <Box
              sx={{
                position: "absolute",
                top: -2,
                right: 0,
                bgcolor: "#121a1d",
                color: "#d68240",
                borderRadius: "50%",
                width: { xs: 12, md: 15 },
                height: { xs: 12, md: 15 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: 10, md: 11 },
                fontWeight: 700,
                border: "1px solid #d68240",
              }}
            >
              {cartLength}
            </Box>
          )}
        </IconButton>
        <Box>
          {authState.isAuthenticate ? (
            authState?.user?.map((u: any) => (
              <Avatar key={u} src={u?.image} sx={{ height: 30, width: 30 }} />
            ))
          ) : (
            <Avatar sx={{ height: 30, width: 30 }} />
          )}
        </Box>
        {authState?.isAuthenticate && role === "user" ? (
          <Button
            onClick={handleLogout}
            sx={{
              borderRadius: 2,
              bgcolor: "#d68240",
              ":hover": { bgcolor: "#ca330dff" },
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: 12,
                fontWeight: 500,
                color: "#fff",
              }}
            >
              logout
            </Typography>
          </Button>
        ) : (
          <Button
            onClick={handleOpenDialog}
            sx={{
              borderRadius: 2,
              bgcolor: "#d68240",
              ":hover": { bgcolor: "#527a12ff" },
              px: 2,
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: 12,
                fontWeight: 500,
                color: "#fff",
              }}
            >
              login
            </Typography>
          </Button>
        )}
        <Login
          open={open}
          onClose={handleCloseDialog}
          onSwitchSignup={handleSwitchToSignup}
        />
        <Signup
          open={openSignup}
          onClose={() => setOpenSignup(false)}
          onSwitchLogin={handleSwitchToLogin}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
