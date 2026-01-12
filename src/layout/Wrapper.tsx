// import React from 'react'

import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Wrapper = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden", position: "relative" }}>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Wrapper;
