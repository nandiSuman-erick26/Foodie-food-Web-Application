import {
  Box,
  Typography,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import CommonHeader from "../components/CommonHeader";
import ReservationIMG from "../assets/images/reservation/reservation.jpg";
import { CalendarDays, Mail, Phone, Timer, User, Users } from "lucide-react";
import { toast } from "sonner";
// import React from 'react'

const Reservation = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Booking Done! You will get the notification by SMS!");
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  };
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
          padding:5
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "40%",
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
            Online Reservation
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff65", textAlign: "center" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quas
            natus suscipit similique atque aliquam ex! Accusantium vero eligendi
            placeat.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Box
            sx={{
              width: 400,
            }}
          >
            <img
              src={ReservationIMG}
              alt="aboutus"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: 10,
              }}
            />
          </Box>
          <Box
            sx={{ width: 380 }}
            component="form"
            onSubmit={onSubmit}
          >
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

            <Box>
              <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
                Phone Number:
              </Typography>
              <TextField
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone size={16} color="#d68240" stroke="#d68240" />
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
                Persons:
              </Typography>
              <TextField
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Users size={16} fill="#d68240" stroke="#d68240" />
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
             <Box sx={{ display: "flex", gap: 2 }}>
                          <Box>
                            <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
                              Date:
                            </Typography>
                            <TextField
                              slotProps={{
                                input: {
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <CalendarDays size={16} color="#d68240" />
                                    </InputAdornment>
                                  ),
                                },
                              }}
                              variant="outlined"
                              fullWidth
                              size="small"
                              type="date"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 3,
                                  backgroundColor: "#102a29ff",
                                  color: "#888888ff",
                                },
                              }}
                            />
                          </Box>
                          <Box>
                            <Typography sx={{ color: "#fff", fontWeight: 600, p: 1 }}>
                              Time:
                            </Typography>
                            <TextField
                              slotProps={{
                                input: {
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Timer size={16} color="#d68240" />
                                    </InputAdornment>
                                  ),
                                },
                              }}
                              variant="outlined"
                              fullWidth
                              size="small"
                              type="time"
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 3,
                                  backgroundColor: "#102a29ff",
                                  color: "#888888ff",
                                },
                              }}
                            />
                          </Box>
                        </Box>
            <Button
              sx={{ width: 140, bgcolor: "#d68240", p: 1, mt: 2 }}
              type="submit"
            >
              <Typography sx={{ color: "#fff", fontSize: 12 }}>
               Book A Table
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reservation;
