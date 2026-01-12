import { useEffect, useReducer } from "react";
import { BlogContext } from "./Blog.create";
import { blogInitialState, blogReducer } from "../../reduce/blog/blog.reduce";
import type { BlogSchema } from "../../../typescript/interface/admin.interface";
import { bucket, DB } from "../../../lib/appwrite.config";
import { ID } from "appwrite";
import { toast } from "sonner";
import { mapRowToBlog } from "../../utils/blog.helper";




export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogState, blogDispatch] = useReducer(blogReducer, blogInitialState);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const registerBlog = async (data: BlogSchema) => {
    console.log("blog schema", data);
    blogDispatch({ type: "BLOG_ADD_START" });
    try {
      let blogImageURL = "";
      if (data?.blog_image) {
        const BlogImageUoload = await bucket.createFile(
          import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
          ID.unique(),
          data?.blog_image
        );

        blogImageURL = bucket.getFileView(
          import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID,
          BlogImageUoload?.$id
        );
      }
      const createBlogTableInDataBase = await DB.createRow(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "foodie_blog",
        ID.unique(),
        {
          blog_titel: data?.blog_titel,
          blog_description: data?.blog_description,
          blog_image: blogImageURL,
        }
      );
      console.log("blog table has been created", createBlogTableInDataBase);
      toast.success("Blog has beeen posted successfully!");
      blogDispatch({
        type: "BLOG_ADD_SUCCESS",
        payload: createBlogTableInDataBase,
      });
    } catch (error) {
      console.log("Blog_context_provider_tryCatch", error);
      toast.error(blogState?.error);
      blogDispatch({
        type: "BLOG_ADD_FAILED",
        payload: error || "Something went wrong!",
      });
    }
  };

  const getAllBlogs = async () => {
    blogDispatch({ type: "GET_ALL_BLOG_START" });
    try {
      const blogList = await DB.listRows(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "foodie_blog"
      );
      const blogs = blogList?.rows?.map(mapRowToBlog);
      blogDispatch({ type: "GET_ALL_BLOG_SUCCESS", payload: blogs });
      console.log("blog Fetched", blogs);
    } catch (error) {
      console.log(error);
      blogDispatch({
        type: "GET_ALL_BLOG_FAILED",
        payload: error || "Something went Wrong!",
      });
    }
  };

  const findBlogbyId = (id: string) => {
    return blogState?.blog.find((blg) => blg.id === id);
  };
  return (
    <BlogContext.Provider
      value={{ blogState, blogDispatch, registerBlog, findBlogbyId }}
    >
      {children}
    </BlogContext.Provider>
  );
};
