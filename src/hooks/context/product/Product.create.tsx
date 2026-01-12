import React, { createContext } from "react";
import type {
  ProductAction,
  ProductState,
} from "../../reduce/product/product.reduce";
import type { MenuSchema } from "../../../typescript/interface/admin.interface";

export const ProductContext = createContext<{
  productState: ProductState;
  productDispatch: React.Dispatch<ProductAction>;
  registerProduct: (data: MenuSchema) => void;
} | null>(null);
