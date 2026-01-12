import React, { createContext } from "react";
import type { BlogAction, BlogState } from "../../reduce/blog/blog.reduce";
import type { BlogSchema } from "../../../typescript/interface/admin.interface";
import type { Blog } from "../../../typescript/interface/blog.interface";

export const BlogContext = createContext<{
  blogState: BlogState;
  blogDispatch: React.Dispatch<BlogAction>;
  registerBlog: (data: BlogSchema) => void;
  findBlogbyId: (id : string) => Blog | undefined
}| null>(null);
