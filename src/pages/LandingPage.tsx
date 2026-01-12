// import React from 'react'
import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import homeTop from "../assets/images/Home/homePageTop.png";
import aboutus from "../assets/images/Home/aboutUs.jpg";
import advertisement from "../assets/images/advertisement/advertisementSection.png";
import {
  AppleIcon,
  Bean,
  ChefHat,
  Play,
  Quote,
  Star,
  Utensils,
} from "lucide-react";
import food1 from "../assets/images/menu/food1.png";
import food2 from "../assets/images/menu/food2.jpg";
import food3 from "../assets/images/menu/food3.png";
import contact from "../assets/images/contact/contact1.jpg";
import masumRana from "../assets/images/chef/chef-masum-rana.jpg";
import manishaAgarwal from "../assets/images/chef/chef-manisha-agarwal.jpg";
import muhibburRashid from "../assets/images/chef/chef-muhibbur-rashid.jpg";
import rashidKabir from "../assets/images/chef/chef-rashid-kabir.jpg";
import jeromeBeli from "../assets/images/testimonials/jeromeBeli.png";
import jacobJones from "../assets/images/testimonials/jacobJones.png";
import floydMiles from "../assets/images/testimonials/floydMiles.png";
import FoodOrderCard from "../components/FoodOrderCard";
import BurgerCard from "../components/TestimonialCard";
import newstellers from "../assets/images/newstellers/newsteller.png";
import FoodCard from "../components/FoodCard";
import ChefCard from "../components/ChefCard";
import { useNavigate } from "react-router-dom";
import { memo, useContext } from "react";
import { AuthContext } from "../hooks/context/auth/Auth.create";
import { toast } from "sonner";

