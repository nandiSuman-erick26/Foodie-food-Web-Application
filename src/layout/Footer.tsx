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
        minHeight: { xs: 450, md: "auto" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: { xs: 5, sm: 7, md: 8 },
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 5 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs:"column" ,sm:"column", md:"row" },
          gap: { xs: 6, md: 8 },
          width: "100%",
          maxWidth: 1200,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* logo description social media handles */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={logo}
            sx={{ height: { xs: 24, sm: 27 }, width: { xs: 65, sm: 75 } }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", sm: "90%" },
            }}
          >
            <Typography
              sx={{ color: "#ffffff4b", fontSize: { xs: 12, sm: 13 } }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis
              rerum beatae, labore blanditiis inventore architecto et ipsum
              nobis! Tempore tenetur, saepe ipsa voluptate porro consequatur
              earum inventore ea suscipit unde, reprehenderit ex nobis corrupti.
              Ullam dolore iure ut quas, numquam temporibus quo, sint eius aut
              omnis accusantium!{" "}
            </Typography>
            <Typography
              sx={{ color: "#ffffff4b", fontSize: { xs: 11, sm: 12 } }}
            >
              Developed By{" "}
              <span
                style={{ color: "#ffffffff", fontSize: 13, fontWeight: 600 }}
              >
                ©Suman Nandi
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "auto",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 1,
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
            justifyContent: { xs: "space-between", md: "space-around" },
            alignItems: "flex-start",
            gap: { xs: 4, sm: 6 },
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            maxWidth: 1000,
            mx: "auto",
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
                  sx={{ textAlign: "center", fontSize: { xs: 13, sm: 14 } }}
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
                  sx={{ textAlign: "center", fontSize: { xs: 13, sm: 14 } }}
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
                    sx={{ textAlign: "center", fontSize: { xs: 13, sm: 14 } }}
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
              <Box sx={{ width: { xs: "100%", sm: 190 }, py: 2 }}>
                <Typography
                  color="#ffffff4a"
                  sx={{ fontSize: { xs: 13, sm: 14 } }}
                >
                  543 Country Club Ave, NC 27587, London, UK
                </Typography>
                <Typography
                  color="#ffffff4a"
                  sx={{ fontSize: { xs: 13, sm: 14 } }}
                >
                  +1257 6541120
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  justifyContent: { xs: "flex-start", sm: "flex-start" },
                }}
              >
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
          width: "100%",
          maxWidth: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
          pt: { xs: 3, sm: 0 },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#797b78",
              fontSize: { xs: 12, sm: 14 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            ©2024 APR,All rights reserved
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 1 },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#797b78", fontSize: { xs: 12, sm: 14 } }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: "#797b78", fontSize: { xs: 12, sm: 14 } }}>
            Terms of Use
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
