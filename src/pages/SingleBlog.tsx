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
        height: 350,
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
          variant="h2"
          sx={{ color: "#fff", fontSize: 36, fontWeight: 600 }}
        >
          Home/
          <span style={{ color: "#d68240" }}>SingleBlog</span>
        </Typography>
        <Box sx={{ width: "60%" }}>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff70", textAlign: "center" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis
            itaque architecto aperiam! Recusandae excepturi enim aliquam
            corporis odit maxime asperiores sequi qui quisquam amet?
          </Typography>
        </Box>
      </Box>
    </Box>
      <Box>
        <SingleBlogDetail/>
      </Box>
    </Box>
  );
};

export default SingleBlog;
