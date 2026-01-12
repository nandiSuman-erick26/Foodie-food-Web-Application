// import React from 'react'
import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { useLocation } from "react-router-dom";

const CommonHeader = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames);

  const pathNameFormat = (path: string) => {
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  const currentPage =
    pathnames.length > 0
      ? pathNameFormat(pathnames[pathnames.length - 1])
      : "Home";
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "#111d22ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: 250, sm: 300, md: 350 },
        px: { xs: 2, sm: 3 },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontSize: { xs: 24, sm: 30, md: 36 },
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Home/
          <span style={{ color: "#d68240" }}>{currentPage}</span>
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 1000 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#ffffff70",
              textAlign: "center",
              fontSize: { xs: 12, sm: 14, md: 16 },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis
            itaque architecto aperiam! Recusandae excepturi enim aliquam
            corporis odit maxime asperiores sequi qui quisquam amet?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(CommonHeader);
