// import React from 'react'

import {
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ShoppingBasket, Menu as MenuIcon, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: { xs: 55, sm: 65, md: 70 },
          width: { xs: "90%", sm: "85%", lg: "80%" },
          maxWidth: 1400,
          borderRadius: { xs: "15px", md: "20px" },
          position: "fixed",
          top: { xs: 15, sm: 20, md: 25 },
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "#92929223",
          backdropFilter: "blur(0)",
          boxShadow: "0 2px 2px #e0e0e0",
          border: "0.5px solid #ffffff75",
          zIndex: 1000,
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Hamburger Menu Icon - Mobile Only */}
        <IconButton
          sx={{
            display: { xs: "flex", lg: "none" },
            color: "#fff",
            p: 0.5,
          }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon size={24} />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logo}
            onClick={() => navigate("/")}
            sx={{
              height: { xs: 25, sm: 35, md: 45 },
              width: "auto",
              cursor: "pointer",
              flexShrink: 0,
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            gap: { lg: 3, xl: 4 },
          }}
        >
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
                    fontSize: { lg: 16, xl: 20 },
                    cursor: "pointer",
                    ":hover": {
                      fontSize: { lg: 18, xl: 22 },
                      color: "#d68240",
                    },
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => navigate(item?.path)}
                >
                  {item?.name}
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            padding: { xs: 1, sm: 2, md: 3 },
            display: "flex",
            gap: { xs: 0.5, sm: 1 },
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              color: "#fff",
              ":hover": { color: "#d68240" },
              p: { xs: 0.5, sm: 1 },
            }}
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
          <Box sx={{ display: { xs: "block", sm: "block" } }}>
            {authState.isAuthenticate ? (
              authState?.user?.map((u: any) => (
                <Avatar
                  key={u}
                  src={u?.image}
                  sx={{ height: { xs: 25, sm: 30 }, width: { xs: 25, sm: 30 } }}
                />
              ))
            ) : (
              <Avatar
                sx={{ height: { xs: 25, sm: 30 }, width: { xs: 25, sm: 30 } }}
              />
            )}
          </Box>
          {authState?.isAuthenticate && role === "user" ? (
            <Button
              onClick={handleLogout}
              sx={{
                borderRadius: 2,
                bgcolor: "#d68240",
                ":hover": { bgcolor: "#ca330dff" },
                px: { xs: 1, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                minWidth: { xs: 60, sm: 80 },
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: { xs: 10, sm: 12 },
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
                px: { xs: 1, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                minWidth: { xs: 60, sm: 80 },
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: { xs: 10, sm: 12 },
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

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            width: 250,
            bgcolor: "#121a1d",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="img" src={logo} sx={{ height: 24, width: 65 }} />
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: "#fff" }}
          >
            <X size={24} />
          </IconButton>
        </Box>
        <List>
          {navbarArr.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem
                key={idx}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                sx={{
                  cursor: "pointer",
                  bgcolor: isActive ? "#d6824020" : "transparent",
                  borderLeft: isActive
                    ? "4px solid #d68240"
                    : "4px solid transparent",
                  ":hover": {
                    bgcolor: "#d6824010",
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: isActive ? "#d68240" : "#fff",
                      fontWeight: isActive ? 600 : 400,
                      textTransform: "capitalize",
                    },
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
