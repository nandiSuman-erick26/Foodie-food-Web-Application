import type { Blog } from "../../typescript/interface/blog.interface";

export const mapRowToBlog = (row: any): Blog => ({
  id: row.$id,
  titel: row.blog_titel,
  description: row.blog_description,
  image: row.blog_image,
});