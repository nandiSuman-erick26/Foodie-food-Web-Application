import { Box, Typography } from "@mui/material";
// import CommonHeader from "../components/CommonHeader";
import SingleBlogDetail from "../components/SingleBlogDetail";

const SingleBlog = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#111d22ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: 250, sm: 300, md: 350 },
          px: { xs: 2, sm: 3, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontSize: { xs: 24, sm: 30, md: 36 },
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Home/
            <span style={{ color: "#d68240" }}>SingleBlog</span>
          </Typography>
          <Box sx={{ width: { xs: "90%", sm: "80%", md: "60%" } }}>
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff70",
                textAlign: "center",
                fontSize: { xs: 12, sm: 14, md: 16 },
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              nobis itaque architecto aperiam! Recusandae excepturi enim aliquam
              corporis odit maxime asperiores sequi qui quisquam amet?
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <SingleBlogDetail />
      </Box>
    </Box>
  );
};

export default SingleBlog;
