import type React from "react";
import { ProductContext } from "./Product.create";
import { useEffect, useReducer } from "react";
import {
  productInitialState,
  productReducer,
} from "../../reduce/product/product.reduce";

import { bucket, DB } from "../../../lib/appwrite.config";
import { ID } from "appwrite";
import type { MenuSchema } from "../../../typescript/interface/admin.interface";
import { toast } from "sonner";

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );
  useEffect(() => {
    getAllTheProduct();
  }, []);
  const registerProduct = async (data: MenuSchema) => {
    console.log("menuSchema", data);
    productDispatch({ type: "PROD_ADD_START" });
    try {
      let imageURL = "";
      if (data?.item_image) {
        const productImageUpload = await bucket.createFile(
          import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
          ID.unique(),
          data?.item_image
        );
        console.log("productImageUpload", productImageUpload);

        imageURL = bucket.getFileView(
          import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
          productImageUpload?.$id
        );
        console.log("product imageURL", imageURL);
      }
      const createDatabaseTableForProduct = await DB.createRow(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "food_menu",
        ID.unique(),
        {
          item_name: data?.item_name,
          item_description: data?.item_description,
          item_price: data?.item_price,
          item_catagory: data?.item_catagory,
          item_image: imageURL,
        }
      );
      console.log(
        "food database table has been created",
        createDatabaseTableForProduct
      );
      toast.success("Item is added to database successfully");
      productDispatch({
        type: "PROD_ADD_SUCCESS",
        payload: createDatabaseTableForProduct,
      });
    } catch (error) {
      console.log("Product_context_provider_tryCatch", error);
      toast.error(productState?.error);
      productDispatch({
        type: "PROD_ADD_FAILED",
        payload: error || "Something went wrong!",
      });
    }
  };

  const getAllTheProduct = async () => {
    productDispatch({ type: "GET_ALL_PRODUCT_START" });
    try {
      const productList = await DB.listRows(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "food_menu"
      );
      productDispatch({
        type: "GET_ALL_PRODUCT_SUCCESS",
        payload: productList?.rows,
      });
      console.log("product fetched", productList);
    } catch (error) {
      console.log(error);
      productDispatch({
        type: "GET_ALL_PRODUCT_FAILED",
        payload: error || "Something went wrong!",
      });
    }
  };
  return (
    <ProductContext.Provider
      value={{ productState, productDispatch, registerProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
