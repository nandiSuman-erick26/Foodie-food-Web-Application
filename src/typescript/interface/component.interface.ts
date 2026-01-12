import type { Blog } from "./blog.interface";
import type { Chef } from "./chef.interface";
import type { Menu } from "./menu.interface";

export interface FoodCardProps {
  item: Menu;
  addProductToCart: (item: Menu) => void;
}

export interface ChefCardProps {
  item: Chef;
}

export interface BlogCardProps {
  item: Blog;
  onClick?: (id: string) => void;
}
