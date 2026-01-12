import React, { useReducer } from "react";
import {
  authReducer,
  loadAuthInitialState,
} from "../../reduce/auth/auth.reduce";
import { AuthContext } from "./Auth.create";
import { account, bucket, DB } from "../../../lib/appwrite.config";
import { ID } from "appwrite";
import { toast } from "sonner";
import Cookies from "js-cookie";
import type {
  LoginSchema,
  signupSchema,
} from "../../../typescript/interface/form.interface";
import type { AdminData } from "../../../typescript/interface/admin.interface";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, authDispatch] = useReducer(
    authReducer,
    loadAuthInitialState()
  );

  const registerUser = async (data: signupSchema) => {
    console.log("data from signup dialog", data);
    authDispatch({
      type: "AUTH_START",
    });
    try {
      const user = await account.create(
        ID.unique(),
        data?.email,
        data?.password
      );
      console.log("registerd user data:", user);
      let imageUrl = "";
      if (data?.image) {
        const uploadImage = await bucket.createFile(
          import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
          ID.unique(),
          data?.image
        );
        console.log("Uploaded-image:", uploadImage);

        imageUrl = bucket.getFileView(
          import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
          uploadImage?.$id
        );
        console.log("image-url", imageUrl);
      }

      const createDatabaseTable = await DB.createRow(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "foodie_user_detais",
        user.$id,
        {
          fullname: data?.fullname,
          password: data?.password,
          phone: data?.phone,
          email: data?.email,
          role: data?.role,
          image: imageUrl,
        }
      );
      console.log("tableHasCreated:", createDatabaseTable);
      toast.success("User Added Successfully");
      authDispatch({ type: "AUTH_SIGNUP" });
    } catch (error) {
      console.log(error);
      authDispatch({
        type: "AUTH_FAILED",
        payload: error || "Something went wrong!",
      });
    }
  };

  const adminLogin = async (data: AdminData) => {
    authDispatch({ type: "AUTH_START" });
    try {
      const createSession = await account.createEmailPasswordSession(
        data?.email,
        data?.password
      );
      console.log("admin session", createSession);

      const adminProfile = await DB.listRows(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "admin_profiles"
      );

      console.log("admindata", adminProfile);
      const exsistingAdminUser = adminProfile?.rows?.filter(
        (admin) => admin?.role === data?.role
      );
      console.log("admin detais", exsistingAdminUser);

      if (exsistingAdminUser?.length > 0) {
        toast.success("Admin login Successfull!");
        Cookies.set("role", "admin");
        Cookies.set("token", "true");
        authDispatch({ type: "AUTH_LOGIN", payload: exsistingAdminUser });
      } else {
        await account.deleteSession("current");
        toast.error("Access Denied! You are not an admin!");
        authDispatch({ type: "AUTH_FAILED", payload: "Unauthorized" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Access Denied! Try latter!");
      authDispatch({
        type: "AUTH_FAILED",
        payload: error || "Something went wrong!",
      });
    }
  };

  const loginUser = async (data: LoginSchema) => {
    authDispatch({ type: "AUTH_START" });
    try {
      const userProfile = await DB.listRows(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "foodie_user_detais"
      );
      console.log("All-users-from-table:", userProfile);
      const existingUser = userProfile?.rows?.filter(
        (user) => user.email === data?.email
      );
      console.log("exsistingUser:", existingUser);
      if (existingUser?.length > 0) {
        const loggedInSession = await account.createEmailPasswordSession(
          data?.email,
          data?.password
        );
        console.log("user session has created", loggedInSession);

        toast.success("User successfully logged In!");
        Cookies.set("role", "user");
        Cookies.set("token", "true");
        authDispatch({ type: "AUTH_LOGIN", payload: existingUser });
      } else {
        toast.error("Unauthorised! Please Register First");
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid credentials!");
      authDispatch({
        type: "AUTH_FAILED",
        payload: error || "Something went wrong!",
      });
    }
  };
  const logoutUser = async () => {
    authDispatch({ type: "AUTH_START" });
    try {
      await account.deleteSession("current");
      toast.success("Logged out successfully!");
      Cookies.remove("token");
      Cookies.remove("role");
      authDispatch({ type: "AUTH_LOGOUT" });
    } catch (error) {
      console.error(error);
      authDispatch({
        type: "AUTH_FAILED",
        payload: error || "Something went wrong!",
      });
    }
  };

  const adminLogout = async () => {
    authDispatch({ type: "AUTH_START" });
    try {
      await account.deleteSession("current");
      toast.success("Logged out successfully!");
      Cookies.remove("token");
      Cookies.remove("role");
      authDispatch({ type: "AUTH_LOGOUT" });
    } catch (error) {
      console.error(error);
      authDispatch({
        type: "AUTH_FAILED",
        payload: error || "Something went wrong!",
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        registerUser,
        loginUser,
        logoutUser,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
