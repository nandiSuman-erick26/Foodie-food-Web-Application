import { useContext, useState } from "react";
import { BlogContext } from "../../hooks/context/blog/Blog.create";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { BlogSchema } from "../../typescript/interface/admin.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { blogSchema } from "../../services/validation/admin.blog.validation";
import { Box, Button, Typography } from "@mui/material";
import DynamicInput from "../../components/DynamicInput";
import DynamicImageUpload from "../../components/DynamicImageUpload";
import { toast } from "sonner";

const Admin_Blogs = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { blogState, registerBlog } = context;
  console.log(blogState);

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogSchema>({
    resolver: yupResolver(blogSchema),
    defaultValues: {
      blog_titel: "",
      blog_description: "",
      blog_image: null,
    },
  });

  const onSubmit: SubmitHandler<BlogSchema> = async (data: BlogSchema) => {
    console.log("blogShema", data);
    await registerBlog(data);
    if (blogState?.error) {
      toast.error(blogState?.error);
    } else {
      setPreview(null);
      reset();
    }
  };

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
          post blog
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <DynamicInput
            name="blog_titel"
            label="blog_titel"
            placeholder="Enter Blog Titel"
            register={register}
            type="text"
            error={errors.blog_titel?.message}
            helperText={!!errors.blog_titel}
          />
          <DynamicInput
            name="blog_description"
            label="blog_description"
            placeholder="Enter Blog Description"
            register={register}
            multiline="multiline"
            rows={8}
            type="text"
            error={errors.blog_description?.message}
            helperText={!!errors.blog_description}
          />
          <DynamicImageUpload
            name="blog_image"
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
          disabled={blogState?.loading}
        >
          <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
            {blogState?.loading ? "posting...." : "post"}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Admin_Blogs;
