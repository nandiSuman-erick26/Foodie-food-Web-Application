// import React from 'react'

import { Box, Typography } from "@mui/material";
import CommonHeader from "../components/CommonHeader";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../hooks/context/blog/Blog.create";

const OurBlogs = () => {
  const navigate = useNavigate();
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { blogState } = context;
  console.log("BLOG STATE", blogState);
  return (
    <Box sx={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <CommonHeader />
      <Box
        sx={{
          bgcolor: "#121a1d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
            padding: { xs: 3, sm: 4, md: 5 },
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontSize: { xs: 22, sm: 24, md: 28 },
              fontWeight: 600,
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            latest news & blogs
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#ffffff65",
              textAlign: "center",
              fontSize: { xs: 13, sm: 14, md: 16 },
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quas
            natus suscipit similique atque aliquam ex! Accusantium vero eligendi
            placeat.consectetur natus suscipit similique atque aliquam ex!
            Accusantium vero eligendi placeat
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, sm: 2.5, md: 3 },
            padding: { xs: 2, sm: 3, md: 4, lg: 6 },
            width: "100%",
            maxWidth: 1400,
            justifyItems: "center",
          }}
        >
          {blogState?.blog?.map((blog, idx) => (
            <BlogCard
              key={idx}
              item={{
                id: blog?.id,
                titel: blog?.titel,
                description: blog?.description,
                image: blog?.image,
              }}
              onClick={() => navigate(`/singleblog/${blog?.id}`)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurBlogs;
