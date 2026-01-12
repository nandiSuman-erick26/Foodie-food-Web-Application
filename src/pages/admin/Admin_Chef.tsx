import { yupResolver } from "@hookform/resolvers/yup";
// import React from 'react'
import { useForm, type SubmitHandler } from "react-hook-form";
import { chefSchema } from "../../services/validation/admin.chef.validation";
import type { ChefSchema } from "../../typescript/interface/admin.interface";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import DynamicInput from "../../components/DynamicInput";
import DynamicImageUpload from "../../components/DynamicImageUpload";
import { ChefContext } from "../../hooks/context/chef/Chef.create";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { Notebook, Pen, Trash2 } from "lucide-react";
// import { DB } from "../../lib/appwrite.config";

const Admin_Chef = () => {
  const context = useContext(ChefContext);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { chefState, registerChef } = context;
  console.log(chefState);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ChefSchema>({
    resolver: yupResolver(chefSchema),
    defaultValues: {
      chef_name: "",
      chef_designation: "",
      chef_image: null,
    },
  });

  const onsubmit: SubmitHandler<ChefSchema> = (data: ChefSchema) => {
    console.log(data);
    registerChef(data);
    if (chefState?.error) {
      toast.error(chefState?.error);
    }
    // setValue("chef_image", null)
    setImagePreview(null);
    reset();
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <Box sx={{ width: "50%", maxHeight: "100vh" }}>
        <Typography
          sx={{
            textAlign: "start",
            color: "#010e10c9",
            fontSize: 22,
            fontWeight: 600,
            textTransform: "uppercase",
            display: "flex",
            gap: 1,
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Notebook />
          </span>
          Chef list
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "75vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": { width: "5px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "transparent",
              borderRadius: "10px",
            },
            bgcolor: "#121a1d",
            padding: 3,
            borderRadius: 5,
          }}
        >
          {chefState?.chef?.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: "row",
                borderRadius: 5,
                gap: 2,
                padding: 1,
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#07313139",
                boxShadow: "0 1px 4px #174b4b95",
                ":hover": { border: "1px solid #0f6161c6" },
              }}
            >
              <Box>
                <Avatar src={item?.chef_image} sx={{ height: 60, width: 60 }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 16,
                    textTransform: "capitalize",
                  }}
                >
                  {item?.chef_name}
                </Typography>
                <Typography
                  sx={{
                    color: "#0eac3eff",

                    fontSize: 12,
                    bgcolor: "#2ce40719",
                    borderRadius: 3,
                    border: "1px solid #19b60475",
                    px: 1,
                    padding: "2px",
                    textTransform: "capitalize",
                  }}
                >
                  {item?.chef_designation}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  sx={{ color: "#028576ff", ":hover": { color: "#0ccbb4ff" } }}
                >
                  <Pen size={16} />
                </IconButton>
                <IconButton
                  sx={{ color: "#c25b06ff", ":hover": { color: "#e06b0bff" } }}
                >
                  <Trash2 size={16} />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onsubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#010e10c9",
              fontSize: 22,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Add Chef
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <DynamicInput
              name="chef_name"
              label="chef_name"
              placeholder="Enter Chef Name"
              register={register}
              type="text"
              error={errors.chef_name?.message}
              helperText={!!errors.chef_name}
            />
            <DynamicInput
              name="chef_designation"
              label="chef_designation"
              placeholder="Enter Chef Designation"
              register={register}
              type="text"
              error={errors.chef_designation?.message}
              helperText={!!errors.chef_designation}
            />
            <DynamicImageUpload
              name="chef_image"
              setValue={setValue}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
            />
          </Box>
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              bgcolor: "#11a1bac6",
              color: "#010e10c9",
              borderColor: "#0c3b4359",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#0a2f35c6",
                color: "#0bbfdedc",
              },
            }}
            // disabled={chefState?.loading}
          >
            <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
              Add
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin_Chef;
