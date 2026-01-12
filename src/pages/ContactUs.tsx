// import React from 'react'

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CommonHeader from "../components/CommonHeader";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; //important for rendering
import {
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Pen,
  Twitter,
  User,
} from "lucide-react";
import { toast } from "sonner";
import type React from "react";

const ContactUs = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your time! Our team will contact you soon.");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
            mt: 7,
          }}
        >
          {/* //======================= get in touch  ================================= */}
          <Box sx={{ width: 380 }} component="form" onSubmit={onSubmit}>
            <Box sx={{ p: 1, mb: 3 }}>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: 24,
                }}
              >
                Get in touch
              </Typography>
              <Typography
                sx={{
                  color: "#505050d8",

                  fontSize: 14,
                }}
              >
                Note: Your email address will not be published
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
                  Your Name:
                </Typography>
                <TextField
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <User size={16} fill="#d68240" stroke="#d68240" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  variant="outlined"
                  fullWidth
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      backgroundColor: "#102a29ff",
                      color: "#fff",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
                  Email:
                </Typography>
                <TextField
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail size={16} color="#d68240" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  variant="outlined"
                  fullWidth
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      backgroundColor: "#102a29ff",
                      color: "#fff",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
                Subject:
              </Typography>
              <TextField
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <FileText size={16} color="#d68240" stroke="#d68240" />
                      </InputAdornment>
                    ),
                  },
                }}
                variant="outlined"
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    backgroundColor: "#102a29ff",
                    color: "#fff",
                  },
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
                Message:
              </Typography>
              <TextField
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Pen size={16} fill="#d68240" stroke="#d68240" />
                      </InputAdornment>
                    ),
                  },
                }}
                variant="outlined"
                fullWidth
                size="small"
                multiline
                rows={6}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    backgroundColor: "#102a29ff",
                    color: "#fff",
                  },
                }}
              />
            </Box>
            <Button
              sx={{ width: 140, bgcolor: "#d68240", p: 1, mt: 2 }}
              type="submit"
            >
              <Typography sx={{ color: "#fff", fontSize: 12 }}>
                send message
              </Typography>
            </Button>
          </Box>
          {/* //============================== address  ================================= */}
          <Box
            sx={{
              width: 380,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              padding: 2,
              bgcolor: "#151f23ff",
              borderRadius: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                address:
              </Typography>
              <Typography
                sx={{
                  color: "#646363ff",
                  textTransform: "capitalize",
                  fontSize: 13,
                  p: 1,
                }}
              >
                543 Country Club Ave, NC 27587, London, UK +12576541120
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                contact:
              </Typography>
              <Typography
                sx={{
                  color: "#646363ff",
                  textTransform: "capitalize",
                  fontSize: 14,
                  p: 1,
                }}
              >
                Phone: +917029112661
              </Typography>
              <Typography
                sx={{
                  color: "#646363ff",
                  textTransform: "",
                  fontSize: 14,
                  p: 1,
                }}
              >
                Email: infofoodi@gmail.com
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                opening hours:
              </Typography>
              <Typography
                sx={{
                  color: "#646363ff",
                  textTransform: "capitalize",
                  fontSize: 14,
                  p: 1,
                }}
              >
                Monday - Friday: 9.00AM - 10.00PM
              </Typography>
              <Typography
                sx={{
                  color: "#646363ff",
                  textTransform: "capitalize",
                  fontSize: 14,
                  p: 1,
                }}
              >
                Saturdday - Sunday: 9.00AM - 07.00PM
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                stay connected:
              </Typography>
              <Box
                sx={{
                  width: 25,
                  textAlign: "center",
                  display: "flex",
                  gap: 1,
                  p: 1,
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
        {/* //================= MAP ================================ */}
        <Box sx={{ width: "80%", padding: 6 }}>
          <Box sx={{ width: "100%" }}>
            <MapContainer
              center={[22.5715, 88.4225]}
              zoom={17}
              style={{ height: 400, width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[22.5717, 88.4323]}>
                <Popup>
                  <MapPin fill="#ff0000ff" stroke="#fff" size={16} />
                  Kolkata
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
