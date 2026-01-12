import { Box, Typography, Button } from "@mui/material";
import type { BlogCardProps } from "../typescript/interface/component.interface";
import type React from "react";
import { MessagesSquare, CalendarDays, User } from "lucide-react";

const BlogCard: React.FC<BlogCardProps> = ({ item, onClick }) => {
  return (
    <Box
      sx={{
        bgcolor: "#0808088e",
        p: { xs: 1.5, sm: 2 },
        borderRadius: 2,
        boxShadow: "0 4px 8px #000000ff",
        height: { xs: 340, sm: 350, md: 360 },
        width: "100%",
        maxWidth: 290,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "40%",
          width: "100%",
        }}
      >
        <img
          src={item?.image}
          alt="aboutus"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: 10,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 1.5, sm: 2 },
          flexWrap: "wrap",
          gap: { xs: 0.5, sm: 0 },
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
          <User fill="#d68240" stroke="#d68240" size={12} />
          <Typography
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: { xs: 11, sm: 12 },
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
          <CalendarDays size={12} stroke="#d68240" />
          <Typography
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              fontSize: { xs: 10, sm: 11 },
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
          <MessagesSquare size={12} fill="#d68240" stroke="#d68240" />
          <Typography
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              fontSize: { xs: 10, sm: 11 },
            }}
          >
            Comments
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: { xs: 18, sm: 20 },
          }}
        >
          {item?.titel}
        </Typography>
        <Typography
          sx={{
            py: { xs: 1.5, sm: 2 },
            color: "#acacac94",
            fontSize: { xs: 11, sm: 12 },
          }}
        >
          {item?.description}
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{
            bgcolor: "#0808088e",
            color: "#fff",
            ":hover": { color: "#d68240" },
          }}
          onClick={() => onClick?.(item.id)}
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
};

export default BlogCard;
