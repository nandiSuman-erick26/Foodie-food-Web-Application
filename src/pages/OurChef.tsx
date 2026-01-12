// import React from 'react'

import { Box, Typography } from "@mui/material";
import CommonHeader from "../components/CommonHeader";

import ChefCard from "../components/ChefCard";
import { useContext } from "react";
import { ChefContext } from "../hooks/context/chef/Chef.create";

const OurChef = () => {
  const context = useContext(ChefContext);
  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { chefState } = context;
  console.log(chefState);

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
            our world class chef
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff65", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, at tenetur. Eum voluptatibus dolore, ea sapiente sit
            libero, molestias repellat neque perspiciatis assumenda esse sequi?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 2,
            padding: 6,
          }}
        >
          {chefState?.chef?.map((item, idx) => (
            <ChefCard
              key={idx}
              item={{
                name: item?.chef_name,
                image: item?.chef_image,
                designation: item?.chef_designation,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurChef;
