import * as yup from "yup";

export const blogSchema = yup.object({
  blog_titel: yup.string().required("Provide a Name"),
  blog_description: yup.string().required("Write a description"),
});
