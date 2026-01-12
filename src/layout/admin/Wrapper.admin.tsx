// import React from "react";
import NavbarAdmin from "./Navbar.admin";
import { Box } from "@mui/material";
import SidebarAdmin from "./Sidebar.admin";
// import Dashboard from "../../pages/admin/Dashboard";
import { Outlet } from "react-router-dom";

const WrapperAdmin = () => {
  return (
    <>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
  
  {/* Navbar */}
  <NavbarAdmin />

  {/* Main content */}
  <Box sx={{ display: "flex", flex: 1, bgcolor:"#384247ff" }}>
    
    {/* Sidebar */}
    <Box sx={{ width: 240, bgcolor:"#121a1d" }}>
      <SidebarAdmin />
    </Box>

    {/* Outlet */}
    <Box sx={{ flex: 1, p: 2, overflowY: "auto" }}>
      <Outlet />
    </Box>

  </Box>

</Box>
    </>
  );
};

export default WrapperAdmin;
