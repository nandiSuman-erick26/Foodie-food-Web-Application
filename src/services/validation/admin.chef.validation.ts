import * as yup from "yup";

export const chefSchema = yup.object({
  chef_name: yup.string().required("Provide a Name"),
  chef_designation: yup.string().required("Write a designation"),
  // chef_image
});
