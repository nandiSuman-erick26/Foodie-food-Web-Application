// import React from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import CommonHeader from "../components/CommonHeader";
import Image1 from "../assets/images/aboutus/image1.jpg";
import Group1 from "../assets/images/aboutus/Group1.jpg";
import Group2 from "../assets/images/aboutus/Group2.jpg";
import { BookUser, Heart, Plus, Smile, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <CommonHeader />
      <Box
        sx={{
          bgcolor: "#0e1416ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* //=========================================== */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, sm: 8, md: 10, lg: 15 },
            padding: { xs: 2, sm: 4, md: 3 },
            width: "100%",
            maxWidth: 1400,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 450 },
              maxWidth: 500,
            }}
          >
            <img
              src={Image1}
              alt="aboutus"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: 10,
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                width: { xs: "100%", sm: 400 },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3 },
                textAlign: { xs: "center", sm: "left" },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    fontSize: { xs: 22, sm: 26, md: 28, lg: 32 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  we provide healthy food for your family
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#acacaca1", fontSize: 14 }}>
                  Every plate tells a story of fresh ingredients, rich flavors,
                  and a passion for cooking. From the first bite to the last, we
                  aim to make your experience warm, memorable, and full of
                  taste. Whether you join us for a quick meal or a special
                  occasion, we're here to serve happiness on every plate.
                </Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    borderRadius: 1,
                    bgcolor: "#d68240",
                    padding: 1,
                    ":hover": { bgcolor: "#813800ff" },
                  }}
                  onClick={() => navigate("/contact-us")}
                >
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#fff",
                    }}
                  >
                    contact us
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* //=========================================== */}
        <Box
          sx={{
            width: "80%",
          }}
        >
          <img
            src={Group1}
            alt="aboutus"
            style={{
              objectFit: "contain",
              width: "100%",
              borderRadius: 10,
            }}
          />
        </Box>
        {/* //=========================================== */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 8 },
            px: { xs: 2, md: 4 },
            width: "100%",
            maxWidth: 1400,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 330 },
              textAlign: "center",
              display: "flex",
              gap: 2,
            }}
          >
            <Box>
              <BookUser size={38} color="#fff" />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  fontSize: 16,
                  textAlign: "justify",
                }}
              >
                multi cuisine
              </Typography>

              <Typography
                sx={{ color: "#acacac9f", fontSize: 14, textAlign: "justify" }}
              >
                In the new era of technology we look in the future with
                certainty life.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: 330 },
              textAlign: "center",
              display: "flex",
              gap: 2,
            }}
          >
            <Box>
              <Smile size={38} color="#fff" />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  fontSize: 16,
                  textAlign: "justify",
                }}
              >
                easy to order
              </Typography>

              <Typography
                sx={{ color: "#acacac9f", fontSize: 14, textAlign: "justify" }}
              >
                In the new era of technology we look in the future with
                certainty life.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: 330 },
              textAlign: "center",
              display: "flex",
              gap: 2,
            }}
          >
            <Box>
              <Timer size={38} color="#fff" />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  fontSize: 16,
                  textAlign: "justify",
                }}
              >
                fast delivery
              </Typography>

              <Typography
                sx={{ color: "#acacac9f", fontSize: 14, textAlign: "justify" }}
              >
                In the new era of technology we look in the future with
                certainty life.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* //=========================================== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: 20, sm: 24 },
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            Frequently asked question
          </Typography>
          <Box sx={{ width: { xs: "90%", md: 800 } }}>
            <Typography
              sx={{ color: "#acacac8e", textAlign: "center", fontSize: 14 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure
              deserunt dolore dolor minus reprehenderit rem soluta placeat
              aliquid natus.
            </Typography>
          </Box>
        </Box>
        {/* //=========================================== */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, sm: 5, lg: 8 },
            width: "100%",
            maxWidth: 1400,
            px: { xs: 2, sm: 4 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 500, lg: 550 },
            }}
          >
            <img
              src={Group2}
              alt="aboutus"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: 10,
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Accordion
              disableGutters
              sx={{
                bgcolor: "#1d2a2f",
                width: "100%",
                boxShadow: "none",
              }}
            >
              <AccordionSummary expandIcon={<Plus color="#11beceff" />} sx={{}}>
                <Typography sx={{ color: "#fff", fontSize: 14 }}>
                  Do you offer home delivery?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#182125ff", py: 1 }}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    color: "#fff",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  We deliver food at your door-step!
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Heart fill="#d68240" stroke="#d68240" size={10} />
                    <Typography sx={{ color: "#747473ff", fontSize: 12 }}>
                      2.9K
                    </Typography>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                bgcolor: "#1d2a2f",
                width: "100%",
                boxShadow: "none",
              }}
            >
              <AccordionSummary expandIcon={<Plus color="#11beceff" />} sx={{}}>
                <Typography sx={{ color: "#fff", fontSize: 14 }}>
                  Can I book a table online?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#182125ff", py: 1 }}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    color: "#fff",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  Of Course! Just click the Reserve table button.
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Heart fill="#d68240" stroke="#d68240" size={10} />
                    <Typography sx={{ color: "#747473ff", fontSize: 12 }}>
                      3.2K
                    </Typography>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                bgcolor: "#1d2a2f",
                width: "100%",
                boxShadow: "none",
              }}
            >
              <AccordionSummary expandIcon={<Plus color="#11beceff" />} sx={{}}>
                <Typography sx={{ color: "#fff", fontSize: 14 }}>
                  Do you have vegetarian and vegan option?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#182125ff", py: 1 }}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    color: "#fff",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  Absolutely! We do have all the varity.
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Heart fill="#d68240" stroke="#d68240" size={10} />
                    <Typography sx={{ color: "#747473ff", fontSize: 12 }}>
                      4.2K
                    </Typography>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                bgcolor: "#1d2a2f",
                width: "100%",
                boxShadow: "none",
              }}
            >
              <AccordionSummary expandIcon={<Plus color="#11beceff" />} sx={{}}>
                <Typography sx={{ color: "#fff", fontSize: 14 }}>
                  What are your opening hours?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#182125ff", py: 1 }}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    color: "#fff",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  Sharp 9 O'clock in the morning 365 Days!
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Heart fill="#d68240" stroke="#d68240" size={10} />
                    <Typography sx={{ color: "#747473ff", fontSize: 12 }}>
                      8.2K
                    </Typography>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        {/* //=========================================== */}
      </Box>
    </Box>
  );
};

export default AboutUs;
