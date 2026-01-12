import { useEffect, useReducer } from "react";
import { ChefContext } from "./Chef.create";
import { chefInitialState, chefReducer } from "../../reduce/chef/chef.reduce";
import type { ChefSchema } from "../../../typescript/interface/admin.interface";
import { toast } from "sonner";
import { account, bucket, DB } from "../../../lib/appwrite.config";
import { ID } from "appwrite";

export const ChefProvider = ({ children }: { children: React.ReactNode }) => {
  const [chefState, chefDispatch] = useReducer(chefReducer, chefInitialState);
  useEffect(() => {
    getAllChefsFromDB();
  }, []);

  const registerChef = async (data: ChefSchema) => {
    console.log("chef data", data);
    chefDispatch({ type: "ADD_START" });
    try {
      const adminData = await account.get();
      console.log(adminData);

      let imageURL = "";
      if (data?.chef_image) {
        const chefImageUpload = await bucket.createFile(
          import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
          ID.unique(),
          data?.chef_image
        );
        console.log("chefImageUpload", chefImageUpload);

        imageURL = bucket.getFileView(
          import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
          chefImageUpload?.$id
        );
        console.log("imageURL", imageURL);
      }

      const createDatabaseTableForChef = await DB.createRow(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "chef_data",
        ID.unique(),
        {
          chef_name: data?.chef_name,
          chef_designation: data?.chef_designation,
          chef_image: imageURL,
        }
      );
      console.log("create_DatabaseTable_For_Chef", createDatabaseTableForChef);
      toast.success("Chef has been added to database!");
      chefDispatch({
        type: "ADD_SUCCESS",
        payload: createDatabaseTableForChef,
      });
    } catch (error) {
      chefDispatch({ type: "ADD_FAILED", payload: error });
      toast.error(chefState?.error);
      console.log("Chef_context_provider_tryCatch_:", error);
    }
  };

  const getAllChefsFromDB = async () => {
    chefDispatch({ type: "GET_ALL_CHEFS_START" });
    try {
      const chefData = await DB.listRows(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "chef_data"
      );

      chefDispatch({ type: "GET_ALL_CHEFS_SUCCESS", payload: chefData?.rows });
      console.log("chefs fetched", chefData.rows);
    } catch (error) {
      console.log(error);
      chefDispatch({ type: "GET_ALL_CHEFS_FAILED", payload: error });
    }
  };
  return (
    <ChefContext.Provider value={{ chefState, chefDispatch, registerChef }}>
      {children}
    </ChefContext.Provider>
  );
};
