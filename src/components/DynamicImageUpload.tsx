// import React from 'react'

import { Box, Button, Typography } from "@mui/material";
import { Image } from "lucide-react";

const DynamicImageUpload = ({
  name,
  setValue,
  imagePreview,
  setImagePreview,
}: any) => {
  // const [imagePreview, setImagePreview] = useState<string | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(name, file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        padding: 2,
        border: "1px dashed #1b1f1fff",
        bgcolor: "#0e181b63",
      }}
    >
      <Box
        sx={{
          width: 180,
          height: 140,
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          bgcolor: "#121a1d",
          boxShadow: "0 2px 4px #121a1d",
        }}
      >
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <Image size={60} color="#1e3b3dff" strokeWidth={1} />
        )}
      </Box>
      <Typography sx={{ color: "#868686ff", fontSize: 12, fontWeight: 600 }}>
        Click the button to upload image
      </Typography>
      <Button
        component="label"
        variant="outlined"
        size="small"
        sx={{
          bgcolor: "#11a1bac6",
          color: "#010e10c9",
          borderColor: "#0c3b4359",
          textTransform: "none",
          fontWeight: 600,
          "&:hover": {
            bgcolor: "#0a2f35c6",
            color: "#0bbfdedc",
          },
        }}
      >
        {imagePreview ? "Change Image" : "Upload Image"}
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>
    </Box>
  );
};

export default DynamicImageUpload;
