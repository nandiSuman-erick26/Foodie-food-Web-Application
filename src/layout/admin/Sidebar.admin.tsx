import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../hooks/context/auth/Auth.create";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
// import React from "react";

const SidebarAdmin = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { authState, adminLogout } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if (authState?.isAuthenticate !== true) {
      navigate("/administrator-admin-login");
    }
  }, [authState?.isAuthenticate]);
  const handleLogout = () => [adminLogout()];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        onClick={handleLogout}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #d68240",
          p: 1,
          borderRadius: 3,
          cursor: "pointer",
          ":hover": { boxShadow: "0 1px 12px #d68240" },
          width: "70%",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <LogOut color="#d68240" />
          <span style={{ color: "#d68240" }}>Logout</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SidebarAdmin;
