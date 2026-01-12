import React, { createContext } from "react";
import type { ChefAction, ChefState } from "../../reduce/chef/chef.reduce";
import type { ChefSchema } from "../../../typescript/interface/admin.interface";

export const ChefContext = createContext<{
  chefState: ChefState;
  chefDispatch: React.Dispatch<ChefAction>;
  registerChef: (data: ChefSchema) => void;
} | null>(null);
