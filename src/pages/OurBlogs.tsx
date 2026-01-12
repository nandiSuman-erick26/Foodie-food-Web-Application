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
    <Box>
      <CommonHeader />
      <Box
        sx={{
          bgcolor: "#121a1d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "60%",
            padding: 5,
            gap: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            latest news & blogs
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff65", textAlign: "center" }}
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
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
            padding: 6,
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
