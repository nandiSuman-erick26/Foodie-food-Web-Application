import { Box, Typography } from "@mui/material";
import {
  ChefHat,
  Contact,
  Home,
  Info,
  PackagePlus,
  Scroll,
  Users,
} from "lucide-react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/context/auth/Auth.create";
// import Cookies from "js-cookie";
// import React from "react";
const nav = [
  { path: "", name: <Home /> },
  { path: "/admin/menu", name: <PackagePlus /> },
  { path: "/admin/chef", name: <ChefHat /> },
  { path: "/admin/blogs", name: <Scroll /> },
  { path: "", name: <Users /> },
  { path: "", name: <Info /> },
  { path: "", name: <Contact /> },
];
const NavbarAdmin = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { authState } = context;
  console.log(authState);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        bgcolor: "#121a1d",
        height: 50,
        display: "flex",
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Box>
        <Typography
          sx={{
            color: "#d68240",
            textTransform: "uppercase",
            padding: 1,
            fontWeight: 800,
          }}
        >
          dashboard
        </Typography>
      </Box> */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
        {nav?.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <Typography
              key={idx}
              sx={{
                color: isActive ? "#d68240" : "#fff",
                textTransform: "capitalize",
                cursor: "pointer",
                ":hover": { color: "#d68240" },
              }}
              onClick={() => navigate(item.path)}
            >
              {item?.name}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default NavbarAdmin;