const menu = [
  {
    name: "fried chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum architecto quia aut laborum asperiores, officia dolores voluptates illum facilis dolor",
    price: 250,
    image: food1,
  },
  {
    name: "kolkata style roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum architecto quia aut laborum asperiores, officia dolores voluptates illum facilis dolor",
    price: 99,
    image: food2,
  },
  {
    name: "chiken burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum architecto quia aut laborum asperiores, officia dolores voluptates illum facilis dolor",
    price: 175,
    image: food3,
  },
];
const chef = [
  {
    name: "masum rana",
    designation: "master chef",
    image: masumRana,
  },
  {
    name: "manisha agarwal",
    designation: "senior chef",
    image: manishaAgarwal,
  },
  {
    name: "muhibbur rashid",
    designation: "master chef",
    image: muhibburRashid,
  },
  {
    name: "rashid kabir",
    designation: "master chef",
    image: rashidKabir,
  },
];
const colors = ["#FFB632", "#F855CA", "#EF7C6A"];
// const plusColor = "#ffb632"
const testimonials = [
  {
    name: "jerome bell",
    review:
      "Absolutely loved the design. The team was incredibly responsive and delivered beyond our expectations.",
    avater: jeromeBeli,
    location: "New York, USA",
    rating: 5,
  },
  {
    name: "jacob jones",
    review:
      "Absolutely loved the design. The team was incredibly responsive and delivered beyond our expectations.",
    avater: jacobJones,
    location: "London, UK",
    rating: 4,
  },
  {
    name: "floyd miles",
    review:
      "Absolutely loved the design. The team was incredibly responsive and delivered beyond our expectations.",
    avater: floydMiles,
    location: "New York, USA",
    rating: 3,
  },
];
const Home = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { authState } = context;
  console.log("............[landing]", authState);
  const navigate = useNavigate();

  const handleProductAdd = async () => {
    console.log("button CLICKED");
    if (authState?.isAuthenticate) {
      navigate("/our-menu");
    } else {
      toast.warning("please login to access this feature!");
    }
  };
  return (
    <Box>
      {/* #banner section */}
      <Box
        sx={{
          height: 900,
          width: "100%",
          bgcolor: "#121a1d93",
          backgroundImage: `url(${homeTop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {authState?.isAuthenticate ? (
            authState?.user?.map((u: any) => (
              <Typography
                key={u}
                variant="body2"
                sx={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                hello, {u.fullname}
              </Typography>
            ))
          ) : (
            <Typography
              variant="body2"
              sx={{
                fontSize: 16,
                textAlign: "center",
                color: "#ffffff",
                textTransform: "uppercase",
              }}
            >
              hello, new friend
            </Typography>
          )}
        </Box>
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: 64,
              textAlign: "center",
              textTransform: "uppercase",
              color: "#ffffffd2",
              lineHeight: "74px",
              fontWeight: 600,
            }}
          >
            taste happiness in <br /> every bite
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              border: "1px solid #fff",
              py: 1,
              borderRadius: 2,
              ":hover": {
                bgcolor: "#ffffffff",
                color: "#000000ff",
                fontWeight: 550,
              },
            }}
            onClick={() => navigate("/our-menu")}
          >
            explore menu
          </Button>
          <Button
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              ":hover": { border: "1px solid #fff", color: "#fff" },
            }}
            onClick={() => navigate("/reservation")}
          >
            Reservation
          </Button>
        </Box>
      </Box>

      {/* about us section */}

      <Box
        sx={{
          bgcolor: "#121a1d",
          height: 900,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 35,
          }}
        >
          <Box
            sx={{
              width: 400,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                about us
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 2,
                  bgcolor: "#d68240",
                  borderRadius: 2,
                }}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: 28,
                }}
              >
                we invite you to visit our coffee house
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#acacacff" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quam numquam beatae a inventore. Eligendi suscipit debitis error
                incidunt sint ipsum nobis molestias fuga quod et itaque, at
                porro rem!
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  borderRadius: 1,
                  bgcolor: "#d68240",
                  padding: 1,
                  color: "#fff",
                  ":hover": { bgcolor: "transparent" },
                }}
                onClick={() => navigate("/about-us")}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: 11,
                    fontWeight: 500,
                    ":hover": { fontWeight: 600, color: "#d68240" },
                  }}
                >
                  read more
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: 450,
                borderRadius: 10,
                boxShadow: "0 8px 18px #070707ff",
              }}
            >
              <img
                src={aboutus}
                alt="aboutus"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  borderRadius: 10,
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* features section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 7,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                features
              </Typography>
              <Box
                sx={{
                  width: 65,
                  height: 2,
                  bgcolor: "#d68240",
                  borderRadius: 2,
                  position: "relative",
                  left: 10,
                  top: 2,
                }}
              ></Box>
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: 28,
              }}
            >
              Why people choose us?
            </Typography>
            <Box sx={{ width: 800 }}>
              <Typography sx={{ color: "#acacacff", textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                iure deserunt dolore dolor minus reprehenderit rem soluta
                placeat aliquid natus.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Box sx={{ width: 330, textAlign: "center" }}>
              <Box>
                <Utensils size={28} color="#fff" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  menu for every taste
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#acacacff" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor provident ipsum perspiciatis consequuntur laboriosam est
                  nostrum eos beatae.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: 330, textAlign: "center" }}>
              <Box>
                <Bean size={28} color="#fff" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  always quality beans
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#acacacff" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor provident ipsum perspiciatis consequuntur laboriosam est
                  nostrum eos beatae.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: 330, textAlign: "center" }}>
              <Box>
                <ChefHat size={28} color="#fff" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  expeirenced barista
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#acacacff" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor provident ipsum perspiciatis consequuntur laboriosam est
                  nostrum eos beatae.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* menu section */}
      <Box
        sx={{
          bgcolor: "#121a1d",
          height: 950,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  popular menu
                </Typography>
                <Box
                  sx={{
                    width: 70,
                    height: 2,
                    bgcolor: "#d68240",
                    borderRadius: 2,
                    position: "relative",
                    left: 30,
                    top: 2,
                  }}
                ></Box>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 28,
                  textTransform: "capitalize",
                }}
              >
                Explore our foods
              </Typography>
              <Box sx={{ width: 800 }}>
                <Typography sx={{ color: "#acacacff", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iure deserunt dolore dolor minus reprehenderit rem soluta
                  placeat aliquid natus.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          {menu?.map((item, idx) => (
            <FoodCard
              key={idx}
              item={item}
              addProductToCart={handleProductAdd}
            />
          ))}
        </Box>
      </Box>
      {/* contact us section */}
      <Box
        sx={{
          bgcolor: "#121a1d93",
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          height: 650,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // gap: 15,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",

            width: "60%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 1,
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography
                sx={{ color: "#fff", textTransform: "uppercase", fontSize: 14 }}
              >
                contact us
              </Typography>
              <Box
                sx={{
                  width: 70,
                  height: 2,
                  bgcolor: "#d68240",
                  borderRadius: 2,
                  position: "relative",
                  left: 0,
                  top: 2,
                }}
              ></Box>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: 32,
                  fontWeight: 600,
                  py: 2,
                }}
              >
                working hours
              </Typography>
              <Button
                sx={{
                  borderRadius: 1,
                  bgcolor: "#d68240",
                  ":hover": { bgcolor: "#743a0eff" },
                }}
                onClick={() => navigate("/contact-us")}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontSize: 10,
                  }}
                >
                  contact us
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "#121a1d",
              width: 300,
              height: 290,
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 7,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Monday to Friday
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                09.00AM - 10.00PM
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Saturday to Sunday
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                09.00AM - 07.00PM
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* chef & testimonials section */}
      <Box
        sx={{
          bgcolor: "#121a1d",
          // height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* chef */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            mt: 10,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              our chef
            </Typography>
            <Box
              sx={{
                width: 50,
                height: 2,
                bgcolor: "#d68240",
                borderRadius: 2,
                position: "relative",
                left: 20,
                top: 2,
              }}
            ></Box>
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: 28,
              // textTransform: "capitalize",
            }}
          >
            Meet our expert chef
          </Typography>
          <Box sx={{ width: 800 }}>
            <Typography sx={{ color: "#acacacff", textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure
              deserunt dolore dolor minus reprehenderit rem soluta placeat
              aliquid natus dolore dolor minus reprehenderit rem soluta placeat
              aliquid natus.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          {chef?.map((item, idx) => (
            <ChefCard key={idx} item={item} />
          ))}
        </Box>
        {/* {testimonials} */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                testimonials
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 2,
                  bgcolor: "#d68240",
                  borderRadius: 2,
                  position: "relative",
                  left: 20,
                  top: 2,
                }}
              ></Box>
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: 28,
                // textTransform: "capitalize",
              }}
            >
              What our clients say about us?
            </Typography>
            <Box sx={{ width: 800 }}>
              <Typography sx={{ color: "#acacacff", textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                iure deserunt dolore dolor minus reprehenderit rem soluta
                placeat aliquid natus dolore dolor minus reprehenderit rem
                soluta placeat aliquid natus.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#121a1d",
              gap: 2,
            }}
          >
            {testimonials?.map((item, idx) => {
              const color = colors[idx % colors.length];
              return (
                <Box key={idx} sx={{ width: 300, height: 250 }}>
                  <Box
                    sx={{
                      height: 120,
                      // border: "1px solid #fff",
                      bgcolor: "#192529ff",
                      pt: 3,
                      pl: 2,
                      pb: 6,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      position: "relative",
                    }}
                  >
                    <Box sx={{ position: "absolute", top: 10, left: 20 }}>
                      <Quote
                        size={18}
                        color={color}
                        fill={color}
                        style={{ rotate: "180deg" }}
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#fff", fontSize: 12, p: 1 }}>
                        {item?.review}
                      </Typography>
                    </Box>
                    <Box sx={{ p: 1 }}>
                      <Stack direction="row" spacing={0.5} sx={{ mt: "auto" }}>
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            size={16}
                            color={idx < item.rating ? color : "#4b5563"}
                            fill={idx < item.rating ? color : "#4b5563"}
                          />
                        ))}
                      </Stack>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          bgcolor: "#121a1d",
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderTopRightRadius: 20,
                          zIndex: 10,
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                          padding: 1,
                          boxShadow: "3px 0 1px #141414ff",
                        }}
                      >
                        <Avatar
                          src={item.avater}
                          alt={item.name}
                          sx={{
                            width: 38,
                            height: 38,
                            // border: "1px solid #fff",
                          }}
                        />
                        <Box sx={{ px: 3 }}>
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: 12,
                              textTransform: "capitalize",
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography sx={{ color: "#fff", fontSize: 12 }}>
                            {item.location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ borderTop: "1px dashed #ffffff2d", width: "80%", mt: -8 }}>
          <Box
            sx={{
              height: 100,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {[
              {
                nbr: "1287",
                des: "Visitors Daily",
              },
              {
                nbr: "578",
                des: "deliveries monthly",
              },
              {
                nbr: "1440",
                des: "positive feedback",
              },
              {
                nbr: "40",
                des: "awards and honors",
              },
            ].map((item, idx) => {
              const showPlus = idx % 2 === 0 ? "#ffb632" : "#ffffff";
              return (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{ color: "#fff", fontWeight: 900, fontSize: 20 }}
                  >
                    {item?.nbr}
                    <span style={{ color: showPlus }}>+</span>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 12,
                      textTransform: "uppercase",
                    }}
                  >
                    {item?.des}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      {/* advertisement */}
      <Box
        sx={{
          bgcolor: "#121a1d",
          backgroundImage: `url(${advertisement})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          // backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // gap: 15,
        }}
      >
        {/* {android and ios avalability} */}
        <Box
          sx={{
            width: 470,
            position: "absolute",
            left: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: 270 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: 33,
                }}
              >
                simple way to order your food
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Button sx={{ bgcolor: "#fff", height: 40, width: 150 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {/* 1. Define the Gradient */}
                    <svg width="0" height="0">
                      <linearGradient
                        id="google-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="2%" stopColor="#4285F4" /> {/* Blue */}
                        <stop offset="35%" stopColor="#EA4335" /> {/* Red */}
                        <stop offset="62%" stopColor="#FBBC05" /> {/* Yellow */}
                        <stop offset="100%" stopColor="#34A853" /> {/* Green */}
                      </linearGradient>
                    </svg>

                    {/* 2. Use the Gradient ID in the Icon */}
                    <Play
                      size={28}
                      style={{ fill: "url(#google-gradient)", stroke: "none" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ color: "#000", fontSize: 10 }}>
                      Get it on
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: 14,
                        fontWeight: 800,
                        textTransform: "capitalize",
                      }}
                    >
                      google play
                    </Typography>
                  </Box>
                </Box>
              </Button>
              <Button sx={{ bgcolor: "#fff", height: 40, width: 150 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <AppleIcon fill="#000" color="#000" />
                    <Box
                      sx={{
                        bgcolor: "#ffffffff",
                        borderRadius: 99,
                        height: 10,
                        width: 10,
                        position: "relative",
                        right: 8,
                        bottom: -8,
                      }}
                    ></Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ color: "#000", fontSize: 10 }}>
                      Get it on
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: 14,
                        fontWeight: 800,
                        textTransform: "capitalize",
                      }}
                    >
                      apple store
                    </Typography>
                  </Box>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ position: "relative", top: -10, right: -280 }}>
            <FoodOrderCard width={250} height={500} />
          </Box>
          <Box sx={{ position: "relative", top: 25, right: -300 }}>
            <BurgerCard width={250} height={500} />
          </Box>
        </Box>
      </Box>
      {/* newsteller */}
      <Box
        sx={{
          bgcolor: "#121a1d",
          height: 550,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // gap: 15,
        }}
      >
        <Box
          sx={{
            bgcolor: "#121a1d6e",
            backgroundImage: `url(${newstellers})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "70%",
            height: 420,
            borderRadius: 5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Newsletter
                </Typography>
                <Box
                  sx={{
                    width: 70,
                    height: 2,
                    bgcolor: "#d68240",
                    borderRadius: 2,
                    position: "relative",
                    left: 20,
                    top: 2,
                  }}
                ></Box>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 28,
                  textTransform: "capitalize",
                }}
              >
                Subscribe our newsletter
              </Typography>
              <Box sx={{ width: 600 }}>
                <Typography sx={{ color: "#acacacff", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iure deserunt dolore dolor em soluta placeat aliquid natus.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ width: 640 }}>
                <TextField
                  fullWidth
                  placeholder="Type Your Email Id"
                  size="small"
                  sx={{
                    bgcolor: "#1a3a3aff",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      borderRadius: "8px",
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#c5cfcfff",
                    },
                  }}
                />
              </Box>
              <Box>
                <Button
                  sx={{
                    bgcolor: "#d68240",
                    ":hover": { bgcolor: "#01681bff" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: 12,
                      textTransform: "uppercase",
                    }}
                  >
                    subscribe
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Home);
