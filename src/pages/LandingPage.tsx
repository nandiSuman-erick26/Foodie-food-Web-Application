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
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* #banner section */}
      <Box
        sx={{
          minHeight: { xs: 520, sm: 620, md: 720, lg: 900 },
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
          gap: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 4, md: 0 },
          textAlign: "center",
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
                  fontSize: { xs: 12, sm: 14, md: 16 },
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
                fontSize: { xs: 12, sm: 14, md: 16 },
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
              fontSize: { xs: 26, sm: 36, md: 48, lg: 64 },
              textAlign: "center",
              textTransform: "uppercase",
              color: "#ffffffd2",
              lineHeight: { xs: "32px", sm: "44px", md: "60px", lg: "74px" },
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
            gap: { xs: 1.5, sm: 2 },
            flexWrap: "wrap",
            mt: { xs: 2, sm: 3 },
            width: "100%",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              border: "1px solid #fff",
              py: { xs: 0.8, sm: 1 },
              px: { xs: 2, sm: 3 },
              borderRadius: 2,
              fontSize: { xs: 10, sm: 13 },
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
              fontSize: { xs: 10, sm: 13 },
              py: { xs: 0.8, sm: 1 },
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
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: { xs: 8, md: 12 },
          py: { xs: 6, md: 10 },
          px: { xs: 4, sm: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "space-between", xs: "center" },
            alignItems: "center",
            gap: { xs: 4, md: 10 },
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            // maxWidth: 1200,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 400 },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
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
                  mt: 1,
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: { xs: 20, sm: 24, md: 28 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                we invite you to visit our coffee house
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#acacacff",
                  fontSize: { xs: 13, md: 14 },
                  textAlign: { xs: "center", md: "left" },
                  lineHeight: 1.6,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quam numquam beatae a inventore. Eligendi suscipit debitis error
                incidunt sint ipsum nobis molestias fuga quod et itaque, at
                porro rem!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
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
                  }}
                >
                  read more
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "90%", sm: "80%", md: 450 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: 10,
                boxShadow: "0 8px 18px #070707ff",
                overflow: "hidden",
              }}
            >
              <img
                src={aboutus}
                alt="aboutus"
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  height: "100%",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
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
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: { xs: 22, md: 28 },
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                Why people choose us?
              </Typography>
              <Box sx={{ width: "100%", maxWidth: 800, px: { xs: 2, md: 0 } }}>
                <Typography
                  sx={{
                    color: "#acacacff",
                    textAlign: "center",
                    fontSize: { xs: 13, md: 14 },
                    lineHeight: 1.6,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iure deserunt dolore dolor minus reprehenderit rem soluta
                  placeat aliquid natus.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: { xs: 3, md: 8 },
              flexWrap: "wrap",
              width: "100%",
              maxWidth: 1200,
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: 330 }, textAlign: "center" }}>
              <Box>
                <Utensils size={28} color="#fff" />
              </Box>
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
              <Typography sx={{ color: "#acacacff" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                provident ipsum perspiciatis consequuntur laboriosam est nostrum
                eos beatae.
              </Typography>
            </Box>

            <Box sx={{ width: { xs: "100%", sm: 330 }, textAlign: "center" }}>
              <Box>
                <Bean size={28} color="#fff" />
              </Box>
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
              <Typography sx={{ color: "#acacacff" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                provident ipsum perspiciatis consequuntur laboriosam est nostrum
                eos beatae.
              </Typography>
            </Box>

            <Box sx={{ width: { xs: "100%", sm: 330 }, textAlign: "center" }}>
              <Box>
                <ChefHat size={28} color="#fff" />
              </Box>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                experienced barista
              </Typography>
              <Typography sx={{ color: "#acacacff" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                provident ipsum perspiciatis consequuntur laboriosam est nostrum
                eos beatae.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#121a1d",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: { xs: 8, md: 15 },
          py: { xs: 6, md: 10 },
          px: { xs: 4, md: 4, lg: 0 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1200 }}>
          <Box
            sx={{
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
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
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
                }}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: { xs: 22, md: 28 },
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Explore our foods
            </Typography>
            <Box sx={{ width: "100%", maxWidth: 800, px: { xs: 2, md: 0 } }}>
              <Typography
                sx={{
                  color: "#acacacff",
                  textAlign: "center",
                  fontSize: { xs: 13, md: 14 },
                  lineHeight: 1.6,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                iure deserunt dolore dolor minus reprehenderit rem soluta
                placeat aliquid natus.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, sm: 4, md: 5 },
            width: "100%",
            maxWidth: 1200,
            px: { xs: 2, sm: 4 },
          }}
        >
          {menu?.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              <FoodCard item={item} addProductToCart={handleProductAdd} />
            </Box>
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
          minHeight: { xs: 420, md: 650 },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: { xs: 4, md: 0 },
          px: { xs: 2, md: 4, lg: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1000,
            px: { xs: 2 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 2 },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 1,
              flexDirection: "column",
              width: { xs: "100%", md: "55%" },
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
                  mt: 1,
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: { xs: 22, md: 32 },
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
              width: { xs: "100%", md: 300 },
              height: { xs: "auto", md: 290 },
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 4,
              py: { xs: 3, md: 0 },
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
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 8,
          py: { xs: 6, md: 10 },
          px: { xs: 2 },
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
            mt: 2,
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
                mx: "auto",
                mt: 1,
              }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: 22, md: 28 },
              textAlign: "center",
            }}
          >
            Meet our expert chef
          </Typography>
          <Box sx={{ width: "100%", maxWidth: 800 }}>
            <Typography
              sx={{
                color: "#acacacff",
                textAlign: "center",
                px: { xs: 2, md: 0 },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure
              deserunt dolore dolor minus reprehenderit rem soluta placeat
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
            flexWrap: "wrap",
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {chef?.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                width: { xs: "100%", sm: "48%", md: "23%" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ChefCard item={item} />
            </Box>
          ))}
        </Box>

        {/* testimonials */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 4,
            width: "100%",
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
                  mx: "auto",
                  mt: 1,
                }}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: { xs: 22, md: 28 },
                textAlign: "center",
              }}
            >
              What our clients say about us?
            </Typography>
            <Box sx={{ width: "100%", maxWidth: 800, px: { xs: 1, md: 0 } }}>
              <Typography
                sx={{
                  color: "#acacacff",
                  textAlign: "center",
                  fontSize: { xs: 13, md: 14 },
                  lineHeight: 1.6,
                }}
              >
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
              alignItems: "flex-start",
              gap: 2,
              flexWrap: "wrap",
              width: "100%",
              px: { xs: 2, md: 0 },
            }}
          >
            {testimonials?.map((item, idx) => {
              const color = colors[idx % colors.length];
              return (
                <Box
                  key={idx}
                  sx={{
                    width: { xs: "100%", sm: "48%", md: 300 },
                    height: { xs: "auto", minHeight: 250 },
                    mb: { xs: 2, sm: 0 },
                  }}
                >
                  <Box
                    sx={{
                      height: "auto",
                      minHeight: 120,
                      bgcolor: "#192529ff",
                      pt: 3,
                      pl: 2,
                      pb: { xs: 8, md: 6 },
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
                          sx={{ width: 38, height: 38 }}
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

        <Box
          sx={{
            borderTop: "1px dashed #ffffff2d",
            width: "100%",
            maxWidth: 1000,
            mt: { xs: 4, md: -2 },
            px: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              minHeight: 100,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: { xs: 3, md: 2 },
              py: { xs: 4, md: 0 },
            }}
          >
            {[
              { nbr: "1287", des: "Visitors Daily" },
              { nbr: "578", des: "deliveries monthly" },
              { nbr: "1440", des: "positive feedback" },
              { nbr: "40", des: "awards and honors" },
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
                    minWidth: 120,
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          Height: { xs: 380, sm: 500 },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          py: { xs: 4, md:1 },
          position: "relative",
          px: { xs: 2 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: 1400,
            mx: "auto",
            gap: { xs: 6, md: 10, lg: 20 },
            px: { xs: 2, md: 5 },
          }}
        >
          {/* android and ios availability */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: { xs: "center", md: "flex-start" },
              zIndex: 10,
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: 300, md: 450 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  textTransform: "capitalize",
                  fontSize: { xs: 24, md: 48, lg: 58 },
                  lineHeight: 1.1,
                  fontFamily: "inherit",
                }}
              >
                Simple Way To <br /> Order Your Food
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                sx={{
                  bgcolor: "#fff",
                  height: 55,
                  minWidth: 180,
                  px: 2,
                  "&:hover": { bgcolor: "#f0f0f0" },
                  borderRadius: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <svg width="0" height="0">
                    <linearGradient
                      id="google-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="2%" stopColor="#4285F4" />
                      <stop offset="35%" stopColor="#EA4335" />
                      <stop offset="62%" stopColor="#FBBC05" />
                      <stop offset="100%" stopColor="#34A853" />
                    </linearGradient>
                  </svg>
                  <Play
                    size={30}
                    style={{ fill: "url(#google-gradient)", stroke: "none" }}
                  />
                  <Box sx={{ textAlign: "left", lineHeight: 1.1 }}>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: 10,
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Get it on
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: 17,
                        fontWeight: 900,
                        textTransform: "capitalize",
                      }}
                    >
                      Google Play
                    </Typography>
                  </Box>
                </Box>
              </Button>

              <Button
                sx={{
                  bgcolor: "#fff",
                  height: 55,
                  minWidth: 180,
                  px: 2,
                  "&:hover": { bgcolor: "#f0f0f0" },
                  borderRadius: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AppleIcon fill="#000" color="#000" size={30} />
                  <Box sx={{ textAlign: "left", lineHeight: 1.1 }}>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: 10,
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Get it on
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontSize: 17,
                        fontWeight: 900,
                        textTransform: "capitalize",
                      }}
                    >
                      Apple Store
                    </Typography>
                  </Box>
                </Box>
              </Button>
            </Box>
          </Box>

          {/* decorative cards */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: 580,
              height: 600,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 2,
              }}
            >
              <FoodOrderCard width={260} height={520} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: 280,
                top: 50,
                zIndex: 1,
              }}
            >
              <BurgerCard width={260} height={520} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* newsletter */}
      <Box
        sx={{
          bgcolor: "#121a1d",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 6, md: 8 },
          px: { xs: 2 },
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
            width: { xs: "100%", md: "70%" },
            height: { xs: "auto", md: 420 },
            borderRadius: 5,
            p: { xs: 3, md: 6 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
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
                  mt: 1,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: { xs: 22, md: 28 },
                  textTransform: "capitalize",
                  textAlign: "center",
                }}
              >
                Subscribe our newsletter
              </Typography>
              <Box sx={{ width: "100%", maxWidth: 600, px: { xs: 2, md: 0 } }}>
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
                width: "100%",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: 640 } }}>
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
                      "& fieldset": { border: "none" },
                      "&:hover fieldset": { border: "none" },
                      "&.Mui-focused fieldset": { border: "none" },
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
                    py: 1,
                    px: 2,
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
