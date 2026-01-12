export interface AdminData {
  email: string;
  password: string;
  role: string;
}
export interface MenuSchema {
  item_name: string;
  item_description: string;
  item_price: string;
  item_catagory: string;
  item_image?: File | null;
}

export interface ChefSchema {
  chef_name: string;
  chef_designation: string;
  chef_image?: File | null;
}

export interface BlogSchema {
  $id?: string;
  blog_titel: string;
  blog_description: string;
  blog_image?: File | null;
}
