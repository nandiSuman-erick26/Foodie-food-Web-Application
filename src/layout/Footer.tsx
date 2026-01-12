// import React from 'react'
import footer from "../assets/images/footer/footer.png";
import masterCard from "../assets/images/footer/mastercard.png";
import visa from "../assets/images/footer/visa.png";
import paypal from "../assets/images/footer/paypal.png";
import gpay from "../assets/images/footer/Gpay.png";
import logo from "../assets/images/navbar/Logo.png";
import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquareText,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#022f41c3",
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        height: 400,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 15 }}>
        {/* logo description social media handles */}
        <Box
          sx={{
            width: 380,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box component="img" src={logo} sx={{ height: 27, width: 75 }}></Box>
          <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
            <Typography sx={{ color: "#ffffff4b", fontSize: 13 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis
              rerum beatae, labore blanditiis inventore architecto et ipsum
              nobis! Tempore tenetur, saepe ipsa voluptate porro consequatur
              earum inventore ea suscipit unde, reprehenderit ex nobis corrupti.
              Ullam dolore iure ut quas, numquam temporibus quo, sint eius aut
              omnis accusantium!{" "}
            </Typography>
            <Typography sx={{ color: "#ffffff4b", fontSize: 12 }}>Developed By <span style={{color: "#ffffffff", fontSize: 13, fontWeight:600 }}>©Suman Nandi</span></Typography>
          </Box>
          <Box
            sx={{
              width: 25,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              // border:"1px solid #fff",
              px: 7,
            }}
          >
            <Box
              sx={{ bgcolor: "#121a1d", borderRadius: 60, px: 1.1, py: 0.9 }}
            >
              <Facebook fill="#fff" color="#fff" size={14} />
            </Box>
            <Box
              sx={{ bgcolor: "#121a1d", borderRadius: 60, px: 1.1, py: 0.9 }}
            >
              <Twitter color="#fff" size={14} />
            </Box>
            <Box
              sx={{ bgcolor: "#121a1d", borderRadius: 60, px: 1.1, py: 0.9 }}
            >
              <Instagram size={14} color="#fff" />
            </Box>
            <Box
              sx={{ bgcolor: "#121a1d", borderRadius: 60, px: 1.1, py: 0.9 }}
            >
              <Linkedin size={14} color="#fff" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {/* contact us */}
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                contact us
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // padding: 1,
                  gap: 1,
                  py: 3,
                }}
              >
                <MessageSquareText
                  color="#ffffffb4"
                  size={14}
                  style={{
                    padding: 5,
                    borderRadius: "60%",
                    backgroundColor: "#182b32ff",
                  }}
                />
                <Typography
                  color="#ffffff4a"
                  sx={{ textAlign: "center", fontSize: 14 }}
                >
                  infofoodi@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // padding: 1,
                  gap: 1,
                }}
              >
                <Phone
                  fill="#ffffffb4"
                  size={14}
                  style={{
                    padding: 5,
                    borderRadius: "60%",
                    backgroundColor: "#182b32ff",
                  }}
                />
                <Typography
                  color="#ffffff4a"
                  sx={{ textAlign: "center", fontSize: 14 }}
                >
                  +917029112661
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* user link */}
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                user link
              </Typography>
            </Box>
            <Box>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textTransform: "capitalize",
                  p: 0,
                  py: 2,
                }}
              >
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: 14 }}
                  >
                    about us
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: 14 }}
                  >
                    contact us
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: 14 }}
                  >
                    order delivery
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: 14 }}
                  >
                    payments & tex
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: 14 }}
                  >
                    terms and services
                  </Typography>
                </ListItemText>
              </ListItem>
            </Box>
          </Box>
          {/* location */}
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                location
              </Typography>
            </Box>
            <Box>
              <Box sx={{ width: 190, py: 2 }}>
                <Typography color="#ffffff4a" sx={{ fontSize: 14 }}>
                  543 Country Club Ave, NC 27587, London, UK
                </Typography>
                <Typography color="#ffffff4a" sx={{ fontSize: 14 }}>
                  +1257 6541120
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Box
                  component="img"
                  src={masterCard}
                  sx={{ height: 20, width: 30 }}
                ></Box>
                <Box
                  component="img"
                  src={gpay}
                  sx={{ height: 20, width: 30 }}
                ></Box>
                <Box
                  component="img"
                  src={visa}
                  sx={{ height: 20, width: 30 }}
                ></Box>
                <Box
                  component="img"
                  src={paypal}
                  sx={{ height: 20, width: 30 }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "2px dashed #ffffff1d",
          width: "70%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ color: "#797b78", fontSize: 14 }}>
            ©2024 APR,All rights reserved
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ color: "#797b78", fontSize: 14 }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: "#797b78", fontSize: 14 }}>
            Terms of Use
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
