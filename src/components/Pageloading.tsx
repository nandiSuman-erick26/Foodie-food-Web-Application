// import React from 'react'

import Lottie from "lottie-react";
import myLoadingAnimation from "../animations/loading.json";
import { Box } from "@mui/material";

const Pageloading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121a1d",
        zIndex: 999,
      }}
    >
      <Lottie
        animationData={myLoadingAnimation}
        loop={true}
        autoPlay={true}
        // style={{ width: 300, height: 400 }}
      />
    </Box>
  );
};

export default Pageloading;
