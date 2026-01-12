import { yupResolver } from "@hookform/resolvers/yup";
// import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { menuSchema } from "../../services/validation/admin.menu.validation";
import { Box, Button, Typography } from "@mui/material";
import DynamicInput from "../../components/DynamicInput";
import DynamicImageUpload from "../../components/DynamicImageUpload";
import type { MenuSchema } from "../../typescript/interface/admin.interface";
import { useContext, useState } from "react";
import { ProductContext } from "../../hooks/context/product/Product.create";
import { toast } from "sonner";
import DynamicDropDownInput from "../../components/DynamicDropDownInput";

const Admin_Menu = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { productState, registerProduct } = context;
  console.log("productState", productState);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<MenuSchema>({
    resolver: yupResolver(menuSchema),
    defaultValues: {
      item_name: "",
      item_description: "",
      item_catagory: "",
      item_price: "",
      item_image: null,
    },
  });

  const onsubmit: SubmitHandler<MenuSchema> = async (data: MenuSchema) => {
    console.log(data);
    await registerProduct(data);
    if (productState?.error) {
      toast.error(productState?.error);
    } else {
      setPreview(null);
      reset();
    }
  };
  return (
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
        Add Item
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <DynamicInput
          name="item_name"
          label="item_name"
          placeholder="Enter Item Name"
          register={register}
          type="text"
          error={errors.item_name?.message}
          helperText={!!errors.item_name}
        />
        <DynamicInput
          name="item_description"
          label="item_description"
          placeholder="Enter Item Description"
          register={register}
          multiline="multiline"
          rows={7}
          type="text"
          error={errors.item_description?.message}
          helperText={!!errors.item_description}
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Box sx={{ width: "50%" }}>
            <DynamicDropDownInput
              name="item_catagory"
              label="Category"
              register={register}
              catagory={[
                { label: "Indian", value: "Indian" },
                { label: "Mexican", value: "Mexican" },
                { label: "Italian", value: "Italian" },
                { label: "Chinese", value: "Chinese" },
                { label: "Bengali", value: "Bengali" },
                { label: "Arabian", value: "Arabian" },
                { label: "Japanese", value: "Japanese" },
              ]}
              error={errors.item_catagory}
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <DynamicInput
              name="item_price"
              label="item_price"
              placeholder="Enter item Price"
              register={register}
              type="number"
              error={errors.item_price?.message}
              helperText={!!errors.item_price}
            />
          </Box>
        </Box>
        <DynamicImageUpload
          name="item_image"
          setValue={setValue}
          imagePreview={preview}
          setImagePreview={setPreview}
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
        disabled = {productState?.loading}
      >
        <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
          {productState?.loading ? "Adding...." : "Add"}
        </Typography>
      </Button>
    </Box>
  );
};

export default Admin_Menu;
