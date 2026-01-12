import React from 'react'
import { Box, Typography } from "@mui/material";
// import { chef } from "../services/json/chef.js";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import type { ChefCardProps } from '../typescript/interface/component.interface';

const ChefCard:React.FC<ChefCardProps> = ({item}) => {
  return (
     <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
           <Box
              // key={idx}
              sx={{
                bgcolor: "#21292cb9",
                p: 2,
                borderRadius: 5,
                boxShadow: "0 4px 8px #070707ff",
              }}
            >
              <Box sx={{ height: 220, width:180 }}>
                <img
                  src={item?.image}
                  alt={item?.name}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                    fontWeight: 600,
                    fontSize: 18,
                    textAlign: "center",
                    py: 1,
                  }}
                >
                  {item?.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#acacac94",
                    textAlign: "center",
                    textTransform: "capitalize",
                  }}
                >
                  {item?.designation}
                </Typography>
                <Box
                  sx={{
                    // width: 25,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    // border:"1px solid #fff",
                    py: 1,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#121a1d",
                      borderRadius: 60,
                      px: 1.1,
                      py: 0.9,
                    }}
                  >
                    <Facebook fill="#fff" color="#fff" size={14} />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#121a1d",
                      borderRadius: 60,
                      px: 1.1,
                      py: 0.9,
                    }}
                  >
                    <Twitter color="#fff" size={14} />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#121a1d",
                      borderRadius: 60,
                      px: 1.1,
                      py: 0.9,
                    }}
                  >
                    <Instagram size={14} color="#fff" />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#121a1d",
                      borderRadius: 60,
                      px: 1.1,
                      py: 0.9,
                    }}
                  >
                    <Linkedin size={14} color="#fff" />
                  </Box>
                </Box>
              </Box>
            </Box>
        </Box>
  )
}

export default ChefCard