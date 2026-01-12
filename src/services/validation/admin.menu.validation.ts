import * as yup from "yup";

export const menuSchema = yup.object({
  item_name: yup.string().required("Provide a Name"),
  item_description: yup.string().required("Write a description"),
  item_catagory: yup.string().required("Select one catagory!"),
  item_price: yup.string().required("price can not be empty"),
  // item_image
});
