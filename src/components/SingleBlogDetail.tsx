import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { BlogContext } from "../hooks/context/blog/Blog.create";
import { DB } from "../lib/appwrite.config";
import { mapRowToBlog } from "../hooks/utils/blog.helper";
import Pageloading from "../components/Pageloading";
import {
  CalendarDays,
  Globe,
  Mail,
  MessagesSquare,
  Pen,
  User,
} from "lucide-react";
import comment01 from "../assets/images/blog/01.jpg";
import comment02 from "../assets/images/blog/02.jpg";
import comment03 from "../assets/images/blog/03.jpg";
import cat01 from "../assets/images/blog/04.jpg";
import recent01 from "../assets/images/blog/05.jpg";
import recent02 from "../assets/images/blog/06.jpg";
import recent03 from "../assets/images/blog/07.jpg";
import recent04 from "../assets/images/blog/08.jpg";
import hamburger from "../assets/images/blog/09.jpg";
import { toast } from "sonner";

const SingleBlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { blogState, findBlogbyId, blogDispatch } = context;
  console.log("BLOG STATE", blogState);

  const blogId = id ? findBlogbyId(id) : undefined;

  useEffect(() => {
    if (blogId || !id) {
      return;
    }

    const fetchSingleBlogById = async () => {
      const row = await DB.getRow(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "foodie_blog",
        id
      );

      const mapBlogRow = mapRowToBlog(row);
      console.log("single blog by id MAP_BLOG_ROW", mapBlogRow);

      blogDispatch({ type: "BLOG_ADD_SUCCESS", payload: mapBlogRow });
    };
    fetchSingleBlogById();
  }, [id, blogId]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your time!");
    setTimeout(() => {
      window.location.href = "/our-blogs";
    }, 2000);
  };

  if (!blogId) {
    return <Pageloading />;
  }
  return (
    <Box
      sx={{
        bgcolor: "#0e1518ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "row",
        gap: 20,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 7,
          gap: 5,
        }}
      >
        <Box
          sx={{
            width: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            mt: 7,
          }}
        >
          <Box
            sx={{
              width: 500,
            }}
          >
            <img
              src={blogId?.image}
              alt="aboutus"
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: 10,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              py: 2,
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
              }}
            >
              <User fill="#d68240" stroke="#d68240" size={14} />
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                admin
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CalendarDays size={14} stroke="#d68240" />
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: 14,
                }}
              >
                26 August 2025
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
              }}
            >
              <MessagesSquare size={14} fill="#d68240" stroke="#d68240" />
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: 14,
                }}
              >
                Comments
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              {blogId?.titel}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#808080",
                textTransform: "capitalize",
                fontSize: 12,
              }}
            >
              {blogId?.description}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#808080",
                textTransform: "capitalize",
                fontSize: 12,
              }}
            >
              Enthusiastically aggregate ethical systems for standardized
              mindshare. Energistically target resource maximizing leadership
              skills without backward-compatible action items. Credibly impact
              alternative expertise vis-à-vis economically sound results.
              Dynamically synergize empowered benefits through functional
              partnerships.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#808080",
                textTransform: "capitalize",
                fontSize: 12,
              }}
            >
              Assertively recapitalize interdependent alignments via backend
              leadership skills. Monotonectally formulate focused quality
              vectors whereas proactive infomediaries.
            </Typography>
          </Box>
          <Box sx={{ padding: 2, bgcolor: "#252a2cc0", borderRadius: 3 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#808080",
                textTransform: "capitalize",
                fontSize: 12,
              }}
            >
              Continually whiteboard enterprise-wide portals whereas world-class
              resources. Quickly brand team building services via functionalized
              users.......<span style={{ color: "#fff" }}>Sayan Halder</span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: 22,
            }}
          >
            comments(03)
          </Typography>
          <Box
            sx={{
              width: 500,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <img
              src={comment01}
              alt="aboutus"
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: 10,
              }}
            />
            <img
              src={comment02}
              alt="aboutus"
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: 10,
              }}
            />
            <img
              src={comment03}
              alt="aboutus"
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: 10,
              }}
            />
          </Box>

          <Box
            sx={{
              width: 450,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
            component="form"
            onSubmit={onSubmit}
          >
            <Box sx={{ p: 1 }}>
              <Typography
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: 24,
                }}
              >
                leave a comment
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
                Website:
              </Typography>
              <TextField
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Globe size={16} color="#d68240" stroke="#d68240" />
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
                Write your comment:
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
              sx={{ width: 140, bgcolor: "#d68240", p: 1, mt: 2, mb: 2 }}
              type="submit"
            >
              <Typography sx={{ color: "#fff", fontSize: 12 }}>
                Post Comment
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: 400,
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
          mt: 14,
          gap: 5,
        }}
      >
        <Box
          sx={{
            width: 280,
            border: "2px solid #d68240",
            borderRadius: 3,
            p: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: 20,
              mb: 1,
            }}
          >
            categories
          </Typography>
          <img
            src={cat01}
            alt="aboutus"
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: 10,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            recent posts
          </Typography>
          <Box
            sx={{
              width: 320,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <img
              src={recent01}
              alt="aboutus"
              style={{
                objectFit: "cover",
                width: "80%",
                borderRadius: 10,
              }}
            />
            <img
              src={recent02}
              alt="aboutus"
              style={{
                objectFit: "cover",
                width: "80%",
                borderRadius: 10,
              }}
            />
            <img
              src={recent03}
              alt="aboutus"
              style={{
                objectFit: "cover",
                width: "80%",
                borderRadius: 10,
              }}
            />
            <img
              src={recent04}
              alt="aboutus"
              style={{
                objectFit: "cover",
                width: "80%",
                borderRadius: 10,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            product tags
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, width: 300 }}>
            {[
              "Palak Paneer",
              "Pau Bhaji",
              "Dahi Bara",
              "Malay Kofta",
              "Dal Tadka",
              "Mix Veg",
              "Vara Pav",
              "Sikh Kabab",
              "Fuchka",
            ].map((i, idx) => (
              <Box
                key={idx}
                sx={{
                  p: 1,
                  border: "1px solid #187709c5",
                  color: "#b5faabff",
                  borderRadius: 2,
                  bgcolor: "#15700931",
                  textAlign: "center",
                  fontSize: 12,
                  ":hover": { bgcolor: "#15700969" },
                  cursor: "pointer",
                }}
              >
                {i}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: 360,
          }}
        >
          <img
            src={hamburger}
            alt="aboutus"
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: 10,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleBlogDetail;
